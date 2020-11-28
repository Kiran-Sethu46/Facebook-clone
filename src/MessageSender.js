import React from "react";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";

function MessageSender() {
  return (
    <div className="message-sender">
      <div className="top">
        <Avatar src="https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_4x3t_992.jpg" />
        <form>
          <input
            className="message-input"
            placeholder="What's on your mind, Kiran Sethumadhavan"
          />
          <input type="text" placeholder="image URL (OPTIONAL)" />
          <button type="submit">Hidden submit</button>
        </form>
      </div>
      <div className="botttom">
        <div className="message-options">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="message-options">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="message-options">
          <InsertEmoticon style={{ color: "yellow" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
