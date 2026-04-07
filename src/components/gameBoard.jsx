import "../assets/css/gameBar.css";
import Shape from "./shape";
const GameBoard = ({ shapes, onShapeClick }) => {
    return (
        <div
            className="game-board"
            style={{ filter: 'url(#liquid-goo)' }} // ID must match your SVG filter ID
        >
            {shapes.map((shape) => (
                <Shape key={shape.id} {...shape} onClick={onShapeClick} />
            ))}
        </div>
    );
};
export default GameBoard;