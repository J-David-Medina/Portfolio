import { Dialog, DialogPanel } from "@headlessui/react";
import { useContext, useState } from "react";
import ThemeSwitch, { MenuButton } from "./MenuButton";
import { Navlinks } from "./Navlinks";
import { useAppContext } from "../../context/ContextApp";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header className=" ">
        <nav className="flex items-center justify-between p-3 lg:px-8">
          <div className="flex lg:hidden">
            <MenuButton
              isOpen={mobileMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Navlinks onClick={() => false} />
          </div>
          <ThemeSwitch />
        </nav>
        <Dialog
          open={mobileMenu}
          onClose={() => setMobileMenu(false)}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex justify-end">
              <MenuButton
                isOpen={mobileMenu}
                onClick={() => setMobileMenu(false)}
              />
            </div>
            <div className="mt-6 flex flex-col">
              <Navlinks onClick={() => setMobileMenu(false)} />
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};
