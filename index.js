export async function onRequest({ request }) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id") || "none";

  return new Response(
    `HIT OK | id=${id} | time=${new Date().toISOString()}`,
    { status: 200 }
  );
}
