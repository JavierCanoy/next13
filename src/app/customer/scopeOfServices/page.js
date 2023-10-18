"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Dashboard from "../page";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Page() {
  const [kitchenStatus, setKitchenStatus] = useState(null);
  const [diningStatus, setDiningStatus] = useState(null);
  const [hallwaysStatus, setHallwaysStatus] = useState(null);
  const [terraceStatus, setTerraceStatus] = useState(null);
  const [balconyStatus, setBalconyStatus] = useState(null);
  const [patioStatus, setPatioStatus] = useState(null);
  const [storageStatus, setStorageStatus] = useState(null);
  const [backyardStatus, setBackyardStatus] = useState(null);
  const [parkingStatus, setParkingStatus] = useState(null);
  const [garageStatus, setGarageStatus] = useState(null);
  const [confirmedStatus, setConfirmedStatus] = useState(false);
  const [statAll, setAllStatus] = useState(null);
  const [roomsValue, setRoomsValue] = useState("");
  const [bathValue, setBathValue] = useState("");

  const handleRadioButtonsChange = (props) => {
    const isRadioButtonsFilled =
      kitchenStatus &&
      diningStatus &&
      hallwaysStatus &&
      terraceStatus &&
      balconyStatus &&
      patioStatus &&
      storageStatus &&
      backyardStatus &&
      parkingStatus &&
      garageStatus;

    if (isRadioButtonsFilled) {
      setConfirmedStatus(true);
    }
  };

  console.log(confirmedStatus, "confirmedStatus");

  const handleChangeKitchen = (event) => {
    setKitchenStatus(event.target.value);
  };
  const handleChangeDining = (event) => {
    setDiningStatus(event.target.value);
  };

  const handleChangeHallways = (event) => {
    setHallwaysStatus(event.target.value);
  };

  const handleChangeTerrace = (event) => {
    setTerraceStatus(event.target.value);
  };
  const handleChangeBalcony = (event) => {
    setBalconyStatus(event.target.value);
  };
  const handleChangePatio = (event) => {
    setPatioStatus(event.target.value);
  };
  const handleChangeStorage = (event) => {
    setStorageStatus(event.target.value);
  };
  const handleChangeBackyard = (event) => {
    setBackyardStatus(event.target.value);
  };
  const handleChangeParking = (event) => {
    setParkingStatus(event.target.value);
  };
  const handleChangeGarage = (event) => {
    setGarageStatus(event.target.value);
  };

  const handleStatusAll = (event) => {
    setAllStatus(event.target.value);
    setKitchenStatus(event.target.value);
    setDiningStatus(event.target.value);
    setHallwaysStatus(event.target.value);
    setTerraceStatus(event.target.value);
    setBalconyStatus(event.target.value);
    setPatioStatus(event.target.value);
    setStorageStatus(event.target.value);
    setBackyardStatus(event.target.value);
    setParkingStatus(event.target.value);
    setGarageStatus(event.target.value);
  };
  const handleChangeRoomValue = (event, newValue) => {
    setRoomsValue(newValue.label);
  };

  const handleChangeBathValue = (event, newValue) => {
    setBathValue(newValue.label);
  };

  // console.log(kitchenStatus, "1");
  // console.log(diningStatus, "2");
  // console.log(hallwaysStatus, "3");
  // console.log(terraceStatus, "4");
  // console.log(balconyStatus, "5");
  // console.log(patioStatus, "6");
  // console.log(storageStatus, "7");
  // console.log(backyardStatus, "8");
  // console.log(parkingStatus, "9");
  // console.log(garageStatus, "10");
  useEffect(() => {
    handleRadioButtonsChange();
  }, [
    kitchenStatus,
    diningStatus,
    hallwaysStatus,
    terraceStatus,
    balconyStatus,
    patioStatus,
    storageStatus,
    backyardStatus,
    parkingStatus,
    garageStatus,
  ]);

  return (
    <div>
      <div className="Rooms flex   gap-5 ">
        <label className=" my-auto  font-semibold">
          Room(s) to be cleaned?
        </label>
        <Autocomplete

          disablePortal
          options={rooms}
          value={roomsValue}
          onChange={handleChangeRoomValue}
          id="combo-box-demo"
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Rooms" />}
          clearIcon={null}
          className=" my-3  flex "
        />
      </div>
      <div className="Bath flex   gap-5 ">
        <label className=" my-auto  font-semibold">
          Bath(s) to be cleaned?
        </label>
        <Autocomplete
          options={baths}
          value={bathValue}
          onChange={handleChangeBathValue}
          disablePortal
          id="combo-box-demo"
          sx={{ width: 230 }}
          renderInput={(params) => <TextField {...params} label="Baths" />}
          clearIcon={null}
          className=" my-3  flex "
        />
      </div>
      <div className="all grid grid-cols-12 my-3 ">
        <div className="col-span-12 place-self-end ">
          <FormControl>
            <RadioGroup
              value={statAll}
              onChange={handleStatusAll}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes to all"
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="No to all"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Kitchen grid grid-cols-12 ">
        <div className=" grid col-span-6 content-center ">
          <label className=" mx-5 font-semibold ">Kitchen</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={kitchenStatus}
              onChange={handleChangeKitchen}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Dining Backyard grid grid-cols-12 ">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5 font-semibold ">Dining</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={diningStatus}
              onChange={handleChangeDining}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Hallways    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Hallways</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={hallwaysStatus}
              onChange={handleChangeHallways}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Terrace    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Terrace</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={terraceStatus}
              onChange={handleChangeTerrace}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Balcony    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Balcony</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={balconyStatus}
              onChange={handleChangeBalcony}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Patio    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Patio</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={patioStatus}
              onChange={handleChangePatio}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Storage    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Storage</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={storageStatus}
              onChange={handleChangeStorage}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Backyard    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Backyard</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={backyardStatus}
              onChange={handleChangeBackyard}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
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
              value={parkingStatus}
              onChange={handleChangeParking}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className="Garage    grid grid-cols-12">
        <div className=" grid col-span-6 content-center ">
          <label className="mx-5  font-semibold">Garage</label>
        </div>
        <div className="col-span-6">
          <FormControl>
            <RadioGroup
              value={garageStatus}
              onChange={handleChangeGarage}
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
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
