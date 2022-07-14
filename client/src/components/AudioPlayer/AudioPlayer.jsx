import React from "react";
import Like from "../Like/Like";
import peaches from "../../images/music.png";
import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";
import { SkipPrevious, PlayArrow, SkipNext } from "@mui/icons-material";

const AudioPlayer = () => {
  return (
    <div className={styles.audio_player}>
      <div className={styles.left}>
        <img src={peaches} alt="song_img" />
        <div className={styles.song_info}>
          <p className={styles.song_name}>Peaches</p>
          <p className={styles.song_artist}>Justin Bieber</p>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.audio_controls}>
          <IconButton className={styles.prev}>
            <SkipPrevious />
          </IconButton>
          <IconButton className={styles.play}>
            <PlayArrow />
          </IconButton>
          <IconButton className={styles.next}>
            <SkipNext />
          </IconButton>
        </div>
        <div className={styles.progress_container}>
          <p>0.30</p>
          <input
            type="range"
            step="1"
            min="0"
            max={4}
            className={styles.progress}
          />
          <audio></audio>
          <p>4.00</p>
        </div>
      </div>
      <div className={styles.right}>
        <Like />
      </div>
    </div>
  );
};

export default AudioPlayer;
