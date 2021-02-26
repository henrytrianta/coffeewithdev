import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image src="/vercel.svg" alt="Vercel" width={283} height={64} priority />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to your first Next.js site.
      </h2>
    </div>
  );
}
