'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { removeBooking } from '@/redux/features/bookSlice';

export default function BookingList() {
  const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems);
  const dispatch = useDispatch();

  if (!bookItems || bookItems.length === 0) {
    return (
      <div className="text-center text-gray-600 py-10">No Venue Booking</div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-3">
      {bookItems.map((item: BookingItem, index: number) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-4 flex flex-row justify-between items-center text-gray-800"
        >
          <div>
            <div className="font-semibold">{item.nameLastname}</div>
            <div>{item.tel}</div>
            <div>{item.venue}</div>
            <div>{item.bookDate}</div>
          </div>
          <button
            type="button"
            onClick={() => dispatch(removeBooking(item))}
            className="rounded-md bg-red-600 hover:bg-red-700 px-4 py-2 text-white shadow-sm font-medium"
          >
            Cancel
          </button>
        </div>
      ))}
    </div>
  );
}
