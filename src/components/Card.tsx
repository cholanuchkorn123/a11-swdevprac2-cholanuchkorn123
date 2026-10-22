"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
    vid: string;
    venueName: string;
    imgSrc: string;
    onRatingChange?: (venueName: string, rating: number) => void;
};

export default function Card({
    vid,
    venueName,
    imgSrc,
    onRatingChange,
}: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    const handleRatingChange = (
        _event: React.SyntheticEvent,
        newValue: number | null
    ) => {
        setRating(newValue);
        if (onRatingChange) {
            onRatingChange(venueName, newValue ?? 0);
        }
    };

    return (
        <InteractiveCard>
            <Link href={`/venue/${vid}`} className="w-full h-[70%] relative rounded-t-lg overflow-hidden block">
                <div className="w-full h-[180px] relative rounded-t-lg">
                    <Image
                        src={imgSrc}
                        alt={venueName}
                        fill={true}
                        className="object-cover rounded-t-lg"
                    />
                </div>
                <div className="text-center text-gray-800 font-semibold text-lg py-2">
                    {venueName}
                </div>
            </Link>
            {onRatingChange ? (
                <div 
                    className="w-full h-[30%] flex justify-center items-center pb-2" 
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                    }}
                >
                    <Rating
                        id={`${venueName} Rating`}
                        name={`${venueName} Rating`}
                        data-testid={`${venueName} Rating`}
                        value={rating}
                        onChange={handleRatingChange}
                    />
                </div>
            ) : null}
        </InteractiveCard>
    );
}
