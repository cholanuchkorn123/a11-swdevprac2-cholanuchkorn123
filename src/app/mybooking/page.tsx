import BookingList from '@/components/BookingList';

export default function MyBookingPage() {
  return (
    <main className="min-h-screen pt-[60px] p-5 bg-neutral-100 text-black">
      <h1 className="text-3xl font-bold text-gray-800 my-4 text-center">
        My Booking
      </h1>
      <BookingList />
    </main>
  );
}
