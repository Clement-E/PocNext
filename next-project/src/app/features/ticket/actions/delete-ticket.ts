"use server";

import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import {prisma} from "@/lib/prisma";
import {ticketsPath} from "@/path";

export const deleteTicket = async (id: string) => {

  await prisma.ticket.delete({
    where: {
      id,
    }
  })

  // on demand caching
  revalidatePath(ticketsPath());
  
  redirect(ticketsPath())
}