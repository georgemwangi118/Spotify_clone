import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likeSong } from "../../redux/userSlice/apiCalls";
import styles from "./styles.module.scss";
import { IconButton, CircularProgress } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const Like = ({ songId }) => {
  const { user, likeSongProgress } = useSelector((state) => state.user);
  const [progress, setProgress] = useState(false);
  const dispatch = useDispatch();

  const handleLikeSong = async (songId) => {
    setProgress(true);
    const res = await likeSong(songId, dispatch);
    res && setProgress(false);
  };

  return (
    <IconButton
      className={styles.like_btn}
      onClick={() => handleLikeSong(songId)}
    >
      {likeSongProgress && progress ? (
        <CircularProgress style={{ color: "#1ed760" }} size="2rem" />
      ) : (
        <>
          {user && user.likedSongs.indexOf(songId) === -1 ? (
            <FavoriteBorder className={styles.like_outlined} />
          ) : (
            <Favorite className={styles.like_filled} />
          )}
        </>
      )}
    </IconButton>
  );
};

export default Like;
