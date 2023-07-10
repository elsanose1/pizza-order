/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utilis/helpers';
import { addItem, getCurrentQntById } from '../cart/cartSlice';
import DeleteItemButton from '../cart/DeleteItemButton';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQntById(id));
  const isInCart = currentQuantity > 0;
  function addItemHandler() {
    const pizzaItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(pizzaItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? ' opacity-70 grayscale ' : ''}`}
      />
      <div className="flex grow flex-col">
        <p className="font-medium ">{name}</p>
        <p className="text-sm capitalize italic text-stone-500 ">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQuantity id={id} />
              <DeleteItemButton id={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={addItemHandler} type="small">
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
