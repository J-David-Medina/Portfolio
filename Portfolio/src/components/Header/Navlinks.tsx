interface NavlinksProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
const navigation = [
  { name: "Inicio", href: "#" },
  { name: "Proyectos", href: "##" },
  { name: "Contacto", href: "###" },
];

export const Navlinks: React.FC<NavlinksProps> = ({ onClick }) => {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onClick}
          className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white dark:hover:text-gray-100 px-4 py-2 rounded-lg transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};
