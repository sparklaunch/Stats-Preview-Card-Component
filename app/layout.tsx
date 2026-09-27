import { clsx } from "clsx";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";

const lexendDeca = Lexend_Deca();
const inter = Inter();

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="ko" className={clsx(lexendDeca, inter)}>
			<body>{children}</body>
		</html>
	);
}
