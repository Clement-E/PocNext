import {clsx} from "clsx";
import {LucideSquareArrowOutUpRight} from "lucide-react";
import Link from "next/link";
import {TICKET_ICON} from "@/app/features/ticket/constants";
import {Ticket} from "@/app/features/ticket/types";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ticketPath} from "@/path";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps ) => {

    const detailButton = (
        <Button asChild size="icon" variant="outline">
            <Link className={'text-sm underline'} href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4"/>
            </Link>
        </Button>
    )

    return (
        <div className={clsx("flex w-full gap-x-1", {
            "max-w-[580px]" : isDetail,
            "max-w-[420px]" : !isDetail
        })}>
            <Card
                className="w-full">
                <CardHeader>
                    <CardTitle className='flex gap-x-2'>
                        <span>{TICKET_ICON[ticket.status]}</span>
                        <span className='text-lg font-semibold truncate'>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className={clsx("whitespace-break-spaces", {
                    "line-clamp-3": !isDetail,
                })}>
                    <span>{ticket.content}</span>
                </CardContent>
            </Card>
            {isDetail ? null : <div className="flex flex-col justify-between">
                {detailButton}
            </div>}
        </div>
    )
}

export { TicketItem };