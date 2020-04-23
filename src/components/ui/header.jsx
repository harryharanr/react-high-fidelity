import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";

import logo from "../../assets/logo.svg";

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.Toolbar,
    marginBottom: "7em",
  },
  logoHeight: {
    height: "7em",
  },
}));

const Header = (props) => {
  const { toolbarMargin, logoHeight } = useStyles();
  console.log(useStyles());
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={logoHeight} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
