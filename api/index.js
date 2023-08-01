const express=require("express");
const cors=require("cors");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth.js");
const userRoute=require("./routes/users.js");
const movieRoute=require("./routes/movies.js");
const listRoute=require("./routes/lists.js");

dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database connection successful");
}

app.use(cors());

const allowedOrigins = ['https://bestflix-h3vn.onrender.com'];

app.use(cors({ origin: allowedOrigins }));

app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);

app.listen(4000,()=>{
    console.log("Server running on port 4000");
});