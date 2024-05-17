import { IconButton, Tooltip } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function Icon({ icon, tooltip, callback, ...other }) {
  return (
    <IconButton onClick={callback} sx={{ padding: "4px 4px" }} {...other}>
      {tooltip ? <Tooltip title={tooltip}>{icon}</Tooltip> : icon}
    </IconButton>
  );
}

Icon.propTypes = {
  callback: PropTypes.func,
  icon: PropTypes.element.isRequired,
  tooltip: PropTypes.string,
};

Icon.defaultProps = {
  callback: () => "",
  tooltip: "",
};
