import React from "react";

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by Sekte 600.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
