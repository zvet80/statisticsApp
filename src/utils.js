export const sortArrayBy = (array, by, asc = false) => {
  return JSON.parse(JSON.stringify(array)).sort((a, b) => asc ? a[by] - b[by] : b[by] - a[by]);
};

export const formatDate = (dateString) => (new Date(dateString)).toLocaleDateString();

export const formatNumber = (number) => number.toLocaleString("en-US");
