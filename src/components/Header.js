import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
// Import the functions you need from the SDKs you need

import { collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfigi = {
  apiKey: "AIzaSyCa8ufyzIoKZMJykRmCJP4bbVs5XToSBdE",

  authDomain: "desney-plus-clone-2739d.firebaseapp.com",

  databaseURL: "https://desney-plus-clone-2739d-default-rtdb.firebaseio.com",

  projectId: "desney-plus-clone-2739d",

  storageBucket: "desney-plus-clone-2739d.appspot.com",

  messagingSenderId: "741457440264",

  appId: "1:741457440264:web:57c275a0cc116cdb56ebbd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfigi);
const db = getFirestore(app);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const storage = getStorage();

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const signIn = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <LoginContanier>
          <Login onClick={signIn}>Login</Login>
        </LoginContanier>
      ) : (
        <>
          <NavMenu>
            <a>
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>

            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span>ORIGINAL</span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>

            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <AccountCircleIcon sx={{ width: 40, height: 40 }} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: black;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  overflow-x: hidden;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    padding: 0 10px;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.4px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;

        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0px;
        transfor-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        // 0 means small line width according to Content
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const LoginContanier = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
