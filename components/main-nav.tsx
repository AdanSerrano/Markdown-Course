'use client'

import { Icons } from '@/components/icons'
import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { usePathname } from 'next/navigation'

export const MainNav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link href={'/'} className='mr-6 flex items-center space-x-2'>
                <Icons.logo className="size-6" />
                <span className='font-bold'>
                    {siteConfig.name}
                </span>
            </Link>
            <Link href={'/blog'} className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
            )}
            >
                Blog
            </Link>
            <Link href={'/about'} className={cn(
                "text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block",
                pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
            )}
            >
                About
            </Link>
        </nav>
    )
}
