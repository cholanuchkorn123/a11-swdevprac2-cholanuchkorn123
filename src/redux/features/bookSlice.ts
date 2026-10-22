import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BookState {
  bookItems: BookingItem[];
}

const initialState: BookState = {
  bookItems: [],
};

export const bookSlice = createSlice({
  name: 'bookSlice',
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const newItem = action.payload;
      // If the user books the same venue on the same date again,
      // the new booking data replaces the old one.
      const existingIndex = state.bookItems.findIndex(
        (item) => item.venue === newItem.venue && item.bookDate === newItem.bookDate
      );
      if (existingIndex >= 0) {
        state.bookItems[existingIndex] = newItem;
      } else {
        state.bookItems.push(newItem);
      }
    },
    removeBooking: (state, action: PayloadAction<BookingItem>) => {
      const target = action.payload;
      state.bookItems = state.bookItems.filter(
        (item) =>
          !(
            item.nameLastname === target.nameLastname &&
            item.tel === target.tel &&
            item.venue === target.venue &&
            item.bookDate === target.bookDate
          )
      );
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
