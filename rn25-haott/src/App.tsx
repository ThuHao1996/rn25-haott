import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RateButton2 from "./homework/session5/session5.2/RateButton2";
import RateButton1 from "./homework/session3/session3.2/RateButton1";
import LikeButton1 from "./homework/session3/session3.1/LikeButton1";
import LikeButton2 from "./homework/session5/session5.1/LikeButton2";
import styles from "./homework/session2/components/profile/Profile.module.css";
import Basic1 from "./homework/session2/components/basic1/Basic1";
import Basic2 from "./homework/session2/components/basic2/Basic2";
import Basic3 from "./homework/session2/components/basic3/Basic3";
import ChartBar1 from "./homework/session2/components/charbar1/ChartBar1";
import Profile from "./homework/session2/components/profile/Profile";
import SocialBlock from "./homework/session2/components/socialblock/SocialBlock";
import ChartColumn from "./homework/session2/components/chartcolumn/ChartColumn";
import Person from "./homework/session2/components/person/Person";
import BlockUi6 from "./homework/session2/components/blockUi6/BlockUi6";
import BlockUi7 from "./homework/session2/components/blockUi7/BlockUi7";
import img from "./homework/session2/components/blockUi7/img/blockui7.1.jpg";
import img1 from "./homework/session2/components/blockUi7/img/blockui7.2.jpg";
import img2 from "./homework/session2/components/blockUi7/img/blockui7.3.jpg";
import img3 from "./homework/session2/components/blockUi7/img/blockui7.4.jpg";
import img4 from "./homework/session2/components/blockUi7/img/blockui7.5.jpg";
import img5 from "./homework/session2/components/blockUi7/img/blockui7.6.jpg";
import Resume1 from "./homework/session2/components/resume1/Resume1";
import Resume2 from "./homework/session2/components/resume2/Resume2";
import Form3 from "./homework/session6/form3/Form3";
import Session7 from "./homework/session7/Session7";
import ImageViewer from "./homework/session5/session5.3/ImageViewer";
import ListUser from "./homework/listUser/ListUser";
import ButtonTab from "./homework/session5/session5.4/ButtonTab";
import IconTab from "./homework/session5/session5.5/IconTab";
// import NetWorking from "./components/NetWorking";
// import NumberFunctional from "./components/NumberFunctional";
// import NumberClass from "./components/NumberClass";
// import Baitap2 from "./components/Baitap2";
// import Form from "./components/Form";

function App() {
  let appStyle = {
    backgroundColor: "#000",
    minHeight: "1000px",
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
    marginTop: "-2370px",
  };

  let main1Style = {
    backgroundColor: "#fff",
    width: "1200px",
    height: "300px",
    justifyContent: "space-around",
    display: "flex",
    marginTop: "-2680px",
  };

  let main2Style = {
    backgroundColor: "#faf8f8",
    width: "1200px",
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "-3220px",
    height: "770px",
  };

  let main3Style = {
    width: "1150px",
    height: "550px",
    backgroundColor: "#fff",
    marginTop: "-3310px",
    display: "flex",
    justifyContent: "space-around",
  };

  let main4Style = {
    width: "1650px",
    height: "580px",
    backgroundColor: "#fff",
    marginTop: "-3620px",
  };

  let main5Style = {
    backgroundColor: "#fff",
    width: "670px",
    marginTop: "-3900px",
    height: "1100px",
  };

  let main6Style = {
    width: "1000px",
    height: "1100px",
    backgroundColor: "#f0d197",
    marginTop: "-3700px",
  };

  let main7Style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    marginTop: "-3410px",
  };

  let main8Style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: "100px",
  };

  let main9Style = {
    backgroundColor: "#fff",
    width: "1050px",
    marginTop: "110px",
    height: "670px",
  };

  let main10Style = {
    backgroundColor: "#fff",
    width: "850px",
    height: "710px",
    marginTop: "100px",
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
          style={{ marginTop: -1550, width: 500, height: 300 }}
        >
          <ChartBar1
            text={"Banwidth"}
            color={"#640a0a"}
            color1={"#c54343"}
            color2={"rgb(241 237 237)"}
            percentage={20}
            setpercent={70}
          />
          <ChartBar1
            text={"Storage"}
            color={"#3a88b4"}
            color1={"#6da6cc"}
            color2={"rgb(241 237 237)"}
            percentage={50}
            setpercent={175}
          />
          <ChartBar1
            text={"Users"}
            color={"#1e6e3d"}
            color1={"#5fcc5f"}
            color2={"rgb(241 237 237)"}
            percentage={70}
            setpercent={245}
          />
          <ChartBar1
            text={"Visitors"}
            color={"#a3a116"}
            color1={"#d4bf47"}
            color2={"rgb(241 237 237)"}
            percentage={30}
            setpercent={105}
          />
          <ChartBar1
            text={"Emails"}
            color={"#850caa"}
            color1={"#d883f1"}
            color2={"rgb(241 237 237)"}
            percentage={45}
            setpercent={158}
          />
          <ChartBar1
            text={"Basic"}
            color={"#af24b4"}
            color1={"#e493e7"}
            color2={"rgb(241 237 237)"}
            percentage={80}
            setpercent={280}
          />
          <ChartBar1
            text={"Others"}
            color={"#101dcf"}
            color1={"#4b7ddb"}
            color2={"rgb(241 237 237)"}
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

      {/* Person */}
      <div className="app" style={appStyle}>
        <div className="main" style={main2Style}>
          <Person
            name={"Robort Pattison"}
            job={"Developing"}
            icon={"fa-regular fa-calendar-days"}
            text1={"DOB"}
            date={"23/05/2014"}
            icon1={"fa-sharp fa-solid fa-heart"}
            text2={"BG"}
            text3={"B+"}
            icon2={"fa-solid fa-graduation-cap"}
            text4={"EDU"}
            text5={"MCA"}
            icon3={"fa-sharp fa-solid fa-location-dot"}
            text6={"RES"}
            text7={"Bangalore"}
            email={"EMAIL ID"}
            icon4={"fa-regular fa-envelope"}
            emailTo={"robot12@gmail.com"}
            phone={"PHONE NO"}
            icon5={"fa-solid fa-phone"}
            number={8665543219}
            bgColor1={"#d83838"}
            bgColor2={"#58b958"}
          />
          <Person
            name={"James smith"}
            job={"Designer"}
            icon={"fa-regular fa-calendar-days"}
            text1={"DOB"}
            date={"23/05/2014"}
            icon1={"fa-sharp fa-solid fa-heart"}
            text2={"BG"}
            text3={"B+"}
            icon2={"fa-solid fa-graduation-cap"}
            text4={"EDU"}
            text5={"MCA"}
            icon3={"fa-sharp fa-solid fa-location-dot"}
            text6={"RES"}
            text7={"Bangalore"}
            email={"EMAIL ID"}
            icon4={"fa-regular fa-envelope"}
            emailTo={"smith12@gmail.com"}
            phone={"PHONE NO"}
            icon5={"fa-solid fa-phone"}
            number={8225543219}
            bgColor1={"#85deee"}
            bgColor2={"#4c72c5"}
          />
          <Person
            name={"Tom Hanks"}
            job={"UI Designer"}
            icon={"fa-regular fa-calendar-days"}
            text1={"DOB"}
            date={"23/05/2014"}
            icon1={"fa-sharp fa-solid fa-heart"}
            text2={"BG"}
            text3={"B+"}
            icon2={"fa-solid fa-graduation-cap"}
            text4={"EDU"}
            text5={"MCA"}
            icon3={"fa-sharp fa-solid fa-location-dot"}
            text6={"RES"}
            text7={"Bangalore"}
            email={"EMAIL ID"}
            icon4={"fa-regular fa-envelope"}
            emailTo={"pete1@gmail.com"}
            phone={"PHONE NO"}
            icon5={"fa-solid fa-phone"}
            number={8225543929}
            bgColor1={"#df7c4e"}
            bgColor2={"#f0d354"}
          />
          <Person
            name={"Silvester Stalin"}
            job={"Testing"}
            icon={"fa-regular fa-calendar-days"}
            text1={"DOB"}
            date={"23/05/2014"}
            icon1={"fa-sharp fa-solid fa-heart"}
            text2={"BG"}
            text3={"B+"}
            icon2={"fa-solid fa-graduation-cap"}
            text4={"EDU"}
            text5={"MCA"}
            icon3={"fa-sharp fa-solid fa-location-dot"}
            text6={"RES"}
            text7={"Bangalore"}
            email={"EMAIL ID"}
            icon4={"fa-regular fa-envelope"}
            emailTo={"point12@gmail.com"}
            phone={"PHONE NO"}
            icon5={"fa-solid fa-phone"}
            number={9937924265}
            bgColor1={"#9f33a3"}
            bgColor2={"#e289db"}
          />
        </div>
      </div>
      {/* End Person */}

      {/* BlockUi6 */}
      <div className="app" style={appStyle}>
        <div className="main" style={main3Style}>
          <BlockUi6
            name={"EODEM MODO TYPI"}
            text={"Lorem ipsum door sit amet, consectetur adipiscing elit."}
            size={"XL / XXL / S"}
            price={"$25"}
            icon={"fa-solid fa-cart-shopping"}
            text1={"Add to cart"}
          />
          <BlockUi6
            name={"SEQUITUR MUTATIONEM"}
            text={"Lorem ipsum door sit amet, consectetur adipiscing elit."}
            size={"XL / XXL / S"}
            price={"$25"}
            icon={"fa-solid fa-cart-shopping"}
            text1={"Add to cart"}
          />
          <BlockUi6
            name={"CONSUETUDIUM LECTORUM."}
            text={"Lorem ipsum door sit amet, consectetur adipiscing elit."}
            size={"XL / XXL / S"}
            price={"$25"}
            icon={"fa-solid fa-cart-shopping"}
            text1={"Add to cart"}
          />
          <BlockUi6
            name={"PARUM CLARAM"}
            text={"Lorem ipsum door sit amet, consectetur adipiscing elit."}
            size={"XL / XXL / S"}
            price={"$25"}
            price1={"$75"}
            icon={"fa-solid fa-cart-shopping"}
            text1={"Add to cart"}
          />
        </div>
      </div>
      {/* End BlockUi6 */}

      {/* BlockUi7 */}
      <div className="app" style={appStyle}>
        <div className="main" style={main4Style}>
          <BlockUi7
            name={"Deal of the day"}
            name1={"End in: 6:17:17:39"}
            name3={"View all"}
            number={"-39%"}
            name2={"YOUNG SHOP"}
            price={"$1,422.7"}
            price1={"$1,025.5"}
            text={"18% off"}
            text1={"LG White Front Load Steam Washer"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={180}
            text2={"Sold: 10"}
            img={img}
          />
          <BlockUi7
            number={"-13%"}
            name2={"YOUNG SHOP"}
            price={"$96"}
            price1={"$85"}
            text={"18% off"}
            text1={"Edifier Powered Bookshelf Speakers"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={160}
            text2={"Sold: 15"}
            img={img1}
          />
          <BlockUi7
            number={"-37%"}
            name2={"YOUNG SHOP"}
            price={"$62.99"}
            price1={"$45.9"}
            text={"18% off"}
            text1={"Amcrest Security Camera in White Color"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={140}
            text2={"Sold: 20"}
            img={img2}
          />
          <BlockUi7
            number={"-27%"}
            name2={"YOUNG SHOP"}
            price={"$41.99"}
            price1={"$32.99"}
            text={"18% off"}
            text1={"Grand Slam Indoor Of Show Jumping Novel"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={130}
            text2={"Sold: 22"}
            img={img3}
          />
          <BlockUi7
            number={"-6%"}
            name2={"YOUNG SHOP"}
            price={"$106.96"}
            price1={"$100.99"}
            text={"18% off"}
            text1={"Sound Intone I65 Earphone White Verson"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={180}
            text2={"Sold: 10"}
            img={img4}
          />
          <BlockUi7
            number={"-18%"}
            name2={"YOUNG SHOP"}
            price={"$670.2"}
            price1={"$567.8"}
            text={"18% off"}
            text1={"Korea Long Sofa Fabric In Blue Navy Color"}
            icon={"fa-solid fa-star"}
            icon1={"fa-regular fa-star"}
            bgColor={"rgb(251 188 42)"}
            bgColor1={"#e0dedefb"}
            widthColor={200}
            text2={"Sold: 79"}
            img={img5}
          />
        </div>
      </div>
      {/* End BlockUi7 */}

      {/* Resume1 */}
      <div className="app" style={appStyle}>
        <div className="main" style={main5Style}>
          <Resume1
            name={"TONY"}
            text1={"TÈO"}
            job={"SOFTWARE ENGINEER"}
            desc={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
            text={"ABOUT ME"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation uliamco laboris nisi ut aliquip ex ea commodo comsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla paritatur."
            }
            text2={"CONTACT"}
            number={"123.456.7890"}
            email={"hello@reallygreatsite.com"}
            email1={"@reallygreatsite"}
            web={"reallygreatsite.com"}
            address={"123 Anywhere St, Any City, ST 12345"}
            text3={"SKILLS"}
            name1={"HTML, CSS, JS"}
            name2={"ReactJS"}
            name3={"Express"}
            name4={"MongoDB"}
            name5={"Nodejs"}
            text4={"LANGUAGES"}
            text5={"Write your skills here"}
            text6={"EXPERIENCE"}
            text7={"WRITE YOUR EXPERIENCE HERE"}
            text8={"EDUCATION"}
            text9={"WRITE YOUR EDUCATION HERE"}
            bgColor={"#527edd"}
            bgColor1={"#fff"}
          />
        </div>
      </div>
      {/* End Resume1 */}

      {/* Resume2 */}
      <div className="app" style={appStyle}>
        <div className="main" style={main6Style}>
          <Resume2
            name={"KELLY WHITE"}
            job={"ART DIRECTOR"}
            text={"EDUCATION"}
            time={"2010-2015"}
            time1={"2010-2017"}
            time2={"2015-2020"}
            time3={"2018-2021"}
            time4={"2020-2021"}
            text1={"EXPERIENCE"}
            text2={"LOREM IPSUM"}
            desc={
              "Porttitor amet massa Doner dolormolestie ium feliscon lore ipsum dolor tfringilla."
            }
            desc1={
              "Porttitor amet massa lorem ipssDoner dolormolestie ium felisconon lorem su ipsum dolor tfingilla.Lorem ipsumr."
            }
            text3={"CONTACT ME"}
            name1={"ADDRESS"}
            name2={"WEB"}
            name3={"PHONE"}
            address={"123, Street Oclaho, New York City, USA"}
            web={"contactme@email.com www.contactme.com"}
            phone={"0123 0000 0000 1000 0123 0000 8000 0000"}
            text4={"PRO SKILLS"}
            text5={"ILLUSTRATOR"}
            text6={"PHOTOSHOP"}
            text7={"INDESIGN"}
            text8={"MS WORD"}
            icon1={"fa-solid fa-location-dot"}
            icon2={"fa-solid fa-globe"}
            icon3={"fa-solid fa-phone"}
            icon4={"fa-brands fa-instagram"}
            icon5={"fa-brands fa-twitter"}
            icon6={"fa-brands fa-whatsapp"}
            bgColor={"#333"}
            bgColor1={"#f39842"}
            bgColor2={"#f09b34"}
            widthColor1={130}
            widthColor2={90}
            widthColor3={100}
            widthColor4={140}
          />
        </div>
      </div>
      {/* End Resume2 */}

      <div className="main" style={main7Style}>
        <LikeButton1 />
      </div>

      <div className="main" style={main8Style}>
        <LikeButton2 />
      </div>
      <div className="main" style={main8Style}>
        <RateButton1 />
      </div>

      <div className="main" style={main8Style}>
        <RateButton2 />
      </div>

      {/* Form3 */}
      <div className="app" style={appStyle}>
        <div className="main" style={main9Style}>
          <Form3
            name={"Set Your Partner"}
            name4={"Recruitment on Auto-pilot"}
            icon1={"fa-brands fa-magento"}
            name1={"Grovia"}
            name2={"Login"}
            text={"Login to your account"}
            text1={
              "Thank you for get back to Grovia, lets access our the best recommendation contact for you."
            }
            text7={"Don't have an account yet?"}
            text8={"Join Grovia Now!"}
          />
        </div>
      </div>
      {/* End Form3 */}

      <ImageViewer />

      {/* <NetWorking /> */}

      <div className="app" style={appStyle}>
        <div className="main" style={main10Style}>
          <Session7
            text1={"Email"}
            text2={"Password"}
            text3={"......"}
            text4={"Email Address is required"}
            text5={"Address"}
            text6={"1234 Main St"}
            text7={"Address 2"}
            text8={"Apartment, studio, or floor"}
            name1={"City"}
            name2={"District"}
            name3={"Commune"}
            name4={"Thành phố Hà Nội"}
            name5={"Quận Ba Đình"}
            name6={"Phường Phúc Xá"}
            name7={"Check me out"}
            name8={"Sign in"}
          />
        </div>
      </div>

      <div className="app" style={appStyle}>
        <ListUser />
      </div>

      <div className="app" style={appStyle}>
        <ButtonTab />
      </div>
      <div className="app" style={appStyle}>

      <IconTab />
      </div>

    </>
  );
}

export default App;
