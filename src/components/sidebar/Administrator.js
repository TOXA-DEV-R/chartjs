import React from "react";
import { FaChevronDown } from "react-icons/fa";
import avatar from "../../assets/icons/Avatar.png";

const Administrator = () => {
  return (
    <div className="administrator">
      <div className="administrator__column">
        <div className="administrator__column-image">
          <img src={avatar} alt="administrator avatar" />
        </div>
        <h3 className="administrator__column-name">
          Анатолий Токов
          <span className="administrator__column-admin">Администратор</span>
        </h3>
        <div className="administrator__column-down">
          <FaChevronDown size="10px" color="#8F9BB3" />
        </div>
      </div>
    </div>
  );
};

export default Administrator;
