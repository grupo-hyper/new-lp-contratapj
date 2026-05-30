import { SITE } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-colors"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-white" fill="currentColor">
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.86 2.722.86.36 0 1.45-.43 1.747-.974.227-.418.227-.747.227-.747-.057-.286-.286-.43-.516-.602-.215-.144-.49-.34-.745-.486zM16 6.49c-5.245 0-9.5 4.255-9.5 9.5 0 1.832.516 3.55 1.404 5.01L7 25.5l4.595-.886a9.466 9.466 0 0 0 4.405 1.083c5.245 0 9.5-4.255 9.5-9.5S21.245 6.49 16 6.49z" />
      </svg>
    </a>
  );
}
