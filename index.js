export async function onRequest({ request }) {
  console.log({
    method: request.method,
    url: request.url,
    headers: Object.fromEntries(request.headers),
    time: new Date().toISOString()
  });

  return new Response("OK", { status: 200 });
}
