import Image from "next/image";
import Link from "next/link";

const HomeNav = () => {
  return (
    <nav className="absolute top-2 left-4 w-full items-center hover:cursor-pointer">
      <div className="flex items-center">
        <Image className="" src="/icons/cat-black.svg" width={70} height={70} alt="Vaella Logo" />
        <Link className="mr-8 ml-auto" target="_blank" href="https://github.com/glamboyosa/vaella">
          <Image src="/github.svg" width={30} height={30} alt="Github Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default HomeNav;
