
const login = () => {
    const email = document.querySelector('#email').value
    const password = btoa(
        document.querySelector('#password').value
    )

    const existingUser = databaseManager.findUser(email)

    if(existingUser !== undefined && existingUser.password === password){
        setAuthenticatedUser(existingUser.id)
        window.location.href = '../profile/';
    }else {
        alert("User does not exist or password incorrect")
    }

}
