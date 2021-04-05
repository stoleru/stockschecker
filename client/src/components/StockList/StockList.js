import { 
  ListGroup
} from 'reactstrap';

import StockListItem from '../StockListItem/StockListItem'

const StockList = (props) => {
  const { stocks: { items } } = props;
  
  return (
    <ListGroup>
      {!!(items && items.length) && (
        items.map((item, idx) => (
          <StockListItem data={item} key={idx} />
        ))
      )}
    </ListGroup>
  );
};

export default StockList;
