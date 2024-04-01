const express = require("express");
const color = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require("./connection/db");
const authRoutes = require("./router/authRoute");
const testRoutes = require("./router/testRoute");
const courseRoutes = require("./router/courseRoute");
const feedbackRoutes = require("./router/feedbackRoute");
const assignmentRoutes = require("./router/assignmentRoute");
const chatRoutes = require("./router/chatRoute");
const http = require('http');
const socketIo = require('socket.io');

const bodyParser = require("body-parser");
const cors = require("cors");

//CONFIGURE ENV
dotenv.config(); // dotenv.config({path:""}) if file is not in root folder

//DATABASE
connectDB();

//REST OBJECT
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

//MIDDELWARES
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());

//ROUTES
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });

  socket.on('offer', (offer, roomId) => {
    socket.to(roomId).emit('offer', offer);
  });

  socket.on('answer', (answer, roomId) => {
    socket.to(roomId).emit('answer', answer);
  });

  socket.on('iceCandidate', (iceCandidate, roomId) => {
    socket.to(roomId).emit('iceCandidate', iceCandidate);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/course", courseRoutes);
app.use("/api/v1/feedback", feedbackRoutes);
app.use("/api/v1/assignment", assignmentRoutes);
app.use("/api/v1/chat", chatRoutes);


//REST API
app.get("/", (req, res) => {
  res.send("Hello Ji main aa gya");
});

//PORT and LISTEN SECTION
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`port is running at ${PORT}`.bgBlue);
});
