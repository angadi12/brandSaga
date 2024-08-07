"use client";
import React, { useRef, useState } from "react";
import Backimage from "../../public/Homeasset/Heroback.png";

import Ellipse from "../../public/Homeasset/Ellipse2.png";
import Image from "next/image";

import { useRouter } from "next/navigation";

import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Spinner
} from "@nextui-org/react";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
import toast, { Toaster } from 'react-hot-toast';



const Herosection = () => {
  const router = useRouter();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [RegistationTab, SetRegistationTab] = useState("Tab");
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRegistration = () => {
    // Perform any registration logic here
    onOpenChange(false);
    SetRegistationTab("Tab"); // Close the modal after registration
  };




  const InfluencerRegistrationForm = () => {
    const [formData, setFormData] = useState({
      pageName: '',
      followers: '',
      pageURL: '',
      language: '',
      category: '',
      phoneNumber: '',
    });
  

    const languages = [
      { key: 'english', label: 'English' },
      { key: 'spanish', label: 'Spanish' },
      { key: 'french', label: 'French' },
      { key: 'german', label: 'German' },
    ];
    
    const categories = [
      { key: 'technology', label: 'Technology' },
      { key: 'fashion', label: 'Fashion' },
      { key: 'health', label: 'Health' },
      { key: 'travel', label: 'Travel' },
    ];
    console.log(formData)

    const handleLanguageChange = (selectedKeys) => {
      const selectedKey = Array.from(selectedKeys)[0];
      const selectedLabel = languages.find(lang => lang.key === selectedKey).label;
      setFormData({
        ...formData,
        language: selectedLabel,
      });
    };
  
    const handleCategoryChange = (selectedKeys) => {
      const selectedKey = Array.from(selectedKeys)[0];
      const selectedLabel = categories.find(cat => cat.key === selectedKey).label;
      setFormData({
        ...formData,
        category: selectedLabel,
      });
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
  
    const plainFormData = {
      pageName: formData.pageName,
      followers: formData.followers,
      pageURL: formData.pageURL,
      language: formData.language,
      category: formData.category,
      phoneNumber: formData.phoneNumber,
    };


    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.pageName || !formData.followers || !formData.pageURL || !formData.language || !formData.category || !formData.phoneNumber) {
        toast.error("Please fill out all required fields");
        return;
      }
  
      toast.promise(
        // Promise function
        saveFormData(plainFormData),
        {
          loading: 'Saving  Influencer information...',
          success: <b>Influencer registration successful!</b>,
          error: <b>Failed to register Influencer. Please try again</b>,
        }
      );
    };
  
    const saveFormData = async (data) => {
      try {
        const response = await fetch('/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          return true; // Promise resolved with true for success
        } else {
          return false; // Promise resolved with false for failure
        }
      } catch (error) {
        console.error('Error occurred:', error);
        toast.error("Failed. Please try again.");
        return false; // Promise resolved with false for failure
      }
    };
  


  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const response = await fetch('/api', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(plainFormData),
    //   });
  
    //   if (response.ok) {
    //     alert('Registration details sent successfully!');
    //   } else {
    //     alert('Failed to send registration details.');
    //   }
    // };
  
    return (
      <form onSubmit={handleSubmit}>
  
      <div>
      <div className="flex flex-col justify-start items-start md:gap-2 lg:gap-2 mb-2 md:py-4 lg:py-4">
      <h6 className="text-2xl font-bold leading-7">
            Hey <span className="text-redtheme">Influencer!</span>
          </h6>
          <p className="text-sm capitalize font-medium text-foreground-500">
            Fill out the required details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  md:gap-3 lg:gap-3 gap-2">
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Page Name"
            type="text"
            name="pageName"
            value={formData.pageName}
            onChange={handleChange}
            label={
              <p className="text-black font-medium">
                Page Name<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Number of followers"
            type="text"
            name="followers"
            value={formData.followers}
            onChange={handleChange}
            label={
              <p className="text-black font-medium">
                Number of followers<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Page URL"
            type="text"
            name="pageURL"
            value={formData.pageURL}
            onChange={handleChange}
            label={
              <p className="text-black font-medium">
                Page URL<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Select
            labelPlacement="outside"
            variant="bordered"
            placeholder="Content Language"
            radius="sm"
            size="md"
            name="language"
            selectedKeys={new Set([formData.language.toLowerCase()])}
            onSelectionChange={handleLanguageChange}
            // value={formData.language}
            // onChange={(value) => setFormData({ ...formData, language: value })}
            
            label={
              <p className="text-black font-medium">
                Content Language<span className="text-redtheme">*</span>
              </p>
            }
          >
             {languages.map((language) => (
              <SelectItem key={language.key}>{language.label}</SelectItem>
            ))}
          </Select>
          <Select
            labelPlacement="outside"
            variant="bordered"
            placeholder="Select Category"
            radius="sm"
            size="md"
            name="category"
            selectedKeys={new Set([formData.category.toLowerCase()])}
            onSelectionChange={handleCategoryChange}
            // value={formData.category}
            // onChange={(value) => setFormData({ ...formData, category: value })}
            label={
              <p className="text-black font-medium">
                Category<span className="text-redtheme">*</span>
              </p>
            }
          >
             {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            type="text"
            label={
              <p className="text-black font-medium">
                Phone Number<span className="text-redtheme">*</span>
              </p>
            }
          />
        </div>
      </div>
  
      <div className="flex justify-center items-center self-center mt-4">

      <Button type="submit" variant="solid" className="bg-redtheme text-white rounded-full w-60  text-center ">
        Submit
      </Button>
      </div>
  
      </form>
    );
  };


  const BrandRegistrationForm = () => {
    const [formData, setFormData] = useState({
      contactName: '',
      socialMediaLink: '',
      websiteURL: '',
      instagramLink: '',
      category: '',
      phoneNumber: '',
    });
    const [loading, setLoading] = useState(false); 


    const categories = [
      { key: 'tech', label: 'Technology' },
      { key: 'fashion', label: 'Fashion' },
      { key: 'health', label: 'Health' },
      { key: 'travel', label: 'Travel' },
    ];


    const handleCategoryChange = (selectedKeys) => {
      const selectedKey = Array.from(selectedKeys)[0];
      setFormData({
        ...formData,
        category: selectedKey,
      });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const plainFormData = {
      contactName: formData.contactName,
      socialMediaLink: formData.socialMediaLink,
      websiteURL: formData.websiteURL,
      instagramLink: formData.instagramLink,
      category: formData.category,
      phoneNumber: formData.phoneNumber,
    };


    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!formData.contactName || !formData.socialMediaLink || !formData.websiteURL || !formData.instagramLink || !formData.category || !formData.phoneNumber) {
        toast.error("Please fill out all required fields");
        return;
      }
  
      toast.promise(
        // Promise function
        saveFormData(plainFormData),
        {
          loading: 'Saving brand information...',
          success: <b>Brand registration successful!</b>,
          error: <b>Failed to register brand. Please try again.</b>,
        }
      );
    };
  
    const saveFormData = async (data) => {
      try {
        const response = await fetch('/api/Brand', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          return true; // Promise resolved with true for success
        } else {
          return false; // Promise resolved with false for failure
        }
      } catch (error) {
        console.error('Error occurred:', error);
        toast.error("Failed. Please try again.");
        return false; // Promise resolved with false for failure
      }
    };




  //   const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Set loading state to true when API call starts

  //   try {
  //     const response = await fetch('/api/Brand', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(plainFormData),
  //     });

  //     if (response.ok) {
  //       alert('Registration details sent successfully!');
  //     } else {
  //       alert('Failed to send registration details.');
  //     }
  //   } catch (error) {
  //     console.error('Error occurred:', error);
  //     alert('Failed to send registration details.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

    

    return (
      <form  onSubmit={handleSubmit}>

      <div>
        <div className="flex flex-col justify-start items-start md:gap-2 lg:gap-2 mb-2 md:py-4 lg:py-4">
          <h6 className="text-2xl font-bold leading-7">
            Hey <span className="text-redtheme">Brand owner!</span>
          </h6>
          <p className="md:text-sm lg:text-sm text-xs capitalize font-medium text-foreground-500">
            Fill out the required details.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  md:gap-3 lg:gap-3 gap-2">
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Point of contact name"
            name="contactName"
            value={formData.contactName}
            onChange={handleChange}
            type="text"
            label={
              <p className="text-black font-medium">
                Point of contact name<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Social Media Link"
            name="socialMediaLink"
            value={formData.socialMediaLink}
            onChange={handleChange}
            type="text"
            label={
              <p className="text-black font-medium">
                Social Media Link<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Website URL"
            name="websiteURL"
            value={formData.websiteURL}
            onChange={handleChange}
            type="text"
            label={
              <p className="text-black font-medium">
                Website URL<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Instagram Page Link"
            type="text"
            name="instagramLink"
            value={formData.instagramLink}
            onChange={handleChange}
            label={
              <p className="text-black font-medium">
                Instagram Page Link<span className="text-redtheme">*</span>
              </p>
            }
          />
          <Select
            labelPlacement="outside"
            variant="bordered"
            placeholder="Category"
            radius="sm"
            size="md"
            name="category"
            selectedKeys={new Set([formData.category])}
            onSelectionChange={handleCategoryChange}
            label={
              <p className="text-black font-medium">
                Category<span className="text-redtheme">*</span>
              </p>
            }
          >
             {categories.map((category) => (
              <SelectItem key={category.key}>{category.label}</SelectItem>
            ))}
          </Select>
          <Input
            radius="sm"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Phone Number"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            label={
              <p className="text-black font-medium">
                Phone Number<span className="text-redtheme">*</span>
              </p>
            }
          />
        </div>
      </div>

      <div className="flex justify-center items-center self-center mt-4">

      <Button type="submit" variant="solid" className="bg-redtheme text-white rounded-full w-60  text-center ">
       {loading?      <Spinner color="default"/>
: `Submit`}
      </Button>
      </div>
</form>
    );
  };




  return (
    <>
      <main className="md:pb-72 pb-72">
        <Image
          className="lg:h-screen md:h-[60vh] h-[40vh] w-full object-fill absolute top-0 z-0 overflow-hidden"
          src={Backimage}
          alt="backround-image"
        />

        <div className="w-full flex justify-center flex-col gap-8 ">
          <div className="z-10 w-full">
            <div className="flex md:hidden justify-evenly  items-center w-11/12 mx-auto gap-4 md:mt-24 mt-12 relative">
              <div className="w-96 h-auto">
                <video
                  className="rounded-md w-96  h-auto"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714141292/BRAND-SAGA/Herosection/Videos/zm2zhhouhfjkwm9ykjio.mp4"
                  }
                ></video>
              </div>
              <div className="rounded-md relative -top-8 w-96 h-auto">
                <video
                  className="rounded-md   w-96"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714127690/BRAND-SAGA/Herosection/Videos/qobrb5god6tcxnc240nt.mp4"
                  }
                ></video>
              </div>
              <div className="w-96 h-auto ">
                <video
                  className="rounded-md h-auto w-96"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714142887/BRAND-SAGA/Herosection/Videos/ohh2ayg9oajp8emta7ft.mp4"
                  }
                ></video>
              </div>
            </div>
            {/* desktop view */}
            <div className=" hidden md:flex justify-evenly  items-center w-11/12 mx-auto gap-8 mt-20 relative">
              <div className="rounded-md relative top-4  flex justify-center items-center  ">
                <video
                  className="rounded-2xl w-72 h-[24rem]"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714127690/BRAND-SAGA/Herosection/Videos/qobrb5god6tcxnc240nt.mp4"
                  }
                ></video>
              </div>
              <div className="rounded-2xl relative top-8 ">
                <video
                  className="rounded-2xl w-72 h-[24rem]"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714141292/BRAND-SAGA/Herosection/Videos/zm2zhhouhfjkwm9ykjio.mp4"
                  }
                ></video>
              </div>
              <div className="rounded-md relative bottom-16 ">
                <video
                  className="rounded-2xl w-72 h-[24rem]"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714141967/BRAND-SAGA/Herosection/Videos/z3oee6ryt9eymjyrukrq.mp4"
                  }
                ></video>
              </div>
              <div className="relative -top-4">
                <video
                  className="rounded-2xl w-72 h-[24rem]"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714142232/BRAND-SAGA/Herosection/Videos/wpgytdotlqaretrx3kny.mp4"
                  }
                ></video>
              </div>
              <div className="rounded-md relative top-8 ">
                <video
                  className="rounded-2xl w-72 h-[24rem]"
                  ref={videoRef}
                  loop
                  autoPlay={true}
                  muted
                  src={
                    "https://res.cloudinary.com/dipr7y36n/video/upload/v1714142887/BRAND-SAGA/Herosection/Videos/ohh2ayg9oajp8emta7ft.mp4"
                  }
                ></video>
              </div>
            </div>

            <div className="w-full absolute md:top-[25rem] top-[14rem]  h-96 overflow-hidden    ">
              <Image className="relative object-cover" src={Ellipse} alt="eclipse" />
              <div class="absolute md:top-[50%] top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="flex flex-col justify-center items-center md:gap-6 gap-3 w-full">
                  <h6 className="text-center md:text-4xl text-lg  font-bold md:leading-10">
                    Welcome to <span className="text-redtheme">BrandSaga!</span>
                    <br></br> Your digital journey starts here!
                  </h6>
                  <p className="md:text-center text-justify md:text-sm text-xs leading-5 font-semibold w-full">
                    {` We are your one-stop destination for all things digital
                  marketing. From influencer/Celebrity collaborations to social
                  media strategies, we are here to amplify your brand's presence
                  in the digital landscape.`}
                  </p>
                  <div className="flex justify-between items-center gap-8">
                    <Button
                      onPress={onOpen}
                      variant="solid"
                      className="bg-redtheme text-white rounded-full w-60"
                    >
                      Get Started
                    </Button>
                    <Button
                      onPress={() => router.push("/Contactus")}
                      variant="solid"
                      className="bg-wihte text-black font-semibold ring-2 ring-black rounded-full w-60 hidden md:block"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        onClose={() => SetRegistationTab("Tab")}
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col md:gap-8 text-center capitalize text-xl font-semibold">
              {RegistationTab === "Tab" ? "Who are you?" : "Registration"}
            </ModalHeader>
            <ModalBody>
              {RegistationTab === "Tab" ? (
                <div className="flex md:gap-24 gap-4 md:flex-row flex-col justify-center items-center ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">An Influencer</p>
                    <Image
                      onClick={() => SetRegistationTab("Influencer")}
                      className="md:h-72 md:w-72 w-40 h-40 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={influencerregi}
                      alt="influencerregi"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">a brand</p>
                    <Image
                      onClick={() => SetRegistationTab("Brand")}
                      className="md:h-72 md:w-72 w-40 h-40 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={brandregi}
                      alt="brandregi"
                    />
                  </div>
                </div>
              ) : // Render appropriate registration form based on tab selection
              RegistationTab === "Influencer" ? (
                <InfluencerRegistrationForm />
              ) : (
                RegistationTab === "Brand" && <BrandRegistrationForm />
              )}
            </ModalBody>
            <ModalFooter className="flex justify-center items-center md:mt-4">
              {/* <Button
                variant="solid"
                className="bg-redtheme text-white rounded-full w-60"
                onPress={RegistationTab === "Tab" ? "" : handleRegistration}
              >
                {RegistationTab === "Tab" ? "Proceed" : "Submit"}
              </Button> */}
              {/* <div onClick={()=>onOpenChange(false)} className="lg:hidden md:hidden flex">
                 <Button className="ring-1 ring-redtheme bg-white text-redtheme  rounded-full">x</Button>
              </div> */}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Herosection;
