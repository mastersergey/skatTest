import React, { FormEvent, useState } from 'react';

import getUserStatus from './service/service';

const postLink = 'http://neurodoc.online/api/api/authenticate';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const onFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await getUserStatus(username, password);
    if (response === 'success') {
      fetch(postLink, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: 'success',
      });
    } else {
      setIsError(true);
    }
    setUsername('');
    setPassword('');
  };

  return (
    <form
      onSubmit={onFormSubmit}
      style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
    >
      {isError && <p>Error!</p>}
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default App;
