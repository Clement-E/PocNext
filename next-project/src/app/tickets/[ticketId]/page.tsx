import Link from "next/link";
import React from "react";
import {Heading} from "@/components/Heading";
import {Placeholder} from "@/components/Placeholder";
import {Button} from "@/components/ui/button";
import {initialTickets} from "@/data";
import {ticketsPath} from "@/path";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage =  async ({ params }: TicketPageProps) => {

    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if ( !ticket ) {
        return (
            <Placeholder
                label="Not found"
                button = {
                    <Button asChild variant="outline">
                        <Link href={ticketsPath()}>
                            Go back to ticket page
                        </Link>
                    </Button>
                }/>
        )
    }
    return (
        <div className="flex flex-col flex-1 gap-y-8">
            <Heading title={`Ticket Page ${ticketId}`} description={ticket.content} />
        </div>
    );
}

export default TicketPage;