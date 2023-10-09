import { FcGoogle } from "react-icons/fc"
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-3/4">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-300">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-slate-500">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
              </div>
            <div className="w-full bg-slate-600 h-[2px] rounded-lg"></div>
            {/* ------------ google button ------------- */}
            <button className="btn btn-outline btn-primary"><FcGoogle style={{ fontSize: "1.3rem" }}/> Log in with Google</button>
            </form>
            <p className="mx-auto mt-[-10px] mb-10 m-0 text-slate-600">Do not have an accoutn? <Link to="/register" className="font-bold">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
