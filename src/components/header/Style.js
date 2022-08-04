import styled from "styled-components"

export const HeaderTag = styled.header`
position: relative;
display: flex;
justify-content: center;
max-height:80px;
max-width: 1920px;


> div {
    top: 0;
    display: flex;
    align-items: center;
    justify-content:center ;
    width: 100%;
    height: 80px;
    /* background: pink; */

    > div {
      display: flex;
      width: 65%;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      /* background-color: blue; */
    }
  }
`
export const LogoContainer = styled.div`
 flex: 1 1 auto;
  img {
    width: 100%;
    max-width: 170.14px;
    min-width: 102.46px;
  }
`
export const FormComponent = styled.form`
  flex:10 1 auto;
  max-width: 718px;
  display: flex;
  border-bottom: 1px solid black;

  > input[type="text"] {
    flex: 1 1 auto;
    border: none;
    outline: none;
  }
  > img {
    flex: 0 0 auto;
  }`

export const MyAccount = styled.a`
display: flex;
align-items: center;
gap: 6.5px;

span {
  text-transform: capitalize;
  font-size: 13px;
}`

export const CartContainer = styled.div`
display: flex;
align-items: center;
gap: 5px;
span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background: #f8475f;
  font-size: 10px;
  color: white;
}`