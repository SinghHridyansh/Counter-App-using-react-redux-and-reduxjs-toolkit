# Counter App with react-redux and @reduxjs/toolkit

This project consist of 4 files, namely:
-store.js
-CounterSlice.js
-App.js
-index.js

## store.js

Here I'm creating a redux store using the configureStore function from @reduxjs/toolkit.

I'm also passing counterSlice to the created reducer.

### CounterSlice.js

Here in order to define my counterSlice redux slice, I'm using a createSlice from redux toolkit. CreateSlice makes a action type based on reducer.
I'm also exporting increment and decrement with my reducer.
counterSLice is defined with an intial state of 0.
Two reducer namely increment and decrement handle actions.

### App.js

In App.js I have a basic counter setup with a heading and a "</p>" tag to display the updated number. Along with 2 buttos that are triggering increment and decremetn actions from reducers created in createSlice.
useSelector hook is used to access present value of the counter.
useDispatch hook is being used to dispatch actions.

### index.js

In index.js I'm wrapping up my App component inside Provider Component and passing the store as store
#   C o u n t e r - A p p - u s i n g - r e a c t - r e d u x - a n d - r e d u x j s - t o o l k i t  
 