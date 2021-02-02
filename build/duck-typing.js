"use strict";
const login = (user) => {
    user.username;
    return true;
};
//Duck typing
const myUser = {
    username: 'Aleksandar',
    password: '123',
    extraValue: 'something'
};
login(myUser);
