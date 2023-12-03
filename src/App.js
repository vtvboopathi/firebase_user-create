import { useEffect, useState } from 'react';
import './App.css';
import { createUserWithEmailAndPassword, 
         onAuthStateChanged,
         signInWithEmailAndPassword,
         signOut } from 'firebase/auth'
import { auth } from './firebase-config';

function App() {

  const [registeredEmail, setRegisteredEmail] = useState('')
  const [registeredPassword, setRegisteredPassword] = useState('')

  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [user, setUser] = useState({})


  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
  }, [])

  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth, registeredEmail, registeredPassword)
      console.log(user);
    } catch (error) {
      console.log(error.message)
  }
  }

  const login = async () =>{
    try{
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user);
    } catch (error) {
      console.log(error.message)
  }
  }

  const logout = async () =>{
    await signOut(auth)
  }



  return(
    <div className='hero'>
      <div className='row'>

        <h2>Sign up</h2>

        <div className='col'>
          <input placeholder='Email....' 
          onChange={(event)=> {setRegisteredEmail(event.target.value)}} />
          <input placeholder='Password....' 
          onChange={(event)=> {setRegisteredPassword(event.target.value)}}/>
        </div>

        <button onClick={register}>Sign up</button>
      </div>


      <div className='row'>

        <h2>Sign in</h2>

        <div className='col'>
          <input placeholder='Email....' 
          onChange={(event)=> {setLoginEmail(event.target.value)}}/>
          <input placeholder='Password....' 
          onChange={(event)=> {setLoginPassword(event.target.value)}}/>
        </div>

        <button onClick={login}>Sign in</button>


      </div>


      <h2>{user ? user.email : 'Not Logged in'}</h2>
      <button onClick={logout}>Log out</button>

    </div>
  )
}

export default App;
