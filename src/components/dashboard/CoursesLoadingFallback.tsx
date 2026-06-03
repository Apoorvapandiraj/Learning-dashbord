import { CourseCardSkeleton } from "@/components/ui/Skeletons";

export function CoursesLoadingFallback() {
  return (
    <>
      {[0, 1, 2, 3].map(i => <CourseCardSkeleton key={i} />)}
    </>
  );
}
