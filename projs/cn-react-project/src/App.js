import React from "react";
import search from "./search.png";
import menu from "./nav-menu.png";
import cn from "./cn.png";


function App() {
  return (
    <>
      <div className="container">


        <div className="header-nav">

          <div className="header__subnav-mount">
            <div className="header__container">

              <div className="header-left">
                <img src={menu} className="img-menu" />
                <img src={cn} className="img-cn" />
                <div className="content-us">
                  <span className="span-brand-us">
                    US
                  </span>
                </div>
                <div className="crime-justice">
                  <a href="#" className="crime-link">Crime + Justice</a>

                </div>

                <div className="energy-environment">
                  <a href="#" className="energy-link">Energy + Environment</a>
                </div>

                <div className="extreme-weather">
                  <a href="#" className="extreme-link">Extreme + Weather</a>
                </div>

                <div className="space-science">
                  <a href="#" className="space-link">Space + Science</a>

                </div>




              </div>
              <div className="header-right">

                <div className="audio">
                  <a href="#" className="audio-link">Audio</a>
                </div>

                <div className="live-tv">
                  <a href="#" className="live-link">Live TV</a>
                </div>

                <div className="search-button">
                  <img src={search} className="search-img" />
                </div>

                <div className="log-in">
                  <span className="log-in-span">Log in</span>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}

export default App;
