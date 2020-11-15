import { sortArrayBy, formatDate, formatNumber } from "../utils";

export const from = "2020-08-01T00:00:00Z";
export const to = "2020-11-01T00:00:00Z";
export const historySubtitle = `Confirmed cases from ${formatDate(from)} to ${formatDate(to)}`;

export const detailsMappingConfig = (item, onClick) => ({
  title: item.Country,
  subtitle: formatDate(item.Date),
  button: {
    label: "History",
    onClick: onClick
  },
  details: [
    {
      title: "New",
      elements: [
        {
          title: "Confirmed",
          data: formatNumber(item.NewConfirmed),
          color: "purple"
        },
        {
          title: "Recovered",
          data: formatNumber(item.NewRecovered),
          color: "#62D9C6"
        },
        {
          title: "Deaths",
          data: formatNumber(item.NewDeaths),
          color: "black"
        }
      ]
    },
    {
      title: "Total",
      elements: [
        {
          title: "Confirmed",
          data: formatNumber(item.TotalConfirmed),
          color: "purple"
        },
        {
          title: "Recovered",
          data: formatNumber(item.TotalRecovered),
          color: "#62D9C6"
        },
        {
          title: "Deaths",
          data: formatNumber(item.TotalDeaths),
          color: "black"
        }
      ]
    }
  ]
}
);

export const historyMappingConfig = (data) => {
  const sorted = sortArrayBy(data, "Cases");
  const highest = sorted[0].Cases;

  return { history: sortArrayBy(data, "Date").map(d => d.Cases / highest * 100), highest: formatNumber(highest) };
};

export const mapListData = (data) => {
  return data.map(d => ({ ...d, title: d.Country, subtitle: formatNumber(d.TotalConfirmed) }));
};
