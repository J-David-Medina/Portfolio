import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
  >
    {isOpen ? (
      <XMarkIcon className="size-6" />
    ) : (
      <Bars3Icon className="size-6" />
    )}
  </button>
);
