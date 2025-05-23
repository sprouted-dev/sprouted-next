import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Check if this is a Go module request
  const userAgent = request.headers.get('user-agent') || '';
  const { searchParams } = new URL(request.url);
  const goGet = searchParams.get('go-get');
  
  if (goGet === '1' && userAgent.includes('Go-http-client')) {
    // Serve Go module meta tags
    return new NextResponse(`
<!DOCTYPE html>
<html>
<head>
    <meta name="go-import" content="sprouted.dev/weather git https://github.com/sprouted-dev/garden">
    <meta name="go-source" content="sprouted.dev/weather https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/libs/weather{/dir} https://github.com/sprouted-dev/garden/blob/main/libs/weather{/dir}/{file}#L{line}">
</head>
<body>Go package: sprouted.dev/weather</body>
</html>
    `, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } else {
    // Redirect to documentation
    return NextResponse.redirect('https://pkg.go.dev/sprouted.dev/weather', 302);
  }
}