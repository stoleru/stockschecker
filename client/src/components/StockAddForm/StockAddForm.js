import React, { useState } from 'react';
import { Form, Input, Button, FormGroup, Label } from 'reactstrap';

const StockFormAdd = (props) => {
  const { onCreate } = props;
  const [ url, setUrl ] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    var object = {};
    data.forEach(function(value, key){
        object[key] = value;
    });
    
    onCreate(object);
    setUrl('');
  }

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>URL</Label>
        <Input 
          bsSize="lg" 
          name="url" 
          value={url} 
          onChange={e => setUrl(e.target.value)}
          type="url" 
          className="form-control" 
          autoFocus 
        />
      </FormGroup>
      <Button color="success">Add Stock</Button>
    </Form>
  );
};

export default StockFormAdd;