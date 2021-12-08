import styled from "styled-components";

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.colors.darkViolet};
  background-color: inherit;
`;
