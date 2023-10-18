"use client";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function ComboBox() {
  const [yardValue, setYardValue] = useState(null);
  const [garageVaue, setGarageVaue] = useState(null);
  const [parkingValue, setParkingValue] = useState(null);
  const [assistance, setAssistance] = useState(null);

  const [propertyValue, setPropertyValue] = useState("");
  const [roomValue, setRoomValue] = useState("");
  const [bathValue, setBathValue] = useState("");

  const handleChangeYard = (event) => {
    setYardValue(event.target.value);
  };
  const handleChangeGarage = (event) => {
    setGarageVaue(event.target.value);
    console.log("setGarageVaue", garageVaue);
  };
  const handleChangePaking = (event) => {
    setParkingValue(event.target.value);
  };
  const handleChangeAssistance = (event) => {
    setAssistance(event.target.value);
  };
  const handleChangeProperty = (event, newValue) => {
    console.log("setAssistance", assistance);
    setPropertyValue(newValue.label);
  };

  const handleChangeRooms = (event, newValue) => {
    setRoomValue(newValue.label);
  };
  const handleChangeBaths = (event, newValue) => {
    setBathValue(newValue.label);
  };

  return (
    <div className=" grid grid-flow-row  ">
      <div className="Property flex   gap-5 ">
        <label className=" my-auto  font-semibold">Property Type</label>
        <Autocomplete
          value={propertyValue}
          onChange={handleChangeProperty}
          disablePortal
          id="combo-box-demo"
          options={propertyType}
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Property" />}
          className=" my-3  flex "
          clearIcon={null}
        />
      </div>

      <div className="Rooms flex gap-16   ">
        <label className=" my-auto  font-semibold ">Room(s)</label>
        <Autocomplete
          value={roomValue}
          onChange={handleChangeRooms}
          disablePortal
          id="combo-box-demo-2"
          options={rooms}
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Rooms" />}
          className=" my-3 flex "
          clearIcon={null}
        />
      </div>

      <div className="Baths flex gap-16   ">
        {/* <label className="flex items-center ">Baths(s)</label> */}
        <label className="  my-auto  font-semibold">Baths(s)</label>

        <Autocomplete
          value={bathValue}
          onChange={handleChangeBaths}
          disablePortal
          id="combo-box-demo-2"
          options={baths}
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Baths" />}
          className=" my-3  "
          clearIcon={null}
        />
      </div>

      {/* radio btn*/}
      <div className="Backyard grid grid-cols-12 mt-5">
        <div className=" grid col-span-6 content-center ">
          <label className=" mx-5 font-semibold ">Backyard</label>
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
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Garage Backyard grid grid-cols-12 ">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5 font-semibold ">Garage</label>
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
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Parking    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Parking</label>
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
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div className="Assistance  grid grid-cols-12">
        <div className=" grid col-span-6 content-center">
          <label className="mx-5  font-semibold">
            Assistance <br /> in Moving <br /> Objects?
          </label>
        </div>
        <div className="col-span-6 ">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={assistance}
              onChange={handleChangeAssistance}
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

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
