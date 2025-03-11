import { Property } from "../../../types/Property";
import StartField from "../../../assets/Starfill.svg?react";
import HomeSvg from "../../../assets/Home_duotone.svg?react";
import UserSvg from "../../../assets/User_alt_duotone.svg?react";

type PropertyCardProps = {
  property: Property;
};

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { people, bedroom } = property.capacity;
  return (
    <article className='relative w-full max-w-[357px] bg-deep-space rounded-lg shadow-md overflow-hidden'>
      <img src={property.image} alt={property.title} className='w-full' />
      {property.superhost && (
        <div className='absolute z-50 top-2 left-2 bg-midnight-opacity rounded-full px-3 py-1 inline-flex justify-center items-center'>
          <span className='text-xs font-bold'>Superhost ⭐</span>
        </div>
      )}
      <div className='p-4 border-x border-b border-slate-dark rounded-b-xl'>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <h3 className='font-bold'>{property.title}</h3>
            <p>{property.description}</p>
          </div>
          <div className='flex gap-4'>
            <div className='flex items-center gap-1'>
              <HomeSvg />
              <span className='text-xs'>{bedroom} bedroom</span>
            </div>
            <div className='flex items-center gap-1'>
              <UserSvg />
              <span className='text-xs'>{people} guests</span>
            </div>
          </div>
        </div>
        <div className='w-full h-[1px] bg-slate-dark mt-4 mb-5'></div>
        <div className='flex justify-between items-center'>
          <div>
            <p className='font-light'>
              <span className='text-xl font-bold'>${property.price}</span>/night
            </p>
          </div>
          <div className='flex item-center gap-1'>
            <StartField />
            <span>{property.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
