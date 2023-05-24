import * as AppIcons from "@fortawesome/free-brands-svg-icons";
import * as NormalIcons from "@fortawesome/free-solid-svg-icons";

import { capitalString } from "~/utils/string";

const supportedApps = require("~/constants.json").supportedApp;

const appIcons = {};
for (const { app, color } of supportedApps) {
    const iconString = `fa${capitalString(app)}`;
    let icon = AppIcons[iconString];
    if (!icon) icon = NormalIcons[iconString];

    appIcons[app] = {
        icon,
        color,
    };
}

appIcons.default = NormalIcons["faGlobe"];

export default appIcons;
