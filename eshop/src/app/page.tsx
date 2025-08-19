import "@fontsource/inter";
// import SalesAds from "./shared-components/SalesAds";
import Navbar from "./sharedComponent/Navbar/Navigation";
// import { Footer } from "./shared-components/Footer";
import SignupCreateAccount from "./signupPage/page";
import AdsBanner from "./homepage/components/AdsSection";
import BestSellingProducts from "./homepage/components/BestSelingProducts";
import BrowseByCategory from "./homepage/components/BrowseByCategory";
import NewArrivals from "./homepage/components/NewArrival";
import { Footer } from "./sharedComponent/Footer";
import ExploreProducts from "./homepage/components/ExploreProducts";
import Header from "./sharedComponent/Navbar/TopNav";
// import { TagsIcon } from "./homepage/components/TagsIconProps";
// import StarRow

// import HomePage from "./homePage/page";

export default function CreateAccount() {
  return (
    <>
      <Header />
       <Navbar />
      <AdsBanner />
        <BrowseByCategory/>
      <BestSellingProducts />
    
     
 <ExploreProducts/>
      <NewArrivals/>
      {/* <TagsIcon/> */}
      <Footer/>


   
   
    </>
  );
}
