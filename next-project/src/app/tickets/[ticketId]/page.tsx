import Link from "next/link";
import React from "react";
import {TicketItem} from "@/app/features/ticket/components/ticket-item";
import {getTicket} from "@/app/features/ticket/queries/get-ticket";
import {Placeholder} from "@/components/Placeholder";
import {Button} from "@/components/ui/button";
import {ticketsPath} from "@/path";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {

    const ticket = await getTicket((await params).ticketId)

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
        <div className="flex justify-center animate-fade-from-top">
            <TicketItem ticket={ticket} isDetail/>
        </div>
    );
}

export default TicketPage;