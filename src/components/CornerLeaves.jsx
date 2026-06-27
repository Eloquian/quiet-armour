import cornerLeaf from '../assets/corner-leaf.png';
import './CornerLeaves.css';

export default function CornerLeaves() {
  return (
    <>
      <img className="corner-leaf tl" src={cornerLeaf} alt="" />
      <img className="corner-leaf br" src={cornerLeaf} alt="" />
    </>
  );
}
