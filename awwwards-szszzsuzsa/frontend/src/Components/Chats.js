import React from "react";
import "./Chats.css";
import Dots from './Dots';

function Chats({ chats }) {

  return (
    <div>


      <div className="chats">
        <Dots />
        <p>From: {chats.from}</p>
        <p>To: {chats.to} </p>
        <p>Chat message: {chats.text}</p>
        {chats.friend === true && "from a friend"}
        {chats.colleague === true && "from a colleague"}
         {chats.unknown === true && "He/She is unknown person."}
        <p>{chats.urgent === true
          ? "Urgent message!"
          : "This message is not urgent."}</p>
          <br/>*
      </div>
      

    </div>
  );
}

export default Chats;
