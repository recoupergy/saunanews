import { NextRequest, NextResponse } from 'next/server';
import { Category } from '@/data/types';
import { searchArticles, getTotalSearchableArticles } from '@/lib/search';
import { SearchSortOption } from '@/lib/search-types';

const VALID_SORTS: SearchSortOption[] = ['relevance', 'latest'];

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const query = params.get('q') ?? '';
  const categoryParam = params.get('category') ?? 'all';
  const sortParam = params.get('sort') ?? 'relevance';
  const limitParam = Number(params.get('limit') ?? '60');

  const category = categoryParam as Category | 'all';
  const sort = VALID_SORTS.includes(sortParam as SearchSortOption)
    ? (sortParam as SearchSortOption)
    : 'relevance';
  const limit = Number.isFinite(limitParam)
    ? Math.min(Math.max(Math.floor(limitParam), 1), 100)
    : 60;

  const [results, totalArticles] = await Promise.all([
    searchArticles({
      query,
      category,
      sort,
      limit,
    }),
    getTotalSearchableArticles(),
  ]);

  return NextResponse.json({
    results,
    totalArticles,
  });
}
