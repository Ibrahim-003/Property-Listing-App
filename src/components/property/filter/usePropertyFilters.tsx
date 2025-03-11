import { useState, useMemo } from "react";
import { Property } from "../../../types/Property";

export const usePropertyFilters = (properties: Property[]) => {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [showSuperhost, setShowSuperhost] = useState(false);

  const locations = useMemo(
    () => [...new Set(properties.map((p) => p.location))],
    [properties]
  );

  const filteredProperties = useMemo(
    () =>
      properties.filter((property) => {
        const locationMatch =
          selectedLocations.length === 0 ||
          selectedLocations.includes(property.location);
        const superhostMath = !showSuperhost || property.superhost;

        return locationMatch && superhostMath;
      }),
    [properties, selectedLocations, showSuperhost]
  );

  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((loc) => loc !== location)
        : [...prev, location]
    );
  };

  return {
    locations,
    selectedLocations,
    filteredProperties,
    handleLocationChange,
    showSuperhost,
    setShowSuperhost
  }
};
