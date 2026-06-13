import { useEffect, useRef, useState } from 'react'

export function useCountUp(target: number, duration = 1500, startWhenVisible = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(!startWhenVisible)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!startWhenVisible) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [hasStarted, startWhenVisible])

  useEffect(() => {
    if (!hasStarted) return
    let startTime: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [hasStarted, target, duration])

  return { count, ref }
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return position
}
