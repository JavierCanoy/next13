"use client";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ConstructionIcon from "@mui/icons-material/Construction";

import Javier from "./javier/page";
import Canoy from "./canoy/page";
import Property from "./property/page";
import ScopeOfServices from "./scopeOfServices/page";

export default function TextMobileStepper() {
  const label = ["Javier", "Canoy", "Property", "ScopeOfServices"];
  const [ formData , setFormData ] = useState({ username: "", password: "",})
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = label.length;

  const pageDisplay = () => {
    if (activeStep === 0) {
      return  <div> <Javier /></div>;
    } else if (activeStep === 1) {
      return  <div><Canoy formData={formData} setFormData={setFormData} /></div>;
    } else if (activeStep === 2) {
      return   <div><Property /></div>;
    } else if (activeStep === 3) {
      return  <div><ScopeOfServices /></div>;
    }
  };

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   console.log(label[activeStep])
  // };
  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };
  return (
    <div className=" flex justify-center h-auto">
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <div className=" h-full ">
          <div>
            <Paper
              square
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                bgcolor: "background.default",
              }}
              className=" border-2 rounded-xl p-5  "
            >
              <Typography className=" font-bold text-lg">
                {/* {steps[activeStep].label} */}
                {label[activeStep]}
              </Typography>
            </Paper>
          </div>
          {/* <div className="rounded-lg my-5 py-5">{steps[activeStep].page }</div> */}
          <div className="rounded-lg my-5 py-5">
            <h2>{pageDisplay()}</h2>
          </div>


          <div className=" mt-14 ">
            <div className="my-5">
              {/* // disabled={!isRadioButtonsFilled || activeStep === maxSteps - 1} */}

              {/* <MobileStepper
                className="border-2 rounded-lg"
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps -1 }
                    
                  >
                    {activeStep === maxSteps - 1 ? <Link href="/" className=" text-sm">Book now </Link> : "Next"}
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {activeStep === maxSteps - 1 ? "Back to idet" : "Prev"}
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              /> */}

              <div className="border-2 rounded-lg">
                <button
                  className=" mx-20"
                  disabled={activeStep == 0}
                  onClick={() => {
                    setActiveStep((currentPage) => currentPage - 1);
                  }}
                >
                  Prev
                </button>

                <button
                  className=" mx-20"
                  disabled={activeStep == maxSteps - 1}
                  onClick={() => {
                    setActiveStep((currentPage) => currentPage + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-5 border-2 rounded-lg my-2">
              <div>
                <Link className="text-black" href="/provider">
                  <HomeIcon
                    className="home w-10 h-10 transform 
                                transition duration-200 hover:scale-125 active:scale-125  text-blue-500"
                  />
                </Link>
              </div>
              <div>
                <Link className="text-black" href="/provider">
                  <PersonIcon
                    className="home w-10 h-10  transform 
                                transition duration-200 hover:scale-125 active:scale-125  text-blue-500 "
                  />
                </Link>
              </div>
              <div>
                <Link className="text-black " href="/provider/Services">
                  <ConstructionIcon
                    className="home w-10 h-10  transform 
                                transition duration-200 hover:scale-125 active:scale-125 text-blue-500 "
                  />
                </Link>
              </div>
              <div>
                <Link className="text-black" href="/provider">
                  <CalendarMonthIcon
                    className="home w-10 h-10 transform 
                                transition duration-200 hover:scale-125 active:scale-125 text-blue-500 "
                  />
                </Link>
              </div>
              <div>
                <Link className="text-black" href="/">
                  <ArticleOutlinedIcon
                    className="home w-10 h-10  transform 
                                transition duration-200 hover:scale-125 active:scale-125 text-blue-500"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
