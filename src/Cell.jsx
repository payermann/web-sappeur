import "./Cell.css";

function Cell({ value, fieldSize, onClick, onContextMenu, innerWidth }) {
  const renderCell = () => {
    const minWidth = innerWidth / fieldSize;
    let cellType = "";
    switch (value) {
      case " ":
        cellType = "notOpenCell";
        break;
      case "!FLAG!":
        cellType = "flag";
        value = "";
        break;
      case true:
        cellType = "bomb";
        break;
      default:
        cellType = "openCell";
        break;
    }
    return (
      <div
        className={cellType}
        style={{ minWidth: minWidth }}
        onClick={onClick}
        onContextMenu={onContextMenu}
      >
        {value}
      </div>
    );
  };

  return renderCell();
}
export default Cell;
