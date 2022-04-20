import { Column, Row } from "./components/layout/Flex";

export default function App() {
  return (
    <Column>
      <h1>Column 1</h1>
      <h2>Column 2</h2>
      <Row>
        <h3>Row 1</h3>
        <h3>Row 2</h3>
      </Row>
    </Column>
  );
}
