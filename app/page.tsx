import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Features from '@/components/sections/Features'
import Comparison from '@/components/sections/Comparison'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <Comparison />
      <Pricing />
      <Contact />
    </>
  )
}