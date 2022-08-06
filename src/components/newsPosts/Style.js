import styled from "styled-components"

export const Component = styled.section`
  display: flex;
  align-items: center;
  min-height: 146px;
  padding: 24px 0;
  background: #f2f2f2;
  font-family: var(--lato);
`
export const NewSubContainerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  h3,
  h4 {
    margin: 0;
    font-size: 14px;
  }
  h4 {
    font-weight: 500;
  }
  input {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 328px;
    margin-top: 15px;
    border-radius: 5px;

    background: black;
    color: white;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s;
    :hover {
      transform: scale(1.1);
    }
  }
`