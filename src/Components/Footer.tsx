import React from "react";
import img from "../assets/img/pixel.png";
// import img from "../assets/img/portfolio_pic.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <>
      <div
        className="w-full tablet:h-90 bg-gradient-to-b pt-5 pr-5 pl-5 pb-2 grid tablet:grid-cols-5 grid-cols-1 place-items-center h-1/2 "
        style={{ background: "linear-gradient(to right, #000000, #414345)" }}
      >
        <div className="flex flex-col items-center">
          <img
            src={img}
            className=" w-20 h-20  rounded-full shadow-lg"
            alt="lubi"
          />
          <p
            className="pt-4"
            style={{
              // transformOrigin: "0 0 0",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              color: "white",
            }}
          >
            Eugine Macabatao
          </p>
        </div>
        <div className="p-5 pt-10 pb-5 ">
          <p
            className="flex items-center justify-center  tablet:justify-start tablet:items-start"
            style={{
              // transformOrigin: "0 0 0",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              color: "white",
              paddingBottom: "8px",
            }}
          >
            Contact and follow me
          </p>
          <Typography className="text-gray-100 pb-1 flex items-center justify-center tablet:justify-start tablet:items-start tablet:pl-5">
            <PhoneIcon
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span className="text-xs font-xs"> +639 123 456 789</span>
          </Typography>
          <Typography className="text-gray-100 pb-1 flex items-center justify-center tablet:justify-start tablet:items-start tablet:pl-5">
            <FacebookIcon
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <a
              href="https://facebook.com"
              target="_blank"
              className="text-xs font-xs"
            >
              &nbsp;Eugine Macabatao
            </a>
          </Typography>
          <Typography className="text-gray-100 flex items-center justify-center tablet:justify-start tablet:items-start tablet:pl-5">
            <EmailIcon
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <a
              href="https://gmail.com"
              target="_blank"
              className="text-xs font-xs"
            >
              &nbsp;macabataoeugine2@gmail.com
            </a>
          </Typography>
        </div>
        <div className="tablet:p-5 p-3">
          <p
            className="flex items-center justify-center tablet:justify-start tablet:items-start tablet:mt-2"
            style={{
              // transformOrigin: "0 0 0",
              fontSize: "12px",
              fontFamily: "Montserrat, sans-serif",
              color: "white",
              paddingBottom: "3px",
            }}
          >
            Address
          </p>
          <Typography className="text-gray-100 pr-5 tablet:justify-start tablet:items-start tablet:pl-5">
            <PlaceIcon
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span className="text-xs font-xs">
              BRGY. BINONGTO-AN TANAUAN, LEYTE&nbsp;PHILIPPINES
            </span>
          </Typography>
        </div>
        <div
          className="tablet:col-span-2 flex items-center justify-center tablet:justify-start tablet:items-start"
          style={{ width: "500px" }}
        >
          <iframe
            className="rounded-md tablet:w-full w-3/4 h-60"
            title="Google Maps"
            height="300"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Binongto-an%20Tanauan%20Leyte%20+(AE%20GOWNS)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="w-full tablet:h-10 h-7 bg-gradient-to-b  from-gray-950 to-gray-950 flex justify-center place-items-center ">
        <div className="grid grid-cols-1">
          <p
            style={{
              // transformOrigin: "0 0 0",
              fontSize: "10px",
              fontFamily: "Montserrat, sans-serif",
              color: "white",
            }}
          >
            Copyright © 2024 - All right reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
