import './Button.css';

export default function Button({ variant = 'primary', href, children, ...props }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
