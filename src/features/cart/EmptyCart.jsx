import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="py-4 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
