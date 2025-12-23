import "../styles/components/Window.css";
import React from "react";


export const Window = ({ title, objectsCount, onClose, children }) => {

  return (
    <div className="window folder-window">
      <div className="title-bar">
        <span>{title}</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="menu-bar">
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Help</span>
      </div>

      <div className="content folder-content">
        {children ? children : null}
      </div>
      <div className="objects-sum">
        <div>{objectsCount} object(s)</div>
      </div>
    </div>
  );
};
