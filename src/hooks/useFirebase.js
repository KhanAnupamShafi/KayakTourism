import InitializeFirebase from "../Firebase/Firebase.init";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

InitializeFirebase(); //initiate required before using firebase

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(); //Check if the user has been authenticated.

  //Add Google Provider
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // ...

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        setUser(user);
        // ...
      } else {
        // User is signed out
        setUser({});
        // ...
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Log-out user

  const handleLogOut = (params) => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    user,
    setUser,
    handleGoogleSignIn,
    handleLogOut,
    error,
    setError,
  };
};

export default useFirebase;
