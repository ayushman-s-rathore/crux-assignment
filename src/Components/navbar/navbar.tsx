import { useState } from "react";
import "./navbar.css";
import WidgetAdder from "../widgetAdder/widgetAdder";
import ClearIcon from "@mui/icons-material/Clear";

function Navbar() {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  const handleChange =() =>{
    setPopUpOpen(!isPopUpOpen);
  }

  return (
    <>
      {isPopUpOpen && <WidgetAdder/>}
      <div className="navbar">
        <div className="start">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.39995 19.6663V10.9997H13.6V19.6663M3.19995 8.39967L11 2.33301L18.8 8.39967V17.933C18.8 18.3927 18.6173 18.8336 18.2923 19.1587C17.9672 19.4837 17.5263 19.6663 17.0666 19.6663H4.93328C4.47358 19.6663 4.0327 19.4837 3.70763 19.1587C3.38257 18.8336 3.19995 18.3927 3.19995 17.933V8.39967Z"
              stroke="#99999B"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="tabs">Overview</div>
          <div className="selected">
            Customers
            <ClearIcon sx={{
                  width: "1.2rem",                  
                  height: "1.2rem",     
            }}/>
          </div>
          <div className="tabs">Products</div>
          <div className="tabs">Settings</div>
          <div className="adder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
            >
              <mask id="path-1-inside-1_0_2321" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6667 5.66667C12.6667 5.29848 12.3682 5 12 5C11.6318 5 11.3333 5.29848 11.3333 5.66667V11.3333H5.66667C5.29848 11.3333 5 11.6318 5 12C5 12.3682 5.29848 12.6667 5.66667 12.6667H11.3333V18.3333C11.3333 18.7015 11.6318 19 12 19C12.3682 19 12.6667 18.7015 12.6667 18.3333V12.6667H18.3333C18.7015 12.6667 19 12.3682 19 12C19 11.6318 18.7015 11.3333 18.3333 11.3333H12.6667V5.66667Z"
                />
              </mask>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6667 5.66667C12.6667 5.29848 12.3682 5 12 5C11.6318 5 11.3333 5.29848 11.3333 5.66667V11.3333H5.66667C5.29848 11.3333 5 11.6318 5 12C5 12.3682 5.29848 12.6667 5.66667 12.6667H11.3333V18.3333C11.3333 18.7015 11.6318 19 12 19C12.3682 19 12.6667 18.7015 12.6667 18.3333V12.6667H18.3333C18.7015 12.6667 19 12.3682 19 12C19 11.6318 18.7015 11.3333 18.3333 11.3333H12.6667V5.66667Z"
                fill="#030712"
              />
              <path
                d="M11.3333 11.3333V13.2083H13.2083V11.3333H11.3333ZM11.3333 12.6667H13.2083V10.7917H11.3333V12.6667ZM12.6667 12.6667V10.7917H10.7917V12.6667H12.6667ZM12.6667 11.3333H10.7917V13.2083H12.6667V11.3333ZM14.5417 5.66667C14.5417 4.26295 13.4037 3.125 12 3.125V6.875C11.3327 6.875 10.7917 6.33401 10.7917 5.66667H14.5417ZM12 3.125C10.5963 3.125 9.45833 4.26295 9.45833 5.66667H13.2083C13.2083 6.33401 12.6673 6.875 12 6.875V3.125ZM9.45833 5.66667V11.3333H13.2083V5.66667H9.45833ZM11.3333 9.45833H5.66667V13.2083H11.3333V9.45833ZM5.66667 9.45833C4.26295 9.45833 3.125 10.5963 3.125 12H6.875C6.875 12.6673 6.33401 13.2083 5.66667 13.2083V9.45833ZM3.125 12C3.125 13.4037 4.26295 14.5417 5.66667 14.5417V10.7917C6.33401 10.7917 6.875 11.3327 6.875 12H3.125ZM5.66667 14.5417H11.3333V10.7917H5.66667V14.5417ZM9.45833 12.6667V18.3333H13.2083V12.6667H9.45833ZM9.45833 18.3333C9.45833 19.7369 10.5962 20.875 12 20.875V17.125C12.6674 17.125 13.2083 17.666 13.2083 18.3333H9.45833ZM12 20.875C13.4038 20.875 14.5417 19.7369 14.5417 18.3333H10.7917C10.7917 17.666 11.3326 17.125 12 17.125V20.875ZM14.5417 18.3333V12.6667H10.7917V18.3333H14.5417ZM12.6667 14.5417H18.3333V10.7917H12.6667V14.5417ZM18.3333 14.5417C19.7369 14.5417 20.875 13.4038 20.875 12H17.125C17.125 11.3326 17.666 10.7917 18.3333 10.7917V14.5417ZM20.875 12C20.875 10.5962 19.7369 9.45833 18.3333 9.45833V13.2083C17.666 13.2083 17.125 12.6674 17.125 12H20.875ZM18.3333 9.45833H12.6667V13.2083H18.3333V9.45833ZM14.5417 11.3333V5.66667H10.7917V11.3333H14.5417Z"
                fill="#5E5ADB"
                mask="url(#path-1-inside-1_0_2321)"
              />
            </svg>
          </div>
        </div>
        <div className="end">
          <div className="widget" onClick={handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <mask id="path-1-inside-1_0_2324" fill="white">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6667 5.66667C12.6667 5.29848 12.3682 5 12 5C11.6318 5 11.3333 5.29848 11.3333 5.66667V11.3333H5.66667C5.29848 11.3333 5 11.6318 5 12C5 12.3682 5.29848 12.6667 5.66667 12.6667H11.3333V18.3333C11.3333 18.7015 11.6318 19 12 19C12.3682 19 12.6667 18.7015 12.6667 18.3333V12.6667H18.3333C18.7015 12.6667 19 12.3682 19 12C19 11.6318 18.7015 11.3333 18.3333 11.3333H12.6667V5.66667Z"
                />
              </mask>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.6667 5.66667C12.6667 5.29848 12.3682 5 12 5C11.6318 5 11.3333 5.29848 11.3333 5.66667V11.3333H5.66667C5.29848 11.3333 5 11.6318 5 12C5 12.3682 5.29848 12.6667 5.66667 12.6667H11.3333V18.3333C11.3333 18.7015 11.6318 19 12 19C12.3682 19 12.6667 18.7015 12.6667 18.3333V12.6667H18.3333C18.7015 12.6667 19 12.3682 19 12C19 11.6318 18.7015 11.3333 18.3333 11.3333H12.6667V5.66667Z"
                fill="#030712"
              />
              <path
                d="M11.3333 11.3333V13.2083H13.2083V11.3333H11.3333ZM11.3333 12.6667H13.2083V10.7917H11.3333V12.6667ZM12.6667 12.6667V10.7917H10.7917V12.6667H12.6667ZM12.6667 11.3333H10.7917V13.2083H12.6667V11.3333ZM14.5417 5.66667C14.5417 4.26295 13.4037 3.125 12 3.125V6.875C11.3327 6.875 10.7917 6.33401 10.7917 5.66667H14.5417ZM12 3.125C10.5963 3.125 9.45833 4.26295 9.45833 5.66667H13.2083C13.2083 6.33401 12.6673 6.875 12 6.875V3.125ZM9.45833 5.66667V11.3333H13.2083V5.66667H9.45833ZM11.3333 9.45833H5.66667V13.2083H11.3333V9.45833ZM5.66667 9.45833C4.26295 9.45833 3.125 10.5963 3.125 12H6.875C6.875 12.6673 6.33401 13.2083 5.66667 13.2083V9.45833ZM3.125 12C3.125 13.4037 4.26295 14.5417 5.66667 14.5417V10.7917C6.33401 10.7917 6.875 11.3327 6.875 12H3.125ZM5.66667 14.5417H11.3333V10.7917H5.66667V14.5417ZM9.45833 12.6667V18.3333H13.2083V12.6667H9.45833ZM9.45833 18.3333C9.45833 19.7369 10.5962 20.875 12 20.875V17.125C12.6674 17.125 13.2083 17.666 13.2083 18.3333H9.45833ZM12 20.875C13.4038 20.875 14.5417 19.7369 14.5417 18.3333H10.7917C10.7917 17.666 11.3326 17.125 12 17.125V20.875ZM14.5417 18.3333V12.6667H10.7917V18.3333H14.5417ZM12.6667 14.5417H18.3333V10.7917H12.6667V14.5417ZM18.3333 14.5417C19.7369 14.5417 20.875 13.4038 20.875 12H17.125C17.125 11.3326 17.666 10.7917 18.3333 10.7917V14.5417ZM20.875 12C20.875 10.5962 19.7369 9.45833 18.3333 9.45833V13.2083C17.666 13.2083 17.125 12.6674 17.125 12H20.875ZM18.3333 9.45833H12.6667V13.2083H18.3333V9.45833ZM14.5417 11.3333V5.66667H10.7917V11.3333H14.5417Z"
                fill="#5E5ADB"
                mask="url(#path-1-inside-1_0_2324)"
              />
            </svg>
            Add Widget
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="24"
            viewBox="0 0 22 24"
            fill="none"
          >
            <path
              d="M11.1613 1H10.6773C10.0939 1 9.53428 1.23178 9.1217 1.64436C8.70912 2.05695 8.47734 2.61652 8.47734 3.2V3.398C8.47694 3.7838 8.3751 4.16271 8.18203 4.49672C7.98896 4.83073 7.71145 5.1081 7.37734 5.301L6.90434 5.576C6.5699 5.76909 6.19052 5.87074 5.80434 5.87074C5.41816 5.87074 5.03878 5.76909 4.70434 5.576L4.53934 5.488C4.03451 5.19679 3.43476 5.11779 2.87174 5.26834C2.30872 5.41889 1.82844 5.78669 1.53634 6.291L1.29434 6.709C1.00313 7.21383 0.924126 7.81358 1.07468 8.3766C1.22523 8.93962 1.59303 9.41989 2.09734 9.712L2.26234 9.822C2.59484 10.014 2.87132 10.2896 3.06429 10.6215C3.25727 10.9534 3.36002 11.3301 3.36234 11.714V12.275C3.36388 12.6627 3.26295 13.0438 3.06979 13.38C2.87662 13.7161 2.59807 13.9952 2.26234 14.189L2.09734 14.288C1.59303 14.5801 1.22523 15.0604 1.07468 15.6234C0.924126 16.1864 1.00313 16.7862 1.29434 17.291L1.53634 17.709C1.82844 18.2133 2.30872 18.5811 2.87174 18.7317C3.43476 18.8822 4.03451 18.8032 4.53934 18.512L4.70434 18.424C5.03878 18.2309 5.41816 18.1293 5.80434 18.1293C6.19052 18.1293 6.5699 18.2309 6.90434 18.424L7.37734 18.699C7.71145 18.8919 7.98896 19.1693 8.18203 19.5033C8.3751 19.8373 8.47694 20.2162 8.47734 20.602V20.8C8.47734 21.3835 8.70912 21.9431 9.1217 22.3556C9.53428 22.7682 10.0939 23 10.6773 23H11.1613C11.7448 23 12.3044 22.7682 12.717 22.3556C13.1296 21.9431 13.3613 21.3835 13.3613 20.8V20.602C13.3617 20.2162 13.4636 19.8373 13.6566 19.5033C13.8497 19.1693 14.1272 18.8919 14.4613 18.699L14.9343 18.424C15.2688 18.2309 15.6482 18.1293 16.0343 18.1293C16.4205 18.1293 16.7999 18.2309 17.1343 18.424L17.2993 18.512C17.8042 18.8032 18.4039 18.8822 18.9669 18.7317C19.53 18.5811 20.0102 18.2133 20.3023 17.709L20.5443 17.28C20.8355 16.7752 20.9146 16.1754 20.764 15.6124C20.6134 15.0494 20.2456 14.5691 19.7413 14.277L19.5763 14.189C19.2406 13.9952 18.9621 13.7161 18.7689 13.38C18.5757 13.0438 18.4748 12.6627 18.4763 12.275V11.725C18.4748 11.3373 18.5757 10.9562 18.7689 10.62C18.9621 10.2839 19.2406 10.0048 19.5763 9.811L19.7413 9.712C20.2456 9.41989 20.6134 8.93962 20.764 8.3766C20.9146 7.81358 20.8355 7.21383 20.5443 6.709L20.3023 6.291C20.0102 5.78669 19.53 5.41889 18.9669 5.26834C18.4039 5.11779 17.8042 5.19679 17.2993 5.488L17.1343 5.576C16.7999 5.76909 16.4205 5.87074 16.0343 5.87074C15.6482 5.87074 15.2688 5.76909 14.9343 5.576L14.4613 5.301C14.1272 5.1081 13.8497 4.83073 13.6566 4.49672C13.4636 4.16271 13.3617 3.7838 13.3613 3.398V3.2C13.3613 2.61652 13.1296 2.05695 12.717 1.64436C12.3044 1.23178 11.7448 1 11.1613 1Z"
              stroke="#667085"
              stroke-width="1.65"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.9193 15.3C12.7419 15.3 14.2193 13.8225 14.2193 12C14.2193 10.1775 12.7419 8.7 10.9193 8.7C9.0968 8.7 7.61934 10.1775 7.61934 12C7.61934 13.8225 9.0968 15.3 10.9193 15.3Z"
              stroke="#667085"
              stroke-width="1.65"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Navbar;
