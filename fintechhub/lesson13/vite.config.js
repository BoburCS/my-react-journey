import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@icons": path.resolve(__dirname, "src/assets/icons"),
            "@images": path.resolve(__dirname, "src/assets/images"),
            "@components": path.resolve(__dirname, "src/components"),
            "@elements": path.resolve(__dirname, "src/components/elements"),
            "@pages": path.resolve(__dirname, "src/pages"),
            "@data": path.resolve(__dirname, "src/data"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@containers": path.resolve(__dirname, "src/components/containers"),
        },
    },
});

