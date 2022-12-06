import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';

function Header() {
  const {t, i18n} = useTranslation('common');
  return (
    <div>
      <h1>
        {t(`welcome.title`, {framework: 'React'})}
      </h1>
      <h2>
        {t('welcome.subtitle')}
      </h2>
      <p>
        {t('welcome.body')}
      </p>
      <button onClick={() => i18n.changeLanguage('de')}>de</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('es')}>es</button>
      <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
      <button onClick={() => i18n.changeLanguage('ch')}>ch</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
      </header>
    </div>
  );
}

export default App;
