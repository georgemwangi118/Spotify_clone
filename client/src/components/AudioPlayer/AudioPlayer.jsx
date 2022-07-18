import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../../redux/audioPlayer/audioPlayer";
import Like from "../Like/Like";
import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";
import { SkipPrevious, PlayArrow, SkipNext, Pause } from "@mui/icons-material";

const AudioPlayer = () => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const { currentSong } = useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();

  const audioRef = useRef();
  const intervalRef = useRef();

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef && audioRef.current.ended) {
        dispatch(setCurrentSong({ ...currentSong, action: "pause" }));
      } else if (audioRef) {
        setTrackProgress(audioRef.current.currentTime);
        audioRef.current.duration && setDuration(audioRef.current.duration);
      } else {
        setTrackProgress(0);
      }
    }, [1000]);
  };

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
  `;

  useEffect(() => {
    if (currentSong.action === "play") {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong]);

  useEffect(() => {
    currentSong.action === "play" && startTimer();
  });

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const handleActions = () => {
    currentSong.action === "play"
      ? dispatch(setCurrentSong({ ...currentSong, action: "pause" }))
      : dispatch(setCurrentSong({ ...currentSong, action: "play" }));
  };

  return (
    <div className={styles.audio_player}>
      <div className={styles.left}>
        <img src={currentSong.song.img} alt="song_img" />
        <div className={styles.song_info}>
          <p className={styles.song_name}>{currentSong.song.name}</p>
          <p className={styles.song_artist}>{currentSong.song.artist}</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.audio_controls}>
          <IconButton className={styles.prev}>
            <SkipPrevious />
          </IconButton>
          <IconButton className={styles.play} onClick={handleActions}>
            {currentSong.action === "play" ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton className={styles.next}>
            <SkipNext />
          </IconButton>
        </div>
        <div className={styles.progress_container}>
          <p>{Math.floor(trackProgress)}</p>
          <input
            type="range"
            value={trackProgress}
            step="1"
            min="0"
            max={duration ? duration : 0}
            onChange={(e) => onScrub(e.target.value)}
            className={styles.progress}
            style={{ background: trackStyling }}
          />
          <audio src={currentSong.song.song} ref={audioRef}></audio>
          <p>{Math.floor(duration)}</p>
        </div>
      </div>
      <div className={styles.right}>
        <Like songId={currentSong.song._id} />
      </div>
    </div>
  );
};

export default AudioPlayer;
