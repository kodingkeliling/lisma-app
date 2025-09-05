interface JsonLdProps {
  type?: string;
  data: Record<string, unknown>;
  scriptId?: string;
}

export default function JsonLd({ type = 'Organization', data, scriptId = 'json-ld' }: JsonLdProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      id={scriptId}
    />
  );
}
