import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

type Props = {
  title: string;
  price: number;
  image: string;
};
const ProductCard = ({ title, price, image }: Props) => {
  const { theme } = useContext(ThemeContext)!;
  let cardDisplay = "";

  if (theme === "light" || theme === "dark") {
    cardDisplay = "flex items-center gap-x-4 justify-between";
  } else if (theme === "forest") {
    cardDisplay = "flex flex-col items-center gap-y-4 justify-between";
  }

  return (
    <li className={`p-4 border-b border-[var(--list-border-color)] bg-[var(--card-bg)] rounded-[var(--card-radius)] ${cardDisplay}`}>
      <span className={`flex gap-x-4 md:gap-x-8 items-center ${theme === "forest" && "flex-col gap-y-4 md:gap-y-8"}`}>
        <img
          src={image}
          alt={title}
          className={`size-10 shrink-0 rounded-[var(--img-radius)] ${theme === "forest" && "size-20"}`}
        />{" "}
        <span className={`text-[var(--light-text)] text-(length:--listing-text-size) ${theme === "forest" && "text-center"}`}>
          {title}
        </span>
      </span>
      <span className="font-semibold text-[var(--text)]">${price}</span>
    </li>
  );
};

export default ProductCard;
