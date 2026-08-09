export const basePath = process.env.NODE_ENV === "production" ? "/my-personal-web-site" : "";

export function asset(path: string) {
  return `${basePath}${path}`;
}

