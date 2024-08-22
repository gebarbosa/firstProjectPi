import React from 'react';
import './App.css';
import Products from './components/Products';

const products = [
  { 
    "id": 1, 
    "title": "Fusca", 
    "description": "Carro compacto clássico, conhecido por sua durabilidade e design icônico.", 
    "imageUrl": "https://via.placeholder.com/150?text=Fusca" 
  },
  { 
    "id": 2, 
    "title": "Civic", 
    "description": "Sedan médio da Honda, famoso por seu conforto e eficiência de combustível.", 
    "imageUrl": "https://via.placeholder.com/150?text=Civic" 
  },
  { 
    "id": 3, 
    "title": "Mustang", 
    "description": "Esportivo americano da Ford, conhecido por seu desempenho e estilo agressivo.", 
    "imageUrl": "https://via.placeholder.com/150?text=Mustang" 
  },
  { 
    "id": 4, 
    "title": "Corolla", 
    "description": "Sedan compacto da Toyota, confiável e ideal para o dia a dia.", 
    "imageUrl": "https://via.placeholder.com/150?text=Corolla" 
  },
  { 
    "id": 5, 
    "title": "Porsche 911", 
    "description": "Esportivo de luxo da Porsche, conhecido por sua engenharia de alta performance e design sofisticado.", 
    "imageUrl": "https://via.placeholder.com/150?text=Porsche+911" 
  },
  { 
    "id": 6, 
    "title": "Explorer", 
    "description": "SUV da Ford, oferece amplo espaço e recursos avançados para famílias.", 
    "imageUrl": "https://via.placeholder.com/150?text=Explorer" 
  },
  { 
    "id": 7, 
    "title": "Jeep Wrangler", 
    "description": "SUV off-road da Jeep, ideal para aventuras fora de estrada com sua capacidade robusta.", 
    "imageUrl": "https://via.placeholder.com/150?text=Jeep+Wrangler" 
  },
  { 
    "id": 8, 
    "title": "Audi A4", 
    "description": "Sedan de luxo da Audi, combina desempenho esportivo com um interior refinado.", 
    "imageUrl": "https://via.placeholder.com/150?text=Audi+A4" 
  },
  { 
    "id": 9, 
    "title": "Fiesta", 
    "description": "Hatchback compacto da Ford, ideal para dirigir na cidade com estilo e eficiência.", 
    "imageUrl": "https://via.placeholder.com/150?text=Fiesta" 
  },
  { 
    "id": 10, 
    "title": "Model 3", 
    "description": "Sedan elétrico da Tesla, oferece tecnologia avançada e um desempenho impressionante.", 
    "imageUrl": "https://via.placeholder.com/150?text=Model+3" 
  },
  { 
    "id": 11, 
    "title": "Chiron", 
    "description": "Supercarro da Bugatti, conhecido por sua velocidade extrema e luxo sem igual.", 
    "imageUrl": "https://via.placeholder.com/150?text=Chiron" 
  },
  { 
    "id": 12, 
    "title": "Camry", 
    "description": "Sedan da Toyota, oferece um equilíbrio entre conforto, espaço e eficiência.", 
    "imageUrl": "https://via.placeholder.com/150?text=Camry" 
  },
  { 
    "id": 13, 
    "title": "Ranger", 
    "description": "Picape da Ford, combina robustez e versatilidade para trabalho e lazer.", 
    "imageUrl": "https://via.placeholder.com/150?text=Ranger" 
  },
  { 
    "id": 14, 
    "title": "S-Class", 
    "description": "Sedan de luxo da Mercedes-Benz, oferece o máximo em conforto e tecnologia.", 
    "imageUrl": "https://via.placeholder.com/150?text=S-Class" 
  },
  { 
    "id": 15, 
    "title": "X5", 
    "description": "SUV da BMW, combina desempenho esportivo com um interior espaçoso e luxuoso.", 
    "imageUrl": "https://via.placeholder.com/150?text=X5" 
  },
  { 
    "id": 16, 
    "title": "RAV4", 
    "description": "SUV compacto da Toyota, conhecido por sua confiabilidade e eficiência.", 
    "imageUrl": "https://via.placeholder.com/150?text=RAV4" 
  },
  { 
    "id": 17, 
    "title": "C4 Cactus", 
    "description": "SUV compacto da Citroën, com design único e características inovadoras.", 
    "imageUrl": "https://via.placeholder.com/150?text=C4+Cactus" 
  },
  { 
    "id": 18, 
    "title": "A3", 
    "description": "Hatchback compacto da Audi, oferece um equilíbrio entre performance e sofisticação.", 
    "imageUrl": "https://via.placeholder.com/150?text=A3" 
  },
  { 
    "id": 19, 
    "title": "Camaro", 
    "description": "Esportivo da Chevrolet, conhecido por seu design musculoso e potência.", 
    "imageUrl": "https://via.placeholder.com/150?text=Camaro" 
  },
  { 
    "id": 20, 
    "title": "Siena", 
    "description": "Sedan compacto da Fiat, com boa relação custo-benefício e espaço interno.", 
    "imageUrl": "https://via.placeholder.com/150?text=Siena" 
  }
]; 

function App() {
  return (
    <div className="App">
      <Products products={products} />
    </div>
  );
}

export default App;
