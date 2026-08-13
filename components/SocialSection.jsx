"use client";

import { useState } from "react";
import SocialFilter from "./SocialFilter";
import SocialGrid from "./SocialGrid";

// SocialFilter and SocialGrid were previously rendered as independent
// siblings with no way to share state, so clicking a filter button could
// never affect what the grid showed. This wrapper owns the active filter
// and passes it to both.
export default function SocialSection() {
  const [active, setActive] = useState("All");

  return (
    <>
      <SocialFilter active={active} onSelect={setActive} />
      <SocialGrid active={active} />
    </>
  );
}
