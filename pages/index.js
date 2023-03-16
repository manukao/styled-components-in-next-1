import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithClassName/BoxWithStyledComponents";
import styled from "styled-components";

const BoxesContainer = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <BoxesContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </BoxesContainer>
  );
}
