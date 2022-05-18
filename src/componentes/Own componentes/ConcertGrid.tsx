import { FC } from "react";
import banner from "../../data/dataBanner";
import concerts from "../../data/dataConcerts";
import BannerI from "../../interfaces/Banner";
import ConcertI from "../../interfaces/Concert";
import styled from "styled-components";

const ConcertGRID = () => {
  return (
    <Div>
      <div className="contenedor">
        <Concerts concerts={concerts} />
        <Banner banner={banner} />
      </div>
    </Div>
  );
};

const Concerts: FC<{ concerts: ConcertI[] }> = ({ concerts }) => {
  return (
    <div className="contenedor-conciertos">
      {concerts.map((concert) => {
        return <Concert key={concert.id} concert={concert} />;
      })}
    </div>
  );
};

const Concert: FC<{ concert: ConcertI }> = ({
  concert: { img, place, date },
}) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${img})` }}>
      <div className="textos">
        <h3>{place}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

const Banner: FC<{ banner: BannerI }> = ({
  banner: { img, tittle, group_bands },
}) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${img})` }}>
      <h3>{tittle}</h3>
      <ul className="">
        {group_bands.map((band) => {
          return (
            <li className="" key={band}>
              {band}
            </li>
          );
        })}
      </ul>
      <button className="boton">Comprar Boletos</button>
    </div>
  );
};

const Div = styled.div`
  color: #fff;

  .contenedor {
    width: 90%;
    margin: auto;
    padding: 40px 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }

  .contenedor-conciertos {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 20px;
  }

  .card {
    border-radius: 10px;
    min-height: 200px;
    font-weight: bold;
    padding: 20px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center center;
  }

  .card .textos {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .banner {
    border-radius: 10px;
    text-align: center;
    padding: 20px;
    background-size: cover;
    background-position: center center;
	max-height: 850px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .banner h3 {
	  font-weight: bold;
  }

  .banner ul {
    list-style: none;
  }

  .banner ul li {
    margin: 15px;
    font-weight: bold;
  }

  .banner .boton {
    background: #ffd600;
    display: block;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    padding: 10px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    text-align: center;
    color: black;
  }

  @media screen and (max-width: 640px) {
    .contenedor {
      grid-template-columns: 1fr;
    }
  }
`;

export default ConcertGRID;
