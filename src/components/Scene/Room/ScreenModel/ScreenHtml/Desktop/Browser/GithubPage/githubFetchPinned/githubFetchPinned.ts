import type { PinnedRepo } from "../../../../../../../../../model/github.model";

export const githubFetchPinned = async (): Promise<{
  data: null | PinnedRepo[];
  err: string | null;
}> => {
  try {
    const res = await fetch("/.netlify/functions/githubPinned");
    const data = await res.json();
    return { err: null, data };
  } catch (err: any) {
    console.error("Error al obtener repos desde Netlify Function:", err);
    return { err: err.message, data: null };
  }
};
