interface ChipProps {
  label: string;
  onClick?: (label: string) => void;
  className?: string;
}

export function Chip({ label, onClick, className = '' }: ChipProps) {
  const baseStyles =
    'px-2 py-0.5 text-xs font-medium rounded-full transition-all duration-200 shadow-sm';
  const interactiveStyles = onClick ? 'cursor-pointer hover:shadow-md' : '';

  const defaultColorStyles =
    'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-transparent hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:border-blue-500/30';

  return (
    <button
      type="button"
      onClick={() => onClick?.(label)}
      className={`${baseStyles} ${interactiveStyles} ${defaultColorStyles} ${className}`}
    >
      {label}
    </button>
  );
}
