"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: "Performance", href: "/performance" },
  { name: "Reliability", href: "/reliability" },
  { name: "Scale", href: "/scale" },
];


export default function Header() {
  const pathname = usePathname()
  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8 items-center">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
          {
            linkData.map((link) => (
              <Link
                key={link.name}
                className={pathname === link.href ? "text-purple-500" : ""}
                href={link.href}
              >
                {link.name}
              </Link>
            ))
          }
          {/* <Link className={pathname === '/performance' ? 'text-purple-500' : ''} href="/performance">performance</Link>
          <Link className={pathname === '/reliability' ? 'text-purple-500' : ''} href="/reliability">reliability</Link>
          <Link className={pathname === '/scale' ? 'text-purple-500' : ''} href="/scale">scale</Link> */}
        </div>
      </div>
    </div>
  )
}
