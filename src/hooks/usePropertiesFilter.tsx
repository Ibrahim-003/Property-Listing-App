import {useState, useMemo} from "react";
import { Property } from "../types/Property";

export const usePropertiesFilter = (properties: Property[]) => {
    const [listLocations, setListLocations] = useState<string[]>([]);
    const [isSuperhost, setIsSuperhost] = useState(false);
    const [selectedBedroom, setSelectedBedrooms] = useState(0);
    const allProperties = listLocations.length === 0 && !isSuperhost && !selectedBedroom;

    const arrayLocations = useMemo(() => [...new Set(properties.map(property => property.location))] , [properties]);

    const arrayBedroomsNumber = useMemo(() => [...new Set(properties.map(property => property.capacity.bedroom))].sort(), [properties])

    const handleListLocations = (newLocation: string) => {
        setListLocations(prevLocations => {
            const isInclude = prevLocations.includes(newLocation);
            const newList = isInclude ? prevLocations.filter(location => location !== newLocation) : [...prevLocations, newLocation]

            return newList
        })
    }

    const handleIsSuperhost = (newState: boolean) => {
        setIsSuperhost(newState);
    }

    const handleSelectedBedrooms = (newSelectedBedroom: number) => {
        setSelectedBedrooms(newSelectedBedroom)
    }

    const handleViewAll = () => {
      setListLocations([]);
      setIsSuperhost(false);
      setSelectedBedrooms(0);
    };

    const filteredProperties = properties.filter(property => {
        const byLocations = listLocations.length === 0 || listLocations.includes(property.location);
        const bySuperhost = !isSuperhost || property.superhost;
        const byBedroomsNumber = !selectedBedroom || property.capacity.bedroom === selectedBedroom;

        return byLocations && bySuperhost && byBedroomsNumber;
    });

    return {filteredProperties, arrayLocations, listLocations, handleListLocations, allProperties, handleViewAll, isSuperhost, handleIsSuperhost, arrayBedroomsNumber, selectedBedroom, handleSelectedBedrooms}
}
