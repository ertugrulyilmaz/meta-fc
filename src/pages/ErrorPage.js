import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export default function ErrorPage({ error }) {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", marginTop: "50px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80, marginBottom: 2 }} />
        <Typography variant="h4" color="error" gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {error.message || "An unexpected error occurred."}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </Box>
    </Container>
  );
}
