import React from "react";
import "./SideBar.css";
import SideBarOption from "../SideBarOption/SideBarOption";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotifyLogo"
      />
      <SideBarOption label="Home" />
      <SideBarOption label="Playlist" />
      <SideBarOption label="Libraries" />
    </div>
  );
}

export default SideBar;
