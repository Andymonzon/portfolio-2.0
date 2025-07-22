import type { GithubProfile } from "../../../../../../../../../model/github.model";

export const githubFetchProfile = async (): Promise<{
  data: GithubProfile | null;
  err: string | null;
}> => {
  try {
    const res = await fetch("/.netlify/functions/githubProfile");
    const data = await res.json();
    return { data, err: null };
  } catch (e: any) {
    console.error("Error al obtener perfil desde Function:", e);
    return { data: null, err: e.message };
  }
};
