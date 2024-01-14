import Navigation from '@/components/Nav/Navigation'
import './globals.css'
import { Inter, Lora } from 'next/font/google'
import Footer from '@/components/Footer/Footer'
import Carousel from '@/components/Carrousel/Carousel'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'
import CookieBanner from '@/components/cookiebanner/cookiebanner'
import Calendly from '@/components/Calendly/Calendly'

const inter = Inter({ subsets: ['latin'] })
const lora = Lora({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lora"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <GoogleAnalytics GA_MEASUREMENT_ID='G-PLCVSLNZ7G' />
      {/* <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MWP2CKSR');
          `,
          }}
        />
      </head> */}

      <body className={`${lora.variable} ${inter.className}`}>
        {/* <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MWP2CKSR"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        <Navigation />
        {children}
        <div id="calendly" className='flex'>
          <Calendly url="https://calendly.com/bryanparisot-rdv/30min?" />
        </div>
        <Carousel />
        <CookieBanner />
        <Footer />
      </body>
    </html>
  )
}
