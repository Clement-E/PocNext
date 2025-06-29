import React, {Suspense} from "react";
import {CardCompact} from "@/components/card-compact";
import {Heading} from "@/components/heading";
import {Spinner} from "@/components/spinner";
import {TicketList} from "@/features/ticket/components/ticket-list";
import {TicketUpsertForm} from "@/features/ticket/components/ticket-upsert-form";

// NB: to make this page dynamically rendered
// export const dynamic = "force-dynamic";
// or time base rerendered
// export const revalidate = 30;

const TicketsPage = () => {

  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place"/>

      <CardCompact
        title="Create ticket"
        description="A new ticket will be created"
        content={<TicketUpsertForm />}
        className="w-full max-w-[420px] self-center"
      />

      <Suspense fallback={<Spinner/>}>
        <TicketList/>
      </Suspense>
    </div>
  );
}

export default TicketsPage;