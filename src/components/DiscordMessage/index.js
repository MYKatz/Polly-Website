import React from "react";
import DiscordReaction from "./../DiscordReaction";
import "./styles.scss";

function DiscordMessage(props) {
  return (
    <div class="container discordmsg">
      <img src={props.avatar} alt="Discord Message" class="discordavatar" />
      <div class="discordtext">
        <div class="discordnick">
          <span class="discordname">{props.username}</span>
          {props.isBot && <span class="discordbottag">BOT</span>}
          <span class="discorddatetime">{props.time}</span>
        </div>
        <div class="discordbody">{props.body}</div>
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
    </div>
  );
}

export default DiscordMessage;
