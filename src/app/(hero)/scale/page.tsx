import Hero from '@/components/hero'
import React from 'react'
import scaleSrc from '/public/scale.jpg'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scale',
}

export default function Page() {
  return (
    <Hero imgUrl={scaleSrc} altTxt='Scale' content='Scale~~~'/>
  )
}
