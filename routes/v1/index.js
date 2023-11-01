const messageRoute = require("./messages.routes");


const defaultRoutes = [
    {
        path: "messages",
        route: messageRoute,
        public: true,
    }
];

defaultRoutes.forEach((route)=>{
    router.use(`v1/api/${route.path}`, route.route);
})