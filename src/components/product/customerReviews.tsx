import ProductDetailTitle from "@/components/title/productDetailTitle";
import { Avatar } from "@nextui-org/react";

function CustomerReviewsRate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      data-slot="icon"
      className="w-4 text-black">
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
        clipRule="evenodd"></path>
    </svg>
  );
}

export default function CustomerReviews() {
  return (
    <div className="">
      <ProductDetailTitle title={"Customer Reviews"} />
      <div className="m-4 flex flex-col gap-2">
        <div>
          <div className="flex flex-row items-center gap-2">
            <Avatar className="h-6 w-6" />
            <p className="text-sm">Nullam duis</p>
          </div>
          <div className="mt-1">
            <CustomerReviewsRate />
          </div>
        </div>
        <p className="text-justify text-gray-600">
          Phasellus efficitur, nisi ut varius ultricies, tortor arcu ullamcorper
          nisi, eu auctor enim est ut enim. Sed fringilla, nulla ut tincidunt
          hendrerit, risus tortor laoreet tortor, non mattis arcu elit vel ante.
        </p>
      </div>
    </div>
  );
}
