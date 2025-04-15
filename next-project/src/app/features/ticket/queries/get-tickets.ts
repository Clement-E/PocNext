import {Ticket} from "@/app/features/ticket/types";
import {initialTickets} from "@/data";

const getTickets = async ():Promise<Ticket[] > => {

    await new Promise(resolve => setTimeout(resolve, 1000));

    return new Promise((resolve) => {
        resolve(initialTickets);
    });
}

export {getTickets};