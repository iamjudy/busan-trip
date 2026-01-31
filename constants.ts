
import { DayItinerary, Traveler } from './types';

export const APP_NAME = "🌊 釜山海味之旅";
export const APP_VERSION = "v6.0 - Clean Edition";

export const TRAVELER_OPTIONS = Object.values(Traveler);

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayTitle: "海雲台：浪漫海之濱",
    date: "2025-12-17",
    weather: [
      { time: "09:00", temp: "5°", condition: "Sunny" },
      { time: "12:00", temp: "8°", condition: "Sunny" },
      { time: "18:00", temp: "6°", condition: "Cloudy" }
    ],
    hotel: {
      name: "海雲台帕樂德度假飯店",
      note: "近地鐵站，下樓就是沙灘",
      locationUrl: "https://maps.app.goo.gl/busan1"
    },
    events: [
      { 
        time: "11:30", 
        title: "抵達金海機場", 
        description: "領取行李，搭乘機場巴士直達海雲台", 
        icon: "Plane", 
        location: "金海國際機場",
        highlight: true,
        image: "https://images.unsplash.com/photo-1570182601968-38fce2b11565?q=80&w=600&auto=format&fit=crop"
      },
      { 
        time: "14:00", 
        title: "Blue Line Park 膠囊火車", 
        description: "從尾浦出發到青沙浦，欣賞釜山最美海岸線", 
        icon: "Train",
        location: "海雲台藍線公園",
        image: "https://images.unsplash.com/photo-1590664095641-7fa05f689813?q=80&w=600&auto=format&fit=crop"
      },
      { 
        time: "18:30", 
        title: "晚餐：海雲台傳統市場", 
        description: "品嚐糖餅、辣炒年糕及釜山特色盲鰻", 
        location: "海雲台市場", 
        icon: "Utensils"
      }
    ]
  },
  {
    dayTitle: "文化尋禮：甘川洞小王子",
    date: "2025-12-18",
    weather: [
      { time: "09:00", temp: "4°", condition: "Sunny" },
      { time: "14:00", temp: "10°", condition: "Sunny" }
    ],
    hotel: {
      name: "海雲台帕樂德度假飯店",
      locationUrl: "https://maps.app.goo.gl/busan1"
    },
    events: [
      { 
        time: "10:00", 
        title: "甘川洞文化村", 
        description: "尋找小王子，拍攝五顏六色的階梯式民宅", 
        highlight: true, 
        icon: "Camera", 
        location: "甘川洞",
        image: "https://images.unsplash.com/photo-1621255554656-1219b6e499d3?q=80&w=600&auto=format&fit=crop"
      },
      { 
        time: "13:00", 
        title: "南浦洞：豬肉湯飯", 
        description: "釜山代表美食，熱氣騰騰的濃郁湯頭", 
        icon: "Utensils", 
        location: "南浦洞"
      },
      { time: "16:00", title: "樂天百貨展望台", description: "免費俯瞰釜山港口與影島大橋", icon: "Landmark", location: "光復店" }
    ]
  },
  {
    dayTitle: "放鬆時光：松島與 Spa Land",
    date: "2025-12-19",
    weather: [
      { time: "10:00", temp: "6°", condition: "Cloudy" },
      { time: "15:00", temp: "8°", condition: "PartlyCloudy" }
    ],
    events: [
      { time: "10:00", title: "松島海上纜車", description: "搭乘水晶車廂跨越海面，前往龍宮雲橋", icon: "Map", location: "松島" },
      { time: "14:00", title: "Centum City Spa Land", description: "高級汗蒸幕，體驗多種溫度烤房，讓長輩放鬆身心", highlight: true, icon: "Coffee" },
      { time: "19:00", title: "廣安里大橋夜景", description: "在沙灘看著點亮的廣安大橋吃晚餐", icon: "Moon", location: "廣安里" }
    ]
  }
];
