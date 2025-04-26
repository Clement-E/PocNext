import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

type CardCompactProps = {
  title: string,
  content: React.ReactNode,
  description: string,
  className?: string,
  footer?: React.ReactNode,
}

const CardCompact = ({title, description, className, footer,  content}: CardCompactProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}

export { CardCompact }