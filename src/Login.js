import { Button } from "@material-ui/core";
import React from "react";

function Login() {
  return (
    <div className="login">
      <div className="logo">
        <img
          src="https://media.giphy.com/avatars/facebook/eTby7BmGFumb.png"
          alt=""
        />
        <img
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/11/e8d53e91-3831-4429-8ba7-b5c290a5ba98-5dc0b9c0642a3.gif"
          alt=""
        />
      </div>
      <Button type="submit">Sign In</Button>
    </div>
  );
}

export default Login;
