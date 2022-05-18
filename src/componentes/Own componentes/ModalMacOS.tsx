import { FC } from "react";
import styled from "styled-components";

const ModalMacOS: FC = () => {
  return (
    <PopOutCard>
      <div className="modal">
        <img className="icon" src="/assets/trash-icon.ico" alt="icon-trash" />
        <h6 >
          Are you sure you want to permanently erase the items in the Trash?
        </h6>
        <p>You can't undo this action.</p>
        <div className="container-buttons">
          <div><button className="button ">Cancel</button></div>
          <div><button className="button primary">Empty Trash</button></div>
        </div>
      </div>
    </PopOutCard>
  );
};


const PopOutCard = styled.div`
  width: 260px;
  height: 237px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(37px);
  border-radius: 13px;
  box-shadow: 65px 65px 65px rgba(0, 0, 0, 0.150);
  border: 1px solid rgba(187, 187, 187, 0.5);


  p{
    font-size: 12px;
  }

  .modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h6 {
    text-align: center;
    margin-top: 15px;
    margin-left: 25px;
    margin-right: 25px;
    margin-bottom: 7px;
    font-weight: 800;
    font-size:small;
    line-height: 16px;
  }

  .container-buttons{
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button{
    color: black;
    border-radius: 7px;
    width: 111px;
    height: 29px;
    margin-top: 4px;
    margin-right: 4px;
    margin-left: 4px;
    background:#d8d7b0;
    font-weight: 500;
    transition: 0.2s;
    font-size: smaller;
  } 
  .primary{
    color: white;
    background: #f1b609;
    transition: 0.2s;
  }

  .icon{
    margin-top: 15px;
    width: 72px;
    height: 72px;
  }



`;

export default ModalMacOS;
