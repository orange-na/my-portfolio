"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8 mb-6">
          <a
            href="https://github.com/orange-na"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaGithub className="w-8 h-8" />
          </a>
          <a
            href="https://x.com/orange_na25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaXTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/yuto-namba-a414b7284"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Yuto Namba. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
