import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";

const AddComment = () => {
  const [context, setContex] = useState<string>("");
  const [rate, setRate] = useState<string>("1");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const handleSubmit = () => {};
  return (
    <>
      <Button
        onPress={onOpen}
        color="primary"
        variant="flat"
        className="my-2.5">
        Submit a review
      </Button>
      <Modal isOpen={isOpen}  onOpenChange={onOpenChange} backdrop="opaque" placement="top-center" className="py-6">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-xl font-semibold text-gray-600 flex flex-col gap-1 ">
                Describe your point of view
              </ModalHeader>
              <ModalBody>
                <form
                  className="mx-auto flex w-full flex-col justify-center  gap-5 rounded-lg bg-white"
                  onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-4">
                    <Textarea
                      autoFocus
                      isRequired
                      type="text"
                      variant="bordered"
                      label="Comment Text:"
                      placeholder="Type your comment..."
                      labelPlacement="outside"
                      value={context}
                      onChange={(e) => setContex(e.target.value)}
                    />
                    <Input
                      name="rate"
                      type="number"
                      variant="bordered"
                      label="Rate:"
                      labelPlacement="outside"
                      value={rate}
                      maxLength={5}
                      onChange={(e) => setRate(e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="flex h-fit flex-row items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-1.5 text-sm text-white">
                    Submit
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddComment;
