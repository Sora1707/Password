function related(query = "", object = {}, ...keys) {
    // query: base string
    // object: object
    // keys: an array of keys for comparing
    query = query.toLowerCase();

    for (const key of keys) {
        let str = object[key];
        if (!str) return false;

        str = str.toLowerCase();
        if (!str.includes(query)) return false;
    }

    return true;
}

export function userSearch(query) {
    const users = require("~/database/users.json");
    const results = [];

    for (const [username, data] of Object.entries(users)) {
        const object = { username, ...data };
        if (
            related(query, object, "username") ||
            related(query, object, "nickname")
        ) {
            results.push([username, data]);
        }
    }
    return results;
}

export function accountSearch(query) {
    const accounts = require("~/database/accounts.json");
    const results = [];

    for (const account of accounts) {
        if (
            related(query, account, "title") ||
            related(query, account, "user")
        ) {
            results.push(account);
        }
    }

    return results;
}
