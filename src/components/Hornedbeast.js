import Data from '../data.json';

function Hornedbeast() {
  return(
    <div>
      <h2>{Data[0].title}</h2>
      <img src={Data[0].image_url} alt={Data[0].keyword} />
      <p>{Data[0].description}</p>
    </div>
  );
}
export default Hornedbeast;
