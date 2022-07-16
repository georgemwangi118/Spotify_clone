import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/authSlice/auth";
import { setCurrentSong } from "../../redux/audioPlayer/audioPlayer";
import { ClickAwayListener } from "@mui/material";
import {
  ArrowDropDown,
  ArrowDropUp,
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
  AccountCircle,
  Person,
  Settings,
  Logout,
} from "@mui/icons-material";
import { Link, useHistory } from "react-router-dom";

import styles from "./styles.module.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setCurrentSong(null));
    window.location = "/login";
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.icon} onClick={() => history.goBack()}>
          <ArrowBackIosRounded />
        </div>
        <div className={styles.icon} onClick={() => history.goForward()}>
          <ArrowForwardIosRounded />
        </div>
      </div>
      <div className={styles.right}>
        <div
          style={{ backgroundColor: `${menu ? "#282828" : "#000"}` }}
          className={styles.profile_menu}
          onClick={() => setMenu(!menu)}
        >
          <AccountCircle />
          <p>{user && user.name}</p>
          {menu ? <ArrowDropUp /> : <ArrowDropDown />}
        </div>
      </div>
      {menu && (
        <ClickAwayListener onClickAway={() => setMenu(false)}>
          <div className={styles.menu} onClick={() => setMenu(false)}>
            <Link to="/me">
              <div className={styles.options}>
                <p>Profile</p>
                <Person />
              </div>
            </Link>
            <div className={styles.options}>
              <p>Settings</p>
              <Settings />
            </div>
            <div className={styles.options} onClick={handleLogout}>
              <p>Logout</p>
              <Logout />
            </div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
};

export default Navbar;
