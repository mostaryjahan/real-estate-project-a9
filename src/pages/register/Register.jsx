import { Link } from "react-router-dom";
import Nav from "../shared/Nav";
import { Helmet } from "react-helmet-async";

const Register = () => {
  return (
    <div>
      <Helmet>
        <title>Luxury Retreats | Register</title>
      </Helmet>
      <Nav></Nav>
      <div className="hero   bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register</h1>
          </div>
          <div className="card shrink-0 max-w-sm  shadow-2xl bg-base-100 w-[400px]">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                  required
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
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-gradient-to-r from-cyan-400 to-blue-500 text-white">Register Now</button>
              </div>
            </form>
            <p className="text-center  p-4">
              Already have an account?{" "}
              <Link to="/login">
                {" "}
                <span className="text-blue-600">Login now</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
