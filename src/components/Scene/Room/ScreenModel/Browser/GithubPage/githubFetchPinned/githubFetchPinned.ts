import type { PinnedRepo } from "../../../../../../../model/github.model";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const githubFetchPinned = async (): Promise<{
  data: null | PinnedRepo[];
  err: string | null;
}> => {
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

    const json = await res.json();

    if (json.errors) {
      throw new Error(json.errors[0].message);
    }

    return { err: null, data: json.data.user.pinnedItems.nodes };
  } catch (err: any) {
    console.error("Error al obtener repos:", err);
    return { err: err.message, data: null };
  }
};
