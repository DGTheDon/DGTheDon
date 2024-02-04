import React from 'react';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/client';

const Header = () => {
  const [session, loading] = useSession();

  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white font-bold text-xl">OnlyFans Rival App</a>
        </Link>
        <nav>
          {!session && (
            <button
              className="bg-white text-blue-500 px-4 py-2 rounded"
              onClick={() => signIn()}
            >
              Sign In
            </button>
          )}
          {session && (
            <>
              <Link href="/profile">
                <a className="text-white px-4">Profile</a>
              </Link>
              <button
                className="bg-white text-blue-500 px-4 py-2 rounded"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;