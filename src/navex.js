import React from "react";
//import myimagee from "./GitHub-Mark.png";
import myimagee from "./GitHub-Mark.png";

function Navex() {
  return (
    <div>
      <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
        <a class="navbar-brand" href="#">
          <img
            src={myimagee}
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading1">
              CONTACT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              ABOUT
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#scrollspyHeading2">
              WORK
            </a>
          </li>
        </ul>
      </nav>
      {/* <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        class="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
      ></div> */}
    </div>
  );
}

export default Navex;
