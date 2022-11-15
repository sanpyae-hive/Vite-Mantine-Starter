import { useEffect, useState } from 'react';
import {
  setupResponseInterceptor,
  setupRequestInterceptor,
} from 'common/axios';

export function useAppSetup() {
  const [init, setInit] = useState(false);

  // axios interceptor
  useEffect(() => {
    setupResponseInterceptor();
    setupRequestInterceptor();
    setInit(true);
  }, []);

  return init;
}
