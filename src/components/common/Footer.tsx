interface FooterProps {
  companyName: string;
  year: number;
}

const Footer = ({
  companyName,
  year,
}: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {year} {companyName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;