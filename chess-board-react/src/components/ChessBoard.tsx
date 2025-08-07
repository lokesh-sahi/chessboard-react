import '../App.css' 
interface Size {
    size: number
}
const ChessBoad: React.FC<Size> = ({size}) => {
    let boxes = [];
    for(let row = 0; row<size; row++){
        for(let col = 0; col<size; col++){
            let isBlack = (row+col)%2===1;
            boxes.push(
                <div key={`${row}-${col}`} className={`box ${isBlack ? "black" : "white"}`}></div>
            );
        }
    }
    return (
        <>
            <h3>Chess Board</h3>
            <div className='board' style={{gridTemplateColumns: `repeat(${size},50px)`}}>
                {boxes}
            </div>
        </>
    )
}
export default ChessBoad;