import React from 'react';
import './PriceFilter.css';
import { Buttons } from '../UI/buttons';
import { priceMinMax } from '../../pages/home/data';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux/es/exports';
import {
  setPriceFilter,
  deletePriceFilter,
} from '../../redux/priceFilter/reducer';
export const PriceFilter = () => {
  const priceFilter = useSelector((state) => state.priceFilters.priceFilter);

  const dispatch = useDispatch();
  const hanlderChangeMin = (e) => {
    console.log(e.target.value);

    const value = Number.parseInt(e.target.value);
    dispatch(setPriceFilter({ min: value, max: priceFilter.max }));
  };

  const hanlderChangeMax = (e) => {
    console.log(e.target.value);
    const value = Number.parseInt(e.target.value);
    dispatch(setPriceFilter({ min: priceFilter.min, max: value }));
  };
  return (
    <div className="price-filter">
      <label for="price-range-min">Минимум: {priceFilter.min} руб.</label>
      <input
        type="range"
        id="price-range-min"
        name="volume"
        min={priceMinMax.min}
        max={priceMinMax.max}
        onChange={hanlderChangeMin}
        value={priceFilter.min}
      />
      <label for="price-range-max">Максимум: {priceFilter.max} руб.</label>
      <input
        type="range"
        id="price-range"
        name="volume"
        min={priceMinMax.min}
        max={priceMinMax.max}
        onChange={hanlderChangeMax}
        value={priceFilter.max}
      />

      <Buttons size={'s'} type={'secondary'}>
        Сбросить фильтр
      </Buttons>
    </div>
  );
};
