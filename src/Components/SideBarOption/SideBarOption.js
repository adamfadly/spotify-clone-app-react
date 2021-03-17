import React from "react";
import "./SideBarOption.css";

function SideBarOption({ label }) {
  return (
    <div className="sidebarOption">
      <p>{label}</p>
    </div>
  );
}

export default SideBarOption;
