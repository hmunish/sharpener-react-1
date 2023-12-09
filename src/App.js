import './App.css';
import UserForm from './components/user/UserForm';

function App() {
  return (
   <main id="app" className='container-fluid bg-dark vh-100'>
    <section className='w-50 bg-light m-auto p-3 rounded'>
    <UserForm />
    </section>
    <section className='w-50 m-auto rounded bg-light p-3 mt-5'>

    </section>
   </main>
  );
}

export default App;
