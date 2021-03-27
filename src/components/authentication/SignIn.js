import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Store
import { signin } from "../../store/actions/authActions";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user, history));
  };

  return (
    <div className="container">
      <h3>Sign in</h3>
      <form onSubmit={handleSubmit}>
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

        <button
          type="button"
          className="btn btn-primary float-right"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Signin;
