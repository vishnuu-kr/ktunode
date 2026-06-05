import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Dynamic params passed from the page component
    const title = searchParams.has('title')
      ? searchParams.get('title')?.slice(0, 80) // Limit length to avoid overflow
      : 'KTUNode Study Hub';
      
    const subtitle = searchParams.has('subtitle')
      ? searchParams.get('subtitle')?.slice(0, 100)
      : 'Free Notes, Syllabus & PYQs for 2024 Scheme';

    const bgUrl = new URL('/og-bg.png', request.url).href;

    // Load local font arrays for precise typography rendering
    const fontBold = await fetch(new URL('/fonts/Inter-Bold.ttf', request.url)).then((res) => res.arrayBuffer());
    const fontMedium = await fetch(new URL('/fonts/Inter-Medium.ttf', request.url)).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: '100px',
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            fontFamily: 'Inter',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              maxWidth: '65%',
              textAlign: 'left',
            }}
          >
            <h1
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 72,
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: 20,
                lineHeight: 1.1,
                fontFamily: 'Inter',
              }}
            >
              {title.split(' ').map((word: string, index: number) => (
                <span key={index}>{word}</span>
              ))}
            </h1>
            <p
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: '#2563eb',
                marginTop: 0,
                fontFamily: 'Inter',
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontMedium,
            style: 'normal',
            weight: 500,
          },
          {
            name: 'Inter',
            data: fontBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
