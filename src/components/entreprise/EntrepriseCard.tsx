import { useNavigate } from "react-router"
import ep1 from "../../assets/ep1.jpg"
import ep2 from "../../assets/ep2.jpg"

type Props = {
    choice: boolean
}
const EntrepriseCard = (props : Props) => {

    const navigate = useNavigate();
    const img = props.choice ? ep1 : ep2;

  return (
<div className="card bg-base-100 image-full w-80 xl:w-96 shadow-sm">
  <figure>
    <img
      src={img}
      alt="entreprise image" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={() => navigate("/entreprise")}>See more</button>
    </div>
  </div>
</div>
  )
}

export default EntrepriseCard