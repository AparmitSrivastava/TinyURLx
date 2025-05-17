import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-green-100">
      <section className="grid grid-cols-2 h-[82vh]">

        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="font-bold text-3xl text-green-700" >StraightForward URL shortner</p>
          <p className="font-semibold text-lg text-black">No Login,No credentials required, Just work</p>
          <div className='flex gap-2'>
                <Link href='/shorten'><button className='bg-green-400 shadow-lg py-2 p-3 rounded-lg font-bold'>Try Now</button></Link>
                <Link href='https://github.com/AparmitSrivastava' target='_blank'><button className='bg-green-400 shadow-lg py-2 p-3 rounded-lg font-bold'>Github</button></Link>
            </div>
        </div>

        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" src={"/vector.jpg"} fill={true} alt="picture of vector"/>
        </div>

      </section>
    </main>
  );
}
