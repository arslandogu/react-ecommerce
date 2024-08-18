import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/homeSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.home.userInfo);
  const handleGoogleLogin = (event) => {
    event.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          addUser({
            _id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Log Out Successfully");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[80%] mx-auto grid grid-cols-2 py-20">
      <div className="flex gap-10 flex-col items-center justify-between">
        <div className="flex flex-row items-center gap-x-4">
          <div
            onClick={handleGoogleLogin}
            className="flex cursor-pointer w-full hover:bg-black hover:text-white duration-300 rounded-xl items-center gap-x-4 border-[0.2em] p-4 font-titleFont font-semibold"
          >
            <BsGoogle className="w-10 h-10" />
            <p>Sign in with Google</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-gray-900 w-[40%] h-[50px] duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border"
          >
            Sign Out
          </button>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <div
            onClick={handleGoogleLogin}
            className="flex cursor-pointer w-full hover:bg-black hover:text-white duration-300 rounded-xl items-center gap-x-4 border-[0.2em] p-4 font-titleFont font-semibold"
          >
            <BsGithub className="w-10 h-10" />
            <p>Sign in with GitHub</p>
          </div>
          <button
            onClick={handleSignOut}
            className="bg-gray-900 w-[40%] h-[50px] duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {userInfo ? (
          <div className="flex items-center justify-center gap-3 flex-col">
            <img
              className="rounded-full w-40 h-40"
              src={userInfo.image}
              alt="profileImg"
            />
            <p
              className={`font-titleFont text-[26px] font-semibold`}
            >
              {userInfo.name}
            </p>
          </div>
        ) : (
          <BsPersonCircle color="white" className="w-9 h-9" />
        )}
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Login;
