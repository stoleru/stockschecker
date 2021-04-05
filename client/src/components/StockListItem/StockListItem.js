import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { 
  ListGroupItem, UncontrolledCollapse, 
  Row, Col, Badge
} from 'reactstrap';
import moment from 'moment';
import { useInterval } from '../../hooks/useInterval';

const StockListItem = (props) => {
  const { data } = props;
  const settings = useSelector(state => state.settings);
  const [ stockData, setStockData ] = useState({ error: false });
  const [ delay, setDelay ] = useState(1000);
  const [ difference, setDifference ] = useState({ value: 0, proc: 0 });

  const determinePollingTime = () => {
    if(stockData?.open && stockData?.last) {
      let diff = stockData?.open - stockData?.last;
      // lets round the diff to 2 decimals
      diff = Math.round((diff + Number.EPSILON) * 100) / 100;

      let diffProcent = (diff * 100) / stockData.open;
      // lets round the diff proc also to 2 decimals
      diffProcent = Math.round((diffProcent + Number.EPSILON) * 100) / 100;

      setDifference({ value: diff, proc: diffProcent });
      const cpt = parseFloat(settings.items.find(obj => obj.key === 'cpt').value);
      const low_fpi = parseFloat(settings.items.find(obj => obj.key === 'low_fpi').value);
      const high_fpi = parseFloat(settings.items.find(obj => obj.key === 'high_fpi').value);
      // convert any negative difference to a positive one
      if(diffProcent < 0) diffProcent = diffProcent * -1

      if(diffProcent < cpt) {
        setDelay(low_fpi * 1000);
      } else {
        setDelay(high_fpi * 1000);
      }      
    }
  }
  
  const badgeColor = (diff) => {
    if(diff === 0) return 'secondary';
    else if(diff < 0) return 'danger';
    else return 'success';
  }

  useInterval(async () => {
    console.log('Fetching ', data.symbol, ' at ', (delay / 1000), ' seconds')
    const response = await fetch(data.url);
    const stockInfo = await response.json()
    if(stockInfo.error) {
      setStockData({ error: true });
    } else {
      setStockData(stockInfo.data[0]); 
    }

    determinePollingTime()
  }, delay)

  return (
    <ListGroupItem disabled>
      <div id="toggler" style={{ cursor: 'pointer'}}>
        <Row>
          <Col md="1">
            <h3 className="mt-2">
              <Badge color="secondary">{data?.symbol}</Badge>
            </h3>
          </Col>
          <Col md="3">
            <small>Timestamp</small><br />
            <span>{moment(data.date).format('YYYY-MM-DD HH:mm:ss')}</span>
          </Col>
          <Col md="3">
            <small>OPENING PRICE</small><br />
            <strong>${stockData?.open}</strong>
          </Col>
          <Col md="3">
            <small>LAST PRICE</small><br />
            <strong>${stockData?.last}</strong>
          </Col>
          <Col md="2">
            <small>CHANGE</small><br />
            <h5>
              <Badge color={badgeColor(difference.value)} size="lg">
                {difference.proc}%
              </Badge>
            </h5>
          </Col>
        </Row>
      </div>
      <UncontrolledCollapse toggler="#toggler">
        <hr />
        Test
      </UncontrolledCollapse>
    </ListGroupItem>
  );
};

export default StockListItem;