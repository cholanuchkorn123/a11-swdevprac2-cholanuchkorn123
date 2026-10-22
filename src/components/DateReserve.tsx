'use client';

import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Dayjs } from 'dayjs';

export default function DateReserve() {
  const [reserveDate, setReserveDate] = useState<Dayjs | null>(null);
  const [venue, setVenue] = useState<string>('Bloom');

  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row flex-wrap justify-center items-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="bg-white"
          value={reserveDate}
          onChange={(val) => setReserveDate(val)}
        />
      </LocalizationProvider>

      <TextField
        variant="standard"
        name="Name-Lastname"
        label="Name-Lastname"
      />

      <TextField
        variant="standard"
        name="Contact-Number"
        label="Contact-Number"
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
  );
}
