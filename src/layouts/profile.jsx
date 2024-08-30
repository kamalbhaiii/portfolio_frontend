import React from "react";
import ProfileNavbar from "../components/navbar/profileNavbar";
import CustomContainer from "../containers/customContainer";
import HomepageRight from "../components/homepage_right";
import HomepageLeft from "../components/homepage_left";
import CustomAlert from "../components/custom_alert/customAlert";
import ParticleBackground from "../components/particle_component/particle_background";
import CustomConsole from "../components/custom_console";
import CustomButton from "../components/custom_button/customButton";
import { useTranslation } from "react-i18next";

const ProfileLayout = ({ children }) => {
  const { i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <CustomContainer className="h-screen w-screen">
      <ParticleBackground />
      <ProfileNavbar className={"h-1/8 z-50"} />
      <CustomContainer className="flex text-white h-7/8">
        {/* <CustomAlert
          message={"This website is currently under development."}
          type={"danger"}
        /> */}
        <CustomContainer className="hidden md:block md:w-1/8 overflow-hidden z-10">
          <HomepageLeft />
        </CustomContainer>
        <CustomContainer className="w-full p-7 pt-16 md:w-7/8 md:p-24 overflow-auto z-10">
          {children}
        </CustomContainer>
        <CustomContainer className="hidden md:block md:w-1/8 overflow-hidden z-10">
          <HomepageRight />
        </CustomContainer>
        {/* <CustomButton
          className={
            "absolute bottom-4 right-4 z-50 hover:!absolute hover:bottom-4 hover:right-4"
          }
          title={"German"}
          onClick={changeLang("de")}
        /> */}
      </CustomContainer>
      <CustomConsole />
    </CustomContainer>
  );
};

export default ProfileLayout;
