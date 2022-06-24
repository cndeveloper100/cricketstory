import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import { useStyles } from "./utols";

const Header = () => {
  const classes = useStyles();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  const dispatch = useDispatch();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(6,234,138,0.9868965148925781) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography className={classes.font} variant="h4">Cricplay Info</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} >
            <Tabs
              value={value}
              onChange={(e, val) => setValue(val)}
              textColor="inherit"
            >
              <Tab className={classes.font} LinkComponent={Link} to="/myblogs" label="My Blogs" />

              <Tab className={classes.font} LinkComponent={Link} to="/blogs" label="All Blogs" />
              <Tab className={classes.font} LinkComponent={Link} to="/blogs/add" label="Add Blog" />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft={"auto"} >
          {!isLoggedIn && (
            <>
              <Button
                LinkComponent={Link}
                to="/auth"
                color="warning"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                color="warning"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
              >
                Signup
              </Button>{" "}
            </>
          )}
          {isLoggedIn && (
            <Button
              onClick={() => dispatch(authActions.logout())}
              LinkComponent={Link}
              to="/auth"
              color="warning"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
