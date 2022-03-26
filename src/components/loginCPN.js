
import React, { useEffect} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle } from '../firebaseConfig';
import { GoogleOutlined } from '@ant-design/icons';

import "../public/css/login.css";
function Login() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
        let email = user.email;
        let checkTypeEmail = email.slice(-11);
        if(checkTypeEmail === "@fpt.edu.vn") {
            // window.open("https://ap.poly.edu.vn/sinh-vien");
        }
        else {
            alert("Tài khoản không đúng định dạng !")
        }
    }
  }, [user, loading]);
  return (
    <div className="login__container">
        <div className="form">
            <img className="logo" src ="https://ap.poly.edu.vn/images/logo.png" alt="logo"/>
            <button className="login__btn login__google" onClick={signInWithGoogle}>
                <GoogleOutlined /> Login with Google
            </button>
        </div>
    </div>
  );
}
export default Login;