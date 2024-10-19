import React from "react";
import SolutionPage from "../Resusables/SolutionPage";

const Commercial = () => {
  const content = {
    p1: "Reduce your business’s exposure to rapidly-rising electricity tariffs by switching to a commercial solar system.Save up to 100% on Your Electricity Bills Through Zero Carbon’s tailored Commercial Solar Systems.",
    p2: "Most businesses operate during standard daylight hours, making a commercial solar system the ideal energy solution. With power prices in Pakistan surging due to global energy trends and local currency devaluation, switching to solar offers essential protection against rising electricity tariffs.",
    p3: "As the leading provider of commercial solar systems in Pakistan, we bring unmatched expertise to help businesses reduce operational costs through tailored solar solutions. If you’re aiming to lower expenses with sustainable energy strategies, we’re here to make it happen. Schedule your free survey today and start cutting down your energy bills! .Our customized solar systems are perfect for educational institutions, office buildings, and any facility that operates during the day. Combined with a Net Metered System, surplus energy generated on off-days can be sold back to the grid or offset against weekday consumption, maximizing savings and efficiency.",
  };
  return (
    <div>
      <SolutionPage name={"Commercial "} content={content} />
    </div>
  );
};

export default Commercial;
