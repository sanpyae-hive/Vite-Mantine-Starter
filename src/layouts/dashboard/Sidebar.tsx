import { useEffect, useState } from 'react';
import {
  createStyles,
  Drawer,
  Group,
  Navbar,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { useMediaQuery } from '@mantine/hooks';
import { IconSwitchHorizontal, IconLogout } from '@tabler/icons';
import { menus } from 'config/menus';
import { MENU_WIDTH } from 'config/const';

type SidebarProps = {
  opened: boolean;
  onClose: () => void;
};

type SidebarContentProps = {
  opened: boolean;
  onClose: () => void;
};

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon');
  return {
    navbar: {
      top: 0,
      height: '100%',
      backgroundColor: theme.fn.variant({
        variant: 'filled',
        color: theme.primaryColor,
      }).background,
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background!,
        0.1
      )}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color: theme.white,
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background!,
          0.1
        ),
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.white,
      opacity: 0.75,
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
            .background!,
          0.15
        ),
        [`& .${icon}`]: {
          opacity: 0.9,
        },
      },
    },
  };
});

export function SidebarContent({ opened, onClose }: SidebarContentProps) {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState('Billing');

  const links = menus.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <Navbar
      p="md"
      hidden={!opened}
      hiddenBreakpoint="sm"
      width={MENU_WIDTH}
      className={classes.navbar}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <MantineLogo size={28} inverted />
        </Group>
        {links}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </Navbar.Section>
    </Navbar>
  );
}

export function Sidebar({ opened, onClose }: SidebarProps) {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

  if (matches) return <SidebarContent opened={opened} onClose={onClose} />;
  return (
    <Drawer opened={opened} onClose={onClose}>
      <SidebarContent opened={opened} onClose={onClose} />
    </Drawer>
  );
}
