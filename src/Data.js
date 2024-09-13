import AccountTreeIcon from "@mui/icons-material/AccountTree";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PeopleIcon from "@mui/icons-material/People";

export const TEST_DATA_URL =
  "https://docs.google.com/spreadsheets/d/1jaNEXq5PzByQoS0era8LCARBk_t_XtwO/gviz/tq";
export const DATA_URLS = {
  "season-1":
    "https://docs.google.com/spreadsheets/d/1jaNEXq5PzByQoS0era8LCARBk_t_XtwO/gviz/tq",
};

export const TEAMS = {
  "season-3": {},
  "season-2": {},
  "season-1": {
    "Ertu Y.": {
      id: 1,
      player: "Ertu Y.",
      teamName: "France",
      partnerId: 2,
    },
    "Hüseyin C.": {
      id: 2,
      player: "Hüseyin C.",
      teamName: "M. City",
      partnerId: 1,
    },
    "Jonnalagadda S.": {
      id: 3,
      player: "Jonnalagadda S.",
      teamName: "France",
      partnerId: 4,
    },
    "Gurasis S.": {
      id: 4,
      player: "Gurasis S.",
      teamName: "France",
      partnerId: 3,
    },
    "Zheyi R.": {
      id: 5,
      player: "Zheyi R.",
      teamName: "Totthenham F.C.",
      partnerId: 6,
    },
    "Michael Y.": {
      id: 6,
      player: "Michael Y.",
      teamName: "M. United",
      partnerId: 5,
    },
    "Luyanda A.": {
      id: 7,
      player: "Luyanda A.",
      teamName: "France",
      partnerId: 8,
    },
    "Alibek T.": {
      id: 8,
      player: "Alibek T.",
      teamName: "Real Madrid",
      partnerId: 7,
    },
    "Vishal V.": {
      id: 9,
      player: "Vishal V.",
      teamName: "Real Madrid",
      partnerId: 10,
    },
    "Hasmukh K.": {
      id: 10,
      player: "Hasmukh K.",
      teamName: "Real Madrid",
      partnerId: 9,
    },
  },
};

export const MENU_ITEMS = [
  {
    text: "League Standings",
    section: "league-standings",
    icon: <FormatListNumberedIcon />,
  },
  {
    text: "Team League Standings",
    section: "team-league-standings",
    icon: <PeopleIcon />,
  },
  { text: "Playoffs", section: "playoffs", icon: <AccountTreeIcon /> },
];
