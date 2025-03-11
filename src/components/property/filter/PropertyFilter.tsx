import React from "react";
import SwitchButton from "../../ui/SwitchButton";
import Dropdown from "../../ui/Dropdown";

interface PropertyFilterProps {
  locations: string[];
  listedLocations: string[];
  handleListLocations: (newLocation: string) => void;
  allProperties: boolean;
  handleViewAll: () => void;
  handleIsSuperhost: (newState: boolean) => void;
  isSuperhost: boolean;
  bedrooms: number[];
  selectedBedrooms: number;
  handleSelectedBedrooms: (newSelectedBedroom: number) => void;
}

const PropertyFilters: React.FC<PropertyFilterProps> = ({
  locations,
  listedLocations,
  handleListLocations,
  allProperties,
  handleViewAll,
  isSuperhost,
  handleIsSuperhost,
  bedrooms,
  selectedBedrooms,
  handleSelectedBedrooms,
}) => {
  return (
    <section className='bg-midnight-opacity px-4 py-6 border border-slate-dark rounded-xl text-sky-light flex flex-col items-center gap-6 md:flex-row md:justify-between md:mt-12 md:px-5 lg:px-10 lg:py-8 lg:mt-20 xl:mt-35'>
      <div className='flex flex-wrap gap-4 justify-center sm:gap-8 md:w-3/4 md:max-w-[460px] md:gap-3 md:justify-between'>
        <button
          className={`p-[6px] text-sm font-medium ${
            allProperties && "bg-slate-dark rounded"
          }`}
          onClick={() => handleViewAll()}
        >
          All Stays
        </button>
        {locations?.map((location) => (
          <button
            key={location}
            className={`p-[6px] text-sm font-medium ${
              listedLocations.includes(location) && "bg-slate-dark rounded"
            }`}
            onClick={() => handleListLocations(location)}
          >
            {location}
          </button>
        ))}
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5 md:flex-row'>
        <div className='flex items-center gap-2'>
          <SwitchButton isOn={isSuperhost} onToggle={handleIsSuperhost} />
          <span className='text-sm'>Superhost</span>
        </div>
        <Dropdown
          options={bedrooms}
          selectedValue={selectedBedrooms}
          onChange={(value) => {
            handleSelectedBedrooms(Number(value));
          }}
          placeholder='Bedrooms number'
        />
      </div>
    </section>
  );
};

export default PropertyFilters;
