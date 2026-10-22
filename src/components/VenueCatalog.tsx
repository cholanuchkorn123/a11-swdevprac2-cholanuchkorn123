import Card from "./Card";

export default async function VenueCatalog({
    venuesJson,
}: {
    venuesJson: Promise<VenueJson>;
}) {
    const venuesJsonReady = await venuesJson;

    return (
        <section>
            <div className="text-center text-gray-700 mb-4">
                Explore {venuesJsonReady.count} fabulous venues in our venue catalog
            </div>
            <div className="flex w-full flex-wrap justify-around gap-8">
                {venuesJsonReady.data.map((venueItem: VenueItem) => (
                    <Card
                        key={venueItem.id}
                        vid={venueItem.id}
                        venueName={venueItem.name}
                        imgSrc={venueItem.picture}
                    />
                ))}
            </div>
        </section>
    );
}
