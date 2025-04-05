import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) => {
    res.json({
        "message": "Get all subscriptions",
    })
})

export default subscriptionRouter;