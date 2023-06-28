import './Artist.css';

function Artist(props) {

const { name, artist } = props;

  return (
    <>
    <div className='artist'>
        <h1 className='header'>{ name }</h1>
        <p>{ artist }</p>
    </div>
    </>
  );
}

export default Artist;