import {useSelector} from 'react-redux';
import Counter from './components/Counter';

import Header from './components/Header';
import UserProfile from './components/UserProfile';
import Auth from './components/Auth';
// import {authActions} from './store'

function App() {
  
  const authStatus = useSelector(state => state.auth.isAuthenticated)
  console.log(authStatus);
  return (
    <>  
    <Header/>  
    {!authStatus && <Auth/>}
    {authStatus && <UserProfile/>}
    <Counter />
    </>

  );
}

export default App;
