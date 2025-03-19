import Link from "next/link";
import {initialTickets} from "@/data";

const TicketsPage = () => {

    return (
        <div>
            {initialTickets.map(ticket => (
                <div key={ticket.id}>
                    <h2 className={'text-lg'}>{ticket.title}</h2>
                    <Link className={'text-sm underline'} href={`/tickets/${ticket.id}`}> link to ticket {ticket.id}</Link>
                </div>
            ))}
        </div>
    );
}

export default TicketsPage;