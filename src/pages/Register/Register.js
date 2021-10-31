import { Facebook, Google } from "@mui/icons-material";
import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
// import useFirebase from "../../hooks/useFirebase";
import "./Register.css";

const Register = () => {
  const {
    user,
    isLoading,
    error,
    setIsLoading,
    setUser,
    setError,
    handleGoogleSignIn,
  } = useAuth();
  console.log("loading stats:", isLoading + user);
  console.log(error);

  // redirecting user to initial route

  const location = useLocation();
  const history = useHistory();
  console.log(location);
  const redirect_uri = location.state?.from || "/";

  //handle Google Sign Firebase

  const GoogleSignInHandler = (e) => {
    e.preventDefault();
    handleGoogleSignIn()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_uri);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(setIsLoading(false));
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            style={{ fontWeight: 800 }}
                            id="exampleInputPassword"
                            placeholder="Password"
                          />
                        </div>
                        <div className="form-group">
                          <div className=" small">
                            <input type="checkbox" className="me-2" />
                            <label htmlFor="customCheck"> Remember Me</label>
                          </div>
                        </div>
                        <a
                          href="index.html"
                          className="btn btn-primary fs-6  btn-user btn-block"
                        >
                          Login
                        </a>
                        <hr />
                        <button
                          onClick={GoogleSignInHandler}
                          className="btn btn-google fs-6 justif btn-user btn-block align-items-center"
                        >
                          <Google /> <span>Login with Google</span>
                        </button>
                        <a
                          href="index.html"
                          className="btn btn-facebook fs-6 btn-user btn-block"
                        >
                          <Facebook />{" "}
                          <span style={{ lineHeight: "25px" }}>
                            Login with Facebook
                          </span>
                        </a>
                      </form>

                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">
                          Create an Account!
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
