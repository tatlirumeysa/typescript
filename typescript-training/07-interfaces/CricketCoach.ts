import { Coach } from "./Coach";

export class CricketCoach implements Coach{
    getDailyWorkout(): string {
        return "here is the cricketcoach is working out spin bowling";
    }
}