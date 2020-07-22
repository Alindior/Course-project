const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const UserService = require('../services/UserService');
const AuthService = require("../services/AuthService");
const passport = require('passport');

router.get("/", async (req, res) => {
    try {
        const instanceUserService = new UserService(User);
        const users = await instanceUserService.GetAllUsers();
        if (users) {
            res.status(200).json(users);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.delete("/:usersId", async (req, res) => {
    try {
        const { usersId } = req.params;
        const instanceUserService = new UserService(User);
        const deletedUser = await instanceUserService.DeleteUser(usersId);
        if (deletedUser) {
            res.status(200).json(deletedUser);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.put("/block/:usersId", async (req, res) => {
    try {
        const { usersId } = req.params;
        const instanceUserService = new UserService(User);
        const lockedUSer = await instanceUserService.LockedUser(usersId);
        if (lockedUSer) {
            res.status(200).json(lockedUSer);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.put("/unlock/:usersId", async (req, res) => {
    try {
        const { usersId } = req.params;
        const instanceUserService = new UserService(User);
        const unlockedUser = await instanceUserService.UnlockUser(usersId);
        if (unlockedUser) {
            res.status(200).json(unlockedUser);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.put("/admin/:usersId", async (req, res) => {
    try {
        const { usersId } = req.params;
        const instanceUserService = new UserService(User);
        const admin = await instanceUserService.SetAdminUser(usersId);
        if (admin) {
            res.status(200).json(admin);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.put("/unadmin/:usersId", async (req, res) => {
    try {
        const { usersId } = req.params;
        const instanceUserService = new UserService(User);
        const user = await instanceUserService.UnlockUser(usersId);
        if (user) {
            res.status(200).json(user);
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" });
    }
});

router.put("/user", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { id } = req.user;
        const instanceUserService = new UserService(User);
        const user = await instanceUserService.ChangeUserInfo(id, req.body);
        if (user) {
            const instanceAuthService = new AuthService(User);
            const token = await instanceAuthService.UpdateToken(user.login);
            return res.status(200).json(token);
        }
        return res.status(400).json({ message: "Пользователь не найден" })
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Что то пошло не так" })
    }
})




module.exports = router;