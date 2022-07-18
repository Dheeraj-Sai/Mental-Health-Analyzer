const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const fs = require('fs');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
const messageArray = {};
const scoreArray = {};
const natural = require('natural');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
var Sentiment = require('sentiment');
const { builtinModules } = require('module');
var sentiment = new Sentiment();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot';

// Run when client connects
io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        'message',
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

	  var strMsg = msg;
	  var userName = user.username;
		
	  if(!(userName in messageArray)){
		  messageArray[userName] = strMsg;
	  }
	  else{
		  messageArray[userName] = messageArray[userName].concat(" ").concat(strMsg);
		  // console.log(messageArray[userName]);
	  }
    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if (user) {
		console.log(user.username)
		console.log(messageArray[user.username]);
		var result = sentiment.analyze(messageArray[user.username]);
		
		console.dir(result);
		scoreArray[user.username] = result.score;

		console.log(scoreArray[user.username]);

    var score = scoreArray[user.username];
    if (typeof localStorage === "undefined" || localStorage === null) {
      var LocalStorage = require('node-localstorage').LocalStorage;
      localStorage = new LocalStorage('./scratch');
    }
    console.log(scoreArray)
    

    
    localStorage.setItem('score', score);
    // console.log(localStorage.getItem('score'));
    
    exports.score = score;

    
      io.to(user.room).emit(
        'message',
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    }
  });
});





const PORT = process.env.PORT || 3000;

app.post("/api", (req,res) => {
  console.log(scoreArray)
  return res.send({score:scoreArray[req.query.username]})
  
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


