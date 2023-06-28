import './Genre.css';

function Genre(props) {

const { genre } = props;

  return (
    <>
    <div className='genre'>
        <p className='genre__dance'>{ genre }</p>
    </div>
    </>
  );
}

export default Genre;