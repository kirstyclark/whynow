import { getSchedule } from './services/schedule.service.js';
import React, { useEffect, useState } from 'react';
import Timetable from './components/Timetable';
import Player from './components/Player';
import styles from './App.module.scss';
import './App.css';

const App = () => {

  const [schedule, setSchedule] = useState();

  useEffect(async () => {
    const response = await getSchedule();
    setSchedule(response);
  }, []);

  return (
    <div className={`app ${styles.app}`}>
      {
        schedule &&
        <>
          <Player schedule={schedule}/>
          <Timetable schedule={schedule} /> 
        </>
      }
    </div>
  );
}

export default App;
