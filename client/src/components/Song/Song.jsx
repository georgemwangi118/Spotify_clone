import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong } from "../../redux/audioPlayer/audioPlayer";
import Like from "../Like/Like";
import { IconButton } from "@mui/material";
import { PlayArrow, MoreHoriz, Pause } from "@mui/icons-material";
import styles from "./styles.module.scss";
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";

const Song = ({ song, playlist, handleRemoveSong }) => {
  const [menu, setMenu] = useState(false);
  const { currentSong } = useSelector((state) => state.audioPlayer);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (currentSong && currentSong.action === "play") {
      const payload = {
        song: song,
        action: "pause",
      };
      dispatch(setCurrentSong(payload));
    } else {
      const payload = {
        song: song,
        action: "play",
      };
      dispatch(setCurrentSong(payload));
    }
  };

  return (
    <div className={styles.song_container}>
      <div className={styles.left}>
        <IconButton onClick={handleChange} className={styles.play_btn}>
          {currentSong &&
          currentSong.action === "play" &&
          currentSong.song._id === song._id ? (
            <Pause />
          ) : (
            <PlayArrow />
          )}
        </IconButton>
        <img src={song.img} alt="song_img" />
        <p>{song.name}</p>
      </div>
      <div className={styles.center}>
        <p>{song.artist}</p>
      </div>
      <div className={styles.right}>
        <Like songId={song._id} />
        <p>{song.duration}</p>
        <IconButton className={styles.menu_btn} onClick={() => setMenu(true)}>
          <MoreHoriz />
        </IconButton>
        {menu && (
          <PlaylistMenu
            playlist={playlist}
            song={song}
            handleRemoveSong={handleRemoveSong}
            closeMenu={() => setMenu(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Song;
