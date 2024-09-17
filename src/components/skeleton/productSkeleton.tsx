import { Skeleton } from "@nextui-org/react";

export const CardSkeleton = () => {
  return (
    <>
      <div className="product-skeleton">
        <Skeleton className="h-40 w-full" /> {/* Image placeholder */}
        <Skeleton className="h-5 w-full" /> {/* Title placeholder */}
        <Skeleton className="h-3 w-full" /> {/* Description placeholder */}
      </div>
    </>
  );
};

export const SpecSkeleton = () => {
  return (
    <div className="flex grow flex-col gap-5 px-4" id="description">
      <Skeleton className="h-10 w-10 rounded-sm" />
      <Skeleton className="h-10 w-10 rounded-sm" />
    </div>
  );
};

export const PriceCardSkeleton = () => {
  return (
    <div className=" min-w-60 xs:fixed xs:bottom-0 xs:left-0 xs:right-0 md:relative md:max-w-60">
      <div className="flex gap-4 xs:flex-row xs:justify-between md:flex-col md:rounded-md ">
        <Skeleton className="w-20" />
        <Skeleton className="h-11 w-full" />
      </div>
    </div>
  );
};
export const DescriptionSkeleton = () => {
  return (
    <div className="mt-5 flex flex-col gap-5">
      <Skeleton className="w-2/5 rounded-lg" />
      <Skeleton className="w-full rounded-lg" />
      <Skeleton className="w-full rounded-lg" />
      <Skeleton className="w-full rounded-lg" />
    </div>
  );
};
export const CustomerReviewsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-2/5 rounded-lg" />
      <div className="m-4 flex flex-col gap-2">
        <div>
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="w-2/5 rounded-lg" />
          </div>
          <div className="mt-1">
            <Skeleton className="w-2/5 rounded-lg" />
          </div>
        </div>
        <Skeleton className="w-full rounded-lg" />
        <Skeleton className="w-full rounded-lg" />
      </div>
    </div>
  );
};
export const RecommendedProductsSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-2/5 rounded-lg" />
      <div className="m-4 flex flex-col gap-2">
        <div>
          <div className="flex flex-row items-center gap-2">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="w-2/5 rounded-lg" />
          </div>
          <div className="mt-1">
            <Skeleton className="w-2/5 rounded-lg" />
          </div>
        </div>
        <Skeleton className="w-full rounded-lg" />
        <Skeleton className="w-full rounded-lg" />
      </div>
    </div>
  );
};
