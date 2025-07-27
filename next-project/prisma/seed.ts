import {prisma} from "@/lib/prisma";

const tickets = [
    {
        title: "Ticket 1",
        content: "First ticket from DB.",
        status: "DONE" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 499,
    },
    {
        title: "Ticket 2",
        content: "Second ticket from DB.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 399,
    },
    {
        title: "Ticket 3",
        content: "Third ticket from DB.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 599,
    },
];

const seed = async () => {
    await prisma.ticket.deleteMany();

    await prisma.ticket.createMany({
        data: tickets,
    });
}

seed();