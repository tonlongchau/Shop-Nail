import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'O-P-I',
	description: 'This is the shop OPI ',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
