import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if this is a Go module request
  const userAgent = req.headers['user-agent'] || '';
  const goGet = req.query['go-get'];
  
  if (goGet === '1' && userAgent.includes('Go-http-client')) {
    // Serve Go module meta tags
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
<!DOCTYPE html>
<html>
<head>
    <meta name="go-import" content="sprouted.dev/weather git https://github.com/sprouted-dev/garden">
    <meta name="go-source" content="sprouted.dev/weather https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/libs/weather{/dir} https://github.com/sprouted-dev/garden/blob/main/libs/weather{/dir}/{file}#L{line}">
</head>
<body>Go package: sprouted.dev/weather</body>
</html>
    `);
  } else {
    // Redirect to documentation
    res.redirect(302, 'https://pkg.go.dev/sprouted.dev/weather');
  }
}