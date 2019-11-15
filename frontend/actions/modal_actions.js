export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const openModal = (type, data) => {
  return {
    type: OPEN_MODAL,
    modal: {
      type,
      data
    }
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  }
}