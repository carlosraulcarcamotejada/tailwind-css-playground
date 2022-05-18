import { FC } from "react";
import styled from "styled-components";
// import ModalMacOS from "./componentes/Own componentes/ModalMacOS";
// import Navbar from "./componentes/Tailwind Labs/NavBar";
// import Table from "./componentes/Own componentes/Table";
// import Boxes from "./componentes/Tailwind Labs/Boxes";
// import CssGrid from "./componentes/Tailwind Labs/CssGrid";
// import CssGrid2 from "./componentes/Tailwind Labs/CssGrid2";
// import Gradients from "./componentes/Tailwind Labs/Gradients";
// import StyledForm from "./componentes/Tailwind Labs/StyledForm";
// import { dataCustomers, headerCustomer } from "./data/data";
// import { DataTable, HeaderTable } from "./interfaces/DataTable";
import RouterApp from "./routers/RouterApp";

const App: FC = () => {
  return (
    <RouterApp />   
  );
};

const BackgroundImage = styled.div`
  background-image: url("./assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;

export default App;
