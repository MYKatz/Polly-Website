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
                "Polly learns from your channel(s)' chatlogs to provide an experience unique to each server. As you write more, it learns more!",
              messages: [
                {
                  username: "Katz",
                  isBot: false,
                  time: "right now",
                  body: "!polly setup #general #random",
                  avatar:
                    "https://pbs.twimg.com/profile_images/1009305542026657792/iZg9qfK7_400x400.jpg"
                },
                {
                  username: "Polly",
                  isBot: true,
                  time: "right now",
                  body: "🐦 all set up! 🐦",
                  avatar:
                    "https://github.com/MYKatz/Polly/raw/master/img/polly.png",
                  reactions: [
                    {
                      emoji: "👌",
                      num: 3,
                      clicked: false
                    }
                  ]
                }
              ]
            },
            {
              title: "!polly usepreset [preset]",
              description:
                "Alternatively, you can use a pre-generated dialect. Try kanye/beemovie/discord! More presets coming soon!",
              messages: [
                {
                  username: "Katz",
                  isBot: false,
                  time: "right now",
                  body: "!polly usepreset kanye",
                  avatar:
                    "https://pbs.twimg.com/profile_images/1009305542026657792/iZg9qfK7_400x400.jpg"
                },
                {
                  username: "Polly",
                  isBot: true,
                  time: "right now",
                  body:
                    "Meet 'Ye, alligator souffle, got Bridget. I hang up in a sandwich.",
                  avatar:
                    "https://github.com/MYKatz/Polly/raw/master/img/polly.png",
                  reactions: [
                    {
                      emoji: "🚒",
                      num: 4,
                      clicked: false
                    },
                    {
                      emoji: "🔥",
                      num: 39,
                      clicked: true
                    }
                  ]
                }
              ]
            },
            {
              title: "!polly say",
              description:
                "Get Polly to say something (hopefully) humorous. *Cue laughter*",
              messages: [
                {
                  username: "Katz",
                  isBot: false,
                  time: "right now",
                  body: "!polly say",
                  avatar:
                    "https://pbs.twimg.com/profile_images/1009305542026657792/iZg9qfK7_400x400.jpg"
                },
                {
                  username: "Polly",
                  isBot: true,
                  time: "right now",
                  body: "I’m bored to go somewhere or do it yet yikes",
                  avatar:
                    "https://github.com/MYKatz/Polly/raw/master/img/polly.png",
                  reactions: [
                    {
                      emoji: "🤔",
                      num: 7,
                      clicked: false
                    },
                    {
                      emoji: "❤️",
                      num: 2,
                      clicked: true
                    }
                  ]
                }
              ]
            },
            {
              title: "!polly meme",
              description:
                "Polly will search through the interwebs and hand-pick a meme for you. Weird GIFS ensue.",
              messages: [
                {
                  username: "Katz",
                  isBot: false,
                  time: "right now",
                  body: "!polly meme",
                  avatar:
                    "https://pbs.twimg.com/profile_images/1009305542026657792/iZg9qfK7_400x400.jpg"
                },
                {
                  username: "Polly",
                  isBot: true,
                  time: "right now",
                  body: "Use the pea",
                  embed: (
                    <img
                      src="https://media.tenor.com/images/6b448dc7cb8e5304fcd7401cf48a5885/tenor.gif"
                      alt="funny gif"
                    />
                  ),
                  avatar:
                    "https://github.com/MYKatz/Polly/raw/master/img/polly.png",
                  reactions: [
                    {
                      emoji: "😲",
                      num: 7,
                      clicked: false
                    },
                    {
                      emoji: "🇼",
                      num: 3,
                      clicked: true
                    },
                    {
                      emoji: "🇺",
                      num: 3,
                      clicked: true
                    },
                    {
                      emoji: "🇹",
                      num: 3,
                      clicked: true
                    },
                    {
                      emoji: "❓",
                      num: 2,
                      clicked: true
                    }
                  ]
                }
              ]
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FeaturesSection;
