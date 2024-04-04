import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const DeleteCart = ({ pizzaId }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(deleteItem(pizzaId))}
      className="inline-block rounded-full bg-yellow-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-5 md:py-2.5"
    >
      Delete
    </button>
  );
};

export default DeleteCart;
