import React from "react";
import "./chat.scss"
import Messages from "../../components/Messages/Messages";

const Chat = () => {
  return (
    <>
      <div className="containerChat">
        <Messages />
      </div>
    </>
  );
};

export default Chat;
