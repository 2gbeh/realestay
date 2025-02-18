export type PathType = keyof typeof PATH;

export const PATH = {
  hash: "#",
  home: "/",
  login: "/en/login",
  register: "/en/register",
  property: "/en/property",
  propertyId: (id: unknown) => `/en/property/${id}`,
  // login: "/login",
  // register: "/register",
  // verifyEmail: "/verify-email",
  // forgotPassword: "/forgot-password",
  // resetPassword: "/reset-password",
  // dashboard: "/dashboard",
} as const;
