const http = require("http");

http
  .createServer((req, res) => {
    const redirectBaseUrl = process.env.REDIRECT_URL;
    const keepPathAndQuery = process.env.KEEP_PATH_AND_QUERY === "true";

    if (redirectBaseUrl) {
      const baseUrl = redirectBaseUrl.replace(/\/$/, "");
      const path = keepPathAndQuery ? req.url : "";
      const redirectUrl = `${baseUrl}${path}`;
      res.statusCode = 301;
      res.setHeader("Location", redirectUrl);
    }
    res.end();
  })
  .listen(process.env.PORT || 3000);
