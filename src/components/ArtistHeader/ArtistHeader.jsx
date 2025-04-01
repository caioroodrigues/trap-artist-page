import React from "react";
import backgroundImage from "../../assets/image.png";
import logoImage from "../../assets/logo.png";
import styles from "./ArtistHeader.module.css";

function ArtistHeader() {
  return (
    <header className={styles.artistHeader} aria-label="Capa do Artista REALYOSHI">
      {/* Container de fundo com overlay */}
      <div className={styles.backgroundContainer}>
        <img 
          src={backgroundImage} 
          alt="Fundo artístico" 
          className={styles.backgroundImage}
          loading="eager"
          decoding="async"
        />
        <div className={styles.colorOverlay} />
      </div>

      {/* Container principal da logo */}
      <div className={styles.contentWrapper}>
        <div className={styles.logoContainer}>
          <img
            src={logoImage}
            alt="REALYOSHI Logo"
            className={styles.logo}
            width="600"
            height="200"
          />
        </div>
      </div>
    </header>
  );
}

export default ArtistHeader;