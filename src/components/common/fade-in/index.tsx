import { PropsWithChildren, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

interface FadeInProps extends PropsWithChildren {
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  y = 24,
  className
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!ref.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          ease: 'power3.out'
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [delay, duration, y])

  return <div ref={ref} className={className}>{children}</div>
}
