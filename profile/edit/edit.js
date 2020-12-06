let currentUser;

function displayUserProfileOnEditForm() {
    document.querySelector("#name").value = currentUser.name || "";
    document.querySelector("#email").value = currentUser.email || "";
    document.querySelector("#username").value = currentUser.username || "";
    document.querySelector("#profilePhoto").value = currentUser.profileImage || "../img/profile.svg";
    document.querySelector("#password").value = atob(currentUser.password);
}

(() => {
    currentUser = databaseManager
        .findUser(parseInt(getAuthenticatedUser()))

    if (currentUser === undefined){
        alert("Please login to see this page")
        window.location.href = '../../';
    }else {
        displayUserProfileOnEditForm();
    }
})();


const updateProfile = () => {
    currentUser.username = document.querySelector('#username').value
    currentUser.name = document.querySelector('#name').value
    currentUser.email = document.querySelector('#email').value
    currentUser.profileImage = document.querySelector('#profilePhoto').value
    currentUser.password = document.querySelector('#password').value

    databaseManager.updateUser(currentUser)
    backUpApp({users: databaseManager.users})
    alert("Update successful")

    window.location.href = '../';
}
