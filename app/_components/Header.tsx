import Image from "next/image";
import React, { useContext } from "react";
import { MdAddIcCall, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { MyContext, MyContextProvider } from "@/store/store";
import CartIcon from "./CartIcon";
// import { getCategorys } from "@/services/apiProducts";
// import CategoryList from "@/ui/Header/CategoryList";
// import SearchBox from "@/ui/Header/SearchBox";
// import SmallSearchBox from "@/ui/Header/SmallSearchBox";
// import { SidebarTrigger } from "./ui/sidebar";
// import { LOGO } from "@/app/_lib/constant";
// import DarkModeToggler from "@/ui/Header/DarkModeToggler";
// import { AuthDialog } from "@/ui/Auth/AuthDialog";
import AuthUISwitch from "./AuthUISwitch";
// import { isUserAuthenticated } from "@/services/apiAuth";

async function Header() {
  // const categories = await getCategorys();
  // const isAuthenticated = await isUserAuthenticated();
  return (
    <header className="px-3 sm:px-8 dark:bg-slate-700 pb-3">
      <div className="flex items-center justify-between py-2">
        <figure>
          {/* <Image src={LOGO} alt="logo image" className="w-40 h-16" /> */}
        </figure>
        {/* <SearchBox /> */}
        <div className="flex gap-5 items-center">
          <CartIcon />
          <MdAddIcCall className="w-6 h-6 fill-primary" />

          <AuthUISwitch />
          {/* <DarkModeToggler /> */}
        </div>
      </div>
      <div className="flex items-center sm:hidden justify-between gap-6">
        {/* <SidebarTrigger /> */}
        {/* <SmallSearchBox /> */}
      </div>
      {/* <CategoryList list={categories} /> */}
    </header>
  );
}

export default Header;
