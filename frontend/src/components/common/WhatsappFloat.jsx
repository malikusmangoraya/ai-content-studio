import React from 'react';

const WhatsappFloat = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

  if (!whatsappNumber) {
    return null; // Don't render if number is not configured
  }

  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.5 3.42 1.45 4.88l-1.39 5.08 5.21-1.37c1.4-.77 2.97-1.18 4.64-1.18 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm.04 1.78c4.58 0 8.3 3.72 8.3 8.3s-3.72 8.3-8.3 8.3c-1.57 0-3.08-.43-4.4-1.22l-.3-.18-3.15.83.84-3.06-.2-.31c-.88-1.38-1.37-2.98-1.37-4.67 0-4.58 3.72-8.3 8.3-8.3zm-3.05 4.14c-.16 0-.27.05-.39.14-.14.1-.28.24-.38.38-.45.6-.9 1.54-.9 2.76 0 1.25.46 2.06 1.05 2.58.5.42 1.09.63 1.62.63.42 0 .84-.13 1.25-.26.37-.13.78-.36 1.15-.55.77-.38 1.52-.89 2.22-1.37.75-.52 1.34-1.2 1.54-1.46.2-.26.2-.4.07-.63-.12-.23-.45-.34-.96-.54-.44-.17-.7-.27-.96-.38-.2-.08-.42-.14-.64-.17-.22-.04-.46-.04-.64.04-.18.07-.36.2-.49.34-.14.14-.29.3-.43.46-.14.17-.27.35-.4.49-.12.14-.26.2-.4.08-.14-.13-.59-.22-.76-.28-.18-.07-.35-.11-.53-.11z" />
      </svg>
    </a>
  );
};

export default WhatsappFloat;
