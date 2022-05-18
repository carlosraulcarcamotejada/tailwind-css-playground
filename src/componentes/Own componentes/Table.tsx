import { FC } from "react";
import styled from "styled-components";
import { DataTable, HeaderTable } from "../../interfaces/DataTable";

const Table: FC<{ data: DataTable[]; header: HeaderTable; title: string }> = ({
  data,
  header,
  title,
}) => {
  return (
    <Div>
      <h1>{title}</h1>
      <table>
        <RowHeader rowHeader={header} />
        <RowData rowData={data} />
      </table>
    </Div>
  );
};

const RowHeader: FC<{ rowHeader: HeaderTable }> = ({
  rowHeader: { header },
}) => {
  return (
    <thead>
      <tr>
        {header.map((columnTitle) => (
          <th key={columnTitle}> {columnTitle} </th>
        ))}
      </tr>
    </thead>
  );
};

const RowData: FC<{ rowData: DataTable[] }> = ({ rowData }) => {
  return (
    <tbody>
      {rowData.map(({ id, data }) => {
        return (
          <tr key={id}>

            {
              data.map( (cell,i) => { return (<td key={id+i}>{cell}</td>)} )
            }

          </tr>
        );
      })}
    </tbody>
  );
};

// const Footer:FC = () => {
//   return(
//     <tfoot>
//       I'm the footer
//     </tfoot>
//   )
// }



const Div = styled.div`

  table {
    width: 80%;
    margin: auto;
    border: none;
  }



  h1 {
    text-align: center;
  }

  th,
  td {
    padding: 8px;
    border: 1px solid #ddd;
  }

  th {
    text-align: left;
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
    background: #04aa6d;
  }

  tbody > tr:nth-child(even) {
    background: #f2f2f2;
  }

  tbody > tr:hover {
    background: #ddd;
  }

  @media screen and (max-width: 640px) {
    table {
      display: flex;
    }

    thead > tr   {
      display: flex;
      flex-direction: column; 
    }

    tbody {
      display: flex;
      flex-direction: row;
      overflow-x:auto;
    }

    tbody > tr {
      display: flex;
      flex-direction: column;
      white-space: nowrap;
    }

    tbody > tr > td{
      padding-top: 12px;
      padding-bottom: 12px;
    }

  }
`;

export default Table;
