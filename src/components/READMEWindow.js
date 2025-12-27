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
-----------------
• React / JS / CSS / Dart / Flutter
• Node.js / Express / REST APIs / JWT / Python
• MongoDB / SQL
• Git, AWS (EC2) / Vercel / Render / Postman


What is this?
----------
This portfolio emulates an old Windows desktop.
Double-click icons, open folders, links to projects & games I've built and more.
Yes, this is intentional 🙂


Some Tips:
--------
• Double click = explore
• F11 = full screen mode
• Ctrl+Alt+Del = just kidding, pls don’t do that 😅


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
