import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Balance ton quoi</strong>
      </p>
      <p>
        © {new Date().getFullYear()}, Built with love
        {` `}
        <a href="https://github.com/Mikeyouf/balance-ton-quoi-wp">by Mik@el</a>
      </p>
    </div>
  </footer>
);

export default Footer;
