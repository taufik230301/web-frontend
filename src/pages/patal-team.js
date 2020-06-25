import React from "react";
import Header from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import Partnership from "../components/partnership/partnership";
import Footer from "../components/footer/footer";

import GridStyles from "~/assets/styles/grid.module.css";
import TeamStyles from "~/assets/styles/teams/index.module.css";
import PaddingStyles from "~/assets/styles/padding.module.css";

import Card from "~/src/components/card/card2.js";

import TeamData from "~/assets/data/teams.json";

class PatalTeam extends React.PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className={`${TeamStyles["mainBg"]} ${PaddingStyles["p8"]}`}>
          <div className={`${TeamStyles["titleContainer"]}`}>
            <h2 className={`${TeamStyles["subtitle"]}`}>Patal</h2>
            <h1 className={`${TeamStyles["title"]}`}>People</h1>
          </div>
          <div className={`${GridStyles["grid"]} ${TeamStyles["gridTeams"]}`}>
            {TeamData.map((team, i) => (
              <div key={i} className={`${TeamStyles["centerMargin"]}`}>
                <Card
                  name={team.name}
                  job={team.job}
                  imageUrl={team.imageUrl}
                  links={team.links || {}}
                />
              </div>
            ))}
          </div>
        </div>

        <Partnership />
        <Footer />
      </div>
    );
  }
}

export default PatalTeam;
