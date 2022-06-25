import './home.css';
import { data } from './data';
import { CardGame } from './../../components/CardGame';
import { Filters } from './../../components/Filters';
import { useSelector } from 'react-redux';
import { contains } from '../../utils';
import { PriceFilter } from '../../components/PriceFilter';
export const HomePage = () => {
  const currentFilters = useSelector((state) => state.filters.filtersGame);
  const priceFilter = useSelector((state) => state.priceFilters.priceFilter);

  let filteredData = data;

  filteredData = filteredData.filter(


    (item) => {

      return (Number.parseInt(item.price) >= priceFilter.min && Number.parseInt(item.price) <= priceFilter.max)
    }

  );
  if (currentFilters.length > 0) {
    filteredData = data.filter((item) => contains(item.genrec, currentFilters));

    console.log(filteredData)
  }
  return (
    <div className="home wrapper">
      <h1 className="home__title">Home</h1>
      <Filters></Filters>
      <PriceFilter></PriceFilter>
      <div className="home__content">
        {filteredData.map((game) => (
          <CardGame Game={game} onClick={() => null} key={game.id}></CardGame>
        ))}
      </div>
    </div>
  );
};
