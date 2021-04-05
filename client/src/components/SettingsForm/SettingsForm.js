import React from 'react';
import { Form, Input, Button, FormGroup, Label, FormText } from 'reactstrap';

const SettingsForm = (props) => {
  
  const { settings: { items = [] }, onUpdate } = props;
  const getInputValue = (items, searchKey) => items.find(el => el.key === searchKey)?.value;

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    items.forEach(element => {
      // we only update the keys that have the value changed
      if(element.value !== data.get(element.key)) {
        onUpdate(element.key, data.get(element.key));
      }
    });
  }
  
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Change Percentage Threshold (%)</Label>
        <Input name="cpt" bsSize="md" type="number" className="form-control" required defaultValue={getInputValue(items, 'cpt')} />
        <FormText color="muted">
          Percentage value that will affect the polling interval
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>High Frequency Polling Interval (sec)</Label>
        <Input name="high_fpi" bsSize="md" type="number" className="form-control" required defaultValue={getInputValue(items, 'high_fpi')} />
        <FormText color="muted">
          Seconds value for how often to poll when change percentage is higher than CPT
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Low Frequency Polling Interval (sec)</Label>
        <Input name="low_fpi" bsSize="md" type="number" className="form-control" required defaultValue={getInputValue(items, 'low_fpi')} />
        <FormText color="muted">
          Seconds value for how often to poll when change percentage is lower than CPT
        </FormText>
      </FormGroup>
      <br />
      <Button color="success">Save Settings</Button>
    </Form>
  );
};

export default SettingsForm;