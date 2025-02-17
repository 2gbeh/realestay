export type PathType = keyof typeof PATH;

export const PATH = {
  hash: "#",
  home: "/",
  property: "/en/property",
  property_: (id: unknown) => `/en/property/${id}`,
  agentLogin: "/en/agent/login",
  // login: "/login",
  // register: "/register",
  // verifyEmail: "/verify-email",
  // forgotPassword: "/forgot-password",
  // resetPassword: "/reset-password",
  // dashboard: "/dashboard",
} as const;
