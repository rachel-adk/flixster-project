import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ setPage }) => {
  // create state to change page
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <button className="sidebar_button" onClick={() => setIsOpen(!isOpen)}>
        🟰
      </button>
      {isOpen && (
        <div className="sidebarMenu">
          <button
            onClick={() => {
              setPage("home");
              setIsOpen(false);
            }}
          >
            🏠Home
          </button>
          <button
            onClick={() => {
              setPage("watched");
              setIsOpen(false);
            }}
          >
            ✅Watched
          </button>
          <button
            onClick={() => {
              setPage("liked");
              setIsOpen(false);
            }}
          >
            ❤️Liked
          </button>
        </div>
      )}
    </nav>
  );
};
export default Sidebar;
