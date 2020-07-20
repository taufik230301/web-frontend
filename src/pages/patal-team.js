import React from "react";
import SEO from "~/src/components/atoms/SEO/SEO";
import Navbar from "~/src/components/atoms/Navbar/Navbar";
import Footer from "~/src/components/atoms/Footer/Footer";

import s from "~/assets/styles/teams/index.module.scss";

import MemberCard from "~/src/components/atoms/MemberCard/MemberCard.js";

import TeamData from "~/assets/data/teams.json";

const PatalTeam = () => {
  return (
    <div>
      <SEO title="Patal Team" />
      <Navbar />
      <div className={`${s["mainBg"]} ${s["p8"]}`}>
        <div className={`${s["grid"]} ${s["gridTeams"]}`}>
          {TeamData.map((team, i) => (
            <div key={i} className={`${s["centerMargin"]}`}>
              <MemberCard
                name={team.name}
                job={team.job}
                imageUrl={team.imageUrl}
                links={team.links || {}}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatalTeam;
