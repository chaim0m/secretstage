import Artist from "./artist";

export default class Show {
    _id: number;
    artist: Artist;
    title: string;
    price: number;
    date: Date;
    time: string;
    description: string;
    eventType: string;
    aboutHost: string; // added feature - might be concerted to model type.
    map: string;
    ticketQuantity: number;
}

// might need to add 