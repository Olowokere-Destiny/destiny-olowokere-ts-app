const ProductsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-gray-100 h-16 rounded-md"
        />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
