import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function Icon({ icon, tooltip, callback, ...other }) {
  return (
    <IconButton onClick={callback} sx={{ padding: "4px 4px" }} {...other}>
      {tooltip ? <Tooltip title={tooltip}>{icon}</Tooltip> : icon}
    </IconButton>
  );
}
