import useFetchData from "../lib/hooks/useFetchData";
import Error from "./Error";
import ProductCard from "./ProductCard";
import ProductsSkeleton from "./ProductsSkeleton";

const Home = () => {
  const { data, handleReload, loading, isError } = useFetchData();
  if (isError) return <Error />;
  return (
    // component height to exclude header
    <div className="w-full min-h-[calc(100vh-58px)]">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium text-black/70">Products</h1>
        <p className="text-black/70">This is a list of all products</p>
        <button
          disabled={loading}
          className="text-sm block cursor-pointer bg-white border border-slate-300 rounded-md px-2 py-1 hover:bg-slate-100"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>

      {loading ? (
        <ProductsSkeleton />
      ) : (
        <ul className="mt-8 space-y-4">
          {data?.map(
            (product: {
              id: number;
              title: string;
              price: number;
              image: string;
            }) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            )
          )}
        </ul>
      )}
    </div>
  );
};
export default Home;
