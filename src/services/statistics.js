import axios from "axios";

export const getAllCountriesData = async () => {
  return axios.get("https://api.covid19api.com/summary")
    .then(response => response.data.Countries.map(item => ({ ...item, id: item.Slug })));
};

export const getCountryHistoryData = async ({ country, from, to }) => {
  return axios.get(`https://api.covid19api.com/total/country/${country}/status/confirmed?from=${from}&to=${to}`).then(response => response.data);
};
