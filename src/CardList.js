import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  return (
    <React.Fragment>
      {robots.map((robot) => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </React.Fragment>
  );
};

export default CardList;
