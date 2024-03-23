import { Action, ThunkAction, combineSlices, configureStore } from "@reduxjs/toolkit"
import { bookSlice } from "./features/bookSlice";

const rootReducer = combineSlices(bookSlice);

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

// Infer the return type of `makeStore`
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;