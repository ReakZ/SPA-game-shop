import './GameGenrec.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {
  clearFilters,
  setFilter,
  deleteFilter,
} from '../../redux/filter/reducer';
import { Buttons } from '../UI/buttons';

export const GameGenrec = ({ Game, onClick }) => {
  const dispatch = useDispatch();

  const filters = useSelector((state) => state.filters.filtersGame);

  const handleClick = (e, value, filerOn) => {
    e.stopPropagation();
    if (filerOn) {
      dispatch(deleteFilter(value));
    } else {
      dispatch(setFilter(value));
    }
  };


  return (
    <div className="Gens">
      {Game.genrec.map((genrec, i) => {
        const filerOn = filters.some((item) => item === genrec);
        return (
          <Buttons
          type={filerOn ? 'primary' : 'secondary'}
          size={'s'}
          onClick={(e) => handleClick(e, genrec, filerOn)}
        >
          {genrec}
        </Buttons>
        );
      })}
    </div>
  );
};
