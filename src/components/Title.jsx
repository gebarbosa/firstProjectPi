import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-align: center;
  margin: 20px;
  color: #8D6F64;
  font-family: 'Arial', sans-serif;
`;

const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;
