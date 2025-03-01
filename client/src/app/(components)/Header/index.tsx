
type HeaderProps = {
  name: string;
  className?: string; // Add className as an optional prop
};

const Header = ({ name, className }: HeaderProps) => {
  return (
    <h1 className={`text-2xl font-semibold text-gray-700 ${className}`}>
      {name}
    </h1>
  );
};

export default Header;













// type HeaderProps = {
//   name: string;
// };

// const Header = ({ name }: HeaderProps) => {
//   return <h1 className="text-2xl font-semibold text-gray-700">{name}</h1>;
// };

// export default Header;
