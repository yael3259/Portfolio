import "../styles/components/Icon.css";


export const Icon = ({ name, img, onDoubleClick }) => {
  return (
    <div
      className="icon"
      onDoubleClick={onDoubleClick}
      tabIndex={0}
    >
      <img src={img} alt={name} />
      <div className="icon-label">{name}</div>
    </div>
  );
};
