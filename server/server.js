const app = require("./config/app");

const port = process.env.PORT || 3001;
const host = process.env.HOST || "localhost";

app.listen(port, host, () => {
  console.log(`Listening: ${host}:${port}`);
});
