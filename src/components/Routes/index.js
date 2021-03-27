import { Route, Switch } from "react-router";
// Components
import Map from "../Map";
import Signup from "../authentication/SignUp";
import Signin from "../authentication/SignIn";

const Routes = () => {
  const Tokyo = {
    lat: 35.6684415,
    lng: 139.6007848,
  };
  return (
    <Switch>
      <Route>
        <Map isMarkerShown lat={Tokyo.lat} lng={Tokyo.lng} />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
    </Switch>
  );
};

export default Routes;
