const ProductsSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 mt-8">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-[var(--skeleton-bg)] h-18 rounded-md"
        />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
