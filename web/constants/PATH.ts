export type PathType = keyof typeof PATH;

export const PATH = {
  hash: "#",
  home: "/",
  property: "/property",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  dashboard: "/dashboard",
} as const;

