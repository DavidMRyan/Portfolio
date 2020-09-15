const path = require("path");

class HomeController 
{
  	static _instance;

	/**
	 * Constructor for the home controller singleton
	 */
	constructor() {}

	/**
	 * @returns The singleton instance for the home controller
	 */
	static getInstance() 
	{
		if (!HomeController._instance)
			HomeController._instance = new HomeController();
		return HomeController._instance;
	}

	/**
	 * Response handler for the index page
	 */
	index(req, res) 
	{
		res.sendFile(path.join(__dirname, "../../public", "index.html"));
	}
}

// TODO: This is the ES5 way of doing modules.
// Switch to using the ES6 way, it's much better.
module.exports = HomeController;
