import { DayItinerary, Payer, ExpenseCategory } from './types';

export const APP_NAME = "🌊 釜山海味之旅";
export const APP_VERSION = "v2.0 - Busan Edition";

export const PAYER_OPTIONS = [Payer.ME, Payer.DAD, Payer.MOM];
export const CATEGORY_OPTIONS = Object.values(ExpenseCategory);

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayTitle: "抵達釜山：海雲台漫步",
    date: "2025-12-17",
    weather: [
      { time: "09:00", temp: "5°", condition: "Sunny" },
      { time: "12:00", temp: "8°", condition: "Sunny" },
      { time: "15:00", temp: "9°", condition: "PartlyCloudy" },
      { time: "18:00", temp: "6°", condition: "Cloudy" },
      { time: "21:00", temp: "4°", condition: "Cloudy" }
    ],
    hotel: {
      name: "海雲台帕樂德度假飯店",
      note: "近地鐵海雲台站，步行5分鐘",
      locationUrl: "https://maps.app.goo.gl/busan1"
    },
    events: [
      { 
        time: "11:30", 
        title: "抵達金海機場", 
        description: "領取行李，搭乘機場巴士前往海雲台", 
        icon: "Plane", 
        location: "金海國際機場",
        highlight: true,
        image: "https://images.unsplash.com/photo-1570182601968-38fce2b11565?q=80&w=600&auto=format&fit=crop"
      },
      { 
        time: "14:00", 
        title: "海雲台藍線公園", 
        description: "搭乘海岸小火車欣賞絕美海景 (膠囊小火車已預訂)", 
        icon: "Train",
        location: "Blue Line Park",
        image: "https://images.unsplash.com/photo-1590664095641-7fa05f689813?q=80&w=600&auto=format&fit=crop"
      },
      { 
        time: "18:00", 
        title: "晚餐：海雲台傳統市場", 
        description: "必吃：盲鰻、糖餅、辣炒年糕", 
        location: "海雲台市場", 
        icon: "Utensils"
      },
      { time: "20:00", title: "海雲台沙灘散步", description: "欣賞夜景，感受海風", icon: "Sunset", location: "海雲台海灘" },
    ]
  },
  {
    dayTitle: "文化與購物：甘川洞與南浦洞",
    date: "2025-12-18",
    weather: [
      { time: "09:00", temp: "4°", condition: "Sunny" },
      { time: "14:00", temp: "10°", condition: "Sunny" },
      { time: "20:00", temp: "5°", condition: "Sunny" }
    ],
    hotel: {
      name: "海雲台帕樂德度假飯店",
      locationUrl: "https://maps.app.goo.gl/busan1"
    },
    events: [
      { 
        time: "10:00", 
        title: "甘川洞文化村", 
        description: "釜山的聖托里尼，尋找小王子背影", 
        highlight: true, 
        icon: "Camera", 
        location: "甘川洞文化村",
        image: "https://images.unsplash.com/photo-1590664095641-7fa05f689813?q=80&w=600&auto=format&fit=crop"
      },
      { time: "13:00", title: "南浦洞午餐：豬肉湯飯", description: "釜山代表美食，溫暖身心", icon: "Utensils", location: "本錢豬肉湯飯" },
      { 
        time: "15:00", 
        title: "BIFF 廣場與國際市場", 
        description: "體驗釜山電影節氛圍，盡情購物", 
        icon: "ShoppingBag", 
        location: "南浦洞"
      },
      { time: "19:00", title: "影島大橋夜景", description: "觀賞橋樑升降與夜之美", icon: "Moon", location: "影島大橋" },
    ]
  },
  {
    dayTitle: "海景與SPA：松島與廣安里",
    date: "2025-12-19",
    weather: [
      { time: "10:00", temp: "6°", condition: "Cloudy" },
      { time: "15:00", temp: "8°", condition: "PartlyCloudy" }
    ],
    events: [
      { time: "10:00", title: "松島海上纜車", description: "全透明底座，俯瞰蔚藍大海", icon: "Map", location: "松島龍宮雲橋" },
      { time: "14:00", title: "Centum City SPA LAND", description: "高級汗蒸幕體驗，放鬆疲勞 (長輩推薦)", highlight: true, icon: "Coffee" },
      { time: "19:00", title: "廣安里大橋夜景晚餐", description: "看著點燈的大橋吃烤魚", icon: "Utensils", location: "廣安里海灘" },
    ]
  }
];