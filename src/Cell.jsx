import "./Cell.css";

function Cell({ value, fieldSize, onClick, innerWidth }) {
  const renderCell = () => {
    const minWidth = innerWidth / fieldSize;
    switch (value) {
      case " ":
        return (
          <div
            className="notOpenCell"
            style={{ minWidth: minWidth }}
            onClick={onClick}
          ></div>
        );
    }
  };

  return renderCell();
}
export default Cell;
