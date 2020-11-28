import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        </div>
        <div className="header-input">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
        <div className="header-middle">
          <div className="options --active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="options">
            <FlagIcon fontSize="large" />
          </div>
          <div className="options">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="options">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="options">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="header-right">
          <Avatar src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_4x3t_992.jpg" />
          <div className="header-info">
            <h4>Kiran Sethumadhavan</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    
  );
}

export default Header;