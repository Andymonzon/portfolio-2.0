const TOKEN = process.env.GITHUB_TOKEN;

export const handler = async () => {
  try {
    const res = await fetch("https://api.github.com/users/Andymonzon", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: `HTTP error ${res.status}` }),
      };
    }

    const data = await res.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e: any) {
    console.error("Error al obtener perfil de GitHub:", e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }
};
