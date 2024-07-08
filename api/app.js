import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import expressSession from "express-session"
import passport from 'passport'

const app = express();
app.use(expressSession({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
const CLIENT_URL = "http://localhost:5173"
app.use(cors({
  origin: CLIENT_URL,
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
})
);
app.use(express.json());
app.use(cookieParser());
app.get('/api/google/login',(req,res,next)=>{
  res.redirect('/api/auth/auth/google')
})
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);

app.listen(8800, () => {
  console.log("Server is running!");
});
