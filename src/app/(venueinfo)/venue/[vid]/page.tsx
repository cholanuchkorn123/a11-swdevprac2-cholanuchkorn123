import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({
    params,
}: {
    params: Promise<{ vid: string }>;
}) {
    const { vid } = await params;
    const venueDetail = await getVenue(vid);
    const venue: VenueItem = venueDetail.data;

    return (
        <main className="p-8 min-h-screen bg-neutral-100 text-black text-center">
            <h1 className="text-3xl font-bold text-indigo-900 mb-6">{venue.name}</h1>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-center">
                <Image
                    src={venue.picture}
                    alt={venue.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
                />
                <div className="text-left md:w-1/2 space-y-1 text-gray-700">
                    <div>Name: {venue.name}</div>
                    <div>Address: {venue.address}</div>
                    <div>District: {venue.district}</div>
                    <div>Province: {venue.province}</div>
                    <div>Postal Code: {venue.postalcode}</div>
                    <div>Tel: {venue.tel}</div>
                    <div>Daily Rate: {venue.dailyrate}</div>
                </div>
            </div>
        </main>
    );
}
