'use client'

import Link, { LinkProps } from 'next/link'
import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Menu } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { useRouter } from 'next/navigation'

export const MobileNav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'} className='w-10 px-0 sm:hidden'>
                    <Menu className='size-4' />
                    <span className='sr-only'>Toogle theme</span>
                </Button>
            </SheetTrigger>
            <SheetContent side={'right'}>
                <MobileLink className='flex items-center' href={'/'} onOpenChange={setOpen}>
                    <Icons.logo className='w-2 h-4 mr-2' >{siteConfig.name}</Icons.logo>
                    <span className='font-bold'>
                        {siteConfig.name}
                    </span>
                </MobileLink>
                <div className='flex flex-col gap-3 mt-3'>
                    <MobileLink href={'/blog'} onOpenChange={setOpen}>
                        Blog
                    </MobileLink>
                    <MobileLink href={'/about'} onOpenChange={setOpen}>
                        About
                    </MobileLink>
                    <Link
                        href={siteConfig.links.github}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Github
                    </Link>
                    <Link
                        href={siteConfig.links.twitter}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Twitter
                    </Link>
                    <Link
                        href={siteConfig.links.personalSite}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        PersonalSite
                    </Link>
                </div>

            </SheetContent>
        </Sheet>
    )
}


interface MobileLinkProps extends LinkProps {
    children: React.ReactNode
    onOpenChange?: (open: boolean) => void
    className?: string
}

function MobileLink({
    href,
    onOpenChange,
    className,
    children,
    ...props
}: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            {...props}
            className={className}
        >
            {children}
        </Link>
    )

}