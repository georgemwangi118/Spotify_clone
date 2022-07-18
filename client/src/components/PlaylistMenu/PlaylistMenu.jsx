import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongToPlaylist } from "../../redux/playListSlice/apiCalls";
import styles from "./styles.module.scss";
import { ClickAwayListener } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";

const PlaylistMenu = ({ playlist, song, handleRemoveSong, closeMenu }) => {
  const { playlists } = useSelector((state) => state.playlists);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddToPlaylist = (playlistId, songId) => {
    const payload = { playlistId, songId };
    addSongToPlaylist(payload, dispatch);
  };

  return (
    <ClickAwayListener onClick={closeMenu}>
      <div className={styles.menu} onClick={closeMenu}>
        <div className={styles.playlist_option}>
          <p>Add to Playlist</p>
          <>
            <ArrowRight />
            <div className={styles.playlists}>
              {playlists.map((playlist) => (
                <div
                  className={styles.option}
                  key={playlist._id}
                  onClick={() => handleAddToPlaylist(playlist._id, song._id)}
                >
                  <p>{playlist.name}</p>
                </div>
              ))}
            </div>
          </>
        </div>
        {playlist && playlist.user === user._id && (
          <div className={styles.option}>
            <p onClick={() => handleRemoveSong(song._id)}>
              Remove from Playlist
            </p>
          </div>
        )}
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
