import "./Windos.css";
import { Icon } from "@iconify/react";

function Windows() {
  return (
    <a
      className="font_family"
      style={{ textDecoration: "none" }}
      href="https://drive.google.com/file/d/1tbDJ8XjVXdqGiMk5nyKVaSRIjZcYFI5S/view?usp=sharing"
      download
    >
      <div className="windosbtn">
        <Icon fontSize={200} icon="logos:microsoft-windows" />
        <div> دانلود ورژن ویندوزs</div>
      </div>
    </a>
  );
}
export default Windows;
