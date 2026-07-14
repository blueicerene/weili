import { cp, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await cp("docs", "dist", { recursive: true });
