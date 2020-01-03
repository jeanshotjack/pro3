import React, { Component } from 'react';

import {
  handleInput,
  connectToChatkit,
  connectToRoom,
  sendMessage,
  sendDM,
} from '../components/Chat/methods';
import Dialog from '../components/Chat/Dialog';

import RoomList from '../components/Chat/RoomList';
import ChatSession from '../components/Chat/ChatSession';
import RoomUsers from '../components/Chat/RoomUsers';

import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import '../components/Chat/Chat.css';

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      showLogin: true,
      isLoading: false,
      currentUser: null,
      currentRoom: null,
      rooms: [],
      roomUsers: [],
      roomName: null,
      messages: [],
      newMessage: '',
    };
    this.handleInput = handleInput.bind(this);
    this.connectToChatkit = connectToChatkit.bind(this);
    this.connectToRoom = connectToRoom.bind(this);
    this.sendMessage = sendMessage.bind(this);
    this.sendDM = sendDM.bind(this);
  }

  render() {
    const {
      userId,
      showLogin,
      rooms,
      currentRoom,
      currentUser,
      messages,
      newMessage,
      roomUsers,
      roomName,
    } = this.state;

    return (
      
      <div className="Chat">
        <aside className="sidebar left-sidebar">
          {currentUser ? (
            <div className="user-profile">
              <span className="username">{currentUser.name}</span>
              <span className="user-id">{`@${currentUser.id}`}</span>
            </div>
          ) : null}
          {currentRoom ? (
                <RoomList
                  rooms={rooms}
                  currentRoom={currentRoom}
                  connectToRoom={this.connectToRoom}
                  currentUser={currentUser}
                />
              ) : null}
<<<<<<< HEAD
        </aside>
=======
        </div>

        <div className="sidebar right-sidebar">
          {showLogin ? (
            <Dialog
              userId={userId}
              handleInput={this.handleInput}
              connectToChatkit={this.connectToChatkit}
            />
          ) : null}
          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
        </div>

>>>>>>> 0e93c14b9d318c1d31b11e99f1fced9e5049862a
        <section className="chat-screen">
          <header className="chat-header">
          {currentRoom ? <h3>{roomName}</h3> : null}
          </header>
          <ul className="chat-messages">
            <ChatSession messages={messages} />
          </ul>
          <footer className="chat-footer">
            <form onSubmit={this.sendMessage} className="message-form">
              <input
                type="text"
                value={newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Type your message and hit ENTER to send"
                onChange={this.handleInput}
              />
            </form>
          </footer>
        </section>
<<<<<<< HEAD
        <aside className="sidebar right-sidebar">
=======


        {/* <div className="sidebar right-sidebar">
>>>>>>> 0e93c14b9d318c1d31b11e99f1fced9e5049862a
          {showLogin ? (
            <Dialog
              userId={userId}
              handleInput={this.handleInput}
              connectToChatkit={this.connectToChatkit}
            />
          ) : null}
          {currentRoom ? (
            <RoomUsers
              currentUser={currentUser}
              sendDM={this.sendDM}
              roomUsers={roomUsers}
            />
          ) : null}
<<<<<<< HEAD
        </aside>
=======
        </div> */}

>>>>>>> 0e93c14b9d318c1d31b11e99f1fced9e5049862a
      </div>
    );
  }
}

export default Chat;