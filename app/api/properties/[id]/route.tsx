export async function PATCH(request: Request) {
    return new Response("update property", {
        status: 200
    });
}

export async function DELETE(request: Request) {
    return new Response("delete property", {
        status: 200
    });
}