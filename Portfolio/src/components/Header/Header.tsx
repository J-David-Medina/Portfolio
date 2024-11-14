import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import ThemeSwitch, { MenuButton } from "./MenuButton";
import { Navlinks } from "./Navlinks";

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-white dark:bg-[#121212] shadow-sm  flex items-center "
        style={{ height: "3rem" }}
      >
        <nav className="flex items-center justify-between px-3  w-full">
          <div className="flex lg:hidden ">
            <MenuButton
              isOpen={mobileMenu}
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </div>

          <div className="hidden lg:flex lg:gap-x-12 ">
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
