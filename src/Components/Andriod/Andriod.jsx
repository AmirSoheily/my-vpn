import React from "react";
import { Icon } from "@iconify/react";
import "./Andriod.css";
function Andriod() {
  return (
    <a
      className="font_family"
      style={{ textDecoration: "none" }}
      download
      href="https://d-05.winudf.com/custom/com.apkpure.aegon-3184211.apk?_fn=QVBLUHVyZV92My4xOC40Ml9hcGtwdXJlLmNvbS5hcGs&_p=Y29tLmFwa3B1cmUuYWVnb24&am=m7-rOo-kPmVMwOU4RAQJHA&arg=apkpure%3A%2F%2Fcampaign%2F%3Futm_medium%3Dapkpure%26utm_source%3Ddetail-m%26report_context%3D%7B%22id%22%3A%22649198483%22%2C%22channel_id%22%3A%221011%22%7D&at=1668352207&download_id=1552305178959559&k=4c46a972f0dfffc0e403211b819e816263725a56&r=https%3A%2F%2Fm.apkpure.com%2Fv2rayng%2Fcom.v2ray.ang%2Fdownload%3Ffrom%3Ddetails&uu=http%3A%2F%2F172.16.65.1%2Fcustom%2Fcom.apkpure.aegon-3184211.apk%3Fk%3Dd0394eeb07954979bb7d78a2548183aa63725a56"
    >
      {" "}
      <div className="andriod">
        <Icon fontSize={200} icon="flat-color-icons:android-os" />
        <div>
          <a style={{ overflow: "none" }}>دانلود ورژن اندروید</a>
        </div>
      </div>
    </a>
  );
}
export default Andriod;
