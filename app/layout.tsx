import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "北京纬理律师事务所官网评审版",
  description: "北京纬理律师事务所官网前台内部评审版。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
