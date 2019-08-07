import React from "react";
import Section from "./../Section";
import { Link } from "./../../util/router.js";
import "./styles.scss";

function Footer(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="FooterComponent__container container">
        <div className="brand left">
          <Link to="/">
            <img src={props.logo} alt="Logo" />
          </Link>
        </div>
        <div className="links right">
          <a
            target="_blank"
            href="https://github.com/mykatz/Polly"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="social right" />
        <div className="copyright left">{props.copywrite}</div>
      </div>
    </Section>
  );
}

export default Footer;
