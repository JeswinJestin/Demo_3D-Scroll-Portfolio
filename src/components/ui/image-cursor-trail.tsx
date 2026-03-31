"use client"

import React, { createRef, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ImageMouseTrailProps {
  items: string[]
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
  fadeAnimation?: boolean
}

export default function ImageMouseTrail({
  items,
  children,
  className,
  imgClass,
  distance = 20,
  maxNumberOfImages = 5,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    const relativeX = x - (containerRect?.left || 0)
    const relativeY = y - (containerRect?.top || 0)
    image.style.left = `${relativeX}px`
    image.style.top = `${relativeY}px`
    image.style.zIndex = currentZIndexRef.current.toString()

    currentZIndexRef.current++

    image.dataset.status = "active"
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive"
      }, 1500)
    }
    last = { x, y }
  }

  const distanceFromLast = (x: number, y: number) => {
    return Math.hypot(x - last.x, y - last.y)
  }

  const deactivate = (image: HTMLImageElement) => {
    image.dataset.status = "inactive"
  }

  const handleOnMove = (e: React.MouseEvent | React.TouchEvent) => {
    let clientX = 0
    let clientY = 0

    if ("touches" in e) {
      clientX = e.touches[0].clientX
      clientY = e.touches[0].clientY
    } else {
      clientX = (e as React.MouseEvent).clientX
      clientY = (e as React.MouseEvent).clientY
    }

    if (distanceFromLast(clientX, clientY) > window.innerWidth / distance) {
      const activeImages = refs.current.filter(
        (ref) => ref.current?.dataset.status === "active"
      )

      if (activeImages.length >= maxNumberOfImages) {
        const oldestActiveImage = activeImages[0].current
        if (oldestActiveImage) {
          deactivate(oldestActiveImage)
        }
      }

      const lead = refs.current[globalIndex % refs.current.length].current

      if (lead) {
        activate(lead, clientX, clientY)
      }

      globalIndex++
    }
  }

  return (
    <div
      onMouseMove={handleOnMove}
      onTouchMove={handleOnMove}
      ref={containerRef}
      className={cn(
        "relative grid min-h-[600px] w-full place-content-center overflow-hidden rounded-lg bg-black",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={index}
          className={cn(
            "pointer-events-none absolute left-0 top-0 h-40 w-auto -translate-x-[50%] -translate-y-[50%] scale-50 object-cover opacity-0 transition-transform duration-300 ease-in-out data-[status=active]:scale-100 data-[status=active]:opacity-100",
            fadeAnimation ? "data-[status=inactive]:opacity-0" : "",
            imgClass
          )}
          data-index={index}
          data-status="inactive"
          src={item}
          alt={`image-${index}`}
          ref={refs.current[index]}
        />
      ))}
      <article className="relative z-50">
        {children}
      </article>
    </div>
  )
}
