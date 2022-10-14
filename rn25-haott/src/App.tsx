import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styles from "./homework/session2/components/profile/Profile.module.css";
import Basic1 from "./homework/session2/components/basic1/Basic1";
import Basic2 from "./homework/session2/components/basic2/Basic2";
import Basic3 from "./homework/session2/components/basic3/Basic3";
import ChartBar1 from "./homework/session2/components/charbar1/ChartBar1";
import Profile from "./homework/session2/components/profile/Profile";
import SocialBlock from "./homework/session2/components/socialblock/SocialBlock";
import ChartColumn from "./homework/session2/components/chartcolumn/ChartColumn";
// import BtNumber from "./components/BtNumber";

function App() {
  let appStyle = {
    backgroundColor: "#000",
    minHeight: "800px",
    paddingTop: "50px",
    justifyContent: "center",
    display: "flex",
  };

  let mainStyle = {
    width: "1200px",
    height: "540px",
    display: "flex",
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    marginTop: "-600px",
  };

  let main1Style = {
    backgroundColor: "#fff",
    width: "1200px",
    height: "300px",
    justifyContent: "space-around",
    display: "flex",
    marginTop: "-600px",
  };

  return (
    <>
      <div className="app" style={appStyle}>
        <Basic1 />
      </div>
      <div className="app" style={appStyle}>
        <Basic2 />
      </div>
      <div className="app" style={appStyle}>
        <Basic3 />
      </div>
      {/* ChartBar1  */}
      <div className="app" style={appStyle}>
        <div
          className="main"
          style={{ marginTop: -500, width: 500, height: 300 }}
        >
          <ChartBar1
            text={"Banwidth"}
            color={"#640a0a"}
            color1={"#c54343"}
            percentage={20}
            setpercent={70}
          />

          <ChartBar1
            text={"Storage"}
            color={"#3a88b4"}
            color1={"#6da6cc"}
            percentage={50}
            setpercent={175}
          />

          <ChartBar1
            text={"Users"}
            color={"#1e6e3d"}
            color1={"#5fcc5f"}
            percentage={70}
            setpercent={245}
          />

          <ChartBar1
            text={"Visitors"}
            color={"#a3a116"}
            color1={"#d4bf47"}
            percentage={30}
            setpercent={105}
          />

          <ChartBar1
            text={"Emails"}
            color={"#850caa"}
            color1={"#d883f1"}
            percentage={45}
            setpercent={158}
          />

          <ChartBar1
            text={"Basic"}
            color={"#af24b4"}
            color1={"#e493e7"}
            percentage={80}
            setpercent={280}
          />

          <ChartBar1
            text={"Others"}
            color={"#101dcf"}
            color1={"#4b7ddb"}
            percentage={37}
            setpercent={130}
          />
        </div>
      </div>
      {/* End ChartBar1  */}

      {/*  Profile  */}
      <div className="app" style={appStyle}>
        <div className={styles.main}>
          <Profile
            iconType={"ti-android"}
            name={"HTML"}
            bgColor1={"green"}
            widthColor={350}
            bgColor2={"#eee"}
          />

          <Profile
            iconType={"fa-brands fa-apple"}
            name={"CSS"}
            bgColor1={"red"}
            widthColor={200}
            bgColor2={"#eee"}
          />

          <Profile
            iconType={"fa-brands fa-dropbox"}
            name={"PHP"}
            bgColor1={"aqua"}
            widthColor={150}
            bgColor2={"#eee"}
          />

          <Profile
            iconType={"ti-dribbble"}
            name={"Java"}
            bgColor1={"yellow"}
            widthColor={420}
            bgColor2={"#eee"}
          />

          <Profile
            iconType={"ti-drupal"}
            name={".Net"}
            bgColor1={"violet"}
            widthColor={220}
            bgColor2={"#eee"}
          />
        </div>
      </div>
      {/* End Profile */}
      {/* SocialBlock */}
      <div className="app" style={appStyle}>
        <div className="main" style={mainStyle}>
          <SocialBlock
            text={"Facebook"}
            number={500000}
            color={"#e6e6e6"}
            bgColor={"#237dc7"}
            icon={"fa-brands fa-facebook-f"}
            unit={"Likes"}
          />

          <SocialBlock
            text={"Twitter"}
            number={40000}
            color={"#e6e6e6"}
            bgColor={"#5ebce7"}
            icon={"fa-brands fa-twitter"}
            unit={"Tweets"}
          />

          <SocialBlock
            text={"Google +"}
            number={460000}
            color={"#e6e6e6"}
            bgColor={"#cc621b"}
            icon={"fa-brands fa-google-plus-g"}
            unit={"Plus"}
          />

          <SocialBlock
            text={"Pinterest"}
            number={34000}
            color={"#e6e6e6"}
            bgColor={"#c53939"}
            icon={"fa-brands fa-pinterest"}
            unit={"Pins"}
          />
        </div>
      </div>
      {/* End SocialBlock */}
      {/* ChartColumn */}
      <div className="app" style={appStyle}>
        <div className="main" style={main1Style}>
          <ChartColumn text={"Today's visitors"} total={24599} />
          <ChartColumn text={"Yesterday's visitors"} total={15699} />
          <ChartColumn text={"Total dowloads"} total={124599} />
          <ChartColumn text={"Current income"} total={54599} />
        </div>
      </div>
      {/* End ChartColumn */}
    </>
  );
}

export default App;
