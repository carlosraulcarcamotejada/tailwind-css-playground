import { FC } from "react";
import { DataTable, HeaderTable } from "../../interfaces/DataTable";




const Table: FC<{ data: DataTable[]; header: HeaderTable; title: string }> = ({
  data,
  header,
  title,
}) => {
  return (
    <>
      <h1 className="text-3xl sm:text-xl m-6 text-center">{title}</h1>
      <table className="w-4/5 mx-auto sm:flex shadow-md">
        <RowHeader rowHeader={header} />
        <RowData rowData={data} />
        <RowFooter />
      </table>
    </>
  );
};

const RowHeader: FC<{ rowHeader: HeaderTable }> = ({
  rowHeader: { header },
}) => {
  return (
    <thead className="">
      <tr className="sm:flex sm:flex-col ">
        {header.map((columnTitle) => (
          <th
            className="text-left py-2 px-2 sm:text-sm border border-slate-200 bg-emerald-500 text-white "
            key={columnTitle}
          >
            {columnTitle}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const RowData: FC<{ rowData: DataTable[] }> = ({ rowData }) => {
  return (
    <tbody className="sm:flex sm:flex-row overflow-x-auto ">
      {rowData.map(({ id, data }) => {
        return (
          <tr
            className="even:bg-stone-100 hover:bg-stone-200  sm:flex sm:flex-col"
            key={id}
          >

          {
            data.map( (columnData, row) => { 
              console.log(id + row);
              return ( <td key={id + row} 
              className='border  sm:text-sm border-slate-200 py-2 px-2 whitespace-nowrap'> {columnData} </td> ) } )
          }


          </tr>
        );
      })}
    </tbody>
  );
};


const RowFooter:FC = () => {
  return (
    <tfoot>
      <tr className="flex">
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 1 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 2 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 3 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 4 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 5 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 6 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 7 </button>
        <button className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"> 8 </button>
      </tr>
    </tfoot>
  )
}




export default Table;
