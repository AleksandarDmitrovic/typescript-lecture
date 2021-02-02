interface INewUser {
  username: string;
  password: string;
}

const login = (user: INewUser): boolean => {
  user.username;
  return true;
};

//Duck typing
const myUser = {
  username: 'Aleksandar',
  password: '123',
  extraValue: 'something'
};

login(myUser)