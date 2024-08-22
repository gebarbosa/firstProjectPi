import styled from 'styled-components';

const StyledDescription = styled.p`
  text-align: center;
  margin: 10px 20px;
  color: #5DE2E7; 
  font-family: 'Arial', sans-serif;
`;

const Description = ({ children }) => {
  return <StyledDescription>{children}</StyledDescription>;
};

export default Description;
