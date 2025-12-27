import "../styles/components/WarningAlert.css";
import warningIcon from "../assets/icons/warning.png";
import "../styles/components/WarningAlert.css";


export const WarningAlert = ({ message, onClose }) => {

    return (
        <div className="warning-alert-container">
            <div className="warning-alert box-bevel">
                <div className="title-bar">
                    <span className="title-text">Windows 95</span>
                    <button className="close-button box-bevel" onClick={onClose}>✕</button>
                </div>

                <div className="contentAlert">
                    <img src={warningIcon} alt="Warning" className="warning-icon" />
                    <span className="message-text">{message}</span>
                </div>

                <div className="ok-button-container">
                    <button className="ok-button box-bevel" onClick={onClose}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}