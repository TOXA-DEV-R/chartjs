import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  return (
    <li>
      <Link to={props.address}>
        <span> {props.chart}</span> {props.name}
      </Link>
    </li>
  );
};

export default SidebarItem;
