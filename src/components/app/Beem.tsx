"use client"

import React, { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import Image from "next/image"
import { File, Package, ChartBar, ShoppingCart, FilePdf, Printer, Users } from "phosphor-react"

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "border-border z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Circle.displayName = "Circle"

export default function ISyncFlowDemo({
  className,
}: {
  className?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)

  return (
    <div
      className={cn(
        "relative flex h-[500px] bg-gray-50 w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref} className="bg-blue-50">
            <File size={24} color="#3b82f6" weight="duotone" />
          </Circle>
          <Circle ref={div2Ref} className="bg-orange-50">
            <Package size={24} color="#f97316" weight="duotone" />
          </Circle>
          <Circle ref={div3Ref} className="bg-purple-50">
            <ChartBar size={24} color="#a855f7" weight="duotone" />
          </Circle>
          <Circle ref={div4Ref} className="bg-green-50">
            <ShoppingCart size={24} color="#22c55e" weight="duotone" />
          </Circle>
          <Circle ref={div5Ref} className="bg-red-50">
            <FilePdf size={24} color="#ef4444" weight="duotone" />
          </Circle>
          <Circle ref={div6Ref} className="bg-gray-50">
            <Printer size={24} color="#6b7280" weight="duotone" />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="size-16 bg-[#1a3d59]">
            <Image src="/favicon.ico" className="scale-125" alt="iSync Logo" width={120} height={120} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div8Ref} className="bg-emerald-50">
            <Users size={24} color="#10b981" weight="duotone" />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div8Ref}
      />
    </div>
  )
}