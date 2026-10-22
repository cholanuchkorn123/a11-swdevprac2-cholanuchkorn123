import Image from 'next/image';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import TopMenuItem from './TopMenuItem';

export default async function TopMenu() {
  const session = await getServerSession(authOptions);

  return (
    <div className="h-[50px] bg-white fixed top-0 left-0 right-0 z-30 border-b border-gray-200 flex flex-row items-center justify-between px-5">
      <div className="flex flex-row items-center h-full gap-4">
        {session ? (
          <Link
            href="/api/auth/signout"
            className="px-2 text-sm font-medium text-cyan-700 underline"
          >
            Sign-Out of {session.user?.name}
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            className="px-2 text-sm font-medium text-cyan-700 underline"
          >
            Sign-In
          </Link>
        )}
        <Link
          href="/mybooking"
          className="px-2 text-sm font-medium text-cyan-700 underline"
        >
          My Booking
        </Link>
      </div>
      <div className="flex flex-row items-center h-full">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src="/img/logo.png"
          alt="logo"
          width={0}
          height={0}
          sizes="100vh"
          className="h-full w-auto py-1"
        />
      </div>
    </div>
  );
}
