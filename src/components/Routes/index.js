import { Route, Switch } from "react-router";
// Components
import Map from "../Map";

const Routes = () => {
  return (
    <Switch>
      <Route>
        <Map isMarkerShown={false} />
      </Route>
    </Switch>
  );
};

export default Routes;
