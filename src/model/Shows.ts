import { ShowsDay } from "../enum/showsDay"

export class Shows {
    constructor(
        private id: string,
        private week_day: string,
        private start_time: string,
        private end_time: string,
        private band_id: string,
    ) {}

    getId(): string{
        return this.id
    }

    getWeek_day(): string{
        return this.week_day
    }

    getStart_time(): string{
        return this.start_time
    }

    getEnd_time(): string {
        return this.end_time
    }

    getBand_id(): string {
        return this.band_id
    }

    static stringToShowsDay(input: string): ShowsDay{
        switch (input) {
            case "SEXTA":
              return ShowsDay.SEXTA;
            case "SABADO":
              return ShowsDay.SABADO;
            case "DOMINGO":
                return ShowsDay.DOMINGO
            default:
              throw new Error("Invalid week shows day");
          }
    }

    static toShowsModel(shows: Shows): Shows {
        return new Shows(shows.id, shows.week_day, shows.start_time, shows.end_time, Shows.stringToShowsDay(shows.week_day));
    }
}