import styled from 'styled-components';
import Card from './Card';
import Description from './Description';
import Title from './Title';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #E2EAF4; 
  padding: 20px;
`;

const Products = ({ products }) => {
  return (
    <div>
      <Title>Lista de Produtos</Title>
      <Description>Confira nossos produtos abaixo:</Description>
      <ProductsContainer>
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </div>
  );
};

export default Products;
