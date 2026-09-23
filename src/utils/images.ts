const images = import.meta.glob<{ default: string }>('../assets/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  import: 'default',
});

/**
 * Dynamically resolves an asset image URL by filename from src/assets.
 * Matches Astro's resolveAssetImage utility for Vite/React.
 */
export function resolveAssetImage(filename: string | undefined): string | undefined {
  if (!filename || filename.trim() === '') {
    return undefined;
  }

  // Already a full path or URL
  if (filename.startsWith('http://') || filename.startsWith('https://') || filename.startsWith('/')) {
    return filename;
  }

  // Direct lookup
  const directPath = `../assets/${filename}`;
  if (images[directPath]) {
    return images[directPath] as unknown as string;
  }

  // Case-insensitive or suffix match
  const normalized = filename.toLowerCase();
  const entry = Object.entries(images).find(([key]) =>
    key.toLowerCase().endsWith(`/${normalized}`)
  );

  return entry ? (entry[1] as unknown as string) : undefined;
}
