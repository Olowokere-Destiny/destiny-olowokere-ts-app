type Props = {
  title: string;
  price: number;
  image: string;
};
const ProductCard = ({ title, price, image }: Props) => {
  return (
    <li className="p-4 border-b border-slate-300 flex gap-x-4 justify-between">
      <span className="flex gap-x-4 md:gap-x-8 items-center">
        <img src={image} alt={title} className="size-10 shrink-0" /> <span className="text-black/80">{title}</span>
      </span>
      <span className="font-semibold text-black/80">${price}</span>
    </li>
  );
};

export default ProductCard;
