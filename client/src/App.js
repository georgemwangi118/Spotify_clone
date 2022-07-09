import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Main from "./pages/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Library from "./pages/Library/Library";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import Playlist from "./pages/Playlist/Playlist";
import Search from "./pages/Search/Search";
import LikedSongs from "./pages/LikedSongs/LikedSongs";
import Profile from "./pages/Profile/Profile";

function App() {
  const user = true;
  const location = useLocation();

  return (
    <>
      {user &&
        location.pathname !== "/login" &&
        location.pathname !== "/" &&
        location.pathname !== "/signup" &&
        location.pathname !== "/not-found" && (
          <>
            <Navbar />
            <Sidebar />
            <AudioPlayer />
          </>
        )}
      <Switch>
        <Route exact path="/" component={Main} />
        <PrivateRoute exact user={user} path="/home" component={Home} />
        <PrivateRoute
          exact
          user={user}
          path="/collection/tracks"
          component={LikedSongs}
        />
        <PrivateRoute
          exact
          user={user}
          path="/collection/playlists"
          component={Library}
        />
        <PrivateRoute exact user={user} path="/search" component={Search} />
        <PrivateRoute
          exact
          user={user}
          path="/playlist/:id"
          component={Playlist}
        />
        <PrivateRoute exact user={user} path="/me" component={Profile} />
        {user && <Redirect from="/signup" to="/home" />}
        {user && <Redirect from="/login" to="/home" />}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
}

export default App;
