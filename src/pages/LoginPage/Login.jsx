import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleCaptchaValidate = (e) => {
    const userValue = e.target.value;
    if (validateCaptcha(userValue) === true) {
      setDisable(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire("Successfully Login");
      })
      .then((err) => {});
  };
  return (
    <div className="hero min-h-screen bg-gray-100 bg-opacity-70">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* capcha  */}

            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleCaptchaValidate}
                type="text"
                name="captcha"
                placeholder="Enter the right Captcha code"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <button
                disabled={disable}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
            </div>
          </form>
        </div>
        <p>
          <small>
            New here?<Link to="/signup">Create an Account!</Link>
          </small>
        </p>
      </div>
    </div>
  );
};

export default Login;
