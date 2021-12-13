import styled from "styled-components";
import { Button } from "../../styles/Button";
import { device } from "../../styles/Breakpoints";

export const BannerContainer = styled.section`
  background-color: ${(props) => props.theme.colors.violet};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8rem 10rem;
  padding: 4rem 4rem;
  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
    margin: 8rem 2rem;
    padding: 4rem 2rem;
  }
`;

export const BannerTitle = styled.h3`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #fafafa;
  font-weight: 400;
  max-width: 50%;
  line-height: 1;
  @media ${device.mobile} {
    max-width: 100%;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

export const BannerBtn = styled(Button)`
  border: 2px solid #fafafa;
  color: #fafafa;
  &:hover {
    color: ${(props) => props.theme.colors.violet};
    background-color: #fafafa;
  }
`;
