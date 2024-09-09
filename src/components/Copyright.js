import { Box, Link, Typography } from "@mui/material";
import React from "react";

export default function Copyright() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        position: "fixed",
        width: "100%",
        bottom: 0,
        left: 0,
        textAlign: "center",
      }}
    >
      <Typography
        variant="body2"
        align="center"
        sx={{
          color: "text.secondary",
        }}
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Barnes
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
