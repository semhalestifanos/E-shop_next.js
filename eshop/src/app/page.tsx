import "@fontsource/inter";

import Navbar from "./sharedComponent/Navbar/Navigation";

import SignupCreateAccount from "./signupPage/page";
import AdsBanner from "./homepage/components/Ads";
import BestSellingProducts from "./homepage/components/BestSelingProducts";
import BrowseByCategory from "./homepage/components/BrowseByCategory";
import NewArrivals from "./homepage/components/NewArrival";
import { Footer } from "./sharedComponent/Footer";
import ExploreProducts from "./homepage/components/ExploreProducts";
import Header from "./sharedComponent/Navbar/TopNav";


export default function CreateAccount() {
  return (
    <>
      <Header />
      <Navbar />
      <AdsBanner />
      <BrowseByCategory />
      <BestSellingProducts />
      <ExploreProducts />
      <NewArrivals />

      <Footer />




    </>
  );
}
