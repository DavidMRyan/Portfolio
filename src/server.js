const express = require("express");
const path = require("path");
const HomeController = require("./controllers/home");

class App {
  /**
   * Express application constructor
   */
  constructor() {
    this.express = express();
    this.port = process.env.PORT || 3000;

    this.express.set("views", path.join(__dirname, "../public/views"));
    this.express.set("view engine", "html");

    this.initializeRoutes();
    this.express.listen(this.port, () =>
      console.log(`Server listening on port ${this.port}`)
    );
  }

  /**
   * Initialize the express application routes
   */
  initializeRoutes() {
    // Static
    this.express.use("/", express.static("/var/www/html"));

    // Home
    this.express
      .route("/")
      .get(
        HomeController.getInstance().index.bind(HomeController.getInstance())
      );
  }
}

const app = new App();
