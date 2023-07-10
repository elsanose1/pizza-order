import React from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

const DeleteItemButton = ({ id }) => {
  const dispatch = useDispatch();
  function deleteItemHandler() {
    dispatch(deleteItem(id));
  }
  return (
    <Button onClick={deleteItemHandler} type="small">
      Delete
    </Button>
  );
};

export default DeleteItemButton;
