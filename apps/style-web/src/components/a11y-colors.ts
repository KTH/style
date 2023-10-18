interface LColor {
  lr: number;
  lg: number;
  lb: number;
}

export class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  lrgb(): LColor {
    function t(n: number) {
      if (n < 0.03928) {
        return n / 12.92;
      } else {
        return Math.pow((n + 0.055) / 1.055, 2.4);
      }
    }

    return {
      lr: t(this.r / 255),
      lg: t(this.g / 255),
      lb: t(this.b / 255),
    };
  }

  luminance() {
    const color = this.lrgb();

    return 0.2126 * color.lr + 0.7152 * color.lg + 0.0722 * color.lb;
  }

  static fromHex(hex: string) {
    return new Color(
      parseInt(hex.slice(1, 3), 16),
      parseInt(hex.slice(3, 5), 16),
      parseInt(hex.slice(5, 7), 16),
    );
  }
}

export function wcagContrast(c1: Color, c2: Color): number {
  const l1 = c1.luminance();
  const l2 = c2.luminance();

  if (l1 > l2) {
    return (l1 + 0.05) / (l2 + 0.05);
  } else {
    return (l2 + 0.05) / (l1 + 0.05);
  }
}

function updateTable() {}
