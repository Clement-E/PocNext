import React, {Suspense} from "react";
import {TicketList} from "@/app/features/ticket/components/ticket-list";
import {Heading} from "@/components/Heading";
import {Spinner} from "@/components/Spinner";

const TicketsPage = () => {

    return (
        <div className="flex flex-col flex-1 gap-y-8">
            <Heading title="Tickets" description="All your tickets in one place" />
            <Suspense fallback={<Spinner />}>
                <TicketList />
            </Suspense>
        </div>
    );
}

export default TicketsPage;