import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data, isPanding } = useFetch(
    "https://dummyjson.com/products/?limit=100"
  );

  console.log(data);

  return (
    <section>
      <div className="align-elements grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {data?.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;
