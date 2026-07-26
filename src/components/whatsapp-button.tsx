import { siteConfig } from "@/lib/site-config";

export default function WhatsappButton() {
  const digits = siteConfig.phone.replace(/[^\d]/g, "");
  const message = encodeURIComponent(
    `Hi ${siteConfig.name}, I found your portfolio and would love to talk about a painting.`,
  );

  return (
    <a
      href={`https://wa.me/${digits}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${siteConfig.name} on WhatsApp`}
      className="group fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:scale-105"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.4s]" />
      <svg
        viewBox="0 0 32 32"
        width="26"
        height="26"
        fill="currentColor"
        aria-hidden="true"
        className="relative"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.245.63 4.34 1.72 6.13L4 29l8.06-1.68A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.6c-1.87 0-3.61-.5-5.12-1.38l-.367-.217-4.78 1 1.02-4.66-.24-.38A9.55 9.55 0 0 1 5.4 15c0-5.85 4.76-10.6 10.604-10.6C21.85 4.4 26.6 9.15 26.6 15S21.85 24.6 16.004 24.6Zm5.55-7.95c-.303-.152-1.79-.883-2.067-.984-.277-.101-.479-.152-.68.152-.202.303-.78.984-.957 1.187-.176.202-.353.227-.656.076-.303-.152-1.278-.47-2.434-1.5-.9-.802-1.508-1.793-1.685-2.096-.176-.303-.019-.467.133-.618.136-.136.303-.353.454-.53.152-.176.202-.303.303-.505.101-.202.05-.38-.025-.53-.076-.152-.68-1.638-.932-2.243-.245-.588-.494-.508-.68-.517l-.58-.01c-.202 0-.53.076-.807.38-.278.303-1.06 1.036-1.06 2.523 0 1.487 1.085 2.925 1.236 3.128.151.202 2.135 3.26 5.174 4.57.723.312 1.286.499 1.726.638.725.23 1.385.198 1.906.12.582-.087 1.79-.732 2.042-1.44.253-.707.253-1.313.177-1.44-.076-.126-.278-.202-.58-.354Z" />
      </svg>
    </a>
  );
}
