//https://www.youtube.com/watch?v=DVZvkFEzDOE
//New Grid Utilities for Auto-Rows, Auto-Columns, and Full-Span - What's new in Tailwind CSS
import { FC } from "react";

const CssGrid2: FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-indigo-500">
      <div className="flex-1 max-w-full p-16">
        <div className="grid grid-cols-3 grid-rows-2 auto-rows-fr gap-4 grid-flow-row-dense">

            <div className='p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Home renovations</h2>
                <p className='text-gray-600'>A place to keep track of all renovations going around the house.</p>
            </div>

            <div className='p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Financial planning</h2>
                <p className='text-gray-600'>Making sure we're not spending more than we're earning!</p>
            </div>

            <div className='p-4 pr-6 bg-white border-l-8 border-teal-400 rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Fitness and nutrition program</h2>
                <p className='text-gray-600'>Gotta try to stay in shape!</p>
            </div>

            <div className='p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Side Business ideas</h2>
                <p className='text-gray-600'>A place to gather all the questionable ideas I have while sleeping.</p>
            </div>

            <div className='p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Euro Trip 2021</h2>
                <p className='text-gray-600'>Update: Is that even a thing anymore?</p>
            </div>

            <div className='p-4 pr-6 bg-white border-l-8 border-transparent rounded-md shadow-md space-y-2'>
                <h2 className='text-lg font-semibold leading-6'>Personal development</h2>
                <p className='text-gray-600'>Anything related to getting better, as a person.</p>
            </div>

        </div>
      </div>
    </div>
  );
};






export default CssGrid2;
