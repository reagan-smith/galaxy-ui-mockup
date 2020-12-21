import Head from "next/head";
import * as React from "react";
import { listOfFilters } from "./listOfFilters";
import MenuItem from "@material-ui/core/MenuItem";
import Chip from "@material-ui/core/Chip";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Navbar } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { filter, includes } from "lodash";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      transform: "translate(-9px, 42px)",
      transformOrigin: 0,
    },
  },
};

export default function FilterPage() {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedObjects, setSelectedObjects] = React.useState({});
  const [displayedFilters, setDisplayedFilters] = React.useState(
    listOfFilters.filter((filter) => filter.showByDefault)
  );

  const handleChange = (event, columnHeader) => {
    setSelectedObjects({
      ...selectedObjects,
      [columnHeader]: event,
    });
  };

  const handleToggle = (columnHeader) => {
    setSelectedObjects({
      ...selectedObjects,
      [columnHeader]: !selectedObjects[columnHeader],
    });
  };

  const enumSelect = (filter) => {
    const optionsObj = filter.possibleValues.map((val) => {
      return { value: val, label: val };
    });
    return (
      <div className="filter-grouping">
        <div className="filter-header">{filter.columnDisplayName}</div>
        <Select
          isMulti
          value={selectedObjects[filter.columnHeader]}
          onChange={(event) => handleChange(event, filter.columnHeader)}
          options={optionsObj}
        />
      </div>
    );
  };

  const dateSelect = (filter) => (
    <div className="filter-grouping">
      <div className="filter-header">{filter.columnDisplayName}</div>
      <TextField
        id={filter.columnHeader}
        style={{ width: "100%" }}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );

  const booleanSelect = (filter) => (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={selectedObjects[filter.columnHeader]}
            onChange={() => handleToggle(filter.columnHeader)}
          />
        }
        label="Show only Prod Data"
        style={{
          paddingLeft: "1rem",
          color: "hsl(0,0%,50%)",
          marginBottom: 0,
          marginTop: "0.5rem",
        }}
      />
    </FormGroup>
  );

  const inputType = (filter) => {
    switch (filter.columnType) {
      case "enum":
        return enumSelect(filter);
      case "string":
        return enumSelect(filter);
      case "dateRange":
        return dateSelect(filter);
      case "boolean":
        return booleanSelect(filter);
      default:
        return enumSelect(filter);
    }
  };

  const addNewFilterCallback = (event) => {
    const filterToAdd = listOfFilters.filter((filter) =>
      event.value.includes(filter.columnHeader)
    );
    setDisplayedFilters(displayedFilters.concat(filterToAdd));
    if (typeof event.value !== "string") {
      setSelectedObjects({
        ...selectedObjects,
        [event.value[0]]: [{ label: event.value[1], value: event.value[1] }],
      });
    }
  };

  const addNewFilters = () => {
    const filtersToAdd = listOfFilters.filter(
      (filter) => !includes(displayedFilters, filter)
    );
    const options = filtersToAdd
      .map((filter) => {
        if (filter.columnType == "enum") {
          return filter.possibleValues.map((val) => {
            return {
              value: [filter.columnHeader, val],
              label: `${filter.columnDisplayName}: ${val}`,
            };
          });
        }
        return {
          value: filter.columnHeader,
          label: filter.columnDisplayName,
        };
      })
      .flat();
    return (
      <div className="filter-grouping">
        <div
          style={{
            fontSize: "16px",
          }}
        >
          Add New Filter
        </div>
        <Select value={[]} onChange={addNewFilterCallback} options={options} />
      </div>
    );
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/galaxy-logo.jpg"
            width="348"
            height="68"
            style={{ paddingLeft: "1rem" }}
          />{" "}
        </Navbar.Brand>
      </Navbar>
      <div style={{ display: "flex" }}>
        <div
          className="col-3"
          style={{
            display: "grid",
            borderRight: "solid 1px #ddd",
            paddingTop: "1rem",
            height: "fit-content",
          }}
        >
          {displayedFilters.map((filter) => inputType(filter))}
          <div style={{ borderBottom: "solid 1px #ddd", height: "1.5rem" }} />
          {addNewFilters()}
        </div>
        <div className="col-9">
          {/* <div style={{ height: "5rem", fontSize: "24px", background: "#ccc" }}>
            SUMMARY INFO : how many rows etc
          </div>
          <img
            alt=""
            src="/01_graph_dashboard.png"
            width="1000"
            height="692"
            style={{ paddingLeft: "1rem" }}
          />{" "} */}
          {JSON.stringify(selectedObjects)}
        </div>
      </div>
    </div>
  );
}
