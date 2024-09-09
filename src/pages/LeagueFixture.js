import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#C8102E",
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: 4,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function LeagueFixture({ season, initialWeek, fixtureData }) {
  const totalWeek = Object.keys(fixtureData).length;
  const [week, setWeek] = React.useState(initialWeek);
  const [rows, setRows] = React.useState([]);

  const handleWeekChange = (event) => {
    setWeek(event.target.value);
  };

  React.useEffect(() => {
    setRows(fixtureData[week]);
  }, [fixtureData, week, setRows]);

  return (
    <div style={{ marginTop: 5 }}>
      <Grid container size={12} style={{ marginBottom: 5 }}>
        <Grid size={4} alignContent={"center"}>
          <Box display="flex" justifyContent="flex-start">
            <IconButton
              disabled={week === 1}
              onClick={() => {
                if (week > 1) {
                  setWeek(week - 1);
                }
              }}
            >
              <KeyboardArrowLeftIcon
                disabled={week === 1}
                style={{ color: week === 1 ? "rgba(0, 0, 0, 0.26)" : "#C8102E" }}
              />
            </IconButton>
          </Box>
        </Grid>
        <Grid container size={4} direction={"row"}>
          <Grid size={6} justifyContent={"center"} alignContent={"center"}>
            Fikstür
          </Grid>
          <Grid size={6}>
            <Select
              value={week}
              defaultValue={1}
              label="Fikstür"
              size="small"
              onChange={handleWeekChange}
            >
              {[...Array(totalWeek).keys()].map((i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}. Hafta
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid size={4} alignContent={"center"}>
          <Box display="flex" justifyContent="flex-end">
            <IconButton
              disabled={week === totalWeek}
              onClick={() => {
                if (week < totalWeek) {
                  setWeek(week + 1);
                }
              }}
            >
              <KeyboardArrowRightIcon
                disabled={week === totalWeek}
                style={{
                  color: week === totalWeek ? "rgba(0, 0, 0, 0.26)" : "#C8102E",
                }}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left" width={"40%"}>
                Home
              </StyledTableCell>
              <StyledTableCell align="center" width={"20%"}>
                Score
              </StyledTableCell>
              <StyledTableCell align="right" width={"40%"}>
                Away
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <StyledTableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="left">
                  <img
                    src={"/fc25/img/" + season + "/" + row.homeTeamId + ".png"}
                    width={24}
                    height={24}
                    style={{ marginRight: 10, verticalAlign: "middle" }}
                  />
                  <b>{row.homeTeam}</b>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <span style={{ fontSize: 16 }}>
                    {row.homeScore === -1 ? "" : row.homeScore} -{" "}
                    {row.awayScore === -1 ? "" : row.awayScore}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>{row.awayTeam}</b>
                  <img
                    src={"/fc25/img/" + season + "/" + row.awayTeamId + ".png"}
                    width={24}
                    height={24}
                    style={{ marginLeft: 10, verticalAlign: "middle" }}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
