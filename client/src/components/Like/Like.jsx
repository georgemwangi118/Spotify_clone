import React, { useState } from "react";
import styles from "./styles.module.scss";
import { IconButton } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";

const Like = () => {
  const [like, setLike] = useState(false);

  return (
    <IconButton className={styles.like_btn} onClick={() => setLike(!like)}>
      {!like ? (
        <FavoriteBorder className={styles.like_outlined} />
      ) : (
        <Favorite className={styles.like_filled} />
      )}
    </IconButton>
  );
};

export default Like;
