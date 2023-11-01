const express = require("express");
const messageRoute = require("./messages.routes");
const router = express.Router();

// Default routes for the app
const defaultRoutes = [
    {
        path: "messages",
        route: messageRoute,
        public: true,
    }
];

defaultRoutes.forEach((route)=>{
    router.use(`v1/api/${route.path}`, route.route);
});

module.exports = router;