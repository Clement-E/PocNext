import { Ticket } from "@prisma/client";
import {clsx} from "clsx";
import {LucidePencil, LucideSquareArrowOutUpRight, LucideTrash} from "lucide-react";
import Link from "next/link";
import {deleteTicket} from "@/app/features/ticket/actions/delete-ticket";
import {TICKET_ICON} from "@/app/features/ticket/constants";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {editTicketPath, ticketPath} from "@/path";

type TicketItemProps = {
  ticket: Ticket;
  isDetail?: boolean;
}

const TicketItem = ({ ticket, isDetail }: TicketItemProps ) => {

  const detailButton = (
    <Button asChild size="icon" variant="outline">
      <Link prefetch className={'text-sm underline'} href={ticketPath(ticket.id)}>
        <LucideSquareArrowOutUpRight className="h-4 w-4"/>
      </Link>
    </Button>
  )

  const deleteButton = (
    <form action={deleteTicket.bind(null, ticket.id)}>
      <Button size="icon" variant="outline">
        <LucideTrash color="red" className="h-4 w-4"/>
      </Button>
    </form>
  )

  const editButton = (
    <form >
      <Button asChild size="icon" variant="outline">
        <Link prefetch href={editTicketPath(ticket.id)}>
          <LucidePencil className="h-4 w-4"/>
        </Link>
      </Button>
    </form>
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
      <div className="flex flex-col gap-y-2">
        {isDetail ? <>{deleteButton} {editButton}</> : <>{detailButton} {editButton}</>}
      </div>
    </div>
  )
}

export { TicketItem };