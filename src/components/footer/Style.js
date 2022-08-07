import styled from "styled-components"
export const FooterComponent = styled.footer`
  display: flex;
  align-items: center;

  width: 100%;
  min-height: 213px;
  padding: 25px 0 30px 0;

  background: black;
  font-family: var(--nunito);
  .centralizer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px 20px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`
export const Localization = styled.div`
  color: white;

  h3 {
    margin: 0;
  }

  hr {
    width: 44px;
    height: 6px;
    margin: 16px 0 20px 0;
    border: none;

    background: white;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p {
      margin: 0;
      font-size: 13px;
    }
  }
`
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  font-family: var(--nunito);
  button {
    display: flex;
    align-items: center;
    gap: 18px;
    width: 195px;
    height: 38px;
    padding-left: 18px;

    border: none;
    border-radius: 5px;
    outline: none;

    font-size: 12px;
    text-transform: uppercase;

    transition: transform 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(1.05);
    }

    span {
      text-align: left;
    }
  }
`
export const Partners = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`