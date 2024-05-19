import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

export default function TabsRender({
  children,
  displayBox,
  handleChange,
  styles,
  tabsItems,
  value,
  orientation,
  width,
  ...other
}) {
  return (
    <Box {...other} display={displayBox} width={width}>
      <Tabs
        TabIndicatorProps={{
          children: <span className="MuiTabs-indicatorSpan" />,
        }}
        indicatorColor="secondary"
        onChange={handleChange}
        orientation={orientation}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: "transparent",
            borderRadius: "10px",
            display: "flex",
            height: "4px",
            justifyContent: "center",
          },
          "& .MuiTabs-indicatorSpan": {
            backgroundColor: "#00A091",
            borderRadius: "10px",
            maxWidth: 40,
            width: "100%",
          },
          ...styles,
        }}
        textColor="inherit"
        value={value}
      >
        {tabsItems?.map((item) => (
          <Tab
            aria-controls={item.ariaControls}
            id={item.id}
            key={`tabs_${item.id}`}
            label={item.label}
            sx={{
              color: "#101828",
              fontSize: "16px",
              fontWeight: "600",
              textTransform: "initial",
            }}
          />
        ))}
      </Tabs>

      {children}
    </Box>
  );
}
