import "../assets/css/gameBoard.css";
import Shape from "./shape";
function GameBoard({ shapes, onShapeClick }) {
    return (
        <div className="game-board">
            <Shape
                key={shape.id}
                {...shapes}
                onclick={() => onShapeClick(shape.id)}
            />
        </div>
    )
}

export default GameBoard;