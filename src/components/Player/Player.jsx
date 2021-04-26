import React, { useState } from 'react';
import styles from './Player.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStepBackward, faPlayCircle, faStepForward, faCircle, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {

    const {schedule} = props;

    const currentTrack = {
        id: schedule.tracks.current.metadata.id,
        title: schedule.tracks.current.metadata.track_title,
        artist: schedule.tracks.current.metadata.artist_name,
        length: schedule.tracks.current.metadata.length,
    }

    const formattedLength = (length) => {
        const lengthArr = length.split('');
        if (lengthArr[0] == 0 && lengthArr[1] == 0) {
            return lengthArr.slice(3, 8).join('');
        } else {
            return lengthArr.slice(0, 8).join('');
        }
    }

    return (
        <div className={`player ${styles.player}`}>
            <div className={`playerIcons ${styles.playerIcons}`}>
                <FontAwesomeIcon icon={faStepBackward} />
                <a href='https://whynow.co.uk/listen/' target='_blank'><FontAwesomeIcon icon={faPlayCircle} className={styles.play} /></a>
                <FontAwesomeIcon icon={faStepForward} />
            </div>
            <div className={styles.trackInfo}>
                <h6>{currentTrack.title}</h6>
                <p>{currentTrack.artist}</p>
            </div>
            <div className={styles.liveIcon}>
                <FontAwesomeIcon icon={faCircle} className={styles.fa}/>
                LIVE
            </div>
            <div className={`length ${styles.length}`}>
                <p>{formattedLength(currentTrack.length)}</p>
            </div>
            <div className={`mute ${styles.mute}`}>
                <FontAwesomeIcon icon={faVolumeMute} className={styles.fa}/>
            </div>
        </div>
    )
}

export default Player
