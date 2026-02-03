
import { DayItinerary, Traveler, Payer, ExpenseCategory } from './types';

export const APP_NAME = "❄️ 釜山冬日行";
export const APP_VERSION = "v12.0 - Busan Final Polish";

export const TRAVELER_OPTIONS = Object.values(Traveler);
export const PAYER_OPTIONS = Object.values(Payer);
export const CATEGORY_OPTIONS = Object.values(ExpenseCategory);

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayTitle: "啟程：海雲臺",
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
        icon: "Plane",  
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
        time: "16:10",
        title: "豪華機場巴士1號線",
        description: "金海機場巴士 to 海雲台溫泉十字路口 해운대온천사거리 \n每一小時一班，大約 80 分鐘車程，下車後飯店就在站牌隔壁！",
        location: "國際航站樓",
        notes: "如果很塞車，可以改搭機場輕軌 + 地鐵，搭至「沙上站」後轉乘釜山地鐵 2 號線，就能前往釜山各地。"
      },
      { 
        time: "18:00", 
        title: "水邊最高豬肉湯飯", 
        description: "招牌湯飯是豬頸肉湯飯 항정국밥，搭配的是濃郁的高湯、滿滿的豬頸肉和兩塊血腸", 
        icon: "Utensils",
        location: "水邊最高豬肉湯飯",
        locationUrl: "https://maps.app.goo.gl/BdSTi4hpqQdcCEqTA"
      },
    ]
  },
  {
    dayTitle: "海岸散策：海雲臺廣安里",
    date: "2026-02-06",
    weather: [
      { time: "10:00", temp: "3°", condition: "Sunny" },
      { time: "16:00", temp: "7°", condition: "Cloudy" }
    ],
    hotel: {
      name: "釜山萬豪\n Fairfield by Marriott Busan",
      note: "距海雲臺站約600公尺",
      locationUrl: "https://maps.app.goo.gl/VmrMSQG3hbtguV5p6"
    },
    events: [
      {
        time: "09:30",
        title: "海雲臺海岸列車",
        description: "搭乘復古列車，沿著東釜山海岸線緩緩行駛",
        icon: "Train",
        location: "海雲臺藍線公園-尾浦站",
        locationUrl: "https://maps.app.goo.gl/fcnPFcV5Lwz3XRjY8",
        notes: "用釜山 pass 乘車，每個站點只能上一次車，下車則無限制。 可以搭到松亭站或是青沙埔站"
      },
      { 
        time: "13:30", 
        title: "膠囊列車", 
        description: "可愛迷你的膠囊車廂，從青沙埔回尾浦，車程約 30 分鐘", 
        icon: "Train",
        location: "海雲臺藍線公園-青沙埔站",
        locationUrl: "https://maps.app.goo.gl/XLA5E4FpvF2LV8e37",
        image: "https://image-store.asiayo.com/bnb/49524/autoxauto/desc_WKeMhlPDX1eDWg.webp",
        notes: "[Sky Capsule Booking Details](https://tket.me/yLODun3)"
      },
      { 
        time: "15:00", 
        title: "Spa Land Centum City 汗蒸幕", 
        description: "釜山最豪華的汗蒸幕空間放鬆，體驗多樣化的特色蒸房。費用含在 Busan Pass，入場可停留 4 小時（記得用毛巾摺羊角頭）", 
        icon: "Landmark",
        location: "新世界百貨 Spa Land",
        locationUrl: "https://maps.app.goo.gl/NC8UU8PRuWZxX5zJA"
      },
      {
        time: "17:30",
        title: "廣安里吃海鮮",
        description: "品嚐熱騰騰的海鮮刀削麵，遠眺廣安大橋",
        icon: "Utensils",
        location: "Nasari Sigdang",
        locationUrl: "https://maps.app.goo.gl/s3Fkca44Hg9ztmZA8"
      },
      {
        time: "19:30",
        title: "鑽石灣遊艇",
        description: "航行於廣安大橋下的浪漫時刻，海上煙火秀為今日畫下句點",
        icon: "Sparkles",
        location: "Diamond Bay",
        locationUrl: "https://maps.app.goo.gl/DM4XtoE2Xx1aV3SG8",
        image: "https://www.visitbusanpass.com/btp/20230302/18361941-0457-4164-82ce-2538f8439f03.jpg",
        notes: "航行 50 分鐘，提早 30 分鐘報到\n (5,000 KRW per person applies to the Night Course for VBP holders)"
      },
    ]
  },
  {
    dayTitle: "歷史走訪：慶州",
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
      {
        "time": "09:00",
        "title": "慶州千年古都巡禮",
        "description": "漫步大陵苑、佛國寺，感受新羅王朝的歷史氛圍",
        "icon": "Landmark",
        "location": "大陵苑",
        "locationUrl": "https://maps.app.goo.gl/fUSdam6L8kgZQ7tF8",
        "notes": "若搭乘 KTX 至新慶州站只需 30 分鐘，建議與金井山擇一進行"
      },
      {
        "time": "13:30",
        "title": "東萊與金井山城",
        "description": "搭乘金井山纜車俯瞰市景，走訪古老城牆與東萊蔥餅街",
        "icon": "CloudSun",
        "location": "金井山城",
        "locationUrl": "https://maps.app.goo.gl/Hz8FU7WzWKJ5bqck6",
        "image": "https://www.visitbusan.net/uploadImgs/files/cntnts/20191230180640227",
        "notes": "可以順遊梵魚寺，體驗莊嚴的寺院建築"
      },
      {
        "time": "16:00",
        "title": "聯合國紀念公園",
        "description": "全球唯一聯合國公墓，環境肅穆優美，紀念和平精神",
        "icon": "Sun",
        "location": "聯合國紀念公園 (UNMCK)",
        "locationUrl": "https://maps.app.goo.gl/RqJHom4uPM9tzyuA9",
        "notes": "距離酒店較近，適合排在回程或傍晚前造訪"
      },
      {
        "time": "18:30",
        "title": "83獬豸 (83Haechi) 烤肉",
        "description": "西面超人氣帥哥代烤店，必點招牌豬五花與頸肉",
        "icon": "Utensils",
        "location": "83Haechi 西面店",
        "locationUrl": "https://maps.app.goo.gl/MZYx7qmAfjc8mS9s5",
        "notes": "排隊人潮眾多，可線上登記候位"
      },
    ]
  },
  {
    dayTitle: "海色與彩繪的對話",
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
      {
        time: "09:30",
        title: "甘川洞文化村",
        description: "漫步韓國聖托里尼，尋找小王子與狐狸雕像",
        icon: "Camera",
        location: "甘川洞文化村",
        locationUrl: "https://maps.app.goo.gl/F28MCHgM1Fv45FzG6",
        image: "https://maps.app.goo.gl/XQfigv3tkg6NbLFP7",
        notes: "可選擇在入口處買地圖集章，打卡點人潮較多需排隊"
      },
      {
        time: "12:30",
        title: "札嘎其市場",
        description: "品嚐現撈海鮮料理，體驗全韓最大海鮮市場活力",
        icon: "Utensils",
        location: "札嘎其市場",
        locationUrl: "https://maps.app.goo.gl/cwAjVhorAi6yDWyk8",
        notes: "一樓挑選海鮮（螃蟹好吃），二樓代客料理"
      },
      {
        time: "14:30",
        title: "松島海上纜車",
        description: "搭乘水晶車廂橫越海面，飽覽松島絕美海景",
        icon: "Sparkles",
        location: "松島灣站",
        locationUrl: "https://maps.app.goo.gl/TiWKug9korU2M6KY6",
        image: "https://i0.wp.com/journey.tw/wp-content/uploads/2023-08-20-020258-76.jpg?resize=1100%2C734&quality=99&ssl=1",
        notes: "建議購買來回票，可至對岸岩南公園走走"
      },
      {
        time: "16:30",
        title: "影島白淺灘",
        description: "面海藝術村散步，找間海景咖啡廳欣賞落日",
        icon: "Coffee",
        location: "白淺灘文化村",
        locationUrl: "https://maps.app.goo.gl/k7BYXNXvb6Se5vgM7",
        notes: "傍晚時刻光線最美，適合拍照與放空",
      }
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
        location: "金海機場",
        locationUrl: "https://maps.app.goo.gl/DMx6vEFy9B2S5Ayi7"
      },
      { 
        time: "10:50", 
        title: "釜山航空 BX793", 
        description: "", 
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
