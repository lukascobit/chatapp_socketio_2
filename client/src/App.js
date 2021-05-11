import React,[ useState, useRef, useEffect] from 'react';
import './App.css';
import immer from 'immer';
import io from 'socket.io-client'
import { useEffect, useRef, useState } from 'react';

function App() {

  const [username,setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const [currentChat, setCurrentChat] = useState({ isChannel:true, chatName:"general", recieverId: "" });
  const [connectedRooms,setConnectedRooms] = useState(["general"]);
  const [allUsers,setAllUsers] = useState([]);
  const [messages,setMessages] = setState(initialMessagesState);
  const [message,setMessage] = useState("");
  const socketRef = useRef()

  return (
    <div className="App">
        
    </div>
  );
}

export default App;
