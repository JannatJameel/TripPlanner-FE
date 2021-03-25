import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { MAP_API_KEY } from "../../keys/index";
import { useState } from "react";
import activities from "../../activities";
//Components
import Loading from "../Loading";
import Markers from "./Markers";
//Styling
import { StyledMapContainer, StyledMapElement } from "./styles";

const Map = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: (
      <StyledMapContainer>
        <Loading />
      </StyledMapContainer>
    ),
    containerElement: <StyledMapContainer />,
    mapElement: <StyledMapElement />,
  }),
  withScriptjs,
  withGoogleMap
)(({ isMarkerShown, lng, lat }) => {
  let initialState = {};
  for (const activity of activities) initialState[activity.id] = false;
  const [open, setOpen] = useState(initialState);
  const handleOpen = (id) => {
    setOpen({ ...initialState, [id]: !open[id] });
  };
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat, lng }}>
      {isMarkerShown && <Markers open={open} handleOpen={handleOpen} />}
    </GoogleMap>
  );
});

export default Map;
