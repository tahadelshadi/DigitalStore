"use client";
import ProductDetailTitle from "@/components/title/productDetailTitle";
import { Comment as CommentInterface } from "@/interface/interfaces";
import { Avatar } from "@nextui-org/react";
import { CommentRate } from "../product/productRate";
import AddComment from "./addComment";

const CustomerReviews = ({ comment }: { comment: CommentInterface[] }) => {
  return (
    <>
      <div className="flex flex-row justify-between my-8">
        <ProductDetailTitle title={"Customer Reviews"} />
        <AddComment />
      </div>
      {comment.map((comment: CommentInterface, id) => (
        <div className="m-4 flex flex-col gap-2" key={id}>
          <div>
            <div className="flex flex-row items-center gap-2">
              <Avatar className="h-6 w-6" />
              <p className="text-sm capitalize">{comment.user}</p>
            </div>
            <div className="mt-1">
              <CommentRate rate={comment.rate} />
            </div>
          </div>
          <p className="text-justify text-gray-600">{comment.context}</p>
        </div>
      ))}
    </>
  );
};

export default CustomerReviews;
