import React from "react";
import DiscordMessage from "./../DiscordMessage";
import "./styles.scss";

function Features(props) {
  return (
    <div className="Features">
      {props.items.map((item, index) => (
        <div className="Features__columns columns is-variable is-8 is-vcentered has-text-centered-mobile">
          <div className="column is-half">
            <h3 className="Features__title title has-text-weight-bold is-spaced is-3">
              {item.title}
            </h3>
            <p className="subtitle">{item.description}</p>
          </div>
          <div className="column messagecontainer">
            {item.messages &&
              item.messages.map((item, index) => (
                <DiscordMessage
                  username={item.username}
                  isBot={item.isBot}
                  time={item.time}
                  body={item.body}
                  embed={item.embed}
                  avatar={item.avatar}
                  reactions={item.reactions || []}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Features;
