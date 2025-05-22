export default function Head() {
  return (
    <>
      <title>Sprouted - Weather-Powered Development</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="The Weather System for developers. Automatically preserve context, eliminate flow state loss, and enable seamless AI assistant collaboration." />
      
      {/* Go module import configuration */}
      <meta name="go-import" content="sprouted.dev/weather git https://github.com/sprouted-dev/garden" />
      <meta name="go-import" content="sprouted.dev/sprout-cli git https://github.com/sprouted-dev/garden" />
      <meta name="go-source" content="sprouted.dev/weather https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/libs/weather{/dir} https://github.com/sprouted-dev/garden/blob/main/libs/weather{/dir}/{file}#L{line}" />
      <meta name="go-source" content="sprouted.dev/sprout-cli https://github.com/sprouted-dev/garden https://github.com/sprouted-dev/garden/tree/main/apps/sprout-cli{/dir} https://github.com/sprouted-dev/garden/blob/main/apps/sprout-cli{/dir}/{file}#L{line}" />
      
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </>
  );
}
