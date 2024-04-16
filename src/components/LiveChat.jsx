import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);
  const [LiveChat, setLiveChat] = useState("");
  useEffect(() => {
    const names = [
      "Alice ",
      "Bob ",
      "Carol ",
      "David ",
      "Eva ",
      "Ram",
      "Shaym",
      "Ramu",
      "Akshay",
      "Mohan",
    ];
    const messages = [
      "Hello there! 😃",
      "How are you doing today?🍁",
      "Isn't it a lovely day?😍",
      "What's up?😌",
      "Good morning! ☀️",
      "Hello ! 😃",
      "How are you  today?⚠️",
      " How's your day?📖",
      "let's go  up?😀",
      "Win! ☀️",
    ];

    // Function to generate a random index
    const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

    const i = setInterval(() => {
      // Select random name and message
      const name = names[getRandomIndex(names)];
      const message = messages[getRandomIndex(messages)];

      // Dispatch the message addition action with random name and message
      dispatch(
        addMessage({
          name: name,
          message: message,
        })
      );
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(i);
  }, []);

  const sendChat = () => {};

  return (
    <div className="h-[500px]  ">
      <div className="w-[400px] h-[450px] flex  flex-col-reverse overflow-y-scroll p-4">
        {chatMessage.map((chat, index) => (
          <ChatMessage name={chat.name} message={chat.message} key={index} />
        ))}
      </div>
      <form className="flex gap-2 ml-4 " onSubmit={(e) => {e.preventDefault()
      dispatch(addMessage({
        name:"Nigam",
        message:LiveChat
      }))
      setLiveChat("")
      }}>
        <input
          value={LiveChat}
          onChange={(e) => setLiveChat(e.target.value)}
          type="text"
          placeholder="Send Your Messsage"
          className=" w-60 outline-none  border border-slate-600 rounded px-2 "
        />
        <button
          className="p-1 outline-none border rounded bg-green-100 text-black"
          onClick={() => sendChat()}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
