import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default function VenuePage() {
    const venues = getVenues();

    return (
        <main className="p-5 min-h-screen bg-neutral-100 text-black">
            <h1 className="text-3xl font-bold text-center mb-2 text-indigo-900">
                Select Your Venue
            </h1>
            <Suspense
                fallback={
                    <div className="text-center">
                        Loading ... <LinearProgress />
                    </div>
                }
            >
                <VenueCatalog venuesJson={venues} />
            </Suspense>
        </main>
    );
}
