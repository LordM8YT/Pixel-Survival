# Pixel Survival

A 2.5D isometric survival game built with TypeScript and HTML5 Canvas.

## Features

- Isometric 2.5D world rendering
- Day/night cycle system
- Player movement with WASD controls
- Tile-based world generation
- Camera system that follows the player

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pixel-survival.git
cd pixel-survival
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

## Game Controls

- `W` - Move up
- `S` - Move down
- `A` - Move left
- `D` - Move right

## Project Structure

```
pixel-survival/
├── src/
│   ├── engine/
│   │   └── GameEngine.ts
│   ├── game/
│   │   ├── entities/
│   │   │   └── Player.ts
│   │   ├── systems/
│   │   │   └── TimeSystem.ts
│   │   ├── world/
│   │   │   └── World.ts
│   │   ├── constants.ts
│   │   └── Game.ts
│   └── main.ts
├── public/
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Development

### Building

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technical Details

- Built with TypeScript for type safety
- Uses Vite as the build tool
- HTML5 Canvas for rendering
- Implements a custom game engine
- Uses requestAnimationFrame for smooth animation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details