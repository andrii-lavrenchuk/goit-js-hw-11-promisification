import users from './usersArr.js';

const toggleUserState = (allUsers, userName) => {
  return new Promise(resolve => {
    resolve(
      allUsers.map(user =>
        user.name === userName ? { ...user, active: !user.active } : user,
      ),
    );
  });
};

const logger = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);
