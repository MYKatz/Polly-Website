import React from "react";
import Twemoji from "react-twemoji";
import "./styles.scss";

function DiscordReaction(props) {
  const component = new React.Component();

  component.state = {
    clicked: props.clicked || false,
    num: props.num || 1
  };

  function toggleReaction(event) {
    var toAdd = 1;
    if (component.state.clicked) {
      toAdd = -1;
    }
    component.setState({
      clicked: !component.state.clicked,
      num: component.state.num + toAdd
    });
  }

  component.render = function() {
    if (component.state.clicked) {
      return (
        <Twemoji
          class="discordreaction discordreactionclicked"
          options={{ className: "discordtwemoji" }}
          onClick={toggleReaction}
        >
          <span class="discordreactionemoji" role="img" aria-label="bird">
            {props.emoji}
          </span>
          <span class="discordreactnum">{component.state.num}</span>
        </Twemoji>
      );
    } else {
      return (
        <Twemoji
          class="discordreaction"
          options={{ className: "discordtwemoji" }}
          onClick={toggleReaction}
        >
          <span class="discordreactionemoji" role="img" aria-label="bird">
            {props.emoji}
          </span>
          <span class="discordreactnum">{component.state.num}</span>
        </Twemoji>
      );
    }
  };

  return component;
}

export default DiscordReaction;
