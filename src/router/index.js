// import view-router
import { createRouter, createWebHashHistory} from "vue-router";

// define rout components
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Feed from "../components/Feed";

// define routes
const routes = [
    {path: "/",  name: "Home", component: Home},
    {path: "/register", name: "Register", component: Register},
    {path: "/login", name: "Login", component: Login},
    {path: "/feed", name: "Feed", component: Feed}
];

// create router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;