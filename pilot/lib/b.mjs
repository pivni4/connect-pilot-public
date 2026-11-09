import { slugify } from './a.mjs';

export function slugPath(parts) {
  return parts.map(slugify).filter(Boolean).join('/');
}
