import styled from "styled-components"


export const FormContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export  const Title = styled.div`
  margin: 0 0 16px 0;

  text-align: center;
  h2 {
    margin: 0;
    font-size: 22px;
    font-weight: bold;
  }
`
export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 140px;
  gap: 8px;

  width: 100%;
  max-width: 730px;

  input {
    height: 48px;
    font-size: 17px;
  }
  input[type="submit"] {
    flex: 0 0 140px;

    border: none;
    border-radius: 5px;
    background: black;
    color: white;

    cursor: pointer;
    transition: transform 0.3s;

    :hover {
      transform: scale(1.03);
    }
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`
export const InputContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;

  input[type="text"],
  input[type="email"] {
    position: relative;
    max-width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0 15px;

    border: ${({ errorVisibility }) =>
        errorVisibility ? "none" : "1px solid red"};
    border-radius: 5px;
    :focus {
      outline: 1px solid #BDBDBD;
    }
  }
`
export const ErrorMessage = styled.span`
  font-size: 12px;
  color: red;
  visibility: ${({ errorVisibility }) => (errorVisibility ? "hidden" : "show")};
`
