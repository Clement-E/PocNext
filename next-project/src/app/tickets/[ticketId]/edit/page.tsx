import {notFound} from "next/navigation";
import {CardCompact} from "@/components/card-compact";
import {TicketUpsertForm} from "@/features/ticket/components/ticket-upsert-form";
import {getTicket} from "@/features/ticket/queries/get-ticket";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
}
const TicketEditPage = async ({params}: TicketEditPageProps) => {

  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {notFound()}
  
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Edit Ticket"
        description={ticket?.content }
        className="w-full max-w-[420px] animate-in-from-top"
        content={<TicketUpsertForm ticket={ticket}/>}
      />
    </div>
  )
}

export default TicketEditPage