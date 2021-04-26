import React from 'react';
import styles from './Timetable.module.scss';
import Show from '../Show';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Timetable = (props) => {

    const {schedule} = props;

    const currentShow = {
        id: schedule.shows.current.id,
        name: schedule.shows.current.name,
        description: schedule.shows.current.description,
        startTime: schedule.shows.current.starts,
        endTime: schedule.shows.current.ends
    }

    const nextShows =  schedule.shows.next;

    const todaysDate = new Intl.DateTimeFormat('en-GB', 
    {month: 'long', day: 'numeric'})
    .format(new Date())

    return (
        <div className={`timetable ${styles.timetable}`}>

            <div className={`scheduleTitle ${styles.scheduleTitle}`}> 
                <p className={`radio ${styles.radio}`}> 
                    <FontAwesomeIcon icon={faCircle} className={styles.fa}/>
                    Radio
                </p>
                <h2 className={`schedule ${styles.schedule}`}>Schedule</h2>
            </div>

            <div className={styles.day}>
                <div className={`dayHeaders ${styles.dayHeaders}`}>
                    <p className={styles.date}>
                        <span>TODAY,</span> 
                        {todaysDate}
                    </p>
                    <p className={styles.earlier}>earlier</p>
                </div>
                <div className={styles.dayContents}>
                    <Show key={currentShow.id} show={currentShow} />
                    {
                        nextShows.map(show => {
                            show = {
                                id: show.id,
                                name: show.name,
                                description: show.description,
                                startTime: show.starts,
                                endTime: show.ends
                            }
                            return <Show key={show.id} show={show} />
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Timetable
