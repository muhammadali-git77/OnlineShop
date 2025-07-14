import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Detail() {
  const { id } = useParams();

  const { data, isPanding } = useFetch(`https://dummyjson.com/product/${id}`);

  return (
    <div>
      <h1>{data?.title}</h1>
      <Link to={"/"}>ortga</Link>
    </div>
  );
}

export default Detail;
