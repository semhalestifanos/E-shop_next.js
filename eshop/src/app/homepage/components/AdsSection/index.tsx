import { ArrowForwardIos } from '@mui/icons-material';

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function AdsBanner() {
  return (
    <div className="flex w-full py-4 bg-white px-4 md:px-12 lg:px-24">
      <aside className="hidden md:flex flex-col border-r border-gray-200 w-64 pr-4 pl-4">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className="flex items-center justify-between py-2 px-2 cursor-pointer hover:bg-gray-50 transition rounded"
          >
            <span className="text-gray-800 text-base">{cat}</span>
            <ArrowForwardIos className="text-gray-400" style={{ fontSize: 16 }} />
          </div>
        ))}
      </aside>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative w-full flex justify-center items-center">
          <div className="w-[1100px] max-w-full h-[320px] bg-black rounded-lg flex items-center px-12">
            <div className="flex flex-col flex-1 justify-center h-full text-white">
              <div className="flex items-center gap-2 mb-2">
                <img               
                 src="/images/iphone.png"
                 
                />
                <span className="text-sm font-normal">iPhone 14 Series</span>
              </div>
              <h2 className="text-6xl font-bold font
              
              leading-tight mb-4">
                Up to 10% <br />
                off Voucher
              </h2>
              <a
                href="#"
                className="text-white text-base font-medium underline underline-offset-4 flex items-center gap-2"
              >
                Shop Now <ArrowForwardIos className="text-white" style={{ fontSize: 16 }} />
              </a>
            </div>
            <div className="flex-1 flex justify-end items-center h-full">
              <img
                src="/images/iphones.png"
                alt="iPhones"
                   style={{ height: '100%', width: '100%' }}
                className="h-[230px] object-contain"
              />
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-[#DB4444]"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          </div>
        </div>
      </div>
    </div>
  );
}