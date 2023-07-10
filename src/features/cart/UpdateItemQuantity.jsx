import React from 'react';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQnt,
  getCurrentQntById,
  increaseItemQnt,
} from './cartSlice';

const UpdateItemQuantity = ({ id }) => {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQntById(id));
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button
        disabled={currentQuantity < 2}
        type="round"
        onClick={() => dispatch(decreaseItemQnt(id))}
      >
        -
      </Button>
      <span className="text-sm font-medium md:text-base">
        {currentQuantity}
      </span>
      <Button type="round" onClick={() => dispatch(increaseItemQnt(id))}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
