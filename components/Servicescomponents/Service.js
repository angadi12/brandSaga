'use client'
import React, { useState } from 'react'
import Customservicecard from './Customservicecard'
import influencersocial from '../../public/Servicesasset/influencersocial.png'
import talkingabout from '../../public/Servicesasset/talkingabout.png'
import peopleworking from '../../public/Servicesasset/peopleworking.png'
import peoplecleaning from '../../public/Servicesasset/peoplecleaning.png'
import { Divider,Button } from '@nextui-org/react'
import {motion} from 'framer-motion'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
Spinner,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
import Image from 'next/image'
import toast, { Toaster } from 'react-hot-toast';



const Service = () => {
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-3">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1  gap-3">
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


const Customdata=[
    {
    tittle:"Influencer/Celebrity Marketing",
    description:"Are you looking to boost your brand's presence through influencer/Celebrity collaborations? Our team at BrandSaga will help you connect with the perfect people who resonate with your brand and target audience.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:influencersocial,
    className:"lg:flex-row flex-col-reverse"
},
    {
    tittle:"Content Creation",
    description:"Need eye-catching content for your brand? Our team of creatives will tailor content that speaks directly to your audience and amplifies your brand message.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:talkingabout,
    className:"lg:flex-row-reverse flex-col-reverse"
},
    {
    tittle:"Digital Campaign Management",
    description:"Let us handle your digital campaigns from start to finish. Our expertise in campaign strategy, execution, and optimization will ensure maximum ROI for your brand.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:peopleworking,
    className:"lg:flex-row flex-col-reverse"
},
    {
    tittle:"Social Media Marketing",
    description:"Elevate your social media game with our strategic and creative social media marketing solutions. From content creation to community management, we've got you covered to make your brand stand out.",
    CTA1:"choose service",
    CTA2:"View Breakdown",
    Image:peoplecleaning,
    className:"lg:flex-row-reverse flex-col-reverse"
},
]


  return (

    <>
    <motion.div   initial={{opacity:0.6}}
    whileInView={{opacity:1}}
    transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center w-11/12 gap-8 mx-auto">
      <motion.div   initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{ duration: 0.8 }} className="py-12 flex flex-col justify-center items-center gap-4">
        <h2 className="font-bold text-4xl leading-8 capitalize">
        our <span className="text-redtheme"> services!</span>
        </h2>
        <p className="text-sm text-center font-medium leading-4 text-foreground-700 capitalize">
        Discover our range of services designed to propel you towards success.
        </p>
      </motion.div>

      <div className='flex flex-col justify-center items-center gap-8 md:w-11/12 mx-auto'>

        {Customdata.map((value,index)=>(
        <Customservicecard key={index} value={value}/>

        ))}
      </div>

      <div className="py-12 flex flex-col justify-center gap-4 mx-auto w-full items-center">
        <Divider orientation="horizontal"/>
        <div className="w-full flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center px-2">
          <h6 className="font-bold md:text-2xl md:leading-8">{`Ready to elevate your brand's digital`}<br></br> presence? Contact <span className="text-redtheme mr-2">BrandSaga</span>today to <br></br>{` start your digital saga!`}</h6>
          <Button   onPress={onOpen} variant="solid" className="w-60 rounded-full bg-redtheme text-white capitalize text-center">get started</Button>
        </div>
        <Divider orientation="horizontal"/>
      </div>
      </motion.div>



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
                <div className="flex gap-24 justify-center items-center ">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">An Influencer</p>
                    <Image
                      onClick={() => SetRegistationTab("Influencer")}
                      className="h-72 w-72 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
                      src={influencerregi}
                      alt="influencerregi"
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-sm font-bold uppercase">a brand</p>
                    <Image
                      onClick={() => SetRegistationTab("Brand")}
                      className="h-72 w-72 cursor-pointer hover:ring-2 hover:rounded-lg hover:ring-greentheme"
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
  )
}

export default Service