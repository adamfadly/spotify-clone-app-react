import React from "react";
import "./SideBar.css";
import SideBarOption from "../SideBarOption/SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotifyLogo"
      />
      <SideBarOption Icon={HomeIcon} label="Home" />
      <SideBarOption Icon={SearchIcon} label="Search" />
      <SideBarOption Icon={LibraryMusicIcon} label="Libraries" />

      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />

      <SideBarOption label="Home" />
      <SideBarOption label="Home" />
      <SideBarOption label="Home" />
    </div>
  );
}

export default SideBar;
