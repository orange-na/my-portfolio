"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Profile() {
  return (
    <section className="inset-0 bg-gradient-to-r from-blue-500 to-purple-500 py-20 w-full">
      <div className="text-white px-10 md:px-32 mx-auto flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 lg:mb-0 md:mr-8"
        >
          <Image
            width={192}
            height={192}
            src="/images/profile.jpg"
            alt="Yuto Namba"
            className="w-48 h-48 rounded-full object-cover border-4 border-white"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Yuto Namba</h1>
          <p className="text-xl mb-8">
            津山工業高等専門学校 / 電子・情報システム工学専攻
          </p>
          <p className="text-lg mb-8">
            私は、モダンなWebアプリケーションの開発に情熱を注いでいます。
            <br />
            クリーンなコードとユーザーフレンドリーなデザインを心がけています。
          </p>
          <div className="flex items-center mb-8">
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-100 mr-4"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-100 mr-4"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-100"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
          <motion.a
            href="#projects"
            className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            プロジェクトを見る
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
