import { useState, useEffect } from 'react';
import { FaSpotify, FaHeart, FaRegHeart, FaPlay, FaPause } from 'react-icons/fa';
import "../index.css";

const MusicList = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const hits = [
    {
      id: 1,
      title: "BM/Fumaçada",
      artist: "Real Yoshi",
      duration: "2:45",
      embedUrl: "https://open.spotify.com/embed/track/1E1pEEjfHWiMBSuZh0hJaj?utm_source=generator"
    },
    {
      id: 2, 
      title: "Peita do Santa",
      artist: "Real Yoshi, Tirado",
      duration: "3:12",
      embedUrl: "https://open.spotify.com/embed/track/62V62Tundi7h4XJTRg1ZxP?utm_source=generator"
    },
    {
      id: 3,
      title: "Pingente 777",
      artist: "Real Yoshi",
      duration: "2:30",
      embedUrl: "https://open.spotify.com/embed/track/0NcpxNye3KQ5fqTYnY9rZm?utm_source=generator"
    },
    {
      id: 4,
      title: "Pixadão (Ritmo de Tralha)",
      artist: "Real Yoshi",
      duration: "2:08",
      embedUrl: "https://open.spotify.com/embed/track/2eia5MHtP463NBfPpreeLT?utm_source=generator"
    }
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const iframe = document.querySelector('.spotify-embed');
    if (iframe) iframe.src = `${hits[currentTrack].embedUrl}&autoplay=1`;
    setIsPlaying(true);
  }, [currentTrack]);

  return (
    <div className="trap-player">
      {/* Cabeçalho Estilizado */}
      <header className="trap-header">
        <h1 className="trap-title">
          <span className="neon-purple">HIT</span> 
          <span className="neon-pink"> TRAP</span> 
          <span className="neon-blue"> SELECTION</span>
        </h1>
        <div className="artist-badge">
          <span className="pulse-effect">⚡</span> REAL YOSHI <span className="pulse-effect">⚡</span>
        </div>
      </header>

      {/* Lista de Músicas com Layout Otimizado */}
      <div className="track-list-container">
        {hits.map((track, index) => (
          <div 
            key={track.id}
            className={`track-card ${currentTrack === index ? 'active' : ''}`}
            onClick={() => setCurrentTrack(index)}
          >
            {/* Número da Faixa */}
            <div className="track-number">{index + 1}</div>
            
            {/* Informações da Música */}
            <div className="track-info">
              <h3 className="track-title">{track.title}</h3>
              <p className="track-artist">{track.artist}</p>
            </div>
            
            {/* Duração */}
            <div className="track-duration">{track.duration}</div>
            
            {/* Ações (Favorito + Play/Pause) */}
            <div className="track-actions">
              <button 
                className={`fav-button ${favorites.includes(track.id) ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(track.id);
                }}
                aria-label={favorites.includes(track.id) ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              >
                {favorites.includes(track.id) ? (
                  <FaHeart className="icon-fav" />
                ) : (
                  <FaRegHeart className="icon-fav" />
                )}
              </button>
              
              {currentTrack === index && (
                <div className="play-status" aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
                  {isPlaying ? (
                    <FaPause className="icon-play" />
                  ) : (
                    <FaPlay className="icon-play" />
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Player Spotify Integrado */}
      <div className="spotify-premium">
        <iframe
          title={`Player: ${hits[currentTrack].title}`}
          src={`${hits[currentTrack].embedUrl}&autoplay=1`}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="spotify-embed"
        />
        
        {/* Botão de Ação */}
        <div className="spotify-actions">
          <a 
            href={`https://open.spotify.com/track/${hits[currentTrack].embedUrl.split('/track/')[1].split('?')[0]}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="spotify-link"
          >
            <FaSpotify className="icon-spotify" /> SALVAR NO SPOTIFY
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicList;