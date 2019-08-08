import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import "./styles.scss";

function CtaSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered has-text-centered-mobile is-centered is-variable is-8">
          <div className="column is-narrow">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={3}
            />
          </div>
          <div className="column is-narrow">
            <a href="https://discordapp.com/oauth2/authorize?client_id=592958984730837002&permissions=117760&scope=bot">
              <SectionButton parentColor={props.color} size="medium">
                {props.buttonText}
              </SectionButton>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default CtaSection;
