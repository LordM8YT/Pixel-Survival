export const GAME_CONSTANTS = {
    TILE_SIZE: 32,
    PLAYER: {
        STARTING_HEALTH: 100,
        STARTING_HUNGER: 100,
        MOVEMENT_SPEED: 200,
    },
    WORLD: {
        DAY_LENGTH: 600, // 10 minutes in seconds
        NIGHT_START: 300, // 5 minutes
        DAWN_DURATION: 60, // 1 minute transition
        DUSK_DURATION: 60,
        TILE_WIDTH: 64,
        TILE_HEIGHT: 32,
        WORLD_SIZE: 32
    },
    COLORS: {
        DAY_OVERLAY: 'rgba(0, 0, 0, 0)',
        NIGHT_OVERLAY: 'rgba(0, 0, 40, 0.7)'
    }
};