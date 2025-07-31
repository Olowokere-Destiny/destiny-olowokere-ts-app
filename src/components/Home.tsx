import useFetchData from "../lib/hooks/useFetchData";

const Home = () => {
  const { data } = useFetchData();
  return (
    // component height to exclude header
    <div className="p-4 w-full min-h-[calc(100vh-58px)]">
      <div className="space-y-4">
        <h1 className="text-3xl font-medium text-black/70">Products</h1>
        <p className="text-black/70">This is a list of all products</p>
      </div>

      <div className="mt-8">
        {data?.map((product: { id: number; title: string }) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
};
export default Home;
