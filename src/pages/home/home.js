import './home.css';
import {data} from './data'
import {CardGame} from './../../components/CardGame'
export const HomePage = () => {
  return <div className='home wrapper'>

<h1 className='home__title'>Home</h1>
<div className="home__content">
{data.map(game=><CardGame Game={game} onClick={()=>null} key={game.id}></CardGame>)}
</div>


  </div>;
};
