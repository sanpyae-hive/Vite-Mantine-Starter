import { useRoutes } from 'react-router-dom';
import { MantineConfig } from 'components/MantineConfig';
import { useAppSetup } from 'hooks/useAppSetup';
import { routes } from 'routes';

function App() {
  useAppSetup();
  const element = useRoutes(routes);

  return <MantineConfig>{element}</MantineConfig>;
}

export default App;
