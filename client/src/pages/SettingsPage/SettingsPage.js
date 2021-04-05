import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Jumbotron } from 'reactstrap';
import SettingsForm from '../../components/SettingsForm/SettingsForm';

import {
  settingsActions
} from "../../redux/actions";

function SettingsPage() {
  const settings = useSelector(state => state.settings);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(settingsActions.getAll());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onUpdate = (key, value) => {
    dispatch(settingsActions.update(key, value));
  }

  return (
    <Jumbotron>
      <h2>Settings</h2>
      <hr />
      <SettingsForm settings={settings} onUpdate={onUpdate} />
    </Jumbotron>
  );
}

export default SettingsPage;