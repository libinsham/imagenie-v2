"use client";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="o-container">

        <div className="contact-wrapper">

          {/* LEFT SIDE */}
          <div className="contact-left">

  <span className="contact-eyebrow">
    CONTACT US
  </span>

  <h2 className="contact-title">
    Let's Talk
  </h2>

  <p className="contact-description">
    Tell us about your business, goals and project.
    Our team will get back to you within one business day.
  </p>

  <form className="contact-form">

    {/* NAME + COMPANY */}
    <div className="contact-row">

      <div className="contact-field">
        <label htmlFor="fullName">
          Full Name *
        </label>

        <input
          id="fullName"
          type="text"
          name="fullName"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="company">
          Company
        </label>

        <input
          id="company"
          type="text"
          name="company"
          placeholder="Enter Company Name"
        />
      </div>

    </div>


    {/* EMAIL + PHONE */}
    <div className="contact-row">

      <div className="contact-field">
        <label htmlFor="email">
          Email *
        </label>

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your company email id"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="phone">
          Phone
        </label>

        <input
          id="phone"
          type="tel"
          name="phone"
          placeholder="+91 9876543210"
        />
      </div>

    </div>


    {/* SERVICE */}
    <div className="contact-field">

      <label htmlFor="service">
        Service Required
      </label>

      <select
        id="service"
        name="service"
        defaultValue=""
      >
        <option value="" disabled>
          Select a Service
        </option>

        <option value="brand-strategy">
          Brand Strategy
        </option>

        <option value="b2b-marketing">
          B2B Marketing
        </option>

        <option value="b2c-branding">
          B2C Branding
        </option>

        <option value="website-design">
          Website Design
        </option>

        <option value="ui-ux-design">
          UI / UX Design
        </option>

        <option value="digital-marketing">
          Digital Marketing
        </option>

        <option value="creative-campaigns">
          Creative Campaigns
        </option>

        <option value="packaging-design">
          Packaging Design
        </option>

        <option value="research-consulting">
          Research & Consulting
        </option>

        <option value="other">
          Other
        </option>

      </select>

    </div>


    {/* MESSAGE */}
    <div className="contact-field">

      <label htmlFor="message">
        Message *
      </label>

      <textarea
        id="message"
        name="message"
        rows={7}
        placeholder="Tell us about your project..."
        required
      />

    </div>


    {/* PRIVACY */}
    <label className="contact-checkbox">

      <input
        type="checkbox"
        name="privacy"
        required
      />

      <span>
        I agree to the Privacy Policy and allow Imagenie to contact me.
      </span>

    </label>


    {/* SUBMIT */}
    <button
      className="contact-btn"
      type="submit"
    >
      Send Message
      <span>→</span>
    </button>

  </form>

</div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <img
              src="/images/contact-graphic.png"
              alt="Imagenie Contact"
            />
          </div>

        </div>

      </div>
    </section>
  );
}