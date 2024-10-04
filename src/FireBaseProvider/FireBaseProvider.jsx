import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../components/Firebase/Firebase.init";
import { TwitterAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
 // Social Auth Providers
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();
 const facebookProvider = new FacebookAuthProvider();
 const twitterProvider = new TwitterAuthProvider();


const FireBaseProvider = ({children}) => {

    const [user,setUser]=useState(null);


    // Sign Up User
    const signUp = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInUser = (email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)

    }

    // LogOut
    const logOut =()=>{
       return signOut(auth)
    }

    // google login
    const googleLogin = ()=>{
      return  signInWithPopup(auth, googleProvider)
    
    }
    // github login
    const githubLogin = ()=>{
      return  signInWithPopup(auth, githubProvider)
    
    }
    // facebook login
    const facebookLogin = ()=>{
      return  signInWithPopup(auth, facebookProvider)
    
    }
    // twitter login
    const twitterLogin = ()=>{
      return  signInWithPopup(auth, twitterProvider)
    
    }

    //Reset Password
    const resetPassword =(email)=>{
      return sendPasswordResetEmail(auth, email)

    }


    // observer 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('current user value',currentUser);
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authValues = {user,signUp,logInUser,logOut,googleLogin,githubLogin,facebookLogin,twitterLogin,resetPassword}

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FireBaseProvider;