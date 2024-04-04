import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

const UpdateCartQuantity = ({ pizzaId }) => {
  const dispatch = useDispatch();

  const currentCartQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="space-x-2">
      <button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        className="inline-block rounded-full bg-yellow-400 px-2.5  py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3 md:py-2"
      >
        -
      </button>
      <span className=" p-1 text-sm font-semibold">{currentCartQuantity}</span>
      <button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        className="inline-block rounded-full bg-yellow-400 px-2.5 py-1 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-3 md:py-2"
      >
        +
      </button>
    </div>
  );
};

export default UpdateCartQuantity;
