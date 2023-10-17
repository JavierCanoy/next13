"use client";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function ComboBox() {
  const [yardValue, setYardValue] = React.useState("Yes");
  const [garageVaue, setGarageVaue] = React.useState("Yes");
  const [parkingValue, setParkingValue] = React.useState("Yes");
  const [assistance, setAssistance] = React.useState("Yes");

  const handleChangeYard = (event) => {
    setYardValue(event.target.value);
  };
  const handleChangeGarage = (event) => {
    setGarageVaue(event.target.value);
  };
  const handleChangePaking = (event) => {
    setParkingValue(event.target.value);
  };
  const handleChangeAssistance = (event) => {
    setAssistance(event.target.value);
  };

  return (
    <div className=" grid grid-flow-row auto-rows-max ">
      <div className="Property flex mx-5  gap-5">
        <label className=" my-auto  ">Property Type</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={propertyType}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Property" />}
          className=" my-10  flex "
        />
      </div>

      <div className="Rooms flex gap-16  mx-5 ">
        <label className=" my-auto   ">Room(s)</label>
        <Autocomplete
          disablePortal
          id="combo-box-demo-2"
          options={rooms}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Rooms" />}
          className=" my-10 flex "
        />
      </div>

      <div className="Baths flex gap-16  mx-5 ">
        {/* <label className="flex items-center ">Baths(s)</label> */}
        <label className="  my-auto  ">Baths(s)</label>

        <Autocomplete
          disablePortal
          id="combo-box-demo-2"
          options={baths}
          sx={{ width: 250 }}
          renderInput={(params) => <TextField {...params} label="Baths" />}
          className=" my-10  "
        />
      </div>
      {/* radio btn*/}
      <div className="Backyard grid grid-cols-12 ">
        <div className=" grid col-span-6 content-center ">
          <label className=" mx-5 ">Backyard</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={yardValue}
              onChange={handleChangeYard}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Garage Backyard grid grid-cols-12 " >
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5 ">Garage</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={garageVaue}
              onChange={handleChangeGarage}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Parking    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5 ">Parking</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={parkingValue}
              onChange={handleChangePaking}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Assistance  grid grid-cols-12">
        <div className=" grid col-span-6 content-center">
          <label className="mx-5 ">Assistance</label>
        </div>
        <div className="col-span-6 ">
          <FormControl >
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={assistance}
              onChange={handleChangeAssistance}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="male" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const propertyType = [
  { id: 1, label: "House" },
  { id: 2, label: "Office" },
  { id: 3, label: "Room" },
];

const rooms = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
];

const baths = [
  { id: 1, label: "1" },
  { id: 2, label: "2" },
  { id: 3, label: "3" },
  { id: 4, label: "4" },
  { id: 5, label: "5" },
];
