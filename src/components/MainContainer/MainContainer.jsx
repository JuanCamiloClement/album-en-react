import Image from './Image/Image';
import Artist from './Artist/Artist';
import Album from './Album/Album';
import Genre from './Genre/Genre';
import Like from './Like/Like';
import './MainContainer.css';

function MainContainer() {

  const songs = [
    {
      id: 1,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      year: 1982,
      like: false,
      genre: "Pop",
      cover_url: "./assets/thriller.png"
    },
    {
      id: 2,
      name: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      year: 1987,
      like: false,
      genre: "Rock",
      cover_url: "./assets/appetite_destruction.png"
    },
    {
      id: 3,
      name: "Like a Prayer",
      artist: "Madonna",
      album: "Like a Prayer",
      year: 1989,
      like: false,
      genre: "Pop",
      cover_url: "./assets/like_prayer.png"
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
      year: 1991,
      like: false,
      genre: "Grunge",
      cover_url: "./assets/nevermind.png"
    },
    {
      id: 5,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
      year: 1995,
      like: false,
      genre: "Britpop",
      cover_url: "./assets/whats_story.png"
    },
    {
      id: 6,
      name: "Smooth",
      artist: "Santana ft. Rob Thomas",
      album: "Supernatural",
      year: 1999,
      like: false,
      genre: "Rock",
      cover_url: "./assets/supernatural.png"
    },
    {
      id: 7,
      name: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      album: "Dangerously in Love",
      year: 2003,
      like: false,
      genre: "R&B",
      cover_url: "./assets/dangerously_love.png"
    },
    {
      id: 8,
      name: "Hey There Delilah",
      artist: "Plain White T's",
      album: "All That We Needed",
      year: 2005,
      like: false,
      genre: "Pop Rock",
      cover_url: "./assets/all_we_needed.png"
    },
    {
      id: 9,
      name: "Umbrella",
      artist: "Rihanna ft. Jay-Z",
      album: "Good Girl Gone Bad",
      year: 2007,
      like: false,
      genre: "R&B",
      cover_url: "./assets/good_girl_gone_bad.png"
    },
    {
      id: 10,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
      like: false,
      genre: "Soul",
      cover_url: "./assets/21.png"
    }
  ];

  return (
    <>
    {
    songs.map((item) => {
      <main className='container'>
        <section className='section-1'>
          <Image
            image = { <img src={ item.cover_url } alt="" /> }
            />
        </section>
        <section className='section-2'>
          <Artist
            name = { item.name }
            artist = { item. artist }
            />
          <Album
            album = { item.album }
            year = { item.year }
            />
          <div className='genre_like'>
            <Genre
              genre = { item.genre }
              />
            <Like 
              like = { item.like }/>
          </div>
        </section>
      </main>
    })
  }
    </>
  );
}

export default MainContainer;
