import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
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
      <div className="hidden w-[50%] items-center justify-between text-sm md:flex">
        <div className="flex gap-6 text-gray-600">
          <Link href="/home" className="flex items-center gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16} className="h-4 w-4" />
            <span>Homepage</span>
          </Link>
          <Link href="/friends" className="flex items-center gap-2">
            <Image src="/friends.png" alt="Friends" width={16} height={16} className="h-4 w-4" />
            <span>Friends</span>
          </Link>
          <Link href="stories" className="flex items-center gap-2">
            <Image src="/stories.png" alt="Stories" width={16} height={16} className="h-4 w-4" />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden items-center rounded-xl bg-slate-100 p-2 xl:flex">
          <input type="text" placeholder="search..." className="bg-transparent outline-none" />
          <Image src="/search.png" alt="" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div
            className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={24} height={24} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/noAvatar.png" alt="" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
