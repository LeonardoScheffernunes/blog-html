import './App.css';
import Article from './components/Article';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

function App() {
  const navigationLinks = ['Inicio', 'Sobre', 'Destinos', 'Contato'];

  const post = {
    titulo: 'Descobrindo as Praias do Nordeste',
    autor: 'Leona Silva',
    data: '15 de agosto de 2025',
    conteudo: [
      'O Nordeste do Brasil possui algumas das praias mais bonitas do mundo. Com aguas cristalinas, areia branca e um clima tropical durante quase todo o ano, a regiao e ideal para quem busca descanso e belas paisagens.',
      'Durante a viagem, foi possivel conhecer praias paradisiacas, experimentar pratos tipicos e observar a hospitalidade das pessoas locais. Cada lugar visitado tinha um charme proprio e experiencias inesqueciveis.',
      'Entre os destaques, ficaram os passeios a beira-mar, o contato com a natureza e a sensacao de tranquilidade que transforma qualquer roteiro em uma lembranca especial.'
    ]
  };

  const relatedPosts = [
    'Explorando as Montanhas do Sul',
    'Guia de Viagem para o Rio de Janeiro',
    'Dicas para Viajar Gastando Pouco'
  ];

  return (
    <div className="app">
      <Header titulo="Meu Blog de Viagens" />
      <Navigation links={navigationLinks} />

      <main className="content">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar posts={relatedPosts} />
      </main>

      <Footer texto="(c) 2026 - Todos os direitos reservados." />
    </div>
  );
}

export default App;
