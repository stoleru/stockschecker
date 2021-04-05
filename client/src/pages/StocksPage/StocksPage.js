import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import StockFormAdd from '../../components/StockAddForm/StockAddForm';
import StockList from '../../components/StockList/StockList';

import {
  stocksActions,
  settingsActions
} from "../../redux/actions";

function StocksPage() {
  const stocks = useSelector(state => state.stocks);
  const [ reload, setReload ] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (data) => {
    dispatch(stocksActions.create(data));
    stocks.items.push(data);
    setReload(true);
  }

  useEffect(() => {
    dispatch(settingsActions.getAll());
    dispatch(stocksActions.getAll());
  }, [reload]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Jumbotron>
        <StockFormAdd onCreate={onCreate} />
      </Jumbotron>
      <StockList stocks={stocks} />
    </>
  );
}

export default StocksPage;