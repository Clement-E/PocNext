"use server"
import {revalidatePath} from "next/cache";
import { prisma } from "@/lib/prisma";
import {ticketsPath} from "@/path";

export const createTicket = async (formData: FormData) => {
  await prisma.ticket.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
    }
  })

  revalidatePath(ticketsPath());
}