import ArtistHeader from "./components/ArtistHeader/ArtistHeader";
import MusicList from './components/MusicList';
import SocialLinks from './components/SocialLinks';
import './App.css';

function App() {
  return (
    <div className="app">
      <ArtistHeader />
      <MusicList />
      <SocialLinks />
    </div>
  );
}

export default App;