const { Router } = require("express");
const User = require("../models/user");
const router = Router();
const AuthService = require("../services/AuthService");


router.post("/register", async (req, res) => {
  try {
    const instanseUserServis = new AuthService(User);
    const validateResult = await instanseUserServis.ValidationBeforRegister(req.body);
    if (validateResult.isValid) {
      const result = await instanseUserServis.Registration(req.body);
      return res.status(200).json(result);
    }
    res.status(400).json({ message: "Такой юзер уже есть" });
  } catch (e) {
    return res.status(500).json({ message: "Ошибка сервера" })
  }
});

router.post("/login", async (req, res) => {
  try {
    const instanseUserServis = new AuthService(User);
    const result = await instanseUserServis.Login(req.body);
    if (result.token) {
      return res.status(200).json(result);
    }
    return res.status(400).json(result.message);
  } catch (e) {
    return res.status(500).json({ message: "ошибка сервера" });
  }
});

router.get("/confirm/:id", async (req, res) => {
  try {
    const instanseUserServis = new AuthService(User);
    const result = await instanseUserServis.ConfirmRegistration(req.params.id);
    if (result) {
      return res.redirect("http://localhost:3000");
    }
  } catch (e) {
    console.log(e);
  }
})


module.exports = router;
