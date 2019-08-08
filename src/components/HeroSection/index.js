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
                avatar="https://pbs.twimg.com/profile_images/1009305542026657792/iZg9qfK7_400x400.jpg"
              />
              <DiscordMessage
                username="Polly"
                isBot={true}
                time="Right now"
                body="Hello"
                avatar="https://github.com/MYKatz/Polly/raw/master/img/polly.png"
                reactions={[
                  {
                    emoji: "🐦",
                    num: 6,
                    clicked: true
                  },
                  {
                    emoji: "🔥",
                    num: 69
                  },
                  {
                    emoji: "🌲",
                    num: 23,
                    clicked: false
                  }
                ]}
              />
            </figure>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default HeroSection;
