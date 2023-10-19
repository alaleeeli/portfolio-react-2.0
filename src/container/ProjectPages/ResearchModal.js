import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, ScrollShadow, useDisclosure } from "@nextui-org/react";


export default function ResearchModal({ modalTitle, modalBody }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="items-center flex justify-center" >
            <Button onPress={onOpen} className="bg-gray-true-300" variant="shadow">Read More</Button>
            <Modal
                size="4xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                backdrop="blur"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 group"> 
                                {modalTitle}
                            </ModalHeader>
                            <ModalBody >
                                <ScrollShadow>
                                    {modalBody }
                                </ScrollShadow>
                            </ModalBody>
                            
                            
        
                            <ModalFooter>
                                <Button className="bg-gray-true-300" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>

    );
}
