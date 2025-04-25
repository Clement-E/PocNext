import React, {Suspense} from "react";
import {TicketCreateForm} from "@/app/features/ticket/components/ticket-create-form";
import {TicketList} from "@/app/features/ticket/components/ticket-list";
import {Heading} from "@/components/Heading";
import {Spinner} from "@/components/Spinner";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

// to make this page dynamically rendered
// export const dynamic = "force-dynamic";
// or time base rerendered
// export const revalidate = 30;

const TicketsPage = () => {

  return (
    <div className="flex flex-col flex-1 gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place"/>

      <Card className="w-full max-w-[420px] self-center">
        <CardHeader>
          <CardTitle>
            <CardTitle>Create ticket</CardTitle>
            <CardDescription>A new ticket will be created</CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TicketCreateForm />
        </CardContent>
      </Card>

      <Suspense fallback={<Spinner/>}>
        <TicketList/>
      </Suspense>
    </div>
  );
}

export default TicketsPage;