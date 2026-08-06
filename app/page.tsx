import Hero from "../components/Hero"
import QuickServices from "../components/QuickServices"
import TrustedServices from "../components/TrustedServices"
import CoreServices from "../components/CoreServices"
import CashbackSection from "../components/CashbackSection"
import WalletFundingSection from "../components/WalletFundingSection"
import PricingTableSection from "../components/PricingTableSection"
import BrandMockupSection from "../components/BrandMockupSection"
import ApiShowcaseSection from "../components/ApiShowcaseSection"
import TrustSection from "../components/TrustSection"
import TrustedPartnersSection from "../components/TrustedPartnersSection"


export default function Home() {
  return (
    <>
      <Hero />
      <QuickServices />
      <TrustedServices />
      <CoreServices />
      <CashbackSection />
      <WalletFundingSection />
      <PricingTableSection />
      <BrandMockupSection />
      <ApiShowcaseSection />
      <TrustSection />
    </>
  )
}
