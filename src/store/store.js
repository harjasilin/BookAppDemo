import { createStore, combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import bookReducer from '../reducer/reducer';
import reviewReducer from '../reducer/reviewReducer'
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const rootReducer = combineReducers({
    book: bookReducer,
    review:reviewReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const configureStore = () => {
    return createStore(persistedReducer);
}

export default configureStore;