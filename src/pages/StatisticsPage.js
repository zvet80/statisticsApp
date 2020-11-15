import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header, Button, List, Modal, Card, BarView } from "../components";
import { getAllCountriesData, getCountryHistoryData } from "../services/statistics";
import { sortArrayBy } from "../utils";
import { detailsMappingConfig, historyMappingConfig, mapListData, historySubtitle, from, to } from "./config";

const StatisticsPage = ({ history }) => {
  const [list, setList] = useState([]);
  const [countryData, setCountryData] = useState();
  const [countryHistoryData, setCountryHistory] = useState();

  const query = new URLSearchParams(useLocation().search);
  const country = query.get("country");
  const historyView = query.get("history");

  useEffect(() => {
    getAllCountriesData().then(countries => setList(countries));
  }, []);

  useEffect(() => {
    const countryData = list.find(c => c.Slug === country);
    setCountryData(countryData);
  }, [country, list]);

  useEffect(() => {
    if (historyView && countryData) {
      getCountryHistoryData({ country: countryData.Slug, from, to })
        .then(data => setCountryHistory(historyMappingConfig(data)));
    }
  }, [historyView, countryData]);

  const onSortClick = () => {
    const sorted = sortArrayBy(list, "TotalConfirmed");
    setList(sorted);
  };

  const onItemClick = (item) => {
    history.replace(`/statistics/?country=${item.Slug}`);
  };

  const onHistoryClick = () => {
    history.push(`/statistics/?country=${countryData.Slug}&history=true`);
  };

  const onModalClose = () => {
    history.goBack();
    setCountryHistory(null);
  };

  const countryDetailedData = countryData && detailsMappingConfig(countryData, onHistoryClick);

  return (
    <>
      <Header title="Statistics" />
      <div>
        <div style={styles.container}>
          <div style={styles.listContainer}>
            <Button style={styles.button} label="Sort" onClick={onSortClick} />
            <List list={mapListData(list)} selected={country} onListItemClick={onItemClick}/>
          </div>
          {countryData && (
            <div style={styles.detailsContainer}>
              <Card item={countryDetailedData}/>
            </div>
          )}
        </div>
      </div>
      {historyView && countryHistoryData && (
        <Modal onModalClose={onModalClose}>
          <BarView data={countryHistoryData} title={countryData?.Country} subtitle={historySubtitle}/>
        </Modal>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "50vh"
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    width: "40vw",
    alignItems: "center",
    justifyContent: "space-around"
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "50vw"
  },
  button: {
    marginBottom: 20
  }
};

export default StatisticsPage;
