# Stratagem API

This is a simple API for stratagem used in Helldivers 2

Special thanks to [**Nicolas Vigneux**](https://github.com/nvigneux) for SVG icons used in this API (you can get them [**on this repo**](https://github.com/nvigneux/Helldivers-2-Stratagems-icons-svg))

## Data structure

```ts
interface Stratagem {
  id: string;

  name: string;

  /**
   * No descriptions are provided yet
   * */
  description?: string;

  /**
   * Images are in SVG format
   */
  imageUrl?: string;

  type: StratagemType;

  /** Code are letters used to represent stratagems arrow codes
   * U for Up
   * D for Down
   * L for Left
   * R for Right
   */
  code: string[];
}

enum StratagemType {
  OFFENSIVE = "Offensive",
  DEFENSIVE = "Defensive",
  SUPPORT = "Support",
  MISSION = "Mission",
}
```
