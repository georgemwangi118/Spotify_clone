import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createPlayList } from "../../redux/playListSlice/apiCalls";
import { CircularProgress } from "@mui/material";
import { Home, Search, LibraryMusic, Add } from "@mui/icons-material";
import logo from "../../images/white_logo.svg";
import likeImg from "../../images/like.jpg";
import styles from "./styles.module.scss";

const Sidebar = () => {
  const { playlists, getPlayListProgress, createPlayListProgress } =
    useSelector((state) => state.playlists);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleCreatePlayList = () => {
    const data = {
      name: "My Playlist #" + (playlists.length + 1),
      user: user._id,
      desc: "By " + user.name,
      songs: [],
      img: "",
    };
    createPlayList(data, dispatch);
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo_img} src={logo} alt="logo" />
      <NavLink
        to="/home"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <Home />
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/search"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <Search />
        <span>Search</span>
      </NavLink>
      <NavLink
        to="/collection/playlists"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <LibraryMusic />
        <span>Your Library</span>
      </NavLink>
      <div
        className={styles.create_playlist_btn}
        onClick={handleCreatePlayList}
      >
        <Add />
        <span>Create Playlist</span>
      </div>
      <NavLink
        to="/collection/tracks"
        className={styles.menu_link}
        activeClassName={styles.active_menu}
      >
        <img src={likeImg} alt="jfo" />
        <span>Liked Songs</span>
      </NavLink>
      <div className={styles.underline}></div>
      {getPlayListProgress || createPlayListProgress ? (
        <div className={styles.progress_container}>
          <CircularProgress style={{ color: "#1ed760" }} size="3rem" />
        </div>
      ) : (
        <>
          {playlists.map((playlist) => (
            <NavLink
              key={playlist._id}
              to={`/playlist/${playlist._id}`}
              className={styles.playlist_link}
              activeClassName={styles.active_link}
            >
              {playlists.name}
            </NavLink>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
