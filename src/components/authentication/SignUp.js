import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Store
import { signup } from "../../store/actions/authActions";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
  };

  return (
    <div className="container">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <input
            class="form-control"
            placeholder="First Name"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Last Name"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary float-right"
          type="submit"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;
