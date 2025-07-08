import type { GithubProfile } from "../../../../../../../model/github.model";

const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const githubFetchProfile = async (): Promise<{
  data: GithubProfile | null;
  err: string | null;
}> => {
  try {
    const res = await fetch("https://api.github.com/users/Andymonzon", {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error ${res.status}`);
    }

    const data = await res.json();
    return { data, err: null };
  } catch (e: any) {
    console.error("Error al obtener perfil de GitHub:", e);
    return { data: null, err: e.message };
  }
};
