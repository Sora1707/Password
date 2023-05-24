import SingleBox from "~/layouts/SingleBox";
import { routes } from "../config";

// Anonymous user
const publicRoutes = [
    { path: routes.home },
    { path: routes.add, layout: SingleBox },
];

// Logged-in user
const privateRoutes = [];

export { publicRoutes, privateRoutes };
