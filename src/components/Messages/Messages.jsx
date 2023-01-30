import React, { useEffect, useRef, useState } from "react";
import "./Message.scss";
import ItemMessage from "./itemMessage/ItemMessage";
import { ChatAI } from "../../services/chatGPT";
import { useLoaderData } from "react-router-dom";
import { AnimationSend } from "../../Animation";

const Messages = () => {
  const [conversation, setConversation] = useState([]);
  const [responseBot, setResponseBot] = useState(true);
  const input = useRef();
  const form = useRef();
  const useName = useLoaderData();

  const salidoBot = async (greeting) => {
    const text = await ChatAI(greeting);
    setConversation([{ isUser: false, text }]);
  };

  useEffect(() => {
    const saludo = `saludame con mi nombre, mi nombre es ${useName}`;
    salidoBot(saludo);
  }, []);
  const MakeQuestion = async (e) => {
    e.preventDefault();
    const question = input.current.value;
    let addConversation = [...conversation, { isUser: true, text: question }];
    setConversation([...addConversation]);
    const text = await ChatAI(question);
    setConversation([...addConversation, { isUser: false, text }]);
    setResponseBot(true);
    form.current.reset();
  };

  return (
    <div className="containerMessage">
      <di className="messages">
        {conversation.map((item, index) => (
          <ItemMessage key={index} item={item} />
        ))}
      </di>
      {responseBot ? (
        <form
          className="form"
          onSubmit={(e) => {
            setResponseBot(false)
            MakeQuestion(e);
          }}
          ref={form}
        >
          <input
            type="text"
            name=""
            id=""
            placeholder="Make your question"
            ref={input}
          />
          <i className={`material-symbols-outlined iconSend`}>send</i>
        </form>
      ) : (
        <div className="form">
          <AnimationSend />
        </div>
      )}
    </div>
  );
};

export default Messages;
