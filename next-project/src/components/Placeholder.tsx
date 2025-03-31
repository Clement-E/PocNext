import {LucideMessageSquareWarning} from "lucide-react";
import React, {cloneElement} from "react";

type PlaceholderProps = {
    label: string;
    icon?: React.ReactElement<any>;
    button?: React.ReactElement<any>;
}

const Placeholder = (
    {
        label,
        icon = <LucideMessageSquareWarning />,
        button = <div />
    }: PlaceholderProps) => {
    return <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
        {cloneElement(icon, {
            className:"w-16 h-16"
        })}
        <h2 className="text-4xl text-center">{label}</h2>
        {cloneElement(button, { className:"h-10" })}
    </div>
}

export { Placeholder };