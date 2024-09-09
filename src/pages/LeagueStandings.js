import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#C8102E",
    color: theme.palette.common.white,
    fontSize: 12,
    padding: 4,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    padding: 2,
    paddingLeft: 4,
    paddingRight: 4,
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

export default function LeagueStandings({ season, standingsData }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: 10 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Takım</StyledTableCell>
            <StyledTableCell align="center">O</StyledTableCell>
            <StyledTableCell align="center">G</StyledTableCell>
            <StyledTableCell align="center">B</StyledTableCell>
            <StyledTableCell align="center">M</StyledTableCell>
            <StyledTableCell align="center">A</StyledTableCell>
            <StyledTableCell align="center">Y</StyledTableCell>
            <StyledTableCell align="center">Av</StyledTableCell>
            <StyledTableCell align="center">P</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {standingsData.map((row) => (
            <StyledTableRow
              key={row.teamId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell align="left" component="th" scope="row">
                <Grid container>
                  <Grid alignContent={"center"}>
                    <img
                      src={"/fc25/img/" + season + "/" + row.teamId + ".png"}
                      width={24}
                      height={24}
                      style={{ marginRight: 10, verticalAlign: "middle" }}
                    />
                  </Grid>
                  <Grid>
                    <b>{row.teamName}</b> <br />
                    <span style={{ fontStyle: "italic", textDecoration: "underline" }}>
                      {row.player}
                    </span>
                  </Grid>
                </Grid>
              </StyledTableCell>
              <StyledTableCell align="center">{row.o}</StyledTableCell>
              <StyledTableCell align="center">{row.g}</StyledTableCell>
              <StyledTableCell align="center">{row.b}</StyledTableCell>
              <StyledTableCell align="center">{row.m}</StyledTableCell>
              <StyledTableCell align="center">{row.a}</StyledTableCell>
              <StyledTableCell align="center">{row.y}</StyledTableCell>
              <StyledTableCell align="center">{row.av}</StyledTableCell>
              <StyledTableCell align="center">{row.p}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
