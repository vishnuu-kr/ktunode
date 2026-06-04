import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { mockSubjects } from './lib/mockData';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname;

  if (pathname === '/dashboard') {
    const searchParams = url.searchParams;
    const branchParam = searchParams.get('branch');
    const semParam = searchParams.get('sem');
    const subjectParam = searchParams.get('subject');
    const topicParam = searchParams.get('topic');

    // If there are no query params at all, redirect to default /cs/sem-4
    if (!branchParam && !semParam && !subjectParam && !topicParam) {
      return NextResponse.redirect(new URL('/cs/sem-4', request.url));
    }

    let branch = branchParam || 'cs';
    let sem = 4;

    if (semParam) {
      const semNumeric = semParam.startsWith('sem-') ? semParam.replace('sem-', '') : semParam;
      sem = parseInt(semNumeric, 10) || 4;
    }

    const subjectCodeOrId = subjectParam;
    const topicId = topicParam;

    // Lookup subject in mock data to find its correct branch/sem if not explicitly provided
    if (subjectParam && (!branchParam || !semParam)) {
      const foundSub = mockSubjects.find(s => 
        s.id.toLowerCase() === subjectParam.toLowerCase() || 
        s.code.toLowerCase() === subjectParam.toLowerCase()
      );
      if (foundSub) {
        branch = foundSub.branchId;
        sem = foundSub.semester;
      }
    }

    // Build the clean path
    let cleanPath = `/${branch}/sem-${sem}`;
    if (subjectCodeOrId) {
      const foundSub = mockSubjects.find(s => 
        s.id.toLowerCase() === subjectCodeOrId.toLowerCase() || 
        s.code.toLowerCase() === subjectCodeOrId.toLowerCase()
      );
      const subSlug = foundSub ? foundSub.code.toLowerCase() : subjectCodeOrId.toLowerCase();
      cleanPath += `/${subSlug}`;

      if (topicId) {
        cleanPath += `/${topicId.toLowerCase()}`;
      }
    }

    // Keep any other non-routing query parameters
    const finalParams = new URLSearchParams(searchParams);
    finalParams.delete('branch');
    finalParams.delete('sem');
    finalParams.delete('subject');
    finalParams.delete('topic');

    const queryStr = finalParams.toString();
    const finalUrlPath = queryStr ? `${cleanPath}?${queryStr}` : cleanPath;

    return NextResponse.redirect(new URL(finalUrlPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard',
};
