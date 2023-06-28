import './App.css';
import MainContainer from './components/MainContainer/MainContainer.jsx'

function App() {

  const songs = [
    {
      id: 1,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      year: 1982,
      like: false,
      genre: "Pop",
      cover_url: "./src/assets/thriller.png"
    },
    {
      id: 2,
      name: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      year: 1987,
      like: false,
      genre: "Rock",
      cover_url: "./src/assets/appettite_destruction.png"
    },
    {
      id: 3,
      name: "Like a Prayer",
      artist: "Madonna",
      album: "Like a Prayer",
      year: 1989,
      like: false,
      genre: "Pop",
      cover_url: "./src/assets/like_prayer.png"
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
      year: 1991,
      like: false,
      genre: "Grunge",
      cover_url: "./src/assets/nevermind.png"
    },
    {
      id: 5,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
      year: 1995,
      like: false,
      genre: "Britpop",
      cover_url: "./src/assets/whats_story.png"
    },
    {
      id: 6,
      name: "Smooth",
      artist: "Santana ft. Rob Thomas",
      album: "Supernatural",
      year: 1999,
      like: false,
      genre: "Rock",
      cover_url: "./src/assets/supernatural.png"
    },
    {
      id: 7,
      name: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      album: "Dangerously in Love",
      year: 2003,
      like: false,
      genre: "R&B",
      cover_url: "./src/assets/dangerously_love.png"
    },
    {
      id: 8,
      name: "Hey There Delilah",
      artist: "Plain White T's",
      album: "All That We Needed",
      year: 2005,
      like: false,
      genre: "Pop Rock",
      cover_url: "./src/assets/all_we_needed.png"
    },
    {
      id: 9,
      name: "Umbrella",
      artist: "Rihanna ft. Jay-Z",
      album: "Good Girl Gone Bad",
      year: 2007,
      like: false,
      genre: "R&B",
      cover_url: "./src/assets/good_girl_gone_bad.png"
    },
    {
      id: 10,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
      like: false,
      genre: "Soul",
      cover_url: "./src/assets/21.png"
    }
  ];

  return (
    <div className="all">
      {
        songs.map((item) => {
          return (
            <MainContainer
              key = { item.id }
              image = { <img src={ item.cover_url } alt="" /> }
              name = { item.name }
              artist = { item. artist }
              album = { item.album }
              year = { item.year }
              genre = { item.genre }
              like = { item.like }
            />
          );
        })
      }
    </div>
  );
}

export default App;
