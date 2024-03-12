import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
import VectorIcon from "../assets/images/Vector.svg";
import Cards from "../cards/index";
import axios from "axios";

const Filter = () => {
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filteredData, setFilteredData] = useState(cardData);
  useEffect(() => {
    axios
      .get(`https://demo6346898.mockable.io/filterjobdata`)
      .then((res) => setFilterData(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChecked = (event, val) => {
    const isChecked = event.target.checked;
    console.log(event.target.value);
    console.log(isChecked);
    if (isChecked) {
      setSelectedCompanies([...selectedCompanies, val]);
    } else {
      setSelectedCompanies(
        selectedCompanies.filter((company) => {
          console.log(company, "company");
          return company !== val;
        })
      );
    }
  };
  console.log(selectedCompanies, "selectedCompanies");
  useEffect(() => {
    if (selectedCompanies.length === 0) {
      setFilteredData(cardData);
    } else {
      const filtered = cardData.filter((item) =>
        selectedCompanies.includes(item.companyName)
      );
      setFilteredData(filtered);
    }
  }, [selectedCompanies]);

  return (
    <>
      <div className="w-full md:w-1/4 p-6  mt-5">
        <div className="shadow-md  bg-gray-800 border-none rounded text-white">
          <div className="flex justify-between p-4 ">
            <h3 className="text-xl">Filters by</h3>
            <span className="underline">Clear all</span>
          </div>
          {filterData?.map((val, id) => (
            <div className="border-t border-white" key={id}>
              <div className="w-full p-4">
                <div className="flex justify-between">
                  <p>{val?.title}</p>
                  <img src={VectorIcon} />
                </div>
                {val?.company?.map((val, id) => (
                  <div className="flex gap-2 mt-2">
                    <Checkbox
                      key={id}
                      onChange={(e) => handleChecked(e, val.value)}
                    />
                    <p>{val?.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cards
        selectedCompanies={selectedCompanies}
        cardData={cardData}
        filteredData={filteredData}
        setFilteredData={setFilteredData}
      />
    </>
  );
};

export default Filter;

const cardData = [
  {
    id: "00",
    jobTitle: "Junior Art Assistant",
    companyName: "Amazon",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "01",
    jobTitle: "Junior Frontend developer",
    companyName: "CVS Health",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "02",
    jobTitle: "UI developer",
    companyName: "Toyoto",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "03",
    jobTitle: "Software  Engineer",
    companyName: "Apple",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "04",
    jobTitle: "Junior UI/UX desiner",
    companyName: "Apple Incorporations",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "05",
    jobTitle: "Quality Analyst",
    companyName: "Apple Incorporations",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "06",
    jobTitle: "Software Developer",
    companyName: "Apple Incorporations",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "07",
    jobTitle: "Junior Art Assistant",
    companyName: "Apple Incorporations",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
  {
    id: "08",
    jobTitle: "Junior Backend Developer",
    companyName: "Apple Incorporations",
    locations: "Mumbai, Maharashtra, India",
    postedDays: "Posted 1 day ago",
    applications: "10 applications",
    skillsMatch: "78",
  },
];
