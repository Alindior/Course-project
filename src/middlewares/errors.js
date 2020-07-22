module.exports = async (req, res, next) => {
  try {
    await next();
  } catch (e) {
    res.status(e.status).json({ error: e.message || "Internal Server Error" });
  }
};
