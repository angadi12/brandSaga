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


const InfluencerRegistrationForm = () => {
  return (
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
          label={
            <p className="text-black font-medium">
              Content Language<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Category"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Category<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Phone Number"
          type="text"
          label={
            <p className="text-black font-medium">
              Phone Number<span className="text-redtheme">*</span>
            </p>
          }
        />
      </div>
    </div>
  );
};

const BrandRegistrationForm = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start gap-2 py-4">
        <h6 className="text-2xl font-bold leading-7">
          Hey <span className="text-redtheme">Hey Brand owner!</span>
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
          type="text"
          label={
            <p className="text-black font-medium">
              Website URL<span className="text-redtheme">*</span>
            </p>
          }
        />
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Instagram Page Link"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Instagram Page Link<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Select
          labelPlacement="outside"
          variant="bordered"
          placeholder="Category"
          radius="sm"
          size="md"
          label={
            <p className="text-black font-medium">
              Category<span className="text-redtheme">*</span>
            </p>
          }
        >
          <SelectItem>optional</SelectItem>
        </Select>
        <Input
          radius="sm"
          variant="bordered"
          labelPlacement="outside"
          placeholder="Phone Number"
          type="text"
          label={
            <p className="text-black font-medium">
              Phone Number<span className="text-redtheme">*</span>
            </p>
          }
        />
      </div>
    </div>
  );
};

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
              <Button
                variant="solid"
                className="bg-redtheme text-white rounded-full w-60"
                onPress={RegistationTab === "Tab" ? "" : handleRegistration}
              >
                {RegistationTab === "Tab" ? "Proceed" : "Submit"}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
