import Artist from "./artist";

export default class Show {
    _id: number;
    artist: Artist;
    title: string;
    description: string;
    price: number;
    eventType: string;
    host: string; // added feature - might be concerted to model type.
    map: string;
    ticketQuantity: number;
    date: Date;
    time: string;
}

// might need to add 