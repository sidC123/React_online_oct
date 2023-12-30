import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';

export default configureStore({
    reducer: {
        counter: counterSlice
    },
})


// react-redux redux-toolkit
// create store
// create slice
// create action in the slice
// add reducers to the store
// Wrap the App inside Proivder and provide the store to it.

// To get states from store: useSelector
// To dispatch actions: useDispatch