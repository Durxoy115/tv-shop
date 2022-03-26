import React from "react";
import "./Choseitem.css";

const ChooseItem = (props) => {
  const { item } = props;
  const { name } = item;
  return <div>{<p className="one-item">{name}</p>}</div>;
};

export default ChooseItem;
