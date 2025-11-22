import { loadStripe } from '@stripe/stripe-js';

// Configuración de Stripe - Frontend (opcional para funcionalidades avanzadas)
export const getStripe = () => {
  return loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
};

// Función para crear checkout URL
export const createCheckoutUrl = async (priceId: string, quantity = 1) => {
  const response = await fetch('/api/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId,
      quantity,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to create checkout session');
  }

  const { url } = await response.json();
  return url;
};

// Tipos para los planes
export interface PricingPlan {
  name: string;
  description: string;
  price: number;
  period: string;
  stripePriceId: string;
  features: string[];
  popular: boolean;
}

// Configuración de los planes con IDs de Stripe
export const pricingPlans: PricingPlan[] = [
  {
    name: "Plan Mensual",
    description: "Licencia por dispositivo - Facturación mensual",
    price: 150,
    period: "mes",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID || "price_monthly",
    features: [
      "Licencia por dispositivo",
      "Compatible con Android e iOS",
      "Todas las funciones incluidas",
      "Gestión completa de pedidos",
      "Gestión de rutas optimizada",
      "Reportes y análisis",
      "Soporte técnico",
      "Actualizaciones automáticas",
      "Sin compromisos a largo plazo"
    ],
    popular: false
  },
  {
    name: "Plan Anual",
    description: "Licencia por dispositivo - Facturación anual",
    price: 500,
    period: "año",
    stripePriceId: process.env.NEXT_PUBLIC_STRIPE_ANNUAL_PRICE_ID || "price_annual",
    features: [
      "Licencia por dispositivo",
      "Compatible con Android e iOS",
      "Todas las funciones incluidas",
      "Gestión completa de pedidos",
      "Gestión de rutas optimizada",
      "Reportes y análisis avanzados",
      "Soporte prioritario",
      "Actualizaciones automáticas",
      "Ahorro del 72% vs mensual",
      "Facturación anual"
    ],
    popular: true
  }
];