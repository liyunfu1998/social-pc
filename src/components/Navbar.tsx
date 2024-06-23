import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex h-24 items-center justify-between">
      {/* LEFT */}
      <div className="w-[20%] md:hidden lg:block">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Social
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden w-[50%] text-sm md:flex">
        <div className="flex gap-6 text-gray-600">
          <Link href={'/'} className="flex items-center gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16} className="h-4 w-4" />
            <span>Homepage</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src="/home.png" alt="Friends" width={16} height={16} className="h-4 w-4" />
            <span>Friends</span>
          </Link>
          <Link href={'/'} className="flex items-center gap-2">
            <Image src="/home.png" alt="Stories" width={16} height={16} className="h-4 w-4" />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
