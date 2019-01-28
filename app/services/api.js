import queryString from 'query-string';

const dwellingsBaseUrl = 'https://dwellings-ratelimit.services.opendoor.com/api/v1/';
const defaultMarket = 'riverside';

export async function searchRegions(q) {
  try {
    const params = queryString.stringify({
      q: q.trim(),
      market: defaultMarket,
      result_format: 'geojson',
      simplify_shapes: '',
      min_sq_mi: 0.5,
      limit: 8,
    });
    const response = await fetch(`${dwellingsBaseUrl}regions/search?${params}`);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log("searchRegions Error: ", e);
    return false;
  }
};



/* Static API stub for houses list */
const houses = [
  {
    id: 0,
    location: {
      latitude: 37.792502,
      longitude: -122.401860
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 1,
    location: {
      latitude: 37.793502,
      longitude: -122.402860
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 2,
    location: {
      latitude: 37.793522,
      longitude: -122.402960
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 3,
    location: {
      latitude: 37.793532,
      longitude: -122.401860
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 4,
    location: {
      latitude: 37.793582,
      longitude: -122.402890
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 5,
    location: {
      latitude: 34.107551, 
      longitude: -118.266056
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 6,
    location: {
      latitude: 34.107561, 
      longitude: -118.266156
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 7,
    location: {
      latitude: 34.108561, 
      longitude: -118.265156
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 8,
    location: {
      latitude: 34.117561, 
      longitude: -118.296156
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 9,
    location: {
      latitude: 34.088806,
      longitude: -118.365830
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 10,
    location: {
      latitude: 34.087257,
      longitude: -118.357600
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
  {
    id: 11,
    location: {
      latitude: 34.081494,
      longitude: -118.367491
    },
    addressLine1: "34536 Yale Dr",
    addressLine2: "",
    city: "Yucaipa",
    about: "Built in 2003, this Yucaipa two-story offer a two-car garage. Upgraded features include new flooring in select rooms. This home is part of an HOA.",
  },
];

export function getHouses() {
  return houses;
}
