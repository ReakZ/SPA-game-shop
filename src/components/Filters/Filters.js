import React from 'react';
import './Filters.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {
  clearFilters,
  setFilter,
  deleteFilter,
} from '../../redux/filter/reducer';
import { AvaibleFilters } from '../../pages/home/data';
import { Buttons } from '../UI/buttons';
export const Filters = () => {
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

  const clearFilter = () => {
    dispatch(clearFilters());
  };
  return (
    <div className='filters'>
      {AvaibleFilters.map((filter) => {
        const filerOn = filters.some((item) => item === filter);
        return (
          <Buttons
            type={filerOn ? 'primary' : 'secondary'}
            size={'s'}
            onClick={(e) => handleClick(e, filter, filerOn)}
          >
            {filter}
          </Buttons>
        );
      })}

      <Buttons type={'secondary'} size={'s'} onClick={clearFilter}>
        Очистить фильтр
      </Buttons>
    </div>
  );
};
