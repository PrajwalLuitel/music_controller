import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";

import React, { Component } from "react";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<p>Hello this is home page</p>} />
          <Route path="join" element={<RoomJoinPage />} />
          <Route path="create" element={<CreateRoomPage />} />
          <Route path="room/:roomCode" element={<Room />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
