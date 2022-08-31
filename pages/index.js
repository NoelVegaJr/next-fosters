import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="mt-32 mb-48">
        <h1 className="text-5xl font-extrabold mb-6">Welcome to Gwennies kitties.</h1>
        <p className="mb-4 text-xl">Adopt the cutest kitty today.</p>
        {/* <Image src={'/images/KittensInBox.jpg'} layout="fill" alt="pet for adoption" objectFit='cover' quality={100} /> */}
        <div className="flex gap-4">
          <Link href="/adopt"><a className=" bg-violet-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-violet-700 transition-all duration-300">Learn More</a></Link>
          <Link href="/adopt"><a className=" bg-pink-600  text-white font-bold px-6 py-2 mt-4 rounded-3xl hover:shadow-lg hover:bg-pink-700 transition-all duration-300">Adopt</a></Link>
        </div>
      </section>
    </>

  )
}