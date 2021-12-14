# useBattleCanvas

Creates `<canvas>` element that contains front-viewed enemy/ies, skill VFX, field effects.

## Usage

```tsx
import { useBattleCanvas } from "react-use-rpg";

const Demo = () => {
  const [battleCanvas, enemies, setEnemies, setSkillVFX, setFieldEffect, ref] =
    useBattleCanvas({
      backgroundSrc: "",
      enemies: [
        {
          src: "",
          alt: "",
          name: "",
        },
        {
          src: "",
          alt: "",
          targeted: true,
        },
      ],
      fieldEffect: {
        src: "",
        alt: "",
        shouldRemain: true,
      },
    });

  return <div>{battleCanvas}</div>;
};
```
