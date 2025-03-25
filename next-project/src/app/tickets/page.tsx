import {LucideCircleCheck, LucideFileText, LucidePencil} from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator";
import {initialTickets} from "@/data";
import {ticketPath} from "@/path";

const TicketsPage = () => {

    const TICKET_ICON = {
        OPEN: <LucideFileText />,
        DONE: <LucideCircleCheck />,
        IN_PROGRESS: <LucidePencil />
    }

    return (
        <div className="flex flex-col flex-1 gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Tickes Page</h2>
                <p className="text-sm text-muted-foreground"> All your tickets in one place</p>
            </div>

            <Separator />

            <div className="flex flex-col flex-1 items-center gap-y-4 animate-fade-from-top">
                {initialTickets.map(ticket => (
                    <Card
                        key={ticket.id}
                        className="w-full max-w-[420px]">
                        <CardHeader>
                            <CardTitle className='flex gap-x-2'>
                                <span>{TICKET_ICON[ticket.status]}</span>
                                <span className='text-lg font-semibold truncate'>{ticket.title}</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="line-clamp-3 whitespace-break-spaces">
                            <span>{ticket.content}</span>
                        </CardContent>
                        <CardFooter>
                            <Link className={'text-sm underline'} href={ticketPath(ticket.id)}> link to ticket {ticket.id}</Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default TicketsPage;