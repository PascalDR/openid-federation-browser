import { Modal } from "bootstrap-italia";

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export const cleanInput = (id: string) => {
  const trustAnchorElm = document.getElementById(id) as HTMLInputElement;
  trustAnchorElm.value = "";
  trustAnchorElm.focus();
};

export const handleCollapseVisibility = (id: string, isVisible: boolean) => {
  const collapsable = document.getElementById(id);

  if (!collapsable) return;

  if (!isVisible) {
    collapsable.classList.remove("show");
    collapsable.classList.add("hide");
  } else {
    collapsable.classList.remove("hide");
    collapsable.classList.add("show");
  }
};

export const handleKeyDwonEvent = (key: string, onEvent: () => void) => {
  const handleKeyDown = (event: any) => {
    if (event.key === key) onEvent();
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
};

export const toggleModal = (id: string) => {
  const modal = new Modal(document.getElementById(id) as HTMLElement);
  modal.toggle();
};

export const showModal = (id: string) => {
  const modal = new Modal(document.getElementById(id) as HTMLElement);
  modal.show();
};

export const hideModal = (id: string) => {
  const modal = new Modal(document.getElementById(id) as HTMLElement);
  modal.hide();
};

export const fmtValidity = (valid: boolean, reason: string | undefined) => {
  const value = valid ? "valid" : "invalid";
  return valid ? value : `${value} (${reason})`;
};

export const truncateMiddle = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  const half = Math.floor(maxLength / 2);
  return text.slice(0, half) + "..." + text.slice(-half);
};
