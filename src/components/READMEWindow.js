import "../styles/components/READMEWindow.css";


export const READMEWindow = ({ onClose }) => {
  return (
    <div className="window readme-window">
      <div className="title-bar">
        <span>README.txt</span>
        <button onClick={onClose}>✕</button>
      </div>

      <div className="content readme-content">
        <pre>
          {`Hi, I'm Yael 👋


Full-Stack Developer
-------------------
• React / JS / CSS
• Node.js / Express
• MongoDB
• REST APIs


What is this?
-------------
This portfolio mimics an old Windows desktop.
Double-click icons.
Open folders.
Yes, this is intentional 🙂


Why me?
-------
• Strong fundamentals
• Clean Git & README files
• Real projects (not todo apps)
• Creative but not sloppy


Enjoy exploring :)`}
        </pre>
      </div>
    </div>
  );
};
