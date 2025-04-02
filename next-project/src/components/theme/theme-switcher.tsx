'use client'

import {LucideMoon, LucideSun} from "lucide-react";
import {useTheme} from "next-themes"
import {Button} from "@/components/ui/button";

const ThemeSwitcher = () => {

    const {theme, setTheme} = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
            {theme === 'light' ? <LucideSun
                className="h-4 w-4 rotate-0 scale-100
                dark:-rotate-90 transition-all
                "
            /> :
                <LucideMoon
                className="absolute h-4 w-4 rotate-90 scale-0 transition-transform
                dark:rotate-0 dark:scale-100
                "
                />}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export { ThemeSwitcher };