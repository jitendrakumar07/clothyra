// src/context/useShop.js
import { useContext } from 'react';
import { ShopContext } from './ShopProvider';

export const useShop = () => useContext(ShopContext);
