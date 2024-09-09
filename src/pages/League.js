import React from "react";
import LeagueFixture from "./LeagueFixture";
import LeagueStandings from "./LeagueStandings";

export default function League({ season, standingsData, initialWeek, fixtureData }) {
  return (
    <div>
      <LeagueStandings season={season} standingsData={standingsData} />
      <LeagueFixture
        season={season}
        initialWeek={initialWeek}
        fixtureData={fixtureData}
      />
    </div>
  );
}
