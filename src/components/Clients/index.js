import React from "react";
import "./styles.scss";

function Clients(props) {
  return (
    <div className="columns is-centered is-multiline">
      {props.items.map((item, index) => (
        <div className="column is-narrow has-text-centered" key={index}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className="Clients__logo">
              <img src={item.image} width={item.width} alt={item.name} />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Clients;
