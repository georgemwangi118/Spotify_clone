import React from "react";
import styles from "./styles.module.scss";
import { ClickAwayListener } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const playlists = [
  { _id: 1, img: "", name: "Today's Top Songs", desc: "By George" },
];

const PlaylistMenu = ({ closeMenu }) => {
  return (
    <ClickAwayListener onClick={closeMenu}>
      <div className={styles.menu} onClick={closeMenu}>
        <div className={styles.playlist_option}>
          <p>Add to Playlist</p>
          <>
            <ArrowRight />
            <div className={styles.playlists}>
              {playlists.map((playlist) => (
                <div className={styles.option} key={playlist._id}>
                  <p>{playlist.name}</p>
                </div>
              ))}
            </div>
          </>
        </div>
        <div className={styles.option}>
          <p>Go to artist</p>
        </div>
        <div className={styles.option}>
          <p>Share</p>
        </div>
      </div>
    </ClickAwayListener>
  );
};

export default PlaylistMenu;
