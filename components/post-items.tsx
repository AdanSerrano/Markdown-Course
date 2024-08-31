import { cn, formatDate } from "@/lib/utils";

import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface PostItemsProps {
    slug: string;
    title: string;
    description?: string;
    date: string;
}

export const PostItems = ({
    slug,
    title,
    description,
    date,
}: PostItemsProps) => {
    return (
        <article className="flex flex-col gap-2 border-border border-b py-3">
            <div className="">
                <h2 className="text-2xl font-bold">
                    <Link href={`${slug}`}>
                        {title}
                    </Link>
                </h2>
            </div>
            <div className="max-w-none text-muted-foreground line-clamp-2">
                {description}
            </div>
            <div className="flex justify-between items-center">
                <dl>
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
                        <Calendar className="size-4" />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link href={`${slug}`} className={cn(buttonVariants({ variant: 'link' }), "py-0")}>
                    Read more
                </Link>
            </div>
        </article>
    )
}
