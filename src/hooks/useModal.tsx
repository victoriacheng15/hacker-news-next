import { useDisclosure } from "@chakra-ui/react";
import { useFetchComments } from "./useFetchComments";


export function useModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { dispatchFetchComments } = useFetchComments();

  function modalAndDispatch(id: number) {
    onOpen();
    dispatchFetchComments(id);
  }

  return {
    isOpen,
    onClose,
    modalAndDispatch,
  }

}