import type { Metadata } from "next"
import NavBar from "@/components/navBar"
import Footer from "@/components/footer"
import { Box, Flex } from "@chakra-ui/react"

export const metadata: Metadata = {
	title: "堅美國際 - 主頁",
	description: "國際貿易與供應鏈整合顧問公司 - 主頁內容",
}

export default function MainLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<Flex direction="column" minH="100vh" bg="bg.page" color="text.main">
			<NavBar />
			<Box flex="1">{children}</Box>
			<Footer />
		</Flex>
	)
}
