'use client'
import React, { useState } from "react";
import Rectanglebackground from "../../public/Aboutusasset/Rectanglebackground.png";
import icon1 from "../../public/Aboutusasset/icon1.png";
import icon2 from "../../public/Aboutusasset/icon2.png";
import icon3 from "../../public/Aboutusasset/icon3.png";
import icon4 from "../../public/Aboutusasset/icon4.png";
import employee from "../../public/Aboutusasset/employee.png";
import Thread from "../../public/Aboutusasset/Thread.png";
import Facebook from "../../public/Aboutusasset/Facebook.png";
import Instagram from "../../public/Aboutusasset/Instagram.png";
import Linkdin from "../../public/Aboutusasset/Linkdin.png";
import Image from "next/image";
import {Button, Card, CardBody, CardFooter, Divider} from "@nextui-org/react";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,

  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';




const Meetourteam = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [RegistationTab, SetRegistationTab] = useState("Tab");




  const handleRegistration = () => {
    // Perform any registration logic here
    onOpenChange(false); // Close the modal after registration
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
        <div className="flex flex-col justify-start items-start gap-2 py-4">
          <h6 className="text-2xl font-bold leading-7">
            Hey <span className="text-redtheme">Influencer!</span>
          </h6>
          <p className="text-sm capitalize font-medium text-foreground-500">
            Fill out the required details.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
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
        <div className="flex flex-col justify-start items-start gap-2 py-4">
          <h6 className="text-2xl font-bold leading-7">
            Hey <span className="text-redtheme">Brand owner!</span>
          </h6>
          <p className="text-sm capitalize font-medium text-foreground-500">
            Fill out the required details.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
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
    <div>
      <div className="w-full relative">
        <Image className="h-[80vh] md:h-auto object-cover" src={Rectanglebackground} alt="Rectanglebackground"/>
        <div class="absolute md:top-[50%] top-[50%] flex flex-col justify-center items-center gap-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
            <div>
             <h6 className="text-center text-white font-bold text-2xl capitalize leading-8 ">how we ensure that we find the perfect match?</h6>
             <p className="text-center text-sm text-white">At BrandSaga, we understand the importance of selecting the right influencers/Celebrity to represent your brand.</p>
            </div>
            <div className="md:w-11/12 mx-auto grid md:grid-cols-4 grid-cols-2 items-center md:gap-12 gap-2 place-content-center">
                <Image src={icon1} alt="icon1"/>
                <Image src={icon2} alt="icon2"/>
                <Image src={icon3} alt="icon3"/>
                <Image src={icon4} alt="icon4"/>
            </div>
        </div>
      </div>
      <div className="py-16 w-11/12 mx-auto flex flex-col justify-start items-start gap-4 ">
          <h6 className="text-3xl font-bold leading-8 capitalize py-8">meet our<span className="text-redtheme"> team!</span></h6>
          <div className="w-full mx-auto grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1 place-content-center justify-items-center gap-16 items-center">
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          <Card shadow="sm" className="w-72 relative">
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="employee"
              className="w-full object-cover h-48"
              src={employee}
            />
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 -bottom-[30%]  w-3/4 p-2 h-auto rounded-2xl bg-greentheme">
              <h6 className="text-sm uppercase text-white font-semibold leading-7 text-center">Employee Name</h6>
              <p className="text-xs text-white text-center">Campaign Strategist</p>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-around mt-8">
               <Image className="h-12 w-12" src={Facebook} alt="facebook"/>
               <Image  className="h-12 w-12" src={Instagram} alt="Instagram"/>
               <Image  className="h-12 w-12" src={Linkdin} alt="Linkdin"/>
               <Image  className="h-12 w-12" src={Thread} alt="Thread"/>
          </CardFooter>
        </Card>
          </div>
      </div>
      <div className="py-12 flex flex-col justify-center gap-4 mx-auto w-11/12 items-center">
        <Divider orientation="horizontal"/>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center px-2">
          <h6 className="font-bold md:text-2xl text- md:leading-8">{`Ready to elevate your brand's digital`}<br></br> presence? Contact <span className="text-redtheme mr-2">BrandSaga</span>today to <br></br>{` start your digital saga!`}</h6>
          <Button  onPress={onOpen} variant="solid" className="w-60 rounded-full bg-redtheme text-white capitalize text-center">get started</Button>
        </div>
        <Divider orientation="horizontal"/>
      </div>
    </div>


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
            <ModalHeader className="flex flex-col gap-8 text-center capitalize text-xl font-semibold">
              {RegistationTab === "Tab" ? "Who are you?" : "Registration"}
            </ModalHeader>
            <ModalBody>
              {RegistationTab === "Tab" ? ( // Render tab selection
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
                <BrandRegistrationForm />
              )}
            </ModalBody>
            <ModalFooter className="flex justify-center items-center mt-4">
              {/* <Button
                variant="solid"
                className="bg-redtheme text-white rounded-full w-60"
                onPress={RegistationTab === "Tab" ? "" : handleRegistration}
              >
                {RegistationTab === "Tab" ? "Proceed" : "Submit"}
              </Button> */}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>

    </>
  );
};

export default Meetourteam;
