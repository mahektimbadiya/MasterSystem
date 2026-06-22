import './App.css';
import HomePage from './routes/homePage';
import Header from './components/header';
import CompanySection from './routes/companySection';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <HomePage />
      <div>
        <Header />
        <CompanySection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
