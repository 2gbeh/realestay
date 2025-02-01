import { useRouter } from "next/router";
import { PATH } from "@/constants/PATH";

export function useRouterFacade() {
  const router = useRouter();

  const shallow = (queryObj: Record<string, unknown>) => {
    const queryStr = queryObjToStr(queryObj);
    router.push(queryStr, undefined, { shallow: true });
  };

  return { router, shallow };
}

export const queryObjToStr = (queryObj?: Record<string, unknown>): string => {
  if (queryObj && Object.keys(queryObj).length > 0) {
    const queryParams = new URLSearchParams();
    Object.entries(queryObj).forEach(([key, value]) => {
      queryParams.append(key, String(value));
    });
    // "?filter_by=today&sort_by=desc"
    return `?${queryParams.toString()}`;
  }
  return "";
};
