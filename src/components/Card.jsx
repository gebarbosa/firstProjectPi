import styled from 'styled-components';
import Image from './Image';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  text-align: center;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #D20103; 
`;  

const CardTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  color: #003366; /* Azul Escuro */
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666666; /* Cinza Escuro */
`;

const Card = ({ product }) => {
  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.title} />
      <CardTitle>{product.title}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
