/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [therapists, setTherapist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchedResult, setSearchResult] = useState([]);

  const registration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };
  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubScribe();
  }, []);

  useEffect(() => {
    fetch("/public/therapistInfo.json")
      .then((res) => res.json())
      .then((data) => setTherapist(data));
  }, []);

  const handleSearch = () => {
    const filtered = therapists.filter(
      (item) =>
        item.city.toLowerCase().includes(searchText.toLowerCase()) ||
        item.zip.includes(searchText)
    );

    setSearchResult(filtered?.length ? filtered : therapists);
  };
  console.log(searchedResult);

  const authInfo = {
    registration,
    login,
    user,
    googleLogin,
    logout,
    therapists,
    handleSearch,
    setSearchText,
    searchedResult,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
