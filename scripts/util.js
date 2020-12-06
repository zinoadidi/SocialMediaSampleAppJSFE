function generateRandomID(){
    return Math.floor(Math.random() * Math.floor(100000));
}

function backUpApp(app) {
    localStorage.setItem("backupOfApp", JSON.stringify(app));
}

function restoreBackUpApp() {
    return JSON.parse(localStorage.getItem("backupOfApp"))
}

function getAuthenticatedUser() {
    return localStorage.getItem("authenticatedUserId")
}

function setAuthenticatedUser(id) {
    localStorage.setItem("authenticatedUserId", id);
}
