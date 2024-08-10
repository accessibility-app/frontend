import { places } from '../lib/data/places';

export const search = (key: string) => {
  const result = places.filter((place) =>
    place.name.toLowerCase().includes(key.toLowerCase())
  );

  return result;
};
