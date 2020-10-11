import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import SendIcon from '@material-ui/icons/Send';
import Message from "./Message";
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{}])
  const [userName, setUserName] = useState('')

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    setUserName (prompt ('Enter Your Name'))
  }, [] )

  const sendMsg = (event) => {
    event.preventDefault();

    window.scrollTo({behavior:'smooth', top: 100000000000000})
    db.collection('messages').add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    // setMessages([...messages, { userName: userName, message: input }]);
    setInput("");
  };


  return (
    <div className="App">
      <div className="heading">
      <h1>✉ A Global Chat App! ✉</h1>
      <h2>Welcome {userName}</h2>
      </div>
      <form>
        <TextField
          className="inputField"
          onChange={(event) => setInput(event.target.value)}
          value={input}
          
          id="filled-textarea"
          label="Send Message"
          placeholder="Type Message Here!"
          fullWidth
          multiline
          variant="filled"
        />
        <div className='inputForm'>
        <button type="submit" disabled={!input} onClick={sendMsg}>
          <SendIcon style={{ color: 'purple' }} />
        </button>
        </div>
      </form>

      <div className='main-div'>
        {messages.map((message) => (
          <Message userName={userName} message={message}/>
        ))}
      </div>
    </div>
  );
}

export default App;
