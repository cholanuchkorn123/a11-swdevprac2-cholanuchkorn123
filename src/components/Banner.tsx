"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const banners = [
    "/img/cover.jpg",
    "/img/cover2.jpg",
    "/img/cover3.jpg",
    "/img/cover4.jpg",
];

export default function Banner() {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const { data: session } = useSession();

    const handleBannerClick = () => {
        setCurrentImage((prev) => (prev + 1) % banners.length);
    };

    const handleSelectVenue = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        router.push("/venue");
    };

    return (
        <div
            className="relative flex h-[500px] cursor-pointer items-center justify-center overflow-hidden text-center text-white"
            onClick={handleBannerClick}
        >
            <img
                src={banners[currentImage]}
                alt="Event venue"
                className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            {session ? (
                <div className="absolute top-5 right-10 z-20 text-xl font-semibold text-cyan-200">
                    Welcome {session.user?.name}
                </div>
            ) : null}
            <div className="relative z-10">
                <h1 className="mb-5 text-5xl font-bold">
                    where every event finds its venue
                </h1>
                <h3 className="text-lg font-bold">
                    Your perfect event starts with the perfect venue.
                    <br />
                    From concerts and weddings to corporate events and private celebrations,
                    <br />
                    we help you find the right place for every special moment.
                </h3>
            </div>
            <button
                type="button"
                onClick={handleSelectVenue}
                className="absolute bottom-6 right-6 z-20 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-black shadow-lg hover:bg-gray-100"
            >
                Select Venue
            </button>
        </div>
    );
}
