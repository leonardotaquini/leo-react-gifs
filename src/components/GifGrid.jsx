import { useFetchGifs } from '../hooks/useFetchGifs';
import '../styles/GifGrid.css'
import { GifItem } from "./GifItem";


export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <>
      <h3 className='text-capitalize'>{ category }</h3>
      {
        isLoading && ( 
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
         )
      }
      <div className="card-grid">
        {
          images.map( (  image ) => <GifItem key={ image.id } {...image } /> )
        }
      </div>
    </>
  )
}
