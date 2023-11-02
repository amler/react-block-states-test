import './App.css'
import ColorBoxGrid from './ColorBoxGrid'

const colors = [
  '#FF0000',
  '#FF5349',
  '#FFAE42',
  '#FFA500',
  '#FFFF00',
  '#9acd32',
  '#2e8b57',
  '#00ff00',
  '#0D98BA',
  '#0000ff',
  '#8a2be2',
  '#800080',
  '#953553',
];

function App() {
  return (
    <div>
      <ColorBoxGrid colors={colors} />
    </div>
  );
}

export default App;
