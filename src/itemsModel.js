import { action } from 'easy-peasy';
import { INITIAL_VALUES } from './shared/utils';

export const items = {
  items: INITIAL_VALUES,
  changeParameter: action((state, payload) => {
    state.items[payload.index][payload.fieldId] = payload.value;
    if (payload.duplicado !== -1) {
      if (payload.fieldId === 'leadTime' || payload.fieldId === 'estoqueInicial')
        state.items[payload.duplicado][payload.fieldId] = payload.value;
    }
  }),
  changeLapiseira: action((state, payload) => {
    state.items[0].entradas[payload.index] = payload.value;
  })
}