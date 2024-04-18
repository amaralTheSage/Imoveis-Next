export async function GET(request: Request) {
    return new Response("get properties", {
        status: 200
    });
}

export async function POST(request: Request) {
    return new Response("create property", {
        status: 201
    });
}