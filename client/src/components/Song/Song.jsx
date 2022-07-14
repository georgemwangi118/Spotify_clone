import React, { useState } from "react";
import Like from "../Like/Like";
import { IconButton } from "@mui/material";
import { PlayArrow, MoreHoriz } from "@mui/icons-material";
import styles from "./styles.module.scss";
import PlaylistMenu from "../PlaylistMenu/PlaylistMenu";

const Song = ({ song, playlist }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.song_container}>
      <div className={styles.left}>
        <IconButton className={styles.play_btn}>
          <PlayArrow />
        </IconButton>
        <img src={song.img} alt="song_img" />
        <p>{song.name}</p>
      </div>
      <div className={styles.center}>
        <p>{song.artist}</p>
      </div>
      <div className={styles.right}>
        <Like songId={song._id} />
        <p>4.30</p>
        <IconButton className={styles.menu_btn} onClick={() => setMenu(true)}>
          <MoreHoriz />
        </IconButton>
        {menu && (
          <PlaylistMenu playlist={playlist} closeMenu={() => setMenu(false)} />
        )}
      </div>
    </div>
  );
};

export default Song;
