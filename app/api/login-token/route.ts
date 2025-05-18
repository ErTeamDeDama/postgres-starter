import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });


export async function POST(req: Request) {
    const {token} = await req.json();
}