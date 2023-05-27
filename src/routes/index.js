import SingleBox from "~/layouts/SingleBox";
import { routes } from "../config";

// Anonymous user
const publicRoutes = [
    { path: routes.addUser, layout: SingleBox },
    { path: routes.addAccount, layout: SingleBox },
    { path: routes.filter },
    { path: routes.home },
];

// Logged-in user
const privateRoutes = [];

export { publicRoutes, privateRoutes };
