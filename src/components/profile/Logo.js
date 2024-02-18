import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <div className={`h-12 w-24  relative ${className}`}>
      <Image src="/logo.png" alt="logo" fill className="object-cover" />
    </div>
  );
};

export default Logo;
