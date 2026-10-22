"use client";

import React, { useReducer } from "react";
import Card from "./Card";

type Venue = {
    vid: string;
    venueName: string;
    imgSrc: string;
};

type RatingState = Map<string, number>;

type RatingAction =
    | {
        type: "UPDATE_RATING";
        venueName: string;
        rating: number;
    }
    | {
        type: "REMOVE_RATING";
        venueName: string;
    };

const venues: Venue[] = [
    {
        vid: "001",
        venueName: "The Bloom Pavilion",
        imgSrc: "/bloom.jpg",
    },
    {
        vid: "002",
        venueName: "Spark Space",
        imgSrc: "/sparkspace.jpg",
    },
    {
        vid: "003",
        venueName: "The Grand Table",
        imgSrc: "/grandtable.jpg",
    },
];

const initialState: RatingState = new Map(
    venues.map((venue) => [venue.venueName, 0])
);

function ratingReducer(
    state: RatingState,
    action: RatingAction
): RatingState {
    const newState = new Map(state);

    switch (action.type) {
        case "UPDATE_RATING":
            newState.set(action.venueName, action.rating);
            return newState;

        case "REMOVE_RATING":
            newState.delete(action.venueName);
            return newState;

        default:
            return state;
    }
}

export default function CardPanel() {
    const [ratings, dispatch] = useReducer(
        ratingReducer,
        initialState
    );

    const handleRatingChange = (
        venueName: string,
        rating: number
    ) => {
        dispatch({
            type: "UPDATE_RATING",
            venueName,
            rating,
        });
    };

    const totalRating = Array.from(ratings.values()).reduce(
        (sum, rating) => sum + rating,
        0
    );

    return (
        <section>
            <div className="flex w-full flex-wrap justify-center gap-8">
                {venues.map((venue) => (
                    <Card
                        key={venue.vid}
                        vid={venue.vid}
                        venueName={venue.venueName}
                        imgSrc={venue.imgSrc}
                        onRatingChange={handleRatingChange}
                    />
                ))}
            </div>
            <div className="mt-5 pb-8 text-center">
                <div className="text-lg font-semibold mb-3">
                    Venue List with Ratings : {totalRating}
                </div>
                <div className="space-y-1">
                    {Array.from(ratings.entries()).map(
                        ([venueName, rating]) => (
                            <div
                                key={venueName}
                                data-testid={venueName}
                                onClick={() =>
                                    dispatch({
                                        type: "REMOVE_RATING",
                                        venueName,
                                    })
                                }
                                className="cursor-pointer hover:text-red-600 transition-colors"
                            >
                                {venueName} Rating : {rating}
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
