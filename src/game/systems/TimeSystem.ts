import { GAME_CONSTANTS } from '../constants';

export class TimeSystem {
    private timeOfDay: number = 0;

    update(deltaTime: number): void {
        this.timeOfDay = (this.timeOfDay + deltaTime / 1000) % GAME_CONSTANTS.WORLD.DAY_LENGTH;
    }

    getDarknessLevel(): number {
        const { DAY_LENGTH, NIGHT_START, DAWN_DURATION, DUSK_DURATION } = GAME_CONSTANTS.WORLD;
        
        if (this.timeOfDay < NIGHT_START - DUSK_DURATION) {
            return 0; // Day
        }
        
        if (this.timeOfDay < NIGHT_START) {
            // Dusk transition
            return (this.timeOfDay - (NIGHT_START - DUSK_DURATION)) / DUSK_DURATION;
        }
        
        if (this.timeOfDay > DAY_LENGTH - DAWN_DURATION) {
            // Dawn transition
            return 1 - (this.timeOfDay - (DAY_LENGTH - DAWN_DURATION)) / DAWN_DURATION;
        }
        
        return 1; // Night
    }

    isNight(): boolean {
        return this.getDarknessLevel() > 0.5;
    }
}