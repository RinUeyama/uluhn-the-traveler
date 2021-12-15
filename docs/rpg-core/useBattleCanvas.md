# useBattleCanvas

Creates `<canvas>` element that contains front-viewed enemy/ies, skill VFX, field effects.

## Usage

```tsx
import { useBattleCanvas } from "react-use-rpg";

const Demo = () => {
  const [battleCanvas, setEnemies, setSkillVFX, setFieldEffect, ref] =
    useBattleCanvas({
      backgroundSrc: "",
      enemies: [
        {
          textures: []
          name: "",
        },
        {
          images: ['']
          targeted: true,
        },
      ],
      fieldEffect: {
        textures: ['']
        shouldRemain: true,
      },
    });

  return <div>{battleCanvas}</div>;
};
```
