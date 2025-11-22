import { useState } from 'react';

interface CheckoutButtonProps {
  priceId: string;
  planName: string;
  isPopular?: boolean;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
  onError?: (error: string) => void;
}

export default function CheckoutButton({
  priceId,
  planName,
  isPopular = false,
  disabled = false,
  className = '',
  children,
  onError
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      if (onError) {
        onError('Error al procesar el pago. Por favor intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const baseClasses = `w-full py-3 rounded-lg text-sm font-medium transition-colors duration-200 relative ${
    isPopular
      ? 'bg-gray-900 text-white hover:bg-gray-800 disabled:bg-gray-600'
      : 'border border-gray-200 text-gray-900 hover:bg-gray-50 disabled:bg-gray-100'
  }`;

  return (
    <button 
      onClick={handleCheckout}
      disabled={disabled || loading}
      className={`${baseClasses} ${className}`}
    >
      {loading ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current"></div>
          </div>
          <span className="opacity-0">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}