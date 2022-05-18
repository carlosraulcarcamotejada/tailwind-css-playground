import { FC } from "react";
import banner from "../../data/dataBanner";
import concerts from "../../data/dataConcerts";
import BannerI from "../../interfaces/Banner";
import ConcertI from "../../interfaces/Concert";

const ConcertGRID = () => {
  return (
      <main className="w-11/12 mx-auto py-10 text-white 
      grid gap-5 
      grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        <Concerts concerts={concerts} />
        <Banner banner={banner} />
      </main>
  );
};

const Concerts:FC<{concerts: ConcertI[]}> = ({ concerts }) => {
  return (
    <section className='grid gap-5 sm:col-span-2 md:col-span-2 lg:col-span-3 
    xl:col-span-4 lg:grid-cols-2 xl:grid-cols-3 '>
      {concerts.map(concert => <Concert key={concert.id} concert={concert} />)}
    </section>
  );
};

const Concert: FC<{ concert: ConcertI }> = ({ concert: { img, place, date }}) => {
  return (
    <article className='bg-center cursor-pointer shadow-md 
    hover:shadow-indigo-500 rounded-lg h-52 font-bold p-5 relative 
    overflow-hidden bg-cover w-full'
     style={{backgroundImage:`url(${img})`}} >
      <div className='flex flex-col justify-between h-full'>
        <h3 className='text-md'>{place}</h3>
        <p >{date}</p>
      </div>
    </article>
  );
};

const Banner: FC<{ banner: BannerI }> = ({
  banner: { img, tittle, group_bands },
}) => {
  return (
    <section className='shadow-sm bg-center rounded-lg font-bold text-center
     p-5 bg-cover flex flex-col 
     justify-between max-h-screen col-span-1' style={{backgroundImage:`url(${img})`}}>
      <h3 className="text-md">{tittle}</h3>
      <ul>
        {group_bands.map((band) => {
          return (
            <li className='m-4 font-bold' key={band}>
              {band}
            </li>
          );
        })}
      </ul>
      <button className='bg-[#FFD600] shadow-md 
      hover:shadow-orange-600 block w-full hover:bg-yellow-500
      font-bold text-sm text-center p-2 border-none rounded-full 
      cursor-pointer text-black'>Comprar Boletos</button>
    </section>
  );
};

export default ConcertGRID;
