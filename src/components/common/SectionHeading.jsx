export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', light = false }) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`mb-10 ${alignClass}`}>
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold tracking-wider uppercase mb-2 ${
            light ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className={`text-3xl md:text-4xl font-bold font-heading leading-tight ${
            light ? 'text-white' : 'text-heading'
          }`}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-body'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
