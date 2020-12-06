
let databaseManager;

class Database {
    constructor(users = []) {
        this.users = users;
    }

    addUser(user){
        this.users.push(user)
    }
    findUser(identifier){
        return this.users.find(
            (currentUser) =>
                currentUser.email === identifier ||
                currentUser.id === identifier
        )
    }
    updateUser(user){
        this.users = this.users.map(function (currentUser) {
            if (currentUser.id === user.id) {
                currentUser.name = user.name;
                currentUser.email = user.email;
                currentUser.username = user.username;
                currentUser.password = user.password;
                currentUser.profileImage = user.profileImage;
            }
            return currentUser;
        })
    }
    deleteUser(){

    }
}

(() => {
    let backUpOfApp = restoreBackUpApp()
    if (backUpOfApp !== null){
        databaseManager = new Database(backUpOfApp.users)
    }else{
        databaseManager = new Database();
    }
})();

