import {prisma} from "@/lib/prisma";

const tickets = [
    {
        title: 'Ticket number 1',
        content: 'This is my first ticket',
    },
    {
        title: 'Ticket number 2',
        content: 'This is my second ticket',
        status: "OPEN" as const
    },
    {
        title: 'Ticket number 3',
        content: 'This is my thirdticket',
        status: "IN_PROGRESS" as const
    }
]

const seed = async () => {
    await prisma.ticket.createMany({
        data: tickets,
    })
}

seed();