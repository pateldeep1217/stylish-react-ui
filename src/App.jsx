import styled from "styled-components";
import { COLORS } from "./constants";
function App() {
  return <ThemeWrapper></ThemeWrapper>;
}

const ThemeWrapper = styled.div`
  background-color: ${COLORS.bunker[950]};
  color: ${COLORS.bunker[100]};
  height: 100vh;
  padding: 64px 32px;
`;

export default App;
