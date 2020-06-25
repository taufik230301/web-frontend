import React from "react";

import Flexbox from "~/assets/styles/flexbox.module.css";
import BorderStyles from "~/assets/styles/border.module.css";
import FontStyles from "~/assets/styles/font.module.css";
import CardStyles from "~/src/components/card/card2.module.css";

// https://github.com/graysonhicks/gatsby-plugin-remote-images
const Card = ({ name, job, imageUrl, links }) => {
  const renderLinks = () =>
    Object.keys(links).length > 0 ? (
      Object.keys(links).map((key) => (
        <a href={links[key]} target="_blank" rel="noreferrer">
          <img alt={key} src={require(`~/static/icons/${key}.svg`)} />
        </a>
      ))
    ) : (
      <div style={{ opacity: 0 }}>-</div>
    );

  return (
    <div
      className={`${Flexbox["flex"]} ${Flexbox["flexCol"]} ${Flexbox["justifyCenter"]} ${Flexbox["itemsCenter"]} ${CardStyles["card"]}`}>
      <img
        alt={name}
        width="216"
        height="216"
        className={`${BorderStyles["roundedFull"]}`}
        src={imageUrl}
      />
      <h3 className={`${FontStyles["fontBold"]} ${CardStyles["my2"]}`}>
        {name}
      </h3>
      <p className={`${CardStyles["subtitle"]}`}>{job}</p>
      <div className={`${CardStyles["portfolio"]}`}>
        <div className={`${CardStyles["divider"]}`}></div>
        <div className={`${CardStyles["portfolioLinks"]}`}>{renderLinks()}</div>
      </div>
    </div>
  );
};

export default Card;
