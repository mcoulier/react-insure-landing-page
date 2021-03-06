import styled from "styled-components";
import { Line } from "../../styles/Line";
import { device } from "../../styles/Breakpoints";

export const SectionWrapper = styled.section`
  margin-top: 18rem;
`;

export const SectionContainer = styled.div`
  color: ${(props) => props.theme.colors.darkViolet};
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: auto;
  padding: 0rem 10rem;

  @media ${device.mobile} {
    padding: 0rem 2rem;
    align-items: center;
    text-align: center;
  }
`;

export const SectionTitle = styled.h2`
  font-size: clamp(3.3rem, 6vw, 4.5rem);
  font-weight: 400;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 4rem;
  line-height: 2;
  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 350px;
  margin-right: 1rem;
  @media ${device.mobile} {
    margin: 0;
    padding-bottom: 2rem;
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;
  padding: 1rem 0rem;
`;

export const CardBody = styled.p`
  color: ${(props) => props.theme.colors.greyViolet};
`;

export const SectionLine = styled(Line)`
  border-top: 1px solid ${(props) => props.theme.colors.violet};
`;
