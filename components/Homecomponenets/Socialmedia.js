import React from "react";
import { Switch, cn } from "@nextui-org/react";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Customizesocialcard from "./Customizesocialcard";

const Socialmedia = () => {
  const [isFacebook, setIsFacebook] = React.useState(true);
  const [isInstagram, setIsInstagram] = React.useState(false);
  const [isLinkdin, setIsLinkdin] = React.useState(false);
  const [isYoutube, setIsYoutube] = React.useState(false);
  const [isThread, setIsThread] = React.useState(false);

  const [activeSwitch, setActiveSwitch] = React.useState("Facebook");

  const handleSwitchChange = (title) => {
    setActiveSwitch(title);
  };


  const handleFacebookChange = (value) => {
    setIsFacebook(value);
  };

  const handleInstagramChange = (value) => {
    setIsInstagram(value);
  };

  const handleLinkedinChange = (value) => {
    setIsLinkdin(value);
  };

  const handleYoutubeChange = (value) => {
    setIsYoutube(value);
  };

  const handleThreadsChange = (value) => {
    setIsThread(value);
  };





  const classNamesforswitch = {
    base: cn("w-full "),
    wrapper:
     `p-1 h-10 w-28 overflow-visible   group-data-[selected=true]:bg-facebook`,
    thumb: cn(
      "w-6 h-6  shadow-lg",
      "group-data-[selected=true]:ml-20 group-data-[selected=true]:text-facebook ",

      "group-data-[pressed=true]:w-7",
      "group-data-[selected]:group-data-[pressed]:ml-4"
    ),
  };
  const classNamesforinsta = {
    base: cn("w-full "),
    wrapper:
     `p-1 h-10 w-32 overflow-visible  group-data-[selected=true]:bg-Instagram`,
    thumb: cn(
      "w-6 h-6  shadow-lg",
      "group-data-[selected=true]:ml-24 group-data-[selected=true]:text-Instagram",

      "group-data-[pressed=true]:w-7",
      "group-data-[selected]:group-data-[pressed]:ml-4"
    ),
  };
  const classNamesforyoutube = {
    base: cn("w-full "),
    wrapper:
     `p-1 h-10 w-28 overflow-visible  group-data-[selected=true]:bg-redtheme`,
    thumb: cn(
      "w-6 h-6  shadow-lg",
      "group-data-[selected=true]:ml-20 group-data-[selected=true]:text-redtheme",

      "group-data-[pressed=true]:w-7",
      "group-data-[selected]:group-data-[pressed]:ml-4"
    ),
  };
  const classNamesforthread = {
    base: cn("w-full "),
    wrapper:
     `p-1 h-10 w-28 overflow-visible   group-data-[selected=true]:bg-Threads`,
    thumb: cn(
      "w-6 h-6  shadow-lg",
      "group-data-[selected=true]:ml-20 group-data-[selected=true]:text-Threads",

      "group-data-[pressed=true]:w-7",
      "group-data-[selected]:group-data-[pressed]:ml-4 "
    ),
  };
  

  const Switchtoggle = [
    {
      icon: FaFacebookF,
      Title: "Facebook",
      iconcolor: "facebook",
      classnames: classNamesforswitch,
      isSelected: isFacebook,
      onValueChange: handleFacebookChange,
    },
    {
      icon: FaSquareInstagram,
      Title: "Instagram",
      iconcolor: 'Instagram',
      classnames: classNamesforinsta,
      isSelected: isInstagram,
      onValueChange: handleInstagramChange,
    },
    {
      icon: FaLinkedinIn,
      Title: "Linkdin",
      iconcolor:"facebook",
      classnames: classNamesforswitch,
      isSelected: isLinkdin,
      onValueChange: handleLinkedinChange,
    },
    {
      icon: FaYoutube,
      Title:"Youtube",
      iconcolor:"redtheme",
      classnames: classNamesforyoutube,
      isSelected: isYoutube,
      onValueChange: handleYoutubeChange,
    },
    {
      icon: FaThreads,
      Title: "Threads",
      iconcolor: "Threads",
      classnames: classNamesforthread,
      isSelected: isThread,
      onValueChange: handleThreadsChange,
    },
  ];
  return (
    <div className="flex flex-col w-11/12 mx-auto mt-4 py-20">
      <div>
        <h6 className="text-xl font-bold left-8 capitalize">
          Social Media <span className="text-redtheme">Channels!</span>
        </h6>
        <div className="flex justify-evenly items-start flex-row flex-wrap gap-8 py-8 w-full overflow-hidden">
          {Switchtoggle.map((Element, index) => (
            <Switch
              key={index}
              isSelected={activeSwitch === Element.Title}
              onValueChange={() => handleSwitchChange(Element.Title)}
              // isSelected={Element.isSelected}
              // onValueChange={Element.onValueChange}
              classNames={Element.classnames}
              defaultSelected
              size="lg"
              color="secondary"
              startContent={
                <span className="text-[0.45rem] ">{Element.Title}</span>
              }
              endContent={
                <span className="text-[0.45rem] ">{Element.Title}</span>
              }
              thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                  <Element.icon
                    className={`text-${Element.iconcolor} text-lg`}
                  />
                ) : (
                  <Element.icon className="text-foreground-400" />
                )
              }
            ></Switch>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
     {
      activeSwitch==='Facebook' && <Customizesocialcard/>
     }
          
      </div>
    </div>
  );
};

export default Socialmedia;
