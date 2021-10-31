import React, { useEffect} from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {auth} from "./firebase"
import { onAuthStateChanged } from '@firebase/auth';
import Home from './Components/Home';
import { useDispatch, useSelector } from 'react-redux';
import { logout,login, selectUser } from './features/userSlice';
import { useRecoilState } from 'recoil';
import { userstate } from './atoms/userAtom';


function App() {

  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [isAdmin, setisAdmin] = useRecoilState(userstate)
  console.log("Is Admin in app : ", isAdmin)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
       if (user) {
        dispatch(login({
          uid: user.uid,
          name: user.displayName,
          email:user.email,
          photo:user.photoURL
        }))
        isAdmin(false)
      } else {
        dispatch(logout())
      }})
  },[user])

  return (
      <div>
        {
          user || isAdmin ? 
          <Home /> : <HomeScreen  />
        }
      </div>

  );
}

export default App;

