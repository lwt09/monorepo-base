'use client';

import { clientFn } from '@lwt/auth';

export default function Home() {
  // eslint-disable-next-line no-debugger
  clientFn();
  return (
    <div className="text-lg font-bold flex justify-center items-center h-full">hello world</div>
  );
}
