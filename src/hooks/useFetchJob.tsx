import { useEffect } from "react";
import { useFetchAllStories } from "./useFetchAllStories";

export function useFetchJob() {
  const {
    jobs,
    jobLoading,
    jobError,
    jobPage,
    jobLimit,
    dispatchJobStories,
    dispatchMoreJob,
  } = useFetchAllStories();

  useEffect(() => {
    if (jobLoading === "idle") {
      dispatchJobStories();
    }
  }, [dispatchJobStories, jobLoading, jobPage, jobLimit]);

  return {
    jobs,
    jobLoading,
    jobError,
    dispatchMoreJob,
  }
}