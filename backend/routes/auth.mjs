import express from "express";

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send('Sign Up Route');
});

router.get('/login', (req, res) => {
    res.send('Log In Route');
});

router.get('/logout', (req, res) => {
    res.send('Log Out Route');
});

export default router;