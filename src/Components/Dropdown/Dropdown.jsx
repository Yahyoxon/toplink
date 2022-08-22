import { useState } from "react";
import "./Dropdown.css";
import { Link } from "react-router-dom";

const Dropdown = () => {


  const [select, setSelect] = useState("");

  const [isActive, setIsActive] = useState(false);
  const options = [
    "Ko'rib chiqish",
    "Tahrirlash",
    "Sozlamalar",
    "Premium",
    "Yangilash",
  ];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsActive(!isActive)}>
        {select}
        {isActive ? (
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        )}
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
                <Link onClick={(item) => {
                setSelect(option);
                setIsActive(false);
              }}>{option}</Link>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
