import {Ticket} from "@/app/features/ticket/types";
import {initialTickets} from "@/data";

export const getTicket = async (id: string): Promise<Ticket | null> => {

    await new Promise((resolve) => setTimeout(resolve, 500));

    const maybeTicket = initialTickets.find((ticket) => ticket.id === id);

    /*throw new Error(' oups, something went wrong')*/
    return new Promise((resolve) => {
        resolve(maybeTicket || null);
    });
}