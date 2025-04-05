import {Router} from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("Get all users")
});

userRouter.get("/:id", (req, res) => {
    res.json({
        "message": "Get user with id " + req.params.id,
    })
})

userRouter.post("/", (req, res) => {
    res.json({
        "message": "create user"
    })
})

userRouter.put("/:id", (req, res) => {
    res.json({
        "message": "Update user with id " + req.params.id,
    })
})

userRouter.delete("/:id", (req, res) => {
    res.json({
        "message": "Delete user with id " + req.params.id,
    })
})

export default userRouter;