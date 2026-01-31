
import { DayItinerary, Traveler, Payer, ExpenseCategory } from './types';

export const APP_NAME = "❄️ 釜山冬日行";
export const APP_VERSION = "v12.0 - Busan Final Polish";

export const TRAVELER_OPTIONS = Object.values(Traveler);
export const PAYER_OPTIONS = Object.values(Payer);
export const CATEGORY_OPTIONS = Object.values(ExpenseCategory);

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayTitle: "啟程・抵達海雲臺",
    date: "2026-02-05",
    weather: [
      { time: "09:00", temp: "12°", condition: "Sunny" },
      { time: "15:00", temp: "6°", condition: "PartlyCloudy" }
    ],
    hotel: {
      name: "釜山萬豪\n Fairfield by Marriott Busan",
      note: "距海雲台站約600公尺",
      locationUrl: "https://maps.app.goo.gl/VmrMSQG3hbtguV5p6"
    },
    events: [
      { 
        time: "13:25", 
        title: "釜山航空 BX794", 
        description: "", 
        location: "桃園機場 T2",
        highlight: true,
        flight: {
          airlineCode: "BX794",
          airlineName: "BUSAN AIRLINES BX794",
          aircraft: "AIRBUS A321",
          departureTime: "13:25",
          arrivalTime: "15:00",
          departureAirport: "TPE",
          arrivalAirport: "PUS",
          departureCity: "台北",
          arrivalCity: "釜山",
          departureTerminal: "第二航廈",
          arrivalTerminal: "國際航廈",
          duration: "2 小時 35 分鐘"
        }
      },
      { 
        time: "15:30", 
        title: "海雲台沙灘漫步", 
        description: "吹吹冬日海風，與海鷗合照", 
        icon: "Camera",
        location: "海雲台"
      },
      { 
        time: "18:00", 
        title: "伍班長烤肉", 
        description: "海雲台必吃的超人氣烤肉，暖暖身子", 
        icon: "Utensils",
        location: "海雲台"
      }
    ]
  },
  {
    dayTitle: "藍線公園",
    date: "2026-02-06",
    weather: [
      { time: "10:00", temp: "3°", condition: "Sunny" },
      { time: "16:00", temp: "7°", condition: "Cloudy" }
    ],
    hotel: {
      name: "釜山萬豪\n Fairfield by Marriott Busan",
      note: "距海雲台站約600公尺",
      locationUrl: "https://maps.app.goo.gl/VmrMSQG3hbtguV5p6"
    },
    events: [
      { 
        time: "10:30", 
        title: "甘川洞文化村", 
        description: "尋找小王子，俯瞰彩色村落", 
        icon: "Landmark",
        location: "甘川洞",
        highlight: true,
        notes: "這邊坡度較陡，建議長輩慢行。\n\n[地圖指南](https://maps.app.goo.gl/gamcheon)"
      },
      { 
        time: "13:30", 
        title: "膠囊列車", 
        description: "沿著海岸線搭回尾埔站，車程約 30 分鐘", 
        icon: "Landmark",
        location: "海雲臺藍線公園-青沙埔站",
        locationUrl: "https://maps.app.goo.gl/XLA5E4FpvF2LV8e37",
        image: "https://image-store.asiayo.com/bnb/49524/autoxauto/desc_WKeMhlPDX1eDWg.webp",
        notes: "[Sky Capsule Booking Details](https://tket.me/yLODun3)"
      },
      { 
        time: "19:00", 
        title: "廣安里海大橋夜景", 
        description: "一邊吃炸雞一邊看大橋亮燈", 
        icon: "Camera",
        location: "廣安里"
      }
    ]
  },
  {
    dayTitle: "機張：奢華與美食",
    date: "2026-02-07",
    weather: [
      { time: "09:00", temp: "4°", condition: "Sunny" },
      { time: "15:00", temp: "9°", condition: "Sunny" }
    ],
    hotel: {
      name: "阿瓦尼中央酒店\n Avani Central Busan",
      note: "近國際金融中心·釜山銀行",
      locationUrl: "https://maps.app.goo.gl/PgdYBSwBipg6TXB99"
    },
    events: [
      { time: "10:00", title: "海東龍宮寺", description: "韓國唯一的海邊寺廟", icon: "Landmark", location: "機張" },
      { time: "13:00", title: "機張市場大蟹", description: "冬日必吃的豪華海鮮盛宴", icon: "Utensils", location: "機張市場", highlight: true },
      { time: "16:00", title: "樂天世界/Outlet", description: "家庭採買與遊樂行程", icon: "ShoppingBag", location: "機張" }
    ]
  },
  {
    dayTitle: "西面：繁華市中心",
    date: "2026-02-08",
    weather: [
      { time: "10:00", temp: "5°", condition: "Cloudy" },
      { time: "16:00", temp: "8°", condition: "Rain" }
    ],
    hotel: {
      name: "阿瓦尼中央酒店\n Avani Central Busan",
      note: "近國際金融中心·釜山銀行",
      locationUrl: "https://maps.app.goo.gl/PgdYBSwBipg6TXB99"
    },
    events: [
      { time: "11:00", title: "西面商圈購物", description: "地下街衣服、保養品大採購", icon: "ShoppingBag", location: "西面" },
      { time: "15:00", title: "田浦咖啡街", description: "找間特色咖啡廳度過下午", icon: "Coffee", location: "西面" },
      { time: "18:00", title: "松亭三代豬肉湯飯", description: "道地釜山老店，必喝濃醇湯頭", icon: "Utensils", location: "西面" }
    ]
  },
  {
    dayTitle: "賦歸：美好回憶",
    date: "2026-02-09",
    weather: [
      { time: "08:00", temp: "2°", condition: "Sunny" },
      { time: "12:00", temp: "6°", condition: "Sunny" }
    ],
    events: [
      { 
        time: "10:00", 
        title: "最後採買/機場移動", 
        description: "前往金海機場準備回程", 
        icon: "Train", 
        location: "沙上/金海" 
      },
      { 
        time: "10:50", 
        title: "釜山航空 BX793", 
        description: "", 
        location: "桃園機場 T2",
        highlight: true,
        flight: {
          airlineCode: "BX793",
          airlineName: "BUSAN AIRLINES BX793",
          aircraft: "AIRBUS A321",
          departureTime: "10:50",
          arrivalTime: "12:25",
          departureAirport: "PUS",
          arrivalAirport: "TPE",
          departureCity: "釜山",
          arrivalCity: "台北",
          departureTerminal: "國際航廈",
          arrivalTerminal: "第二航廈",
          duration: "2 小時 35 分鐘"
        }
      }
    ]
  }
];
