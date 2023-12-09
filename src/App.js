import { useState } from 'react';
import './App.css';
import UserForm from './components/user/UserForm';
import UserDetailCard from './components/user/UserDetailCard';
import Notification from './components/Notification';

function App() {
  const [users, setUsers] = useState([{username: "munish", age: 50}, {username: "munish", age: 50}]);
  const [error, setError] = useState({isError: false, message: ""});

  const usersContent = !users.length ? <p className="text-body-secondary fw-semibold">No users, please add to see here</p> : users.map(user => <UserDetailCard key={user.username} username = {user.username} age = {user.age} />)
  return (
    <main id="app" className='container-fluid bg-dark vh-100'>
     {error.isError && <Notification message={error.message} />}
    <section className='w-50 bg-light m-auto p-3 rounded'>
    <UserForm />
    </section>
    <section className='w-50 m-auto rounded bg-light p-3 mt-5'>
      {usersContent}
    </section>

   </main>
  );
}

export default App;
