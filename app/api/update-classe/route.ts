import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || "";

export async function PUT(req: Request) {


  async function getClasseFromToken(token: string) {
    const result = await sql`
      SELECT classe FROM token
      WHERE token = ${token}
      LIMIT 1
    `;
    return result[0]?.classe || null;
  }


  // Verifica token di autorizzazione
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response(
      JSON.stringify({ message: "Unauthorized: token mancante" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const token = authHeader.split(" ")[1];
  if (token !== ACCESS_TOKEN) {
    return new Response(
      JSON.stringify({ message: "Unauthorized: token non valido" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // Leggi cookie per ottenere la classe
  const cookieHeader = req.headers.get("cookie");
  if (!cookieHeader) {
    return new Response(
      JSON.stringify({ message: "Cookie mancante" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [k, v] = c.trim().split("=");
      return [k, decodeURIComponent(v)];
    })
  );

  const tokengiusto = cookies["risposte"];
  if (!token) {
    return new Response(
      JSON.stringify({ message: "Classe non trovata nel cookie" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  // Ricevi e valida giuste/sbagliate
  try {
    const { giuste, sbagliate } = await req.json();

    if (giuste === undefined || sbagliate === undefined) {
      return new Response(
        JSON.stringify({ message: "Parametri mancanti" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let classe = await getClasseFromToken(tokengiusto);

    // Aggiorna DB
    await sql`
      UPDATE classi
      SET corrette = corrette + ${giuste}, sbagliate = sbagliate + ${sbagliate}
      WHERE classe = ${classe}
    `;
    await sql`
      DELETE FROM token
      WHERE token = ${tokengiusto}
    `;


    return new Response(
      JSON.stringify({ message: "Domanda aggiornata con successo" }),
      {
        status: 200, headers: {
          "Set-Cookie": `risposte=; HttpOnly; Path=/; Max-Age=0;SameSite=Strict; Secure`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Errore PUT:", error);
    return new Response(
      JSON.stringify({ message: "Errore interno" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
