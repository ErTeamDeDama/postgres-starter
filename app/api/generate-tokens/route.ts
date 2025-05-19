import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const ACCESS_TOKEN = process.env.ACCESS_TOKEN || process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";

function generateRandomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]:;<>,.?/';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

function isValidClassName(className: string): boolean {
  const regex = /^[A-Za-z0-9\s]+$/;
  return regex.test(className) && className.length > 1;
}

export async function POST(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(JSON.stringify({ message: "Unauthorized: token mancante" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const token = authHeader.split(" ")[1];
  if (token !== ACCESS_TOKEN) {
    return new Response(JSON.stringify({ message: "Unauthorized: token non valido" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { className, tokenCount } = await req.json();

  if (
    typeof className !== "string" ||
    className.trim() === "" ||
    typeof tokenCount !== "number" ||
    !Number.isInteger(tokenCount) ||
    tokenCount < 1
  ) {
    return new Response(JSON.stringify({ message: "Tutti i campi sono obbligatori" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!isValidClassName(className)) {
    return new Response(JSON.stringify({ message: "Classe non valida" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Verifica se la classe esiste nella tabella `classi`
    const existingClass = await sql`
      SELECT 1 FROM classi WHERE classi = ${className} LIMIT 1
    `;

    if (existingClass.length === 0) {
      // Inserisce la nuova classe con iniziali 0 corrette e sbagliate
      await sql`
        INSERT INTO classi (classe, corrette, sbagliate)
        VALUES (${className}, 0, 0)

      `;
    }

    const newTokens: string[] = [];

    for (let i = 0; i < tokenCount; i++) {
      const newToken = generateRandomString(5);
      newTokens.push(newToken);

      await sql`
        INSERT INTO token (token, classe, usato)
        VALUES (${newToken}, ${className}, ${false})
      `;
    }

    return new Response(
      JSON.stringify({
        message: "Token creati con successo!",
        tokens: newTokens,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Errore nella creazione dei token:", error);
    return new Response(JSON.stringify({ message: "Errore nel database" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
