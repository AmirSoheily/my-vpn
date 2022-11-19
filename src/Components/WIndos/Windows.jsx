import "./Windos.css";
import { Icon } from "@iconify/react";

function Windows() {
  return (
    <a className="font_family" style={{ textDecoration: "none" }} download>
      <div className="windosbtn">
        <Icon fontSize={200} icon="logos:microsoft-windows" />
        <h1>کص مادرت نمیا</h1>
        <div>دانلود ورژن کامپیوتر</div>
      </div>
    </a>
  );
}
export default Windows;
