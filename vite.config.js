import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    server: {
        port: 3000,
        host: "localhost",
        open: true,
        origin: "http://localhost:3000",
    },
    define: {
        "process.env": {},
    },
});
