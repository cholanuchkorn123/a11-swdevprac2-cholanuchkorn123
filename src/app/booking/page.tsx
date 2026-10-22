'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Dayjs } from 'dayjs';
import { addBooking } from '@/redux/features/bookSlice';

export default function BookingPage() {
  const dispatch = useDispatch();

  const [nameLastname, setNameLastname] = useState('');
  const [tel, setTel] = useState('');
  const [venue, setVenue] = useState<string>('Bloom');
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);

  const onBookVenue = () => {
    if (!bookDate) return;
    const bookingItem: BookingItem = {
      nameLastname,
      tel,
      venue,
      bookDate: bookDate.format('YYYY/MM/DD'),
    };
    dispatch(addBooking(bookingItem));
  };

  return (
    <main className="min-h-screen pt-[60px] p-5 flex flex-col items-center bg-neutral-100 text-black">
      <h1 className="text-3xl font-bold text-gray-800 my-4">Venue Booking</h1>

      <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row flex-wrap justify-center items-center">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-white"
            value={bookDate}
            onChange={(val) => setBookDate(val)}
          />
        </LocalizationProvider>

        <TextField
          variant="standard"
          name="Name-Lastname"
          label="Name-Lastname"
          value={nameLastname}
          onChange={(e) => setNameLastname(e.target.value)}
        />

        <TextField
          variant="standard"
          name="Contact-Number"
          label="Contact-Number"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />

        <FormControl variant="standard" className="w-[200px]">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select
            labelId="venue-label"
            id="venue"
            name="venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value as string)}
          >
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>

      <button
        type="button"
        name="Book Venue"
        onClick={onBookVenue}
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-5 py-2 text-white shadow-sm font-medium my-5"
      >
        Book Venue
      </button>
    </main>
  );
}
