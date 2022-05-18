import {FC} from 'react';
import { dataCustomers, headerCustomer } from '../../data/data';
import ConcertGRID from '../Own componentes/ConcertGrid';
import Table from '../Own componentes/Table';

const Css:FC = () => {
  return (
    <Table title='nada' data={dataCustomers} header={headerCustomer} />
  )
}

export default Css;