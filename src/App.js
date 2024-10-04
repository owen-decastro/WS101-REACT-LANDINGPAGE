import Pages from'./component/Pages.js';
import Importance from './component/ImportancePage.js';
import Footer from './component/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pages/>
      <Importance/>
      <Footer/>
    </div>
  );
}

export default App;
