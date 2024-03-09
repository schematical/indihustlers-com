export const metadata = {
  title: 'Home - Cube',
  description: 'Page description',
}

import Hero from '@/src/components/hero'
import Testimonials from '@/src/components/testimonials'
import Benefits from '@/src/components/benefits'
import Format from '@/src/components/format'
import Integrations from '@/src/components/integrations'
import Pricing from '@/src/components/pricing'
import Faqs from '@/src/components/faqs'
import Cta from '@/src/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Benefits />
      <Format />
      {/*<Integrations />*/}
      <Pricing />
      <Faqs />
      <Cta />
    </>
  )
}
