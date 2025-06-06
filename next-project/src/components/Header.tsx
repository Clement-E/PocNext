import {LucideKanban} from "lucide-react";
import Link from "next/link";
import {ThemeSwitcher} from "@/components/theme/theme-switcher";
import {buttonVariants} from "@/components/ui/button";
import {homePath, ticketsPath} from "@/path";

const Header = () => {
    return (
        <nav className='supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between'>
            <div className="flex align-center gap-x-2">
                <Link className={buttonVariants({variant:'ghost'})} href={homePath()}>
                    <LucideKanban />
                    <h1 className="text-lg font-semibold">Ticket bounty</h1>
                </Link>
            </div>

            <div className="flex align-center gap-x-2">
                <ThemeSwitcher />
                <Link className={buttonVariants({variant:'default'})} href={ticketsPath()}>Tickets</Link>
            </div>
        </nav>
    )
}

export { Header}