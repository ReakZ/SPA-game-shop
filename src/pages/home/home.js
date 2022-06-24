import './home.css';
import {data} from './data'
import {CardGame} from './../../components/CardGame'
import {Filters} from './../../components/Filters'
import { useSelector } from 'react-redux';
import {contains} from '../../utils'
export const HomePage = () => {


  const currentFilters=useSelector(state=>state.filters.filtersGame)
let filteredData=data
  if(currentFilters.length>0){
    filteredData=data.filter(item=>contains(item.genrec,currentFilters))

  }
  return <div className='home wrapper'>

<h1 className='home__title'>Home</h1>
<Filters></Filters>
<div className="home__content">
{filteredData.map(game=><CardGame Game={game} onClick={()=>null} key={game.id}></CardGame>)}
</div>


  </div>;
};
