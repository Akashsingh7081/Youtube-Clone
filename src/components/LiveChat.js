import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessages from "../components/ChatMessage";
import { generate, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

//   useEffect(() => {
//     const i = setInterval(() => {
//       dispatch(
//         addMessage({
//           name: generate(),
//           message: makeRandomMessage(20),
//         })
//       );
//     }, 1000);

//     return () => clearInterval(i);
//   }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name: "Akash Singh",
            message: liveMessage,
          }))
          console.log("Form submitted", liveMessage);
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-300">submit</button>
      </form>
    </>
  );
};

export default LiveChat;
