const asyncHandler = require("express-async-handler");


//@description Say Hello from protected route
//@route GET /api/protected
//@access private
const sayHelloFromProtected = asyncHandler(async (req, res) => {
  if (!req.auth.sub) return res.sendStatus(401);
  res.status(200).send("<h1>Hello from Hanko, this is a protected route.</h1>");
});

module.exports = {
  sayHelloFromProtected
};

