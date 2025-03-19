import {initialTickets} from "@/data";

type TicketPageParams = {
    params : {
        ticketId: string,
    }
}

const TicketPage = ({ params }: TicketPageParams) => {

    const ticket = initialTickets.find(ticket => ticket.id === params.ticketId);

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