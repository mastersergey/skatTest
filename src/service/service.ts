const userInfo = {
  username: 'testuser@tt.ru',
  password: 'TPipZn2h',
};

function getUserStatus(username: string, password: string) {
  const isUserRegistered =
    username === userInfo.username && password === userInfo.password;

  return new Promise((resolve) => {
    setTimeout(() => {
      if (isUserRegistered) {
        resolve('success');
      } else {
        resolve('error');
      }
    }, 1000);
  });
}

export default getUserStatus;
