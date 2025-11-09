"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "../ui/animated-list"

interface Item {
  name: string
  description: string
  icon: string
  color: string
  time: string
}

let notifications = [
  {
    name: "Pedido Realizado",
    description: "iSync",
    time: "2m ago",
    icon: "�",
    color: "#00C9A7",
  },
  {
    name: "Pedido Editado",
    description: "iSync",
    time: "5m ago",
    icon: "✏️",
    color: "#FFB800",
  },
  {
    name: "Cambio de Precios",
    description: "iSync",
    time: "8m ago",
    icon: "💰",
    color: "#FF3D71",
  },
  {
    name: "Cobro Realizado",
    description: "iSync",
    time: "12m ago",
    icon: "💳",
    color: "#1E86FF",
  },
  {
    name: "Impresión Exitosa",
    description: "iSync",
    time: "15m ago",
    icon: "�️",
    color: "#9C27B0",
  },
  {
    name: "Nueva Cotización",
    description: "iSync",
    time: "18m ago",
    icon: "📋",
    color: "#4CAF50",
  },
  {
    name: "Ruta Actualizada",
    description: "iSync",
    time: "25m ago",
    icon: "📍",
    color: "#FF9800",
  },
  {
    name: "Stock Actualizado",
    description: "iSync",
    time: "30m ago",
    icon: "�",
    color: "#607D8B",
  },
]

notifications = Array.from({ length: 6 }, () => notifications).flat()

const Notifications = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto h-fit w-[300px] cursor-pointer overflow-hidden rounded-2xl px-3 py-2",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  )
}

export default function AnimatedListDemo({
  className,
}: {
  className?: string
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notifications {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  )
}
