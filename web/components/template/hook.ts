import { useState } from "react";
import { useRouter } from "next/router";

export function useTemplate() {
  // SHARED STATES
  const router = useRouter();
  // LOCAL STATES
  const [data, setData] = useState();
  // COMPUTED VALUES
  // STATE MUTATORS
  // SIDE EFFECTS

  return { data };
}
