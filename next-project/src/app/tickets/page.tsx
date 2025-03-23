import clsx from "clsx";
import Link from "next/link";
import {initialTickets} from "@/data";
import {ticketPath} from "@/path";

const TicketsPage = () => {



    const CheckIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="hotpink" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
    )
    const PencilIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="orange" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
        </svg>

    )
    const DocumentIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="cyan" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
        </svg>

    )

    const TICKET_ICON = {
        OPEN: <DocumentIcon />,
        DONE: <CheckIcon />,
        IN_PROGRESS: <PencilIcon />
    }


    return (
        <div className="flex flex-col flex-1 gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickes Page</h2>
                <p className="text-sm text-muted-foreground"> All your tickets in one place</p>
            </div>

            <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-from-top">
                {initialTickets.map(ticket => (
                    <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
                        <h2 className='text-lg font-semibold truncate'>{ticket.title}</h2>
                        <div>{TICKET_ICON[ticket.status]}</div>
                        <p className={clsx("text-sm text-slate-500 truncate", {
                            "line-through": ticket.status === "DONE"
                        })}>{ticket.content}</p>
                        <Link className={'text-sm underline'} href={ticketPath(ticket.id)}> link to ticket {ticket.id}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TicketsPage;