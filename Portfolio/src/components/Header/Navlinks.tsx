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
          className="text-sm font-semibold  text-title blue-700 rounded-lg transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};
