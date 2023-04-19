import Modal from "components/modal/Modal";
import { useState } from "react";

export default function CareerPage() {
  const [openModalForNewCareerPage, setOpenModalForNewCareerPage] =
    useState(false);

  const openModalForNewCareerPageHandler = () => {
    setOpenModalForNewCareerPage((prev) => !prev);
  };

  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-4xl font-semibold text-gray-700">Career Page</h1>
          <button
            className="group rounded-lg border border-secondary px-4 py-2 hover:bg-primary"
            onClick={() => openModalForNewCareerPageHandler()}
          >
            <p className="text-sm text-secondary group-hover:text-white">
              Create Career Page
            </p>
          </button>
        </div>
        <p className="text-sm text-gray-500">
          AI guided system, to help quicky deploy a career page
        </p>
      </div>
      <p className="text-sm text-gray-500">No career page deployed</p>
      <Modal
        open={openModalForNewCareerPage}
        close={() => openModalForNewCareerPageHandler()}
      >
        <div className="h-[600px] w-[600px] rounded-lg bg-white">
          <button onClick={() => openModalForNewCareerPageHandler()}>x</button>
          Testing Modal
        </div>
      </Modal>
    </div>
  );
}
