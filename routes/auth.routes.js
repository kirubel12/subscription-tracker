import {Router} from 'express'

const authRouter = Router();


authRouter.post("/sign-up", (req, res) => {
    res.json({
        "message": "Sign up successfully",
    })
})

authRouter.post("/sign-in", (req, res) => {
    res.json({
        "message": "Sign in successfully",
    })
});

authRouter.post("/sign-out", (req, res) => {
    res.json({
        "message": "Sign out successfully",
    })
})

export default authRouter;