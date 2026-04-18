import type { Article, HarviaProduct } from './types';
import type { ProductMediaBank } from './harvia-mediabank';

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(`Content validation failed: ${message}`);
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every(isString);
}

export function validateArticleIndex(data: unknown): asserts data is Array<Omit<Article, 'body'> & { bodyPath: string }> {
  assert(Array.isArray(data), 'articles index must be an array');
  data.forEach((article, i) => {
    assert(article && typeof article === 'object', `article[${i}] must be an object`);
    const a = article as Record<string, unknown>;
    [
      'id','title','slug','dek','excerpt','contentType','category','publishDate','featuredImage','bodyPath',
    ].forEach((key) => assert(isString(a[key]), `article[${i}].${key} must be a string`));
    assert(Array.isArray(a.tags), `article[${i}].tags must be an array`);
    assert((a.tags as unknown[]).every(isString), `article[${i}].tags must contain strings`);
    assert(typeof a.readingTime === 'number', `article[${i}].readingTime must be a number`);
    assert(typeof a.featured === 'boolean', `article[${i}].featured must be boolean`);
    assert(typeof a.trending === 'boolean', `article[${i}].trending must be boolean`);
    assert(a.author && typeof a.author === 'object', `article[${i}].author must be an object`);
  });
}

export function validateHarviaProducts(data: unknown): asserts data is HarviaProduct[] {
  assert(Array.isArray(data), 'harvia products must be an array');
  data.forEach((product, i) => {
    assert(product && typeof product === 'object', `product[${i}] must be an object`);
    const p = product as Record<string, unknown>;
    ['slug', 'name', 'series', 'category', 'heroImage', 'harviaUrl'].forEach((key) => {
      assert(isString(p[key]), `product[${i}].${key} must be a string`);
    });
    assert(isStringArray(p.gallery), `product[${i}].gallery must be string[]`);
    assert(Array.isArray(p.specsSummary), `product[${i}].specsSummary must be an array`);
    assert(Array.isArray(p.sizes), `product[${i}].sizes must be an array`);
    assert(Array.isArray(p.relatedProductSlugs), `product[${i}].relatedProductSlugs must be an array`);
  });
}

export function validateMediaBank(data: unknown): asserts data is Record<string, ProductMediaBank> {
  assert(data && typeof data === 'object', 'media bank must be an object map');
  Object.entries(data as Record<string, unknown>).forEach(([slug, entry]) => {
    assert(entry && typeof entry === 'object', `media bank entry for ${slug} must be an object`);
    const mb = entry as Record<string, unknown>;
    ['images', 'videos', 'documents'].forEach((key) => {
      assert(Array.isArray(mb[key]), `media bank ${slug}.${key} must be an array`);
    });
  });
}
