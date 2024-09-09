import { Bracket, RoundProps } from "react-brackets";

const TournamentBracket = () => {
  const rounds = [
    {
      title: "Round one",
      seeds: [
        {
          id: 1,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 2,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
        {
          id: 3,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team B" }],
        },
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: "Team C" }, { name: "Team D" }],
        },
      ],
    },
    {
      title: "Round Two",
      seeds: [
        {
          id: 5,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
        {
          id: 6,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
    {
      title: "Final",
      seeds: [
        {
          id: 7,
          date: new Date().toDateString(),
          teams: [{ name: "Team A" }, { name: "Team C" }],
        },
      ],
    },
  ];

  return <Bracket rounds={rounds} />;
};

export default TournamentBracket;
