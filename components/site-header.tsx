import { Icons } from './icons'
import Link from 'next/link'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'
import React from 'react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export const SiteHeader = () => {
    return (
        <div className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-2 ">
                    <nav className="flex items-center">
                        <Link href={siteConfig.links.personalSite} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'w-10 px-0 hidden sm:inline-flex')}>
                                <Icons.logo className="size-4" />
                                <span className="sr-only">Logo</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'w-10 px-0 hidden sm:inline-flex')}>
                                <Icons.gitHub className="size-4" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
                            <div className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'w-10 px-0 hidden sm:inline-flex')}>
                                <Icons.twitter className="size-4" />
                                <span className="sr-only">Twitter</span>
                            </div>
                        </Link>
                        <MobileNav />
                    </nav>
                </div>
            </div>
        </div>
    )
}
