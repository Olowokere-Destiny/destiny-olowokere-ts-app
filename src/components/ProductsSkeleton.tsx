import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ProductsSkeleton = () => {
  const { theme } = useContext(ThemeContext)!;
  let containerClasses = "";
  if (theme === "light" || theme === "dark") {
    containerClasses = "flex flex-col";
  } else if (theme === "forest") {
    containerClasses = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  }

  return (
    <div className={`gap-4 mt-8 ${containerClasses}`}>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`animate-pulse bg-[var(--skeleton-bg)] ${
            theme === "forest" ? "h-44 rounded-2xl" : "h-18 rounded-md"
          }`}
        />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
