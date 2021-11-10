import './App.css';
import { auth } from "./firebase-config";
import { createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged } from "firebase/auth"
import {useState} from "react";

function App() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        }
    )

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error){
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        } catch (error){
            console.log(error.message);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error){
            console.log(error.message);
        }
    };

    return (

        <div className="App">
          <div>
            <h3>Register User</h3>
            <input placeholder="Email..." onChange={(event) => {setRegisterEmail(event.target.value);
            }}
            />
            <input placeholder="Password..." onChange={(event) => {
                setRegisterPassword(event.target.value);
            }}
            />

            <button onClick={register}> Create User </button>
          </div>
          <div>
            <h3>Login User</h3>
            <input placeholder="Email..." onChange={(event) => {
                setLoginEmail(event.target.value);
            }} />
            <input placeholder="Email..." onChange={(event) => {
                setLoginPassword(event.target.value);
            }} />

            <button onClick={login}> Login </button>
          </div>

          <h4>User Logged In: {user?.email} </h4>


          <button onClick={logout}>Logout</button>
        </div>

  );
}

export default App;
