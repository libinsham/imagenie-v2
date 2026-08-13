"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { primaryNav, secondaryNav } from "../lib/navigation";

function MenuLevel({
  items,
  path,
  setPath,
  level,
  backLabel,
}) {
  const currentItems =
    level === 0 ? items : items?.children;

  return (
    <ul
      id={level === 0 ? "menu-secondary" : undefined}
      className={
        level === 0
          ? "menu"
          : "sub-menu is-active"
      }
    >
      {/* Back */}
      {level > 0 && (
        <li className="is-back">
          <button
            type="button"
            onClick={() => {
              setPath(path.slice(0, level - 1));
            }}
          >
            ← {backLabel}
          </button>
        </li>
      )}

      {/* All link */}
      {level > 0 && items?.allLabel && (
        <li>
          <Link
            href={items.href || "#"}
            onClick={() => setPath([])}
          >
            {items.allLabel}
          </Link>
        </li>
      )}

      {/* Menu items */}
      {currentItems?.map((item) => (
        <li
          key={item.label}
          className={
            item.children
              ? "menu-item-has-children"
              : undefined
          }
        >
          {item.children ? (
            <button
              type="button"
              className="menu-submenu-button"
              onClick={() => {
                setPath([
                  ...path.slice(0, level),
                  item.label,
                ]);
              }}
            >
              <span>{item.label}</span>

              <span
                className="menu-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          ) : (
            <Link
              href={item.href || "#"}
              onClick={() => setPath([])}
            >
              {item.label}
            </Link>
          )}

          {item.children &&
            path[level] === item.label && (
              <MenuLevel
                items={item}
                path={path}
                setPath={setPath}
                level={level + 1}
                backLabel={
                  level === 0
                    ? "Main menu"
                    : path[level - 1]
                }
              />
            )}
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState([]);

  /* =====================================================
     CLOSE MENU WHEN MOVING TO DESKTOP
     ===================================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMenuOpen(false);
        setPath([]);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* =====================================================
     LOCK PAGE SCROLL WHEN MENU IS OPEN
     ===================================================== */

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* =====================================================
     TOGGLE MENU
     ===================================================== */

  function toggleMenu() {
    setMenuOpen((open) => {
      if (open) {
        setPath([]);
      }

      return !open;
    });
  }

  return (
    <header
      className={`c-header${
        menuOpen ? " is-menu-open" : ""
      }`}
    >
      {/* =================================================
          HEADER BACKGROUND
          ================================================= */}

      <div
        className="c-header__background"
        aria-hidden="true"
      />

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="c-header__container">
        <div className="c-header__content">

          {/* =================================================
              LOGO
              ================================================= */}

          <div className="c-header__branding">
            <Link
              href="/"
              aria-label="Imagenie home"
            >
              <img
                src="/images/imagenie-logo.svg"
                alt="Imagenie"
              />
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className="c-header__primary-nav"
            aria-label="Primary navigation"
          >
            <ul>
              {primaryNav?.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* =================================================
              MENU BUTTON
              ================================================= */}

          <div className="c-header__burger">
            <button
              type="button"
              className="c-header__burger__button"
              aria-expanded={menuOpen}
              aria-controls="menu-secondary"
              onClick={toggleMenu}
            >
              <span
                className="c-header__hamburger"
                aria-hidden="true"
              >
                <span />
                <span />
              </span>

              <span className="c-header__menu-label">
                {menuOpen ? "Close" : "Menu"}
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* =================================================
          FULL SCREEN SECONDARY MENU
          ================================================= */}

      <div
        className={`c-header__secondary-nav${
          menuOpen ? " is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="c-header__secondary-inner">
          <MenuLevel
            items={secondaryNav}
            path={path}
            setPath={setPath}
            level={0}
            backLabel="Main menu"
          />
        </div>
      </div>
    </header>
  );
}