import './App.css';
import HomePage from './routes/homePage';
import Header from './components/header';
import CompanySection from './routes/companySection';
import Footer from './components/footer';
import { Route } from 'react-router';
import RouteWraper from './routes/routes';

function App() {
  return (
    <div>
      <RouteWraper />
      <Footer />
    </div>
  );
}

export default App;
