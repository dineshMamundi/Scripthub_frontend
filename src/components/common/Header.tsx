interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({
  title,
  subtitle,
}: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white py-6 shadow-md">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-blue-100">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;