'use client';

/**
 * Skeleton loading states for 3D scene and content areas
 */

export function ThreeSceneSkeleton() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Gradient skeleton that matches the 3D scene color palette */}
      <div className="w-full h-full animate-pulse"
        style={{
          background: 'linear-gradient(135deg, var(--teal-dim) 0%, var(--navy-mid) 50%, var(--tea) 100%)',
          opacity: 0.3,
        }}
      />
      {/* Floating accent shapes */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, var(--gold), transparent)' }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, var(--gold-light), transparent)' }}
      />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-xl p-6 animate-pulse" style={{ background: 'var(--white)', border: '1px solid var(--cream-dark)' }}>
      <div className="w-12 h-12 rounded-lg mb-4" style={{ background: 'var(--cream)' }} />
      <div className="h-5 rounded w-3/4 mb-2" style={{ background: 'var(--cream)' }} />
      <div className="h-4 rounded w-full mb-1" style={{ background: 'var(--cream)' }} />
      <div className="h-4 rounded w-5/6" style={{ background: 'var(--cream)' }} />
    </div>
  );
}

export function TextSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded animate-pulse ${className}`} style={{ background: 'var(--cream)' }} />
  );
}