import React from 'react';
import Chats from './Chats';
import { useState, useEffect } from 'react';
import './ChatLoader.css';



function ChatLoader() {
  const[searchTerm, setSearchTerm] = useState("")

  const [chats, setChats] = useState([]);

  const url = "http://localhost:5000/api/chat";

  function getChats() {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "http://localhost:5000/api/chats");

    fetch(url, {
      mode: "cors",
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => setChats(json))
      .catch((error) => console.log("Authorization failed : " + error.message));
  }

  useEffect(() => {
    getChats();
  }, []);



    return (
        <div className="main">
<h1>Search who sent you message:</h1>
<input
        type="text"
        placeholder="Push Enter after your characters..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {chats
        .filter((chats) => {
          if (searchTerm === "") {
            return "";
          } else if (
            chats.from.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return chats;
          }
        })
        .map((chats, key) => {
          return (
            <div className="user" key={key}>
              {" "}
              <p>{chats.from}</p>
            </div>
          );
        })}

        
<h1>See all of your messages:</h1>
             <div>
      {chats === null ? (
            <p>{console.log("null")}null</p>
          ) : (
            <div>
              {chats.map((chat, i) => (
                <Chats
                  key={i}
                  chats={chat}
                />
              ))}{" "}
            </div>
          )}</div>


        </div>
    )
}

export default ChatLoader
