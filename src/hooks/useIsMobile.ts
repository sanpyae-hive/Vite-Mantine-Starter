import { useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function useIsMobile() {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  return matches;
}
