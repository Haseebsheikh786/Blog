const passport = require("passport");

exports.isAuth = () => {
  return passport.authenticate("jwt");
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  //TODO : this is temporary token for testing without cookie
  // token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZTY2ODliZTJiZTdhMWY4NTE5MjQzYSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkyOTA1NDcwfQ.bQdJi7vd4M3gcZJj2mvZlZVYXKIunyVU66hyWfDWVys";
  return token;
};
 