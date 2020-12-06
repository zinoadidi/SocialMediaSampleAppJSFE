class User {
    email;
    password;
    name;
    profileImage;
    username;
    constructor(email, password, name, profileImage, username) {
        this.id = generateRandomID();
        this.email = email;
        this.password = password;
        this.name = name;
        this.profileImage = profileImage;
        this.username = username;
    }

}
