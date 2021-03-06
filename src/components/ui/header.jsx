import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

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
    height: "8em",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  logoContainer: {
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
}));

const Header = (props) => {
  const {
    toolbarMargin,
    logoHeight,
    tabContainer,
    tab,
    button,
    logoContainer,
  } = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  const changePath = useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/services" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/revolution" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/about" && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === "/contact" && value !== 4) {
      setValue(4);
    }
  }, [value]);
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={logoContainer}
              onClick={() => setValue(0)}
            >
              <img alt="company logo" src={logo} className={logoHeight} />
            </Button>
            <Tabs
              value={value}
              onChange={handleChange}
              className={tabContainer}
              indicatorColor="primary"
            >
              <Tab className={tab} component={Link} to="/" label="Home" />
              <Tab
                className={tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={tab}
                component={Link}
                to="/revolution"
                label="The Revolution"
              />
              <Tab
                className={tab}
                component={Link}
                to="/about"
                label="About Us"
              />
              <Tab
                className={tab}
                component={Link}
                to="/contact"
                label="Contact Us"
              />
            </Tabs>
            <Button variant="contained" color="secondary" className={button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
