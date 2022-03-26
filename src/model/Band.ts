export class Band {
    constructor(
        private id: string,
        private name: string,
        private music_genre: string,
        private responsible: string,
    ) {}

    getId(): string{
        return this.id
    }

    getName(): string{
        return this.name
    }

    getMusic_genre(): string{
        return this.music_genre
    }

    getResponsible(): string{
        return this.responsible
    }


    static toBandModel(band: Band): Band {
        return new Band(band.id, band.name, band.music_genre, band.responsible);
      }
}

