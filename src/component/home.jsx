import React, { useState } from "react";

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`home ${isDarkMode ? "dark" : "light"}`}>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Mode clair" : "Mode sombre"}
      </button>
      {/* Contenu de la page d'accueil */}
      <h1 className="text-3xl font-bold">Bienvenue sur mon site !</h1>
      <p className="text-lg">Découvrez nos produits et services.</p>
      {/* Autres éléments de votre page d'accueil */}
    </div>
  );
}

export default Home;
