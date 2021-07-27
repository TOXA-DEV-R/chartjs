import React from "react";
import Administrator from "../../components/sidebar/Administrator";
import SidebarItem from "../../components/sidebar/SidebarItem";
import { StyleSidebar } from "../../styles/containers/sidebar/StyleSidebar";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/icons/brand-logo.svg";

const Sidebar = () => {
  return (
    <StyleSidebar className="sidebar">
      <div className="sidebar-brand">
        <div className="sidebar-brand__column">
          <div className="sidebar-brand__left">
            <button className="sidebar-brand__btn">
              <i className="ic ic_menu"></i>
            </button>
            <Link to="/" className="sidebar-brand__logo">
              <img src={brandLogo} alt="brand-logo" />
            </Link>
          </div>
          <div className="sidebar-brand__right">
            <span>
              <i className="ic ic_bell"></i>
            </span>
          </div>
        </div>

        <Administrator />
      </div>

      <ul className="sidebar-links">
        <SidebarItem
          address={"/dashboard"}
          chart={<i className="ic ic_chart-up"></i>}
          name={"Dashboard"}
        />
        <SidebarItem
          address={"/chess"}
          chart={<i className="ic ic_grid"></i>}
          name={"Шахматка"}
        />
        <SidebarItem
          address={"/reception-service"}
          chart={<i className="ic ic_reception-service"></i>}
          name={"Служба приёма"}
        />
        <SidebarItem
          address={"/guest-profiles"}
          chart={<i className="ic ic_guest-profiles"></i>}
          name={"Профили гостей"}
        />
        <SidebarItem
          address={"/roomboard"}
          chart={<i className="ic ic_keyboard"></i>}
          name={"Roomboard"}
        />
        <SidebarItem
          address={"/restaurant-and-Bar"}
          chart={<i className="ic ic_menu-outline"></i>}
          name={"Ресторан и Бар"}
        />
        <SidebarItem
          address={"/finance"}
          chart={<i className="ic ic_credit-card-outline"></i>}
          name={"Финансы"}
        />
        <SidebarItem
          address={"/statistics-and-reports"}
          chart={<i className="ic ic_file-text"></i>}
          name={"Статистика и Отчёты"}
        />
        <SidebarItem
          address={"/chat-room"}
          chart={<i className="ic ic_message-square"></i>}
          name={"Чат"}
        />
        <SidebarItem
          address={"/settings"}
          chart={<i className="ic ic_settings"></i>}
          name={"Настройка"}
        />
      </ul>
    </StyleSidebar>
  );
};

export default Sidebar;
