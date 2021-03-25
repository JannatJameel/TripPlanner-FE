import { Route, Switch } from "react-router";
// Components
import Map from "../Map";

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
    </Switch>
  );
};

export default Routes;
