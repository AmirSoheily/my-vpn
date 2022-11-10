import React from "react";
import { Icon } from "@iconify/react";
import "./Andriod.css";
function Andriod() {
  return (
    <div className="andriod">
      <Icon fontSize={200} icon="flat-color-icons:android-os" />
      <div>
        <a style={{ overflow: "none" }}>دانلود ورژن اندروید</a>
      </div>
    </div>
  );
}
export default Andriod;
