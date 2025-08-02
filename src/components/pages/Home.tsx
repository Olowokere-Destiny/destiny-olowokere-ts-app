import { useContext } from "react";
import useFetchData from "../../lib/hooks/useFetchData";
import Error from "../Error";
import ProductCard from "../ProductCard";
import ProductsSkeleton from "../ProductsSkeleton";
import { ThemeContext } from "../ThemeContext";

const Home = () => {
  const { data, handleReload, loading, isError } = useFetchData();
  const { theme } = useContext(ThemeContext)!;
  const productContainerStyling = `flex flex-col gap-4 ${theme === "forest" && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`;
  if (isError) return <Error />;
  return (
    // set height to exclude header height
    <div className="w-full min-h-[calc(100vh-58px)]">
      <div className="space-y-4">
        <h1 className="text-(length:--title-size) font-(--title-weight) text-[var(--title-color)]">
          Products
        </h1>
        <p className="text-[var(--text)] text-(length:--subtitle-size) font-(--subtitle-weight)">
          This is a list of all products
        </p>
        <button
          disabled={loading}
          className="btn"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>

      {loading ? (
        <ProductsSkeleton />
      ) : (
        <ul className={`mt-8 ${productContainerStyling} gap-4`}>
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
