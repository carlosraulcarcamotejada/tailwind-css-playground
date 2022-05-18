//https://www.youtube.com/watch?v=wTRTC4JNSGs&t=203s
//Space-Between Utilities – What's new in Tailwind CSS
import {FC} from 'react';


const Boxes:FC = () => {
  return (
    <div className="p-10 min-h-screen flex items-center bg-indigo-500">
    <div className="max-w-2xl mx-auto">
      <div className="mb-6 bg-indigo-400 h-4 w-40 rounded shadow-xl"></div>

      <div className="-m-3 flex justify-center flex-wrap items-center">
        <Box color="bg-white" />
        <Box color="bg-yellow-200" />
        <Box color="bg-teal-300" />
        <Box color="bg-red-300" />
        <Box color="bg-white" />
        <Box color="bg-yellow-200" />
        <Box color="bg-teal-300" />
        <Box color="bg-red-300" />
        <Box color="bg-white" />
        <Box color="bg-yellow-200" />
        <Box color="bg-teal-300" />
        <Box color="bg-red-300" />
        <Box color="bg-white" />
        <Box color="bg-yellow-200" />
        <Box color="bg-teal-300" />
        <Box color="bg-red-300" />
        <Box color="bg-white" />
        <Box color="bg-yellow-200" />
        <Box color="bg-teal-300" />
        <Box color="bg-red-300" />
      </div>
    </div>
  </div>
  )
}

const Box:FC<{color?:string}> = ({color = 'bg-white'}) => {
    return (
      <div className={`m-3 h-20 w-20 ${color} rounded-lg shadow-xl`}></div>
    )
  }

export default Boxes