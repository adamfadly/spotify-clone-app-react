import React from "react";
import "./SideBarOption.css";

function SideBarOption({ label, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{label}</h4> : <p>{label}</p>}
    </div>
  );
}

export default SideBarOption;
