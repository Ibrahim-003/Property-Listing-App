import { Property } from "../../../types/Property";
import PropertyCard from "./PropertyCard";

interface PropertyListProps {
    properties: Property[];
}

const PropertyList: React.FC<PropertyListProps> = ({properties}) => {
    return (
        <section className="text-sky-light">
            <h2 className="font-bold mb-8">Over 200 stays</h2>
            <section className="grid grid-cols-(--properties-listing-grid) place-items-center gap-y-14 gap-x-8">
                {properties.length > 0 ? properties.map((property: Property)  => (
                    <PropertyCard property={property} key={property.id} />
                )) : <p>Properties Not Found</p>}
            </section>
        </section>
    )
}

export default PropertyList;
