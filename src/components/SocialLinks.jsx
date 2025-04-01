import "../index.css";

const SocialLinks = () => {
  const socials = [
    { name: "Instagram", url: "https://www.instagram.com/orealyoshi" },
    { name: "Spotify", url: "https://open.spotify.com/intl-pt/artist/40OLhr6NNkltjCT9DXzo1C?si=7z5GxPmXRO2wAuP5BefzuQ" },
    { name: "YouTube", url: "https://www.youtube.com/@orealyoshi" },
  ];

  return (
    <div className="social-links">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-button"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;