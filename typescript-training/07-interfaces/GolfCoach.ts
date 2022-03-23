import { Coach } from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkout(): string {
        return "here is golf coach is working out for hitting ten balls at golf range";
    }
    
}