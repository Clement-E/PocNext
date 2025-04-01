import {TicketItem} from "@/app/features/ticket/components/ticket-item";
import {Heading} from "@/components/Heading";
import {initialTickets} from "@/data";

const TicketsPage = () => {

    return (
        <div className="flex flex-col flex-1 gap-y-8">

            <Heading title="Tickets" description="All your tickets in one place" />

            <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-from-top">
                {initialTickets.map(ticket => (
                    <TicketItem key={ticket.id} ticket={ticket} />
                ))}
            </div>
        </div>
    );
}

export default TicketsPage;