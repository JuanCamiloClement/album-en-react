import Image from './Image/Image';
import Artist from './Artist/Artist';
import Album from './Album/Album';
import Genre from './Genre/Genre';
import Like from './Like/Like';
import './MainContainer.css';

function MainContainer( props ) {

  const { image, name, artist, album, year, genre, like } = props;

  return (
    <>
      <main className='container'>
        <section className='section-1'>
          <Image 
            image = { image }
            />
        </section>
        <section className='section-2'>
          <Artist 
            name = { name }
            artist = { artist }
            />
          <Album
            album = { album }
            year = { year }/>
          <div className='genre_like'>
            <Genre
              genre = { genre }
              />
            <Like 
              like = { like }
              />
          </div>
        </section>
      </main>
    </>
  );
}

export default MainContainer;
