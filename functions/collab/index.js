export async function onRequest({ request }) {
  console.log("HIT", request.url, new Date().toISOString());

  return new Response("OK", { status: 200 });
}
