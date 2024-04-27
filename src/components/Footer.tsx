import React from "react";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div>
      <footer className="bg-slate-950 text-white text-center p-4">
        <div className="p-2">
          <p>Made with ❤️</p>
        </div>
        <div className="p-2">
          <Socials />
        </div>
      </footer>
    </div>
  );
}
