import {notFound} from "next/navigation";
import React from "react";
import {TicketItem} from "@/app/features/ticket/components/ticket-item";
import {getTicket} from "@/app/features/ticket/queries/get-ticket";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {

    const ticket = await getTicket((await params).ticketId)

    if ( !ticket ) {
        notFound();
    }
    return (
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    );
}

export default TicketPage;