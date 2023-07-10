import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utilis/helpers';
import { getTotalCartPrice, getTotalCartQnt } from './cartSlice';

function CartOverview() {
  const cartLength = useSelector(getTotalCartQnt);
  const total = useSelector(getTotalCartPrice);

  if (!cartLength) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base ">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6 ">
        <span>{cartLength} pizzas</span>
        <span>{formatCurrency(total)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
