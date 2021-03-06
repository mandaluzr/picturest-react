import "../pinsCard/pinsCard.css";
import PinModal from "./PinModal";

const PinCard = ({ pin }) => {
  // {pin.name}
  return (
    <>
      <div className="pin__Card_container">
        <img src={pin.urlImage} alt="pin imagex" className="image"></img>
        <div>{pin.name}</div>
      </div>
    </>
  );
};

export default PinCard;
