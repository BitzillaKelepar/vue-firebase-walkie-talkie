// import view-router
import { createRouter, createWebHashHistory} from "vue-router";

// define rout components
import Home from "../components/Home";

// define routes
const routes = [
    {patch: "/",  name: "Home", component: Home}
];

// create router instance
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;