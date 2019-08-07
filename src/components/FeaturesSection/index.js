import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "!polly setup #channel",
              description:
                "Polly learns from your server's chatlogs to provide an experience unique to each server",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "!polly usepreset kanye",
              description:
                "Alternatively, you can use a pre-generated dialect. Try kanye/beemovie/discord!",
              image:
                "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg"
            },
            {
              title: "!polly say",
              description:
                "Get Polly to say something (hopefully) humorous. *Cue laughter*",
              image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg"
            },
            {
              title: "!polly meme",
              description:
                "Polly will search through the interwebs and hand-pick a meme for you. Weird GIFS ensue.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
