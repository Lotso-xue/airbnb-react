import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 100;
  color: ${(props) => props.theme.text.primaryColor};
  font-size: 14px;
  font-weight: 600;

  .btns { 
    display: flex;
    align-items: center;

    .btn {
      height: 18px;
      line-height: 18px;
      box-sizing: content-box;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    justify-content: space-evenly;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #ccc;
    color: #717171;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;

    /* 混入鼠标移上去是的阴影 */
    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
      color: #222;
      font-weight: 500;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;

        .register {
          font-weight: 700;
        }
      }
    }
  }
`;
