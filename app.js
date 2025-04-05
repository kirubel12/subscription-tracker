import express from "express";
import {PORT} from './config/env.js'
import authRouter from "./routes/auth.routes.js"
import subscriptionRouter from "./routes/subscription.routes.js";
import usersRouter from "./routes/user.routes.js"
import connectDB from "./db/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/users", usersRouter);
app.use(express.json())
app.get("/", (req, res) => {
    res.json({
        "message": "Hello World!"
    })
});

app.listen(PORT, async() => {
    console.log(`Subscription tracker API on port http://localhost:${PORT}`);
    await connectDB();
});


export default app;


