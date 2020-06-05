import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/slider-works";
import "./scripts/slider-reviews";
import "./scripts/menu-phones";
import "./scripts/contact";
import "./scripts/scroll-btn";
import "./scripts/navigation";
import "./scripts/nav-footer";