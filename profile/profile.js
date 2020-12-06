let currentUser;

function displayUserProfile() {
    document.querySelector("#profileId").innerHTML = currentUser.id || "";
    document.querySelector("#profileName").innerHTML = currentUser.name || "";
    document.querySelector("#profileEmail").innerHTML = currentUser.email || "";
    document.querySelector("#profileUserName").innerHTML = currentUser.username || "";
    document.querySelector("#profilePhoto").src = currentUser.profileImage || "../img/profile.svg";
}

(() => {
    currentUser = databaseManager
        .findUser(parseInt(getAuthenticatedUser()))

    if (currentUser === undefined){
        alert("Please login to see your profile")
        window.location.href = '../';
    }else {
        displayUserProfile();
    }
})();
