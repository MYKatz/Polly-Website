import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import SectionButton from "./../SectionButton";
import DiscordMessage from "./../DiscordMessage";
import "./styles.scss";

function HeroSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <div className="columns is-vcentered is-desktop">
          <div className="column is-5-desktop has-text-centered-touch">
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={1}
            />
            <SectionButton
              parentColor={props.color}
              size="medium"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </SectionButton>
          </div>
          <div className="column is-1" />
          <div className="column">
            <figure className="HeroSection__image image">
              <DiscordMessage
                username="Katz"
                isBot={false}
                time="Last thursday"
                body="!polly say"
              />
              <DiscordMessage
                username="Polly"
                isBot={true}
                time="Right now"
                body="Hello"
              />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
