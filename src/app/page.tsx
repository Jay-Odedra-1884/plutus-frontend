import Link from 'next/link';
import Card from '@/components/Card';

export default function Home() {

  interface Data {
    name: string;
    description: string;
    image: string;
  }

  const data: Data[] =[
    {
      name:"Priyansh Patel",
      description:"A blockchain developer",
      image:"./profile-pic-01.jpeg"
    },
    {
      name:"Gunj Patel",
      description:"An AI model trainer",
      image:"./profile-pic-01.jpeg"
    },
    {
      name:"Bhargav Maru",
      description:"A backend developer",
      image:"./profile-pic-01.jpeg"
    },
    {
      name:"Jay Odedra",
      description:"A frontend developer",
      image:"./profile-pic-01.jpeg"
    }
  ]

  return (
    <div>
      <div className="w-full h-screen bg-white dark:bg-theme_black-dark overflow-x-hidden">
        <div className="w-full h-screen grid grid-cols-[750px_600px] gap-4 p-4 text-center items-center">
          <div className="">
            <p className="text-6xl mb-4 dark:text-white">Hey!</p>
            <div className="bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 mb-4">
              <p className="text-transparent text-6xl font-bold mb-10">let's connect your wallet</p>
            </div>
            <Link href={"http://plutus.priyanshpatel.site"}>
              <button className="text-xl bg-theme_red-light dark:bg-theme_red-dark rounded-lg px-4 py-2">Connect your wallet</button>
            </Link>
          </div>
          <div className="w-full flex justify-center items-center transition-all duration-500 ease-in-out transform relative hover:scale-110 ml-28">
            <img src="bitcoin-01.svg" alt="price" className="w-60 absolute left-10 rounded-md animate-jump" />
            <img src="ethereum.png" alt="price" className="w-96 absolute left-56 rounded-md animate-jump" />
            <img src="solana.png" alt="price" className="w-96 absolute top-1/2 rounded-md animate-jump" />
          </div>
        </div>
      </div>
      <div className='w-full h-screen bg-white flex flex-col justify-center text-center gap-10 dark:bg-theme_black-dark overflow-x-hidden'>
        <div className='bg-clip-text bg-theme_red-light text-3xl'>
          <p className='font-bold text-transparent'>Meet Our Team</p>
        </div>
        <div className='w-full grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 '>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
        </div>
      </div>
    </div>
  );
}
