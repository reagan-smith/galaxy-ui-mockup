import * as React from "react";
import { listOfFilters } from "./listOfFilters";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Navbar } from "react-bootstrap";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import { includes } from "lodash";

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

export default function FilterPage() {
  const classes = useStyles();
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

  const removeFilter = (headerName) => {
    setDisplayedFilters(
      displayedFilters.filter((filter) => filter.columnHeader !== headerName)
    );
  };

  const enumSelect = (filter) => {
    const optionsObj = filter.possibleValues.map((val) => {
      return { value: val, label: val };
    });
    return (
      <div className="filter-grouping">
        <div className="filter-header">
          {filter.columnDisplayName}
          {!filter.showByDefault && (
            <div
              style={{
                cursor: "pointer",
                float: "right",
                color: "#bbb",
                fontWeight: "bold",
                marginRight: "3px",
              }}
              onClick={() => removeFilter(filter.columnHeader)}
            >
              &#10006;
            </div>
          )}
        </div>
        <Select
          isMulti
          value={selectedObjects[filter.columnHeader]}
          onChange={(event) => handleChange(event, filter.columnHeader)}
          options={optionsObj}
          placeholder=""
        />
      </div>
    );
  };

  const dateSelect = (filter) => (
    <div className="filter-grouping date-range">
      <div className="filter-header">{filter.columnDisplayName}</div>
      <div style={{ display: "flex" }}>
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
        <span
          style={{
            paddingRight: "13px",
            fontSize: "20px",
            paddingLeft: "12px",
          }}
        >
          &#129046;
        </span>
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
    if (typeof event.value !== "string") {
      const filterToAdd = listOfFilters.filter(
        (filter) => event.value[0] === filter.columnHeader
      );
      setDisplayedFilters(displayedFilters.concat(filterToAdd));
      setSelectedObjects({
        ...selectedObjects,
        [event.value[0]]: [{ label: event.value[1], value: event.value[1] }],
      });
    } else {
      const filterToAdd = listOfFilters.filter(
        (filter) => event.value === filter.columnHeader
      );
      setDisplayedFilters(displayedFilters.concat(filterToAdd));
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
        <Select
          placeholder=""
          value={[]}
          onChange={addNewFilterCallback}
          options={options}
        />
      </div>
    );
  };

  return (
    <div>
      <Navbar bg="#591c2c" variant="dark" style={{ background: "#591c2c" }}>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="\GALAXYLOGOREVERSENOBG.png"
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
        <div className="col-9">{JSON.stringify(selectedObjects)}</div>
      </div>
    </div>
  );
}
