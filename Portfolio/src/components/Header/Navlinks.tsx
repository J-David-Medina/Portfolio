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
          className="text-sm font-semibold text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-lg"
        >
          {item.name}
        </a>
      ))}
    </>
  );
};
