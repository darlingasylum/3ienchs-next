import { combineReducers } from 'redux';
import basket from './basket';

// L'état de départ peut être un combiner de plusieurs reducers pour différencier plusieurs logique dans notre code
// Pour l'instant nous n'utiliserons qu'un seul reducer (App)
const rootReducer = combineReducers({
  basket
});

// On exporte notre rootReducer pour pouvoir l'importer quand nous allons initialiser notre app
export default rootReducer;
