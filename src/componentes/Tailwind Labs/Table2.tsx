import { FC } from "react";
import { DataTable, HeaderTable } from "../../interfaces/DataTable";


const Table2: FC<{ data: DataTable[]; header: HeaderTable; title: string }> = ({
  data,
  header,
  title,
}) => {
  return (
    <>
      
      <div className="w-11/12 mx-auto overflow-x-auto rounded-md shadow-md mt-10">
        <table className="w-full">
          <Title title={title} />
          <RowHeader rowHeader={header} />
          <RowData rowData={data} />
          <RowFooter />
        </table>
      </div>
    </>
  );
};

const Title:FC<{title:string}> = ({title}) => {
  return (
    <caption className="text-xl sm:text-2xl m-6">{title}</caption>
  )
}

const RowHeader: FC<{ rowHeader: HeaderTable }> = ({
  rowHeader: { header },
}) => {
  return (
    <thead className="bg-gray-50 border-b border-b-gray-300">
      <tr className="">
        {header.map((columnTitle) => (
          <th
            className="p-3 text-sm font-semibold tracking-wide text-left whitespace-nowrap "
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
    <tbody className="">
      {rowData.map(({ id, data }) => {
        return (
          <tr className="even:bg-gray-100 bg-white" key={id}>
            <td
                  key={id}
                  className="p-3 text-sm bg-w text-gray-700 whitespace-nowrap"
                >{id}</td>
            {data.map((columnData, row) => {
              return (
                <td
                  key={id + row}
                  className="p-3 text-sm  text-gray-700 whitespace-nowrap"
                >
                  {columnData}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

const RowFooter:FC = () => {



  return (
      <tfoot className="w-full">
      <tr className="flex py-1 px-1  w-full">
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 rounded-tl-md rounded-bl-md border-y border-l border-r">&laquo;</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 border-y border-r">1</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 border-y border-r">2</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 border-y border-r">3</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 border-y border-r">4</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 border-y border-r">5</button></td>
        <td><button className="py-2 text-gray-700 shadow-sm text-xs px-4 hover:bg-gray-100 active:bg-gray-200 rounded-tr-md rounded-br-md border-y border-r">&raquo;</button></td>
      </tr>
    </tfoot>

  )
}

export default Table2;
