import Image from "next/image";
import Link from "next/link";

const HomeNav = () => {
  return (
    <nav className=" absolute hover:cursor-pointer top-2 left-4 w-full  items-center">
      <div className="flex items-center">
        <Image className="" src="/icons/cat-black.svg" width={70} height={70} alt="Vaella Logo" />
        <Link className="ml-auto mr-8" target="_blank" href="https://github.com/glamboyosa/vaella">
          <Image src="/github.svg" width={30} height={30} alt="Github Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default HomeNav;
