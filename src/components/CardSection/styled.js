import styled from "styled-components";

import { Line } from "../../styles/Line";

export const SectionContainer = styled.div`
  color: ${(props) => props.theme.colors.darkViolet};
  display: flex;
  flex-direction: column;
  padding: 1px 165px;
  margin-top: 300px;
`;

export const SectionTitle = styled.h3`
  font-size: 70px;
  font-weight: 400;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 350px;
  margin-right: 15px;
`;

export const CardTitle = styled.h4`
  font-size: 25px;
`;

export const CardBody = styled.p``;

export const SectionLine = styled(Line)`
  border-top: 1px solid ${(props) => props.theme.colors.violet};
`;
