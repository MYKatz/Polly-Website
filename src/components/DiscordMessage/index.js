import React from "react";
import DiscordReaction from "./../DiscordReaction";
import Twemoji from "react-twemoji";
import "./styles.scss";

function DiscordMessage(props) {
  return (
    <Twemoji
      class="container discordmsg"
      options={{ className: "discordtwemoji" }}
    >
      <img src={props.avatar} alt="Discord Message" class="discordavatar" />
      <div class="discordtext">
        <div class="discordnick">
          <span class="discordname">{props.username}</span>
          {props.isBot && <span class="discordbottag">BOT</span>}
          <span class="discorddatetime">{props.time}</span>
        </div>
        <div class="discordbody">
          {props.body &&
            props.body.split(" ").map((item, index) => {
              if (item[0] === "#") {
                return <span class="discordchannelreference">{item}</span>;
              } else {
                return item + " ";
              }
            })}
          <div class="discordembed">{props.embed}</div>
        </div>
        <div class="discordreactions">
          {props.reactions &&
            props.reactions.map((item, index) => (
              <DiscordReaction
                emoji={item.emoji}
                num={item.num}
                clicked={item.clicked}
              />
            ))}
        </div>
      </div>
    </Twemoji>
  );
}

export default DiscordMessage;
