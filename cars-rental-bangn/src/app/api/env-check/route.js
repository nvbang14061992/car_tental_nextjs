export async function GET() {
  console.log("✅ MONGO_URL loaded:", !!process.env.MONGO_URL);

  return new Response(JSON.stringify({ loaded: !!process.env.MONGO_URL }), {
    headers: { "Content-Type": "application/json" },
  });
}
