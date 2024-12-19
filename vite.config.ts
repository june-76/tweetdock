import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: "build",
    },
    base: "./", // 상대 경로로 assets을 참조하도록 설정
});
