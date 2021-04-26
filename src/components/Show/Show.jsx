import React from 'react';
import styles from './Show.module.scss';
import icon from '../../assets/whynow-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Show = (props) => {

    const {show} = props;

    const formattedTime = (time) => {
        return time.split('').slice(11,16).join('');
    }

    return (
        <div className={styles.show}>
            <div className={styles.timeContainer}>
                <p>{formattedTime(show.startTime)} - {formattedTime(show.endTime)}</p>
            </div>
            <div className={styles.iconContainer}>
                <div className={`showIcon ${styles.showIcon}`}>
                    <img src={icon}></img>
                    <FontAwesomeIcon icon={faPlayCircle} className={styles.play}/>
                </div>
            </div>
            <div className={styles.nameContainer}>
                <h4>{show.name}</h4>
            </div>
        </div>
    )
}

export default Show
