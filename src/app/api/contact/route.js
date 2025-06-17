export async function POST(req) {
    const body = await req.json();

    console.log("Received message:", body); // optionally send email, log, etc.

    // Simulate success
    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
