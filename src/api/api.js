import { groupBy, map, sortBy } from "lodash";

const getGrowth = () =>
  fetch("/htb-employees.json")
    .then((res) => res.json())

    .then((data) => {
      const datesOnly = map(data, (element) => {
        const [, month, year] = element["Hire Date"].split("/");
        const date = new Date(year, month - 1);
        return {
          date: Date.parse(date),
          name: `${month}/${year}`,
        };
      });

      const sortedDates = sortBy(datesOnly, "date");

      const groupedDates = groupBy(sortedDates, "date");

      let count = 0;
      const hiresPerMonth = map(groupedDates, (element) => {
        count = count + element.length;
        return { x: element[0].date, y: count, name: element[0].name };
      });

      return hiresPerMonth;
    });

const getGenders = () =>
  fetch("/htb-employees.json")
    .then((res) => res.json())
    .then((data) => {
      const genders = groupBy(data, "Gender");
      return [
        {
          name: "Male",
          y: genders["Male"].length,
        },
        { name: "Female", y: genders["Female"].length },
      ];
    });

const getDepartments = () =>
  fetch("/htb-employees.json")
    .then((res) => res.json())
    .then((data) => {
      const sortedData = sortBy(data, "Department");

      const departmentsData = groupBy(sortedData, "Department");

      return Object.keys(departmentsData).map((deptName) => {
        return {
          name: deptName.replace("#", " "),
          data: [departmentsData[deptName].length],
        };
      });
    });

const getCountries = () =>
  fetch("/htb-employees.json")
    .then((res) => res.json())
    .then((data) => {
      const countryData = groupBy(data, "Country");

      return Object.keys(countryData).map((str) => {
        return {
          "hc-key": str,
          value: countryData[str].length,
        };
      });
    });

export { getGrowth, getGenders, getDepartments, getCountries };
