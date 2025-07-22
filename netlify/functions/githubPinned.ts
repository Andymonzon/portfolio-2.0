const TOKEN = process.env.GITHUB_TOKEN;

type PinnedRepo = {
  name: string;
  url: string;
  description: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  } | null;
};

export const handler = async () => {
  const query = `
    query {
      user(login: "Andymonzon") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });
    console.log(TOKEN);
    const json = await res.json();

    if (json.errors) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: json.errors[0].message }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(json.data.user.pinnedItems.nodes),
    };
  } catch (err: any) {
    console.error("Error al obtener repos:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
