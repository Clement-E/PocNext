import React from "react";
import {TicketItem} from "@/app/features/ticket/components/ticket-item";
import {getTickets} from "@/app/features/ticket/queries/get-tickets";
import {Heading} from "@/components/Heading";

const TicketsPage = async () => {

    const tickets = await getTickets()

    return (
        <div className="flex flex-col flex-1 gap-y-8">

            <Heading title="Tickets" description="All your tickets in one place" />

            <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-from-top">
                {tickets.map(ticket => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}

export default TicketsPage;