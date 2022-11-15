import {
  ActionIcon,
  Burger,
  Group,
  Header as MtHeader,
  MediaQuery,
} from '@mantine/core';
import { IconAdjustments } from '@tabler/icons';
import { DarkMode } from 'components/DarkMode';
import { ProfileMenu } from 'components/ProfileMenu';
import { MENU_WIDTH } from 'config/const';

type HeaderProps = {
  opened: boolean;
  onClick?: () => void;
};

export function Header({ opened, onClick }: HeaderProps) {
  return (
    <MtHeader height={{ base: 50, sm: 60 }} ml={MENU_WIDTH} p="md">
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Group>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Burger mr="xl" size="sm" opened={opened} onClick={onClick} />
          </MediaQuery>
        </Group>
        <Group spacing="xs">
          <DarkMode />
          <ActionIcon size="lg">
            <IconAdjustments size={18} />
          </ActionIcon>
          <ProfileMenu />
        </Group>
      </div>
    </MtHeader>
  );
}
