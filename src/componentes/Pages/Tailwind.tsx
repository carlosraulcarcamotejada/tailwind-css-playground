import { FC } from "react";
import { dataCustomers, headerCustomer } from "../../data/data";
import ConcertGRID from "../Tailwind Labs/ConcertGRID";
import Table2 from "../Tailwind Labs/Table2";

const Tailwind: FC = () => {
  return (
    <>
      <Table2 title="Employees" data={dataCustomers} header={headerCustomer} />
    </>
  );
};

export default Tailwind;
