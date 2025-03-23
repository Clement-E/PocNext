export const initialTickets = [
    {
        id: '1',
        title: 'Ticket number 1',
        content: 'This is my first ticket',
        status: "DONE" as const
    },
    {
        id: '2',
        title: 'Ticket number 2',
        content: 'This is my second ticket',
        status: "OPEN" as const
    },
    {
        id: '3',
        title: 'Ticket number 3',
        content: 'This is my thirdticket',
        status: "IN_PROGRESS" as const
    }
]