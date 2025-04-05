import {Router} from "express";

const subscriptionRouter = Router();

subscriptionRouter.post("/", (req, res) => {
    res.json({
        "message": "Get all subscriptions",
        "status": 200,
        "data": []
    })
})

subscriptionRouter.get("/:id", (req, res) => {
    res.json({
        "message": "Get subscription with id " + req.params.id,
    })
})

subscriptionRouter.post("/", (req, res) => {
    res.json({
        "message": "create a subscription"
    })
})

subscriptionRouter.delete("/:id", (req, res) => {
    res.json({
        "message": "Delete subscription with id " + req.params.id,
    })
})

subscriptionRouter.put("/:id", (req, res) => {
    res.json({
        "message": "Update subscription with id " + req.params.id,
    })
})

subscriptionRouter.get("/user/:id", (req, res) => {
    res.json({
        "message": "Get user subscription with id " + req.params.id,
    })
})

subscriptionRouter.put("/:id/cancel", (req, res) => {
    res.json({
        "message": "cancel subscription with id " + req.params.id,
    })
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.json({
        "message": "Upcoming subscription",
    })
})


export default subscriptionRouter;