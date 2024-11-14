interface NavlinksProps {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}
const navigation = [
  { name: "Inicio", href: "#home" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contacto", href: "#contact" },
];

export const Navlinks: React.FC<NavlinksProps> = ({ onClick }) => {
  return (
    <>
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={onClick}
          className="text-sm font-semibold text-gray-900 dark:text-[#BB86FC] hover:bg-blue-500 dark:hover:bg-blue-700 hover:text-white dark:hover:text-gray-100 rounded-lg transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};
