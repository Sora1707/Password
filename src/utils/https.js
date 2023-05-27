// export async function exists(url) {
//     try {
//         const response = await fetch(url, { method: "HEAD", mode: "no-cors" });
//         console.log(response);
//         return response.status >= 200 && response.status < 400;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

export function exists(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.send();
    request.onload = function () {
        if (request.status === 200) {
            //if(statusText == OK)
            console.log("image exists");
        } else {
            console.log("image doesn't exist");
        }
    };
}
