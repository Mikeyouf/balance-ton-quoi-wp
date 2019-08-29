import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="content has-text-centered">
      <p>
        <strong>Gatsby Starter WordPress</strong> by{" "}
        <a href="https://www.pablovila.com">Pablo Vila</a>
      </p>
      <p>
        © {new Date().getFullYear()}, Built with love
        {` `}
        <a href="https://www.gatsbyjs.org">Mik@el</a>
      </p>
    </div>
  </footer>
);

export default Footer;
