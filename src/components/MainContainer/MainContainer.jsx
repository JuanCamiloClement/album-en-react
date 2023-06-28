import Image from './Image/Image';
import Artist from './Artist/Artist';
import Album from './Album/Album';
import Genre from './Genre/Genre';
import Like from './Like/Like';
import './MainContainer.css';

function MainContainer() {

  return (
    <>
    <main className='container'>
      <section className='section-1'>
        <Image
          image = { <img src="./src/assets/photo_thenights.png" alt="" /> }
          />
      </section>
      <section className='section-2'>
        <Artist
          name = 'The Nights'
          artist = 'Avicii'
          />
        <Album
          album = 'The Days/Nights'
          year = '(2014)'
          />
        <div className='genre_like'>
          <Genre
            genre = 'dance'
            />
          <Like />
        </div>
      </section>
    </main>
    </>
  );
}

export default MainContainer;