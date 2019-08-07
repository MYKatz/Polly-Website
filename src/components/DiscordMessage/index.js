import React from "react";
import "./styles.scss";

function DiscordMessage(props) {
  return (
    <div class="container discordmsg">
      <img
        src="https://randomuser.me/api/portraits/men/89.jpg"
        alt="Discord Message"
        class="discordavatar"
      />
      <div class="discordtext">
        <div class="discordnick">
          <span class="discordname">{props.username}</span>
          {props.isBot && <span class="discordbottag">BOT</span>}
          <span class="discorddatetime">{props.time}</span>
        </div>
        <div class="discordbody">{props.body}</div>
        <div class="discordreactions" />
      </div>
    </div>
  );
}

export default DiscordMessage;
