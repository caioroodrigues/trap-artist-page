import "../index.css";

const SocialLinks = () => {
  const socials = [
    { name: "Instagram", url: "#" },
    { name: "Spotify", url: "#" },
    { name: "YouTube", url: "#" },
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