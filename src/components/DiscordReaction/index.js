import React from "react";
import Twemoji from "react-twemoji";
import "./styles.scss";

function DiscordReaction(props) {
  return (
    <Twemoji class="discordreaction" options={{ className: "discordtwemoji" }}>
      <span class="discordreactionemoji" role="img" aria-label="bird">
        {props.emoji}
      </span>
      <span class="discordreactnum">{props.num}</span>
    </Twemoji>
  );
}

export default DiscordReaction;
