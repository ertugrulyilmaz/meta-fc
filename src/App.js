import React, { useState } from "react";
import Container from "@mui/material/Container";
import "./App.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import TeamStandings from "./pages/TeamStandings";
import Playoffs from "./pages/Playoffs";
import {
  Box,
  CircularProgress,
  ListItemButton,
  ListItemIcon,
  Select,
} from "@mui/material";
import League from "./pages/League";
import useFetch from "react-fetch-hook";
import ErrorPage from "./pages/ErrorPage";
import { DATA_URLS, MENU_ITEMS, TEAMS, TEST_DATA_URL } from "./Data";

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("league-standings");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuItemClick = (section) => {
    setSelectedMenu(section);
    setDrawerOpen(false);
  };

  const IS_DEV = window.location.href.startsWith("http://127.0.0.1:3000");
  const [season, setSeason] = React.useState("season-2");
  const [dataUrl, setDataUrl] = React.useState(
    IS_DEV ? TEST_DATA_URL : DATA_URLS["season-2"]
  );
  const [initialWeek, setInitialWeek] = React.useState(1);

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
    setDataUrl(DATA_URLS[event.target.value]);
  };

  const safeParseInt = (v) => (v == null ? -1 : parseInt(v));
  const getTeamID = (v, season) => TEAMS[season][v].id;
  const getTeamName = (v, season) => TEAMS[season][v].teamName;
  const getPlayer = (v, season) => TEAMS[season][v].player;
  const getPartnerTeamID = (v, season) => TEAMS[season][v].partnerId;

  const { isLoading, error, data } = useFetch(dataUrl, {
    formatter: async (response) => {
      const content = await response.text();
      const json = JSON.parse(content.substring(47).slice(0, -2));
      return json.table.rows
        .filter((row) => row.c.length > 4)
        .map((row) => ({
          week: row.c[0].v,
          homeTeamId: getTeamID(row.c[1].v, season),
          homeTeam: getTeamName(row.c[1].v, season),
          homePlayer: getPlayer(row.c[1].v, season),
          awayTeamId: getTeamID(row.c[2].v, season),
          awayTeam: getTeamName(row.c[2].v, season),
          awayPlayer: getPlayer(row.c[2].v, season),
          homeScore: safeParseInt(row.c[3].v),
          awayScore: safeParseInt(row.c[4].v),
        }));
    },
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  const fixtureData = data.reduce((acc, curr) => {
    if (!acc.hasOwnProperty(curr.week)) {
      acc[curr.week] = [];
    }
    acc[curr.week].push(curr);
    return acc;
  }, {});

  const standingsData = Object.values(
    data.reduce((acc, curr) => {
      if (!acc.hasOwnProperty(curr.homeTeam)) {
        acc[curr.homeTeam] = {
          teamId: curr.homeTeamId,
          teamName: curr.homeTeam,
          player: curr.homePlayer,
          o: 0,
          g: 0,
          b: 0,
          m: 0,
          a: 0,
          y: 0,
          av: 0,
          p: 0,
        };
      }

      if (!acc.hasOwnProperty(curr.awayTeam)) {
        acc[curr.awayTeam] = {
          teamId: curr.awayTeamId,
          teamName: curr.awayTeam,
          player: curr.awayPlayer,
          o: 0,
          g: 0,
          b: 0,
          m: 0,
          a: 0,
          y: 0,
          av: 0,
          p: 0,
        };
      }

      if (curr.homeScore >= 0 && curr.awayScore >= 0) {
        if (curr.homeScore === curr.awayScore) {
          acc[curr.homeTeam].b++;
          acc[curr.awayTeam].b++;
          acc[curr.homeTeam].p++;
          acc[curr.awayTeam].p++;
        } else if (curr.homeScore >= curr.awayScore) {
          acc[curr.homeTeam].g++;
          acc[curr.awayTeam].m++;
          acc[curr.homeTeam].p += 3;
        } else {
          acc[curr.homeTeam].m++;
          acc[curr.awayTeam].g++;
          acc[curr.awayTeam].p += 3;
        }

        acc[curr.homeTeam].o++;
        acc[curr.awayTeam].o++;
        acc[curr.homeTeam].a += curr.homeScore;
        acc[curr.awayTeam].a += curr.awayScore;
        acc[curr.homeTeam].y += curr.awayScore;
        acc[curr.awayTeam].y += curr.homeScore;
        acc[curr.homeTeam].av = acc[curr.homeTeam].a - acc[curr.homeTeam].y;
        acc[curr.awayTeam].av = acc[curr.awayTeam].a - acc[curr.awayTeam].y;
      }
      return acc;
    }, {})
  ).sort((a, b) => {
    console.log(a);
    if (a.p > b.p) {
      return -1;
    } else if (a.p < b.p) {
      return 1;
    } else {
      if (a.av > b.av) {
        return -1;
      } else if (a.av < b.av) {
        return 1;
      } else {
        // TODO(ertu)
      }
      return 0;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "#C8102E" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src="/fc25/img/logo.png" width={48} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={1}>
            League
          </Typography>
          <Select
            value={season}
            defaultValue={season}
            label="Sezon"
            size="small"
            style={{ color: "white" }}
            onChange={handleSeasonChange}
          >
            <MenuItem value="season-3">Sezon 3</MenuItem>
            <MenuItem value="season-2">Sezon 2</MenuItem>
            <MenuItem value="season-1">Sezon 1</MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <div
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {MENU_ITEMS.map((item, index) => (
              <ListItemButton
                key={index}
                selected={item.section === selectedMenu}
                onClick={() => handleMenuItemClick(item.section)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>

      <Container style={{ marginTop: "0px", padding: 5, flexGrow: 0 }}>
        {selectedMenu === "league-standings" && (
          <League
            season={season}
            standingsData={standingsData}
            initialWeek={initialWeek}
            fixtureData={fixtureData}
          />
        )}
        {selectedMenu === "team-league-standings" && <TeamStandings />}
        {selectedMenu === "playoffs" && <Playoffs />}
      </Container>
    </div>
  );
}
