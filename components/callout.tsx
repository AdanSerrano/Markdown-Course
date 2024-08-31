import { ReactNode } from 'react';
import { cn } from '@/lib/utils'; // Asegúrate de que `cn` esté correctamente definido

interface CalloutProps {
    children?: ReactNode;
    type?: 'default' | 'warning' | 'danger';
}

export const Callout = ({
    children,
    type = 'default',
    ...props
}: CalloutProps) => {
    return (
        <div className={cn("my-6 items-start rounded-md border border-l-4 p-4 w-full dark:max-w-none", {
            "border-red-900 bg-red-50 dark:prose": type === 'danger',
            "border-yellow-900 bg-yellow-50 dark:prose": type === 'warning',
            "border-blue-900 bg-blue-50 dark:prose": type === 'default',
        })}
            {...props}
        >
            <div>
                {children}
            </div>
        </div>
    );
};
