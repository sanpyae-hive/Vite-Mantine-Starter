import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell, Drawer, useMantineTheme } from '@mantine/core';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export function DashboardLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding="xl"
      navbarOffsetBreakpoint="sm"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={<Sidebar opened={opened} onClose={() => setOpened(false)} />}
    >
      <Header opened={opened} onClick={() => setOpened((o) => !o)} />
      <Outlet />
    </AppShell>
  );
}
