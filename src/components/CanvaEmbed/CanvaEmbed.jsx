import React from 'react';
import styles from './CanvaEmbed.module.css';

const CanvaEmbed = () => {
  return (
    <div className={styles.canvaContainer}>
      <iframe
        loading="lazy"
        className={styles.canvaIframe}
        src="https://www.canva.com/design/DAGjZJWHmiQ/zOF8nbdPf-w8h1xo8JmmcA/view?embed"
        allowFullScreen
        title="Canva Embed"
      />
    </div>
  );
};

export default CanvaEmbed;