export type PathType = keyof typeof PATH;

export const PATH = {
  hash: "#",
  home: "/",
  login: "/login",
  register: "/register",
  verifyEmail: "/verify-email",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  property: "/property",
  propertyId: (id: unknown) => `/property/${id}`,
  agent: {
    login: "/agent/login",
    register: "/agent/register",
    dashboard: "/agent/dashboard",
  },
  admin: {
    login: "/admin/login",
    dashboard: "/admin/dashboard",
  },
} as const;
