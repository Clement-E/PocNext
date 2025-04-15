import Link from "next/link";
import {Placeholder} from "@/components/Placeholder";
import {Button} from "@/components/ui/button";
import {ticketsPath} from "@/path";

export default function NotFound() {
   return (
        <Placeholder
            label="Not found"
            button = {
                <Button asChild variant="outline">
                    <Link href={ticketsPath()}>
                        Go back to ticket page
                    </Link>
                </Button>
        }/>
    )
}