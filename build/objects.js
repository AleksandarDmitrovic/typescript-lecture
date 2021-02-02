"use strict";
const myObj = {
    name: 'Aleksandar',
    password: "123",
    avatarUrl: '1231231123.jpg',
    friend: { deepDarkSecret: false, voice: 'light' }
};
const myObjCopy = Object.assign(Object.assign({}, myObj), { name: 'Carol' });
const myUsers = [];
myUsers.push(myObj);
// myUsers.push({ name: 'Bob' });
