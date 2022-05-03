import { createStore } from 'easy-peasy';
import { items } from '../shared/itemsModel';

const models = {
  items
};

export const store = createStore(models, {
  name: 'mrp'
});