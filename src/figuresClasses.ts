export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('...');
    }

    const longest = Math.max(this.a, this.b, this.c);

    if (longest >= this.a + this.b + this.c - longest) {
      throw new Error('...');
    } else {
      const square: number = (this.a + this.b + this.c) / 2;
      const area: number = Math.sqrt(
        square * (square - this.a) * (square - this.b) * (square - this.c),
      );

      return Math.floor(area * 100) / 100;
    }
  }
}

export class Circle implements Figure {
  shape = `circle`;

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    if (this.radius <= 0) {
      throw new Error('...');
    }

    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: 'red' | 'green' | 'blue';

  height: number;

  width: number;

  constructor(color: 'red' | 'green' | 'blue', height: number, width: number) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('...');
    } else {
      const area = this.height * this.width;

      return Math.floor(area * 100) / 100;
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
