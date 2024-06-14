"use  client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  useDisclosure,
  Spinner
} from "@nextui-org/react";
import Card1 from "../../public/Servicesasset/Card1.png";
import Card2 from "../../public/Servicesasset/Card2.png";
import Card3 from "../../public/Servicesasset/Card3.png";
import Card4 from "../../public/Servicesasset/Card4.png";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
import { Select, SelectItem } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';





const Customservicecard = ({ value }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modelopen, Setmodelopen] = useState(false);
  const [RegistationTab, SetRegistationTab] = useState("Tab");

  const handleRegistration = () => {
    // Perform any registration logic here
    Setmodelopen(false); // Close the modal after registration
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
      <div
        className={`flex justify-between px-2 ${value.className} items-start py-8 w-full`}
      >
        <div className="flex flex-col justify-start items-start gap-4 lg:w-[46%] ">
          <div className="flex flex-col justify-start items-start md:mt-8 lg:mt-0">
            <h6 className="md:text-2xl md:mt-0 mt-4  font-bold capitalize leading-7">
              {value.tittle}
            </h6>
            <span className="h-1 w-24 bg-redtheme"></span>
          </div>

          <p className="text-start  text-sm font-medium leading-7 lg:w-[32rem]">
            {value.description}
          </p>
          <div className="mt-4 flex flex-col md:flex-row w-full items-center gap-4 md:gap-8">
            {/* <Button variant='solid' className='text-white md:w-40 w-full  h-10 rounded-full text-center bg-redtheme'>{value.CTA1}</Button> */}
            <Button
              onPress={onOpen}
              className="text-white md:w-40 w-full h-10 rounded-full text-center bg-greentheme"
            >
              {value.CTA2}
            </Button>
          </div>
        </div>
        <div className="lg:w-[45%]">
          <Image src={value.Image} alt={value.Image} />
        </div>
      </div>

      <Modal
        backdrop="blur"
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
              y: 20,
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
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-full justify-center items-center">
                {value.tittle}
              </ModalHeader>
              <ModalBody>
                {value.tittle === "Influencer/Celebrity Marketing" && (
                  <div>
                    <Image src={Card1} alt="Card1" />
                    <div className="flex flex-col py-4 w-full">
                      <p className="text-sm uppercase text-redtheme font-semibold">
                        Breakdown:
                      </p>
                      <li className="text-xs font-medium uppercase p-1">
                        Micro-Influencers (10k-50k followers):{" "}<br></br>
                        <span className="text-redtheme">₹2000 - ₹6000</span>&nbsp;per
                        post
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        Mid-Tier Influencers (50k-500k followers):{" "}<br></br>
                        <span className="text-redtheme"> ₹6000 - ₹30000</span>&nbsp;per
                        post
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        {" "}
                        Macro-Influencers (500k-1M followers):{" "}<br></br>
                        <span className="text-redtheme">₹30000-₹100000</span>
                       &nbsp;per post
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        {" "}
                        Celebrity Influencers (1M+ followers):{" "}<br></br>
                        <span className="text-redtheme">Custom </span>pricing
                      </li>
                    </div>
                  </div>
                )}
                {value.tittle === "Content Creation" && (
                  <div>
                    <Image src={Card2} alt="Card1" />
                    <div className="flex flex-col py-4 w-full">
                      <p className="text-sm uppercase text-redtheme font-semibold">
                        Breakdown:
                      </p>
                      <li className="text-xs font-medium uppercase p-1">
                        Graphic Design:{" "}
                        Starting from<span className="text-redtheme">&nbsp;₹1000</span>
                        
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        Video Production:{" "}
                        Starting from<span className="text-redtheme">&nbsp;₹1000</span>

                      </li>
                    </div>
                  </div>
                )}
                {value.tittle === "Digital Campaign Management" && (
                  <div>
                    <Image src={Card3} alt="Card1" />
                    <div className="flex flex-col py-4 w-full">
                      <p className="text-sm uppercase text-redtheme font-semibold">
                        Breakdown:
                      </p>
                      <li className="text-xs font-medium uppercase p-1">
                        Campaign Strategy:{" "}
                        <span className="text-redtheme"> ₹10000 - ₹50000</span>
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        {" "}
                        Execution and Optimization:{" "}
                        <span className="text-redtheme">10%</span>of campaign
                        budget
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        {" "}
                        Reporting and Analysis:{" "}
                        <span className="text-redtheme">Included</span> in
                        package
                      </li>
                    </div>
                  </div>
                )}
                {value.tittle === "Social Media Marketing" && (
                  <div>
                    <Image src={Card4} alt="Card1" />
                    <div className="flex flex-col py-4 w-full">
                      <p className="text-sm uppercase text-redtheme font-semibold">
                        Breakdown:
                      </p>
                      <li className="text-xs font-medium uppercase p-1">
                        Monthly Social Media Management:<br></br>Starting from{" "}
                        <span className="text-redtheme">₹15000</span>
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        Content Creation:{" "}
                        <span className="text-redtheme">₹500 - ₹2000</span>&nbsp;per
                        post
                      </li>
                      <li className="text-xs font-medium uppercase p-1">
                        {" "}
                        Advertising Management:{" "}
                        <span className="text-redtheme"> 15% </span>on ad spend
                      </li>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="flex justify-center items-center w-full">
                <Button
                  onClick={() => Setmodelopen(true)}
                  variant="solid"
                  className="text-white rounded-full bg-redtheme text-center capitalize"
                  onPress={onClose}
                >
                  choose service
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        backdrop="blur"
        onClose={() => {
          SetRegistationTab("Tab"), Setmodelopen(!modelopen);
        }}
        size="4xl"
        isOpen={modelopen}
        onOpenChange={(prev) => Setmodelopen(!prev)}
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

export default Customservicecard;
