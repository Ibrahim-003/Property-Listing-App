import {useFetchProperties} from "../../hooks/useFetchProperties";
import PropertyFilter from "./filter/PropertyFilter";
import PropertyHeader from "./header/PropertyHeader";
import PropertyList from "./properties/PropertyList";
import { API_ENDPOINTS } from "../../contants/api";
import { usePropertiesFilter } from "../../hooks/usePropertiesFilter";

const Property: React.FC = () => {
    const { properties, isLoading, error } = useFetchProperties(API_ENDPOINTS.PROPERTIES);
  const {
    filteredProperties,
    arrayLocations,
    listLocations,
    handleListLocations,
    allProperties,
    handleViewAll,
    isSuperhost,
    handleIsSuperhost,
    arrayBedroomsNumber,
    selectedBedroom,
    handleSelectedBedrooms,
  } = usePropertiesFilter(properties);
  return (
    <section className='relative w-full max-w-[1220px] mx-auto z-40 px-4 pt-8 flex flex-col gap-6 sm:px-6 sm:gap-12 md:pt-20 md:px-8 lg:pt-26 lg:px-10 xl:pt-40'>
      <PropertyHeader />
      <PropertyFilter
        locations={arrayLocations}
        listedLocations={listLocations}
        handleListLocations={handleListLocations}
        allProperties={allProperties}
        handleViewAll={handleViewAll}
        isSuperhost={isSuperhost}
        handleIsSuperhost={handleIsSuperhost}
        bedrooms={arrayBedroomsNumber}
        selectedBedrooms={selectedBedroom}
        handleSelectedBedrooms={handleSelectedBedrooms}
      />
      {isLoading && (<p>Loading...</p>)}
      {error && (<p>{error}</p>)}
      {filteredProperties && <PropertyList properties={filteredProperties} />}
    </section>
  );
};

export default Property;
