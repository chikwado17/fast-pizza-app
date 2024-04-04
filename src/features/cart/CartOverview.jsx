import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartPrices, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  //calculating the number of pizza in the cart from redux
  const totalQuantityItemInCart = useSelector(getTotalCartQuantity);

  //calculating the total price of items in the cart
  const totalPriceItemInCart = useSelector(getTotalCartPrices);

  if (!totalPriceItemInCart) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantityItemInCart} pizzas</span>
        <span>{formatCurrency(totalPriceItemInCart)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
