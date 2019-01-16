import styled from "styled-components";

const Container = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Repository = styled.h1`
  width: 250px;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 14px;
      color: #666;
    }
  }

  ul {
    list-style-type: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
      font-size: 15px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background-color: #f5f5f5;
      }
    }
  }
`;

export { Container, Repository };
