interface IUser {
  id?: number;
  name: string;
  password: string;
  avatarUrl: string;
  created_at?: Date;
  friend: IFriend;
  friends?: (number | string | IFriend)[];
}

interface IFriend {
  id?: number;
  deepDarkSecret: boolean;
  voice: string;
}

const myObj: IUser = {
  name: 'Aleksandar',
  password: "123",
  avatarUrl: '1231231123.jpg',
  friend: { deepDarkSecret: false, voice: 'light' }
};

const myObjCopy: IUser = { ...myObj, name: 'Carol' };

const myUsers: IUser[] = [];

myUsers.push(myObj);
// myUsers.push({ name: 'Bob' });