import { createContext, useEffect, useState } from "react";
import {
    GithubAuthProvider,
    GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
 
} from "firebase/auth";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);



//social auth
const googleProvider = new  GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   console.log(user);

  //loading
  const [loading, setLoading] = useState(true);



  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   

  };



  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   
 

  };



  // google login
  const googleLogin = () => {
    setLoading(true);

  return signInWithPopup(auth, googleProvider) 
    

   
  };

  //github login
  const githubLogin = () => {
    setLoading(true);

    return  signInWithPopup(auth, githubProvider)  
   
  };

  
  const logOut = () =>{
     setLoading(true);
      setUser(null);
   return signOut(auth)
   
 
  };
  
  // const logOut = () => {
  //   setLoading(true);
  //   setUser(null);
  //   return signOut(auth)
  //     .then(() => {
  //       setLoading(false);

  //     })

  //     .catch((error) => {
  //       setLoading(false);
  //       console.error('Error logging out:', error);
  //     });
     
  // };



  // OBSERVER
  useEffect(() => {
    const unsubscribe = 
   onAuthStateChanged(auth, (user) => {
     
        setUser(user);
         setLoading(false);
    
    });
     return () => unsubscribe();
  }, []);



  const allValue = {
    createUser,
    signInUser,
    googleLogin,
    githubLogin,
    logOut,
    user,
     setUser,
        //  loading

  };
  return (
    <AuthContext.Provider value={allValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
