import { Box, Typography } from "@mui/material";
import React from "react";

export default function TeamStandings() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
        Coming Soon
      </Typography>
      <Typography variant="body1" gutterBottom>
        We are working hard to bring you something amazing! Stay tuned for updates.
      </Typography>
    </Box>
  );
}
