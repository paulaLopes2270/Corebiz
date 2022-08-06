import styled from 'styled-components'

export const ShowcaseComponent = styled.section`
  font-family: var(--nunito);
  padding-top: 25px;
`

export const ProductContainer = styled.div`
  width: 100%;
  padding: 20px 0 70px 0;
  box-sizing: border-box;

  > .centralizer {
    overflow: hidden;
    /* width: 60%; */
    > button {
      background-color: transparent;
      border: none;
      cursor: pointer;
}
    > div {
        display: flex;
        gap: 99px;
        overflow-x: auto;
        scroll-behavior: smooth;
        @media (max-width: 650px) {
            gap: 50px 20px;
        }
        ::-webkit-scrollbar{
            display: none;
        }
    }
}

`

export const Title = styled.div`
  > h2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
    width: fit-content;
    font-weight: 900;
    font-size: 20px;
    > hr {
      height: 4px;
      width: 65px;
      margin: 0;
      border: none;
      background: #c0c0c0;
      margin-top: 6px;
    }
  }
`

export const ProdCardComponent = styled.div`
  flex: 0 0 216px;
  width: 100%;
  margin-top: 20px;

  @media (max-width: 650px) {
    flex: 0 0 140px;
    width: 140px;
  }
  .display {
    position: relative;
    height: fit-content;
    img {
      width: 100%;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 153px;
    padding: 7px;
    background: #e6e8ea;
    h4 {
      margin: 0;
      text-transform: uppercase;
      color: #7a7a7a;
      font-size: 12px;
      text-align: center;
      @media (max-width: 650px) {
        font-size: 10px;
      }
    }
  }
`

export const RateContent = styled.div`
  display: flex;
  gap: 2.6px;
  margin: auto 0 10px 0;
`

export const PriceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
  h3 {
    font-size: 18px;
    margin: 0;
    @media (max-width: 650px) {
      font-size: 16px;
    }
  }
  h4 {
    height: 17px;
    font-size: 14px;
    text-transform: lowercase !important;
    @media (max-width: 650px) {
      font-size: 11px;
    }
    span {
      text-transform: uppercase;
      text-decoration: line-through;
    }
  }
  p {
    margin: 0;
    color: #7a7a7a;
    font-size: 15px;
    @media (max-width: 650px) {
      font-size: 11px;
    }
  }
`

export const Button = styled.button`
  width: 125px;
  height: 32px;
  border: none;
  border-radius: 5px;
  outline: none;
  background: black;
  color: white;
  transition: transform 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`