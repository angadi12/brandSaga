"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Input,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Spinner,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../../public/Homeasset/Brandlogo.png";
import Logo2 from "../../public/Homeasset/Brandlogo2.png";
import influencerregi from "../../public/Homeasset/influencerregi.png";
import brandregi from "../../public/Homeasset/brandregi.png";
import Link from "next/link";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { Squash as Hamburger } from "hamburger-react";
import toast, { Toaster } from 'react-hot-toast';






export default function Nav() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pathname = usePathname();
  const router=useRouter();
  const [selected, setSelected] = useState("Home");
  const [RegistationTab, SetRegistationTab] = useState("Tab");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Home", "Aboutus", "Services", "Portfolio", "Contactus"];

  useEffect(() => {
    switch (pathname) {
      case "/":
        setSelected("Home");
        break;
      case "/Aboutus":
        setSelected("Aboutus");
        break;
      case "/Services":
        setSelected("Services");
        break;
      case "/Portfolio":
        setSelected("Portfolio");
        break;
      case "/Contactus":
        setSelected("Contactus");
        break;
      default:
        setSelected("Home");
    }
  }, [pathname]);

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
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="full"
        className={pathname === "/" ?"md:w-[100%] mx-auto bg-[#1F1F1F4D]":'md:w-[100%] mx-auto bg-[#FFFFFF4D]'}
        isBlurred={true}
        position="sticky"
      >
        <NavbarBrand>
          {pathname === "/" ? (
            <Image className="md:h-12 md:w-52 " src={Logo} alt="brand-logo" />
          ) : (
            <Image className="md:h-12 md:w-52 " src={Logo2} alt="brand-logo" />
          )}
        </NavbarBrand>
        <NavbarContent
          className="hidden md:hidden lg:flex sm:hidden gap-8 uppercase "
          justify="center"
        >
          <NavbarItem>
            <Link
              className={
                selected === "Home"
                  ? "font-semibold text-xs text-redtheme"
                  : pathname === "/"
                  ? "font-bold text-xs shadow-2xl  text-white"
                  : "font-semibold text-xs text-black"
              }
              href="/"
            >
              HOME
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={
                selected === "Aboutus"
                  ? "font-semibold text-xs text-redtheme"
                  : pathname === "/"
                  ? "font-semibold text-xs shadow-2xl text-white"
                  : "font-semibold text-xs text-black"
              }
              href="/Aboutus"
            >
              ABOUT US
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={
                selected === "Services"
                  ? "font-semibold text-xs text-redtheme"
                  : pathname === "/"
                  ? "font-semibold text-xs text-white"
                  : "font-semibold text-xs text-black"
              }
              href="/Services"
            >
              services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={
                selected === "Portfolio"
                  ? "font-semibold text-xs text-redtheme"
                  : pathname === "/"
                  ? "font-semibold text-xs text-white"
                  : "font-semibold text-xs text-black"
              }
              href="/Portfolio"
            >
              portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className={
                selected === "Contactus"
                  ? "font-semibold text-xs text-redtheme"
                  : pathname === "/"
                  ? "font-semibold text-xs text-white"
                  : "font-semibold text-xs text-black"
              }
              href="/Contactus"
            >
              CONTACT US
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              onPress={onOpen}
              variant="solid"
              className="hidden md:hidden lg:block rounded-full bg-redtheme text-primary-foreground text-base font-medium w-52 text-center"
            >
              Get Started
            </Button>
            <div className="md:flex sm:flex lg:hidden flex">

            <Hamburger color={pathname === "/" ?'#ffff':'#000'} toggled={isMenuOpen} toggle={setIsMenuOpen} />
            </div>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="flex flex-col h-auto justify-between items-center">
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="flex justify-around h-auto  items-center" key={`${item}-${index}`}>
             <span onClick={()=>{item==="Home"?router.push('/'):router.push(`/${item}`),setIsMenuOpen(false)}} className="text-lg font-medium p-4">
              {item}
             </span>
            </NavbarMenuItem>
          ))}
          <NavbarContent justify="end">
          <NavbarItem>
            <Button variant="solid" className="text-white bg-redtheme rounded-full text-center">Get Started</Button>
          </NavbarItem>

          </NavbarContent>
        </NavbarMenu>
      </Navbar>

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
                {RegistationTab === "Tab" ? "Proceed" : ""}
              </Button> */}
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>


      <Toaster/>
    </>
  );
}
