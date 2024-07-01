"use client";
import Modal from "./Modal";
import useSearchModal from "@/app/hooks/useSearchModal";
const SearchModal = () => {
    const searchModal = useSearchModal();
    return ( 
        // <div></div>
        <Modal
        isOpen = {searchModal.isOpen}
        onClose={searchModal.onClose}
        onSubmit={searchModal.onOpen}
        title="Filters"
        actionLabel="Search"
        />
     );
}
 
export default SearchModal;