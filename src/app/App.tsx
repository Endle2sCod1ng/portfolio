import styled from "styled-components";

function App() {
  return (
    <div className="app portfolio_theme_dark">
      <Title>
        Styled-components <span>.attrs</span> method
      </Title>
      <Form>
        <Field placeholder="Hello" />
        <Field />
        <Field />
        <Checkbox />
      </Form>
    </div>
  );
}

export default App;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 32px;
  span {
    color: #e91e63;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
`;

const Field = styled.input.attrs(({ placeholder }) => ({
  type: "password",
  placeholder: placeholder || "Type smth...",
}))`
  padding: 5px 15px;
  margin: 10px 0;
  width: 100%;
  font-size: 1rem;
`;
const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  //styles here...
`;
