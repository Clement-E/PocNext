import Link from "next/link";
import {ticketsPath} from "@/path";

const HomePage = () => {
  return (
    <div>
        <div>
            <h2 className="text-3xl font-bold tracking-tight">Home Page</h2>
            <p className="text-sm text-muted-foreground"> Your home place to start</p>
        </div>

        <div className="flex flex-1 clex-col items-center">
            <Link href={ticketsPath()} className={'underline' }>Go to tickets</Link>
        </div>
    </div>
  );
}

export default HomePage;
