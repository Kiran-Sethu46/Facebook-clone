import React from "react";
import StoryReel from "./StoryReel";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      {/* Story */}
      <StoryReel />
      {/* Message */}
      <MessageSender />
      {/* Post */}
      <Post
        profile={
          "https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_4x3t_992.jpg"
        }
        username={"Kiran Sethumadhavan"}
        timestamp={""}
        message={"HI"}
        image={
          "https://s.abcnews.com/images/US/Gty_Hacker_Group_Anonymous_er_160318_4x3t_992.jpg"
        }
      />
    </div>
  );
}

export default Feed;
