// src/components/ui/Card.jsx

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl p-6 bg-gray-800 border border-gray-700 shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}
