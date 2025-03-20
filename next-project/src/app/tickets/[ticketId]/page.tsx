import {initialTickets} from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>;
};

const TicketPage =  async ({ params }: TicketPageProps) => {

    const { ticketId } = await params;
    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if ( !ticket ) {
        return <div>Not found</div>;
    }
    return (
        <div>
            <h2 className="text-lg">Ticket Page {ticket.id} </h2>
            <div className={'text-sm'}>{ticket.content}</div>
        </div>
    );
}

export default TicketPage;