import styled from "styled-components";
import { Button } from "../../styles/Button";

export const BannerTitle = styled.h4`
  font-size: 54px;
  color: #fafafa;
  font-weight: 400;
  max-width: 480px;
`;

export const BannerBtn = styled(Button)`
  border: 2px solid #fafafa;
  color: #fafafa;
  &:hover {
    color: ${(props) => props.theme.colors.violet};
    background-color: #fafafa;
  }
`;

export const BannerContainer = styled.section`
  background-color: ${(props) => props.theme.colors.violet};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;
  padding: 0px 165px;
  height: 250px;
`;
