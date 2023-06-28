import './Album.css';

function Album(props) {

const { album, year } = props;

  return (
    <>
    <div className='album'>
        <p className='album__name'>{ album }</p>
        <p className='album__year'>{ year }</p>
    </div>
    </>
  );
}

export default Album;