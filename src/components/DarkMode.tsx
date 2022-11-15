import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function DarkMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size="lg"
      sx={(theme) => ({
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.yellow[4]
            : theme.colors.blue[6],
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun size={18} />
      ) : (
        <IconMoonStars size={18} />
      )}
    </ActionIcon>
  );
}
