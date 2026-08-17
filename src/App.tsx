import { Theme } from './settings/types';
import { MAZIX } from './components/generated/MAZIX';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  return (
    <>
      <MAZIX />
    </>);
  // %EXPORT_STATEMENT%
}

export default App;