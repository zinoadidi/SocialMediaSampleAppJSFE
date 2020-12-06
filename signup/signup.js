
const register = () => {

    const email = document.querySelector('#email').value
    const password = btoa(document.querySelector('#password').value)

    databaseManager.addUser(new User(email, password))
    backUpApp({users: databaseManager.users})
    alert("Registration successful")

    window.location.href = '../login/';
}
