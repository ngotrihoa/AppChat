import React, { memo } from "react";
import PropTypes from "prop-types";

import { Backdrop, CircularProgress, makeStyles } from "@material-ui/core";

const Processing = ({ isShow }) => {
  const classes = useStyles();
  return (
    <Backdrop open={isShow} className={classes.backdrop}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 9999,
    color: "#fff",
    height: "100vh",
  },
}));

Processing.propTypes = { isShow: PropTypes.bool };
Processing.defaultProps = { isShow: false };

export default memo(Processing);
