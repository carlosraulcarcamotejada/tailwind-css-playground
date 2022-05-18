//https://www.youtube.com/watch?v=b-hrxkgkG-s&t=25s
//CSS Grid – What's new in Tailwind CSS
import {FC} from 'react'

const CssGrid:FC = () => {
  return (
    <div className='min-h-screen flex items-center bg-gradient-to-r from-pink-300 via-purple-400 to-blue-500'>
        <div className='flex-1 max-w-4xl mx-auto p-10 '>
            {/* CSS Grid Utilities */}
            <ul className='grid gap-4 auto-rows-fr auto-cols-fr '>
                <Box classes='' />
                <Box classes='' color='bg-teal-300' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
                <Box classes='' />
            </ul>
        </div>
    </div>
  )
}

const Box:FC<{color?:string, classes?:string}> = ({color = 'bg-gray-100', classes = ''}) => {
    return (
        <li className={`${color} ${classes} rounded-lg shadow-xl `}> <div className='h-24'></div> </li>
    );
};

export default CssGrid;