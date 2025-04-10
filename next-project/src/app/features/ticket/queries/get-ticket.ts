import {Ticket} from "@/app/features/ticket/types";
import {initialTickets} from "@/data";

export const getTicket = async (id: string): Promise<Ticket | null> => {

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const maybeTicket = initialTickets.find((ticket) => ticket.id === id);

    return new Promise((resolve) => {
        resolve(maybeTicket || null);
    });
}