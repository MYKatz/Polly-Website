import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Clients from "./../Clients";
import "./styles.scss";

function ClientsSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Clients
          items={[
            {
              name: "DBL",
              image: "https://polly-assets2.s3.amazonaws.com/lists/dblnew.png",
              width: "70px",
              link: "https://discordbots.org/bot/592958984730837002"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default ClientsSection;
