const filterList = [
    {
        name: '디카페인',
        filterKey: 'decaf',
        color: '#94473c',
        iconUrl: '/icon/mild.png',
        items: ['7000.60', '7015.60', '7023.60', '7057.60', '7864.80', '7862.80', '7857.80'],
    },
    {
        name: '아이스',
        filterKey: 'ice',
        color: '#4badd1',
        iconUrl: '/icon/mild.png',
        items: ['7018.60', '7029.60', '7027.60', '7128.91', '7047.60', '7044.60', '7058.60', '7017.60', '7719.70', '7588.40', '7865.80', '7889.80'],
    },
    {
        name: '스타벅스',
        filterKey: 'star',
        color: '#0d6243',
        iconUrl: '/icon/mild.png',
        items: ['7133.91', '2116.91', '2117.91', '7125.91', '7126.91', '7127.91', '7128.91', '7130.91'],
    },
    {
        name: '밀크',
        filterKey: 'milk',
        color: '#d3ab89',
        iconUrl: '/icon/mild.png',
        items: ['7016.60', '7002.60', '7042.60', '7058.60', '7044.60', '7048.60', '7039.60', '7882.80', '7895.80', '7888.80', '7868.80'],
    },
    {
        name: '가향커피',
        filterKey: 'flavored',
        color: '#cf5517',
        iconUrl: '/icon/flavored.png',
        items: ['7292.60', '7294.60', '7295.60', '7296.60', '7057.60', '7854.80', '7859.80', '7860.80', '7858.80'],
    },
];

const newItem = [];
const bestItem = [];

const coffeeDataOrigin = {
    ol: [
        { sku: '7719.70', name: '에티오피아', properties: [4, -4] },
        { sku: '7757.40', name: '부에노스 아이레스 룽고', properties: [-3, -4] },
        { sku: '7607.40', name: '리우데자네이루', properties: [] },
        { sku: '7759.40', name: '상하이 룽고', properties: [3, -3] },
        { sku: '7052.80', name: '아르페지오 엑스트라', properties: [2, 2] },
        { sku: '7831.40', name: '카프리치오', properties: [2, -3] },
        { sku: '7588.40', name: '코지', properties: [3, -4] },
        { sku: '7884.80', name: '인디아', properties: [-4, 4] },
        { sku: '7883.80', name: '프레도 인텐소', properties: [] },
        { sku: '7854.80', name: '바닐라향* 커피', properties: [] },
        { sku: '7864.80', name: '볼루토 디카페나토', properties: [2, -4] },
        { sku: '7871.80', name: '코르토', properties: [] },
        { sku: '7865.80', name: '볼루토', properties: [2, -4] },
        { sku: '7853.80', name: '스톡홀름 룽고', properties: [-4, 1] },
        { sku: '7859.80', name: '초콜릿향* 커피', properties: [] },
        { sku: '7862.80', name: '아르페지오 디카페나토', properties: [2, 2] },
        { sku: '7892.80', name: '키아로', properties: [] },
        { sku: '7856.80', name: '니카라과', properties: [1, -3] },
        { sku: '7860.80', name: '캐러멜향* 커피', properties: [] },
        { sku: '7879.80', name: '비엔나 룽고', properties: [-2, -2] },
        { sku: '7882.80', name: '파리', properties: [-1, -2] },
        { sku: '7870.80', name: '프레도 델리카토', properties: [] },
        { sku: '7877.80', name: '이스탄불', properties: [] },
        { sku: '7895.80', name: '나폴리', properties: [-3, 5] },
        { sku: '7908.80', name: '아이스 코코넛 바닐라향* 커피', properties: [] },
        { sku: '7855.80', name: '리반토', properties: [-3, -2] },
        { sku: '7889.80', name: '콜롬비아', properties: [3, -2] },
        { sku: '7891.80', name: '스쿠로', properties: [] },
        { sku: '7888.80', name: '아르페지오', properties: [2, 2] },
        { sku: '7858.80', name: '헤이즐넛향* 커피', properties: [] },
        { sku: '7868.80', name: '카자르', properties: [-2, 4] },
        { sku: '7857.80', name: '리스트레토 디카페나토', properties: [] },
        { sku: '7881.80', name: '도쿄 룽고', properties: [4, -2] },
        { sku: '7890.80', name: '베네치아', properties: [-3, 1] },
        { sku: '7861.80', name: '로마', properties: [3, 1] },
        { sku: '7874.80', name: '인도네시아', properties: [2, 1] },
        { sku: '7885.80', name: '리스트레토', properties: [3, 3] },
        { sku: '7906.80', name: '아이스 피스타치오 바닐라향* 커피', properties: [] },
        { sku: '7887.80', name: '케이프타운 룽고', properties: [-4, 3] },
    ],
    vl: [
        { sku: '7063.60', name: '비비다', properties: [] },
        { sku: '7066.60', name: '진생 딜라이트', properties: [] },
        { sku: '7000.60', name: '알티시오 디카페나토', properties: [] },
        { sku: '7002.60', name: '비앙코 피콜로 포 밀크', properties: [-3, 1] },
        { sku: '7013.60', name: '아론디오', properties: [1, -1] },
        { sku: '7014.60', name: '이니지오', properties: [3, -4] },
        { sku: '7015.60', name: '포르타도 디카페나토 ', properties: [-1, 3] },
        { sku: '7016.60', name: '비앙코 도피오 포 밀크', properties: [-1, -4] },
        { sku: '7017.60', name: '에티오피아', properties: [4, -4] },
        { sku: '7023.60', name: '멜로지오 디카페나토', properties: [] },
        { sku: '7024.60', name: '솔레리오', properties: [3, -5] },
        { sku: '7025.60', name: '하프 카페나토', properties: [-1, -3] },
        { sku: '7026.60', name: '멕시코', properties: [-1, 2] },
        { sku: '7027.60', name: '엘살바도르', properties: [4, -3] },
        { sku: '7028.60', name: '콜롬비아', properties: [3, -3] },
        { sku: '7030.60', name: '비앙코 포르테 포 밀크', properties: [] },
        { sku: '7039.60', name: '멜로지오', properties: [-1, -2] },
        { sku: '7040.60', name: '스토미오', properties: [-2, 3] },
        { sku: '7041.60', name: '오다치오', properties: [1, 2] },
        { sku: '7042.60', name: '인텐소', properties: [-3, 4] },
        { sku: '7043.60', name: '코스타리카', properties: [-1, -1] },
        { sku: '7044.60', name: '더블 에스프레소 돌체', properties: [2, -3] },
        { sku: '7047.60', name: '볼테소', properties: [4, -5] },
        { sku: '7060.60', name: '일카페', properties: [-2, 5] },
        { sku: '7048.60', name: '알티시오', properties: [-2, 4] },
        { sku: '7049.60', name: '디아볼리토', properties: [] },
        { sku: '7050.60', name: '더블 에스프레소 키아로', properties: [1, 3] },
        { sku: '7058.60', name: '더블 에스프레소 스쿠로', properties: [-3, 5] },
        { sku: '7059.60', name: '포르타도', properties: [-1, 3] },
        { sku: '7292.60', name: '스위트 바닐라향* 커피', properties: [] },
        { sku: '7294.60', name: '로스티드 헤이즐넛향* 커피', properties: [] },
        { sku: '7295.60', name: '골든 캐러멜향* 커피', properties: [] },
        { sku: '7296.60', name: '리치 초콜릿향* 커피', properties: [] },
        { sku: '7068.60', name: '아이스 피스타치오 바닐라향* 커피', properties: [] },
        { sku: '7070.60', name: '아이스 코코넛 바닐라향* 커피', properties: [] },
        { sku: '7037.60', name: '콜드 브루 스타일 인텐스', properties: [] },
        { sku: '7018.60', name: '아이스 레제로', properties: [4, -2] },
        { sku: '7057.60', name: '스위트 바닐라향* 디카페나토', properties: [] },
        { sku: '7029.60', name: '아이스 포르테', properties: [-3, 2] },
        { sku: '7192.60', name: '액티브', properties: [] },
        { sku: '7046.60', name: '오라피오', properties: [1, -2] },
        { sku: '7010.60', name: '리스트레토 클라시코', properties: [2, 4] },
        { sku: '7133.91', name: '스타벅스® 베란다 블렌드', properties: [3, -2] },
        { sku: '2116.91', name: '스타벅스® 크리미 바닐라향 커피', properties: [] },
        { sku: '2117.91', name: '스타벅스® 스무스 캐러멜향 커피', properties: [] },
        { sku: '7125.91', name: '스타벅스® 에스프레소 로스트', properties: [-4, 5] },
        { sku: '7126.91', name: '스타벅스® 블론드 에스프레소 로스트', properties: [2, -2] },
        { sku: '7127.91', name: '스타벅스® 파이크 플레이스 로스트', properties: [-3, 3] },
        { sku: '7128.91', name: '스타벅스® 싱글 오리진 콜롬비아', properties: [-2, 2] },
        { sku: '7130.91', name: '스타벅스® 카페 베로나', properties: [-4, 4] },
    ],
};

const coffeeData = {
    ol: [
        {
            sku: '7719.70',
            name: '에티오피아',
            properties: [4, -4],
            headline: '건식 가공의 꽃향',
            icon: '/ecom/medias/sys_master/public/10831339749406/C-0393-ethiopia-product-RecipeForeground-192x192.png',
            category: '마스터 오리진',
            capsuleProductAromatics: ['꽃향', '과일향'],
            inStock: false,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7757.40',
            name: '부에노스 아이레스 룽고',
            properties: [-3, -4],
            headline: '단맛이 감도는 캐러멜향의 마일드한 커피',
            icon: '/ecom/medias/sys_master/public/13703698612254/C-0689-Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['곡물향', '카라멜향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7607.40',
            name: '리우데자네이루',
            properties: [],
            headline: '리우데자네이루를 닮은 허브향',
            icon: '/ecom/medias/sys_master/public/15431404748830/RecipeForegound-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['스파이시향', '허브향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7759.40',
            name: '상하이 룽고',
            properties: [3, -3],
            headline: '부드러운 시트러스향의 산미와 베리향이 조화',
            icon: '/ecom/medias/sys_master/public/13704137965598/C-0690-Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['시트러스향', '베리향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7052.80',
            name: '아르페지오 엑스트라',
            properties: [2, 2],
            headline: '코코아향 & 강한 로스팅향',
            icon: '/ecom/medias/sys_master/public/32347595210782/C-1287-OL-MediaRecipeForeground.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['코코아향', '강한 로스팅향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7831.40',
            name: '카프리치오',
            properties: [2, -3],
            headline: '깊고 조화로운 풍미와 섬세한 산미의 조화',
            icon: '/ecom/medias/sys_master/public/15769781993502/RecipeForegound-192x192.png',
            category: '에스프레소',
            capsuleProductAromatics: ['곡물향', '균형감'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7588.40',
            name: '코지',
            properties: [3, -4],
            headline: '시트러스향과 곡물향의 조화를 이루는 커피',
            icon: '/ecom/medias/sys_master/public/15769790414878/RecipeForegound-192x192.png',
            category: '에스프레소',
            capsuleProductAromatics: ['곡물향', '시트러스향'],
            inStock: false,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7884.80',
            name: '인디아',
            properties: [-4, 4],
            headline: '우디향의 여운이 남는 스파이시향 커피',
            icon: '/ecom/medias/sys_master/public/10840378245150/C-0359-India-product-RecipeForeground-192x192.png',
            category: '마스터 오리진',
            capsuleProductAromatics: ['스파이시향', '강렬함', '우디향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7883.80',
            name: '프레도 인텐소',
            properties: [],
            headline: '진한 아이스커피에 최적인 고소한 곡물향의 커피',
            icon: '/ecom/medias/sys_master/public/15389398990878/C-0918-RecipeForegound-192x192.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['로스팅향', '곡물향'],
            inStock: true,
            price: 790,
            salesMultiple: 10,
        },
        {
            sku: '7854.80',
            name: '바닐라향* 커피',
            properties: [],
            headline: '실키한 부드러움이 위안을 주는 커피',
            icon: '/ecom/medias/sys_master/public/17432224301086/C-1062-MediaRecipeForeground.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['비스킷향', '곡물향', '바닐라향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7864.80',
            name: '볼루토 디카페나토',
            properties: [2, -4],
            headline: '마일드하고 스윗한 풍미의 곡물향 디카페인 커피',
            icon: '/ecom/medias/sys_master/public/34682639187998/volluto-OL-MediaRecipeForeground.png',
            category: '디카페인',
            capsuleProductAromatics: ['균형감', '곡물향', '과일향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7871.80',
            name: '코르토',
            properties: [],
            headline: '우유와 어울리는 스파이시향 커피',
            icon: '/ecom/medias/sys_master/public/13082443808798/Mobile-Recipe-Carousel-192x192.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['스파이시향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7865.80',
            name: '볼루토',
            properties: [2, -4],
            headline: '마일드하고 스윗한 풍미의 곡물향 커피',
            icon: '/ecom/medias/sys_master/public/15769786548254/RecipeForegound-192x192.png',
            category: '에스프레소',
            capsuleProductAromatics: ['균형감', '과일향', '곡물향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7853.80',
            name: '스톡홀름 룽고',
            properties: [-4, 1],
            headline: '깊은 풍미의 맥아향과 로스팅향의 조화',
            icon: '/ecom/medias/sys_master/public/13703619379230/Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['로스팅향', '시리얼향과 몰트향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7859.80',
            name: '초콜릿향* 커피',
            properties: [],
            headline: '나를 채우는 풍성한 만족감을 주는 커피',
            icon: '/ecom/medias/sys_master/public/17431321215006/C-1060-MediaRecipeForeground.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['초콜릿향', '시리얼향과 몰트향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7862.80',
            name: '아르페지오 디카페나토',
            properties: [2, 2],
            headline: '짧은 시간 다크로스팅한 코코아향 디카페인 커피',
            icon: '/ecom/medias/sys_master/public/44096797769758/C-0479-OL-MediaRecipeForeground.png',
            category: '디카페인',
            capsuleProductAromatics: ['코코아향', '강한 로스팅향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7892.80',
            name: '키아로',
            properties: [],
            headline: '우유와 어울리는 비스킷향 커피',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['균형감', '은은한 달콤함', '비스킷향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7856.80',
            name: '니카라과',
            properties: [1, -3],
            headline: '꿀처럼 달콤한 풍미의 곡물향 커피',
            icon: '/ecom/medias/sys_master/public/10838078717982/C-0362-nicaragua-product-RecipeForeground-192x192.png',
            category: '마스터 오리진',
            capsuleProductAromatics: ['곡물향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7860.80',
            name: '캐러멜향* 커피',
            properties: [],
            headline: '놀랍도록 크리미한 나를 위한 작은 사치',
            icon: '/ecom/medias/sys_master/public/17431329505310/C-1061-MediaRecipeForeground.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['캐러멜향', '비스킷향', '견과류향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7879.80',
            name: '비엔나 룽고',
            properties: [-2, -2],
            headline: '부드러운 바디감과 균형감이 뛰어난 맥아향 커피',
            icon: '/ecom/medias/sys_master/public/13703692582942/C-0687-Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['시리얼향과 몰트향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7882.80',
            name: '파리',
            properties: [-1, -2],
            headline: '곡물향과 비스킷향이 균형을 이루는 파리지앵 커피',
            icon: '/ecom/medias/sys_master/public/15431403012126/RecipeForegound-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['시트러스향', '곡물향', '비스킷향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7870.80',
            name: '프레도 델리카토',
            properties: [],
            headline: '향긋한 과일향의 산뜻한 아이스 커피',
            icon: '/ecom/medias/sys_master/public/15388879487006/RecipeForegound-192x192.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['과일향'],
            inStock: true,
            price: 790,
            salesMultiple: 10,
        },
        {
            sku: '7877.80',
            name: '이스탄불',
            properties: [],
            headline: '아몬드향의 여운이 남는 로스팅향과 과일향의 조화',
            icon: '/ecom/medias/sys_master/public/15165862150174/RecipeForegound-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['로스팅향', '과일향'],
            inStock: false,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7895.80',
            name: '나폴리',
            properties: [-3, 5],
            headline: '오랜 시간 다크로스팅한 강한 로스팅향 커피',
            icon: '/ecom/medias/sys_master/public/15819008737310/C-0471-MediaRecipeForeground.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['강렬함', '로스팅향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7908.80',
            name: '아이스 코코넛 바닐라향* 커피',
            properties: [],
            headline: '산뜻한 코코넛향과 크리미한 바닐라향의 이국적인 바이브',
            icon: '/ecom/medias/sys_master/public/34928976461854/C-1310-OL-MediaRecipeForeground.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['바닐라향', '코코넛향'],
            inStock: true,
            price: 890,
            salesMultiple: 10,
        },
        {
            sku: '7855.80',
            name: '리반토',
            properties: [-3, -2],
            headline: '오랜 시간 미디엄 로스팅한 캐러멜향 커피',
            icon: '/ecom/medias/sys_master/public/12839369211934/Mobile-Recipe-Carousel-192x192.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['캐러멜향', '균형감'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7889.80',
            name: '콜롬비아',
            properties: [3, -2],
            headline: '과즙향의 산뜻한 산미와 와인향을 품은 커피',
            icon: '/ecom/medias/sys_master/public/10842306052126.png',
            category: '마스터 오리진',
            capsuleProductAromatics: ['와인향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7891.80',
            name: '스쿠로',
            properties: [],
            headline: '우유와 어울리는 로스팅향 커피',
            icon: '/ecom/medias/sys_master/public/13082448592926/Mobile-Recipe-Carousel-192x192.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['로스팅향', '균형감'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7888.80',
            name: '아르페지오',
            properties: [2, 2],
            headline: '짧은 시간 다크로스팅으로 완성한 코코아향 커피',
            icon: '/ecom/medias/sys_master/public/12839052738590/Mobile-Recipe-Carousel-192x192.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['코코아향', '강한 로스팅향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7858.80',
            name: '헤이즐넛향* 커피',
            properties: [],
            headline: '로스티드 헤이즐넛향의 거부할 수 없는 달콤한 휴식',
            icon: '/ecom/medias/sys_master/public/17432560599070/C-1063-MediaRecipeForeground.png',
            category: '바리스타 크리에이션',
            capsuleProductAromatics: ['비스킷향', '곡물향', '헤이즐넛향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7868.80',
            name: '카자르',
            properties: [-2, 4],
            headline: '오랜 시간 다크로스팅한 스파이시향 커피',
            icon: '/ecom/medias/sys_master/public/12839073513502/Mobile-Recipe-Carousel-192x192.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['우디향', '스파이시향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7857.80',
            name: '리스트레토 디카페나토',
            properties: [],
            headline: '로스팅향과 베리향이 조화로운 디카페인 커피',
            icon: '/ecom/medias/sys_master/public/44097662844958/C-0478-OL-MediaRecipeForeground.png',
            category: '디카페인',
            capsuleProductAromatics: ['강한 로스팅향', '베리향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7881.80',
            name: '도쿄 룽고',
            properties: [4, -2],
            headline: '섬세한 꽃향에 로스팅향의 부드러운 조화',
            icon: '/ecom/medias/sys_master/public/13753034604574/Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['꽃향', '로스팅향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
        {
            sku: '7890.80',
            name: '베네치아',
            properties: [-3, 1],
            headline: '오랜 시간 미디엄 다크로스팅한 로스팅향 커피',
            icon: '/ecom/medias/sys_master/public/15819021942814/C-0472-MediaRecipeForeground.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['로스팅향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7861.80',
            name: '로마',
            properties: [3, 1],
            headline: '짧은 시간 라이트로스팅한 우디향 커피',
            icon: '/ecom/medias/sys_master/public/12839358660638/Mobile-Recipe-Carousel-192x192.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['우디향', '곡물향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7874.80',
            name: '인도네시아',
            properties: [2, 1],
            headline: '싱그러운 열대우림의 우디향 커피',
            icon: '/ecom/medias/sys_master/public/12038945800222/C-0390-indonesia-product-RecipeForeground-192x192.png',
            category: '마스터 오리진',
            capsuleProductAromatics: ['강렬함', '우디향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7885.80',
            name: '리스트레토',
            properties: [3, 3],
            headline: '로스팅향과 베리향이 조화로운 반전매력의 커피',
            icon: '/ecom/medias/sys_master/public/12824287903774/Mobile-Recipe-Carousel-192x192.png',
            category: '이스피라치오네 이탈리아나',
            capsuleProductAromatics: ['강한 로스팅향', '베리향'],
            inStock: true,
            price: 720,
            salesMultiple: 10,
        },
        {
            sku: '7906.80',
            name: '아이스 피스타치오 바닐라향* 커피',
            properties: [],
            headline: '고소한 피스타치오와 크리미한 바닐라향의 쿨한 바이브',
            icon: '/ecom/medias/sys_master/public/35047878819870/C-1308-OL-MediaRecipeForeground.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['아몬드향', '캐러멜향', '비스킷향', '피스타치오향', '바닐라향'],
            inStock: true,
            price: 890,
            salesMultiple: 10,
        },
        {
            sku: '7887.80',
            name: '케이프타운 룽고',
            properties: [-4, 3],
            headline: '풍부한 바디감과 우디향의 강도 높은 커피',
            icon: '/ecom/medias/sys_master/public/13702032883742/Mobile-Recipe-Carousel-192x192.png',
            category: '월드 익스플로레이션',
            capsuleProductAromatics: ['로스팅향', '우디향'],
            inStock: true,
            price: 750,
            salesMultiple: 10,
        },
    ],
    vl: [
        {
            sku: '7063.60',
            name: '비비다',
            properties: [],
            headline: '비타민 B12를 함유한 고소한 비스킷향 커피',
            icon: '/ecom/medias/sys_master/public/15519390171166/Mobile-RecipeForegound-192x192.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['비스킷향', '곡물향'],
            inStock: true,
            price: 1200,
            salesMultiple: 10,
        },
        {
            sku: '7066.60',
            name: '진생 딜라이트',
            properties: [],
            headline: '인삼 추출물을 함유한 달콤한 캐러멜향* 더블 에스프레소 ',
            icon: '/ecom/medias/sys_master/public/26542899920926/C-1073-MediaRecipeForeground.png',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['인삼향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7000.60',
            name: '알티시오 디카페나토',
            properties: [],
            headline: '풍부한 바디감의 디카페인',
            icon: '/ecom/medias/sys_master/public/14448960897054/C-0788-Mobile-RecipeForegound-192x192.png',
            category: '디카페인',
            capsuleProductAromatics: ['코코아향'],
            inStock: true,
            price: 800,
            salesMultiple: 10,
        },
        {
            sku: '7002.60',
            name: '비앙코 피콜로 포 밀크',
            properties: [-3, 1],
            headline: '우유와 어울리는 달콤함',
            icon: '/ecom/medias/sys_master/public/15915791220766/C-1035-MediaRecipeForeground.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['달콤하고 부드러움'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7013.60',
            name: '아론디오',
            properties: [1, -1],
            headline: '부드럽고 마일드한 곡물향',
            icon: '/ecom/medias/sys_master/public/10396388032542/RECIPE-ARONDIO-Face.png',
            category: '그랑 룽고 150ml',
            capsuleProductAromatics: ['마일드한 시리얼향'],
            inStock: true,
            price: 930,
            salesMultiple: 10,
        },
        {
            sku: '7014.60',
            name: '이니지오',
            properties: [3, -4],
            headline: '꽃향과 곡물향의 조화',
            icon: '/ecom/medias/sys_master/public/14450303631390/C-0790-Mobile-RecipeForegound-192x192.png',
            category: '그랑 룽고 150ml',
            capsuleProductAromatics: ['꽃향'],
            inStock: true,
            price: 930,
            salesMultiple: 10,
        },
        {
            sku: '7015.60',
            name: '포르타도 디카페나토 ',
            properties: [-1, 3],
            headline: '강렬한 풍미의 디카페인',
            icon: '/ecom/medias/sys_master/public/14450308513822/C-0791-Mobile-RecipeForegound-192x192.png',
            category: '디카페인',
            capsuleProductAromatics: ['우디향'],
            inStock: true,
            price: 970,
            salesMultiple: 10,
        },
        {
            sku: '7016.60',
            name: '비앙코 도피오 포 밀크',
            properties: [-1, -4],
            headline: '우유와 어울리는 부드러움',
            icon: '/ecom/medias/sys_master/public/15922843418654/C-1034-MediaRecipeForeground.png',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['캐러멜향'],
            inStock: true,
            price: 870,
            salesMultiple: 10,
        },
        {
            sku: '7017.60',
            name: '에티오피아',
            properties: [4, -4],
            headline: '건식 가공의 섬세한 꽃향',
            icon: '/ecom/medias/sys_master/public/13415721959454/C-0630-RecipeForeground-192x192.png',
            category: '그랑 룽고 150ml',
            capsuleProductAromatics: ['꽃향'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7023.60',
            name: '멜로지오 디카페나토',
            properties: [],
            headline: '부드러운 디카페인',
            icon: '/ecom/medias/sys_master/public/17299416678430/melozio-decaffeinato-2x.png',
            category: '디카페인',
            capsuleProductAromatics: ['구운 곡물의 느낌', '비스킷향'],
            inStock: true,
            price: 1050,
            salesMultiple: 10,
        },
        {
            sku: '7024.60',
            name: '솔레리오',
            properties: [3, -5],
            headline: '가벼운 바디감의 과일향',
            icon: '/ecom/medias/sys_master/public/10396391309342/RECIPE-SOLEILO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['시트러스향'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7025.60',
            name: '하프 카페나토',
            properties: [-1, -3],
            headline: '달콤한 하프 카페인',
            icon: '/ecom/medias/sys_master/public/10396392882206/RECIPE-HALF-CAFFEINATO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['마일드'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7026.60',
            name: '멕시코',
            properties: [-1, 2],
            headline: '이중 습식 가공의 우디향',
            category: '머그 230ml',
            capsuleProductAromatics: ['우디향', '스파이시향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7027.60',
            name: '엘살바도르',
            properties: [4, -3],
            headline: '레드 허니 가공의 과일잼향',
            icon: '/ecom/medias/sys_master/public/26582350921758/C-1115-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['과일향', '비스킷향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7028.60',
            name: '콜롬비아',
            properties: [3, -3],
            headline: '습식 가공의 와인향',
            category: '머그 230ml',
            capsuleProductAromatics: ['붉은 과일향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7030.60',
            name: '비앙코 포르테 포 밀크',
            properties: [],
            headline: '우유와 어울리는 강렬함',
            icon: '/ecom/medias/sys_master/public/16058299121694/C-0290-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['강렬함', '로스팅향', '균형감'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7039.60',
            name: '멜로지오',
            properties: [-1, -2],
            headline: '부드럽고 균형 잡힌 풍미',
            icon: '/ecom/medias/sys_master/public/10396390785054/RECIPE-MELOZIO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['마일드'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7040.60',
            name: '스토미오',
            properties: [-2, 3],
            headline: '풍부하고 강렬한 풍미',
            icon: '/ecom/medias/sys_master/public/10396391571486/RECIPE-STORMIO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['강렬함'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7041.60',
            name: '오다치오',
            properties: [1, 2],
            headline: '생동감 넘치는 산뜻함',
            icon: '/ecom/medias/sys_master/public/10396391047198/RECIPE-ODACIO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['강렬함'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7042.60',
            name: '인텐소',
            properties: [-3, 4],
            headline: '깊고 진한 풍미',
            icon: '/ecom/medias/sys_master/public/10396390522910/RECIPE-INTENSO-Face.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['캐러멜향과 로스팅향'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7043.60',
            name: '코스타리카',
            properties: [-1, -1],
            headline: '온천수 가공의 맥아향',
            icon: '/ecom/medias/sys_master/public/13415865876510/C-0631-RecipeForeground-192x192.png',
            category: '그랑 룽고 150ml',
            capsuleProductAromatics: ['시리얼향과 몰트향'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7044.60',
            name: '더블 에스프레소 돌체',
            properties: [2, -3],
            headline: '부드럽고 달콤한 곡물향',
            icon: '/ecom/medias/sys_master/public/14450970755102/C-0789-Mobile-RecipeForegound-192x192.png',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['곡물향'],
            inStock: true,
            price: 870,
            salesMultiple: 10,
        },
        {
            sku: '7047.60',
            name: '볼테소',
            properties: [4, -5],
            headline: '가볍고 달콤한 풍미',
            icon: '/ecom/medias/sys_master/public/10396392095774/RECIPE-VOLTESSO-Face.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['마일드'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7060.60',
            name: '일카페',
            properties: [-2, 5],
            headline: '강렬함과 부드러움의 조화',
            icon: '/ecom/medias/sys_master/public/14194526093342/Mobile-RecipeForegound-192x192.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['곡물향', '우디향'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7048.60',
            name: '알티시오',
            properties: [-2, 4],
            headline: '풍부한 바디감의 코코아향',
            icon: '/ecom/medias/sys_master/public/10396387770398/RECIPE-ALTISSIO-Face.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['과일향'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7049.60',
            name: '디아볼리토',
            properties: [],
            headline: '매우 진하고 강렬한 풍미',
            icon: '/ecom/medias/sys_master/public/10396389212190/RECIPE-DIAVOLITTO-Face.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['강렬함'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7050.60',
            name: '더블 에스프레소 키아로',
            properties: [1, 3],
            headline: '진하고 와일드한 풍미',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['우디향'],
            inStock: false,
            price: 870,
            salesMultiple: 10,
        },
        {
            sku: '7058.60',
            name: '더블 에스프레소 스쿠로',
            properties: [-3, 5],
            headline: '진하고 강렬한 풍미',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['코코아향', '스모키향', 'ROBUSTA'],
            inStock: true,
            price: 870,
            salesMultiple: 10,
        },
        {
            sku: '7059.60',
            name: '포르타도',
            properties: [-1, 3],
            headline: '풍부한 바디감의 강렬한 풍미',
            icon: '/ecom/medias/sys_master/public/10396389736478/RECIPE-FORTADO-Face.png',
            category: '그랑 룽고 150ml',
            capsuleProductAromatics: ['코코아향', '오크우드향'],
            inStock: true,
            price: 930,
            salesMultiple: 10,
        },
        {
            sku: '7292.60',
            name: '스위트 바닐라향* 커피',
            properties: [],
            headline: '부드러운 위안',
            icon: '/ecom/medias/sys_master/public/17413157650462/C-1066-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['곡물향', '비스킷향', '바닐라향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7294.60',
            name: '로스티드 헤이즐넛향* 커피',
            properties: [],
            headline: '달콤한 휴식',
            icon: '/ecom/medias/sys_master/public/17395709968414/C-1064-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['헤이즐넛향', '견과류향', '은은한 달콤함', '카라멜향', '비스킷향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7295.60',
            name: '골든 캐러멜향* 커피',
            properties: [],
            headline: '나를 위한 작은 사치',
            icon: '/ecom/medias/sys_master/public/17413899288606/C-1067-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['캐러멜향', '비스킷향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7296.60',
            name: '리치 초콜릿향* 커피',
            properties: [],
            headline: '풍요로운 만족감',
            icon: '/ecom/medias/sys_master/public/17406287577118/C-1065-MediaRecipeForeground.png',
            category: '머그 230ml',
            capsuleProductAromatics: ['곡물향', '초콜릿향', '캐러멜향', '아몬드향'],
            inStock: true,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7068.60',
            name: '아이스 피스타치오 바닐라향* 커피',
            properties: [],
            headline: '아이스 피스타치오 바닐라향* 커피',
            icon: '/ecom/medias/sys_master/public/35044051157022/C-1309-VL-MediaRecipeForeground.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['바닐라향', '비스킷향', '아몬드향', '피스타치오향'],
            inStock: false,
            price: 950,
            salesMultiple: 10,
        },
        {
            sku: '7070.60',
            name: '아이스 코코넛 바닐라향* 커피',
            properties: [],
            headline: '산뜻한 코코넛향과 크리미한 바닐라향의 이국적인 바이브',
            icon: '/ecom/medias/sys_master/public/35044449976350/C-1311-VL-MediaRecipeForeground.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['코코넛향', '바닐라향'],
            inStock: true,
            price: 1200,
            salesMultiple: 10,
        },
        {
            sku: '7037.60',
            name: '콜드 브루 스타일 인텐스',
            properties: [],
            headline: '부드러운 풍미의 콜드브루 스타일 커피',
            icon: '/ecom/medias/sys_master/public/26731193827358/C-0794-MediaRecipeForeground.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['캐러멜향', '곡물향'],
            inStock: true,
            price: 1400,
            salesMultiple: 7,
        },
        {
            sku: '7018.60',
            name: '아이스 레제로',
            properties: [4, -2],
            headline: '향긋한 과일향의 산뜻한 아이스 커피',
            icon: '/ecom/medias/sys_master/public/15390016176158/C-0919-Mobile-RecipeForegound-192x192.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['과일향'],
            inStock: true,
            price: 870,
            salesMultiple: 10,
        },
        {
            sku: '7057.60',
            name: '스위트 바닐라향* 디카페나토',
            properties: [],
            headline: '카페인 부담 없이, 달콤한 바닐라향과 함께하는 여유',
            icon: '/ecom/medias/sys_master/public/34718158192670/C-1306-VL-MediaRecipeForeground.png',
            category: '디카페인',
            capsuleProductAromatics: ['바닐라향'],
            inStock: true,
            price: 1150,
            salesMultiple: 10,
        },
        {
            sku: '7029.60',
            name: '아이스 포르테',
            properties: [-3, 2],
            headline: '아이스로 좋은 곡물향',
            icon: '/ecom/medias/sys_master/public/15390000054302/C-0920-Mobile-RecipeForegound-192x192.png',
            category: '아이스 커피',
            capsuleProductAromatics: ['강한 로스팅향', '곡물향', '우디향'],
            inStock: true,
            price: 1000,
            salesMultiple: 10,
        },
        {
            sku: '7192.60',
            name: '액티브',
            properties: [],
            headline: '아이스로 즐기기 좋은 비타민 B6 함유 커피',
            icon: '/ecom/medias/sys_master/public/34719144902686/C-1307-VL-MediaRecipeForeground.png',
            category: '더블 에스프레소 80ml',
            capsuleProductAromatics: ['바닐라와 아몬드향'],
            inStock: false,
            price: 1100,
            salesMultiple: 10,
        },
        {
            sku: '7046.60',
            name: '오라피오',
            properties: [1, -2],
            headline: '달콤하고 균형 잡힌 풍미',
            icon: '/ecom/medias/sys_master/public/14448957259806/C-0787-Mobile-RecipeForegound-192x192.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['캐러멜향'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7010.60',
            name: '리스트레토 클라시코',
            properties: [2, 4],
            headline: '짧지만 강렬한 아라비카 커피 한 잔',
            icon: '/ecom/medias/sys_master/public/27751151894558.png',
            category: '리스트레토 25ml & 에스프레소 40ml',
            capsuleProductAromatics: ['베리향', '강한 로스팅향'],
            inStock: true,
            price: 770,
            salesMultiple: 10,
        },
        {
            sku: '7133.91',
            name: '스타벅스® 베란다 블렌드',
            properties: [3, -2],
            headline: '구운 맥아 & 베이킹 초콜릿향',
            icon: '/ecom/medias/sys_master/public/31864830591006/C-1251-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['코코아향', '스파이시향', '구운 맥아향', '초콜릿향'],
            inStock: true,
            price: 1150,
            salesMultiple: 8,
        },
        {
            sku: '2116.91',
            name: '스타벅스® 크리미 바닐라향 커피',
            properties: [],
            headline: '달콤한 바닐라 & 비스킷향',
            icon: '/ecom/medias/sys_master/public/34034184912926/C-1297-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['바닐라향', '비스킷향'],
            inStock: true,
            price: 1300,
            salesMultiple: 8,
        },
        {
            sku: '2117.91',
            name: '스타벅스® 스무스 캐러멜향 커피',
            properties: [],
            headline: '버터리 캐러멜 & 바닐라향',
            icon: '/ecom/medias/sys_master/public/34032686039070/C-1298-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['캐러멜향', '바닐라향'],
            inStock: true,
            price: 1300,
            salesMultiple: 8,
        },
        {
            sku: '7125.91',
            name: '스타벅스® 에스프레소 로스트',
            properties: [-4, 5],
            headline: '리치 캐러멜향',
            icon: '/ecom/medias/sys_master/public/31865803079710/C-1254-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['캐러멜향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7126.91',
            name: '스타벅스® 블론드 에스프레소 로스트',
            properties: [2, -2],
            headline: '부드러움 & 달콤함',
            icon: '/ecom/medias/sys_master/public/31864827314206/C-1250-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['로스팅향'],
            inStock: true,
            price: 860,
            salesMultiple: 10,
        },
        {
            sku: '7127.91',
            name: '스타벅스® 파이크 플레이스 로스트',
            properties: [-3, 3],
            headline: '부드러운 초콜릿향',
            icon: '/ecom/medias/sys_master/public/31864841142302/C-1252-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['코코아향', '스파이시향', '초콜릿향'],
            inStock: true,
            price: 1150,
            salesMultiple: 8,
        },
        {
            sku: '7128.91',
            name: '스타벅스® 싱글 오리진 콜롬비아',
            properties: [-2, 2],
            headline: '구운 호두 & 허브향',
            icon: '/ecom/medias/sys_master/public/34044004958238/C-1296-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['허브향', '팝콘향'],
            inStock: true,
            price: 1300,
            salesMultiple: 8,
        },
        {
            sku: '7130.91',
            name: '스타벅스® 카페 베로나',
            properties: [-4, 4],
            headline: '로스티한 달콤함 & 다크 코코아 향',
            icon: '/ecom/medias/sys_master/public/31865798000670/C-1253-VL-MediaRecipeForeground.png',
            category: 'Starbucks® by Nespresso',
            capsuleProductAromatics: ['캐러멜향', '코코아향'],
            inStock: true,
            price: 1150,
            salesMultiple: 8,
        },
    ],
};

class CoffeeFinder {
    constructor() {
        this.cells = {};
        this.productOfType = {
            ol: new Map(),
            vl: new Map(),
        };
        this.filterData = new Set();

        this.init();

        document.querySelectorAll('.filter_item input').forEach((input) => {
            input.addEventListener('change', (e) => {
                if (e.target.name === 'ico_all') {
                    if (e.target.checked) {
                        document.querySelectorAll('.filter_item input:not([name=ico_all])').forEach((input2) => (input2.checked = false));
                        this.filterData.clear();
                    } else {
                        document.querySelectorAll('.filter_item input:not([name=ico_all])').forEach((input2) => {
                            this.filterData.add(input2.value);
                            input2.checked = true;
                        });
                    }
                } else {
                    if (e.target.checked === true) {
                        this.filterData.add(e.target.value);
                        document.querySelectorAll('[name=ico_all]').forEach((all) => (all.checked = false));
                    } else {
                        this.filterData.delete(e.target.value);
                        if (this.filterData.size === 0) document.querySelectorAll('[name=ico_all]').forEach((all) => (all.checked = true));
                    }
                }

                this.layer.close();
                this.render();
                this.updateComponents().filterTags();
            });
        });

        const cateMenus = document.querySelectorAll('.product_section_category_group .scroll_container button');
        cateMenus.forEach((el) => {
            el.addEventListener('click', (e) => {
                cateMenus.forEach((el2) => el2.classList.remove('active'));
                e.target.closest('button').classList.add('active');

                document
                    .querySelector('.product_section_body.mo_only .product_section_category_item_list')
                    .setAttribute('name', e.target.closest('button').getAttribute('name'));

                this.renderPrd();
            });
        });
    }

    async init() {
        await this.getData();
        this.setComponents().cellItems(Object.values(this.originData).flat());
        this.setComponents().layerEl(Object.values(this.originData).flat());

        this.setType('vl');

        this.layer = this.setComponents().areaLayer();
        this.setComponents().areaCell();
        this.setComponents().mobileFilterTags();
        this.setComponents().pcSwiper();

        this.render();
    }

    async getData() {
        this.originData = coffeeData;
        if (!window.napi) this.setStarbucksData(Object.values(this.originData).flat());
        else {
            await Promise.all(
                this.originData.ol.map(async (cur) => {
                    const result = await window.napi.catalog().getProduct(cur.sku);
                    cur.headline = result.headline;
                    cur.icon = result.images.foreground;
                    cur.category = result.category;
                    cur.capsuleProductAromatics = result.capsuleProductAromatics;
                    cur.inStock = result.inStock;
                    cur.price = result.price;
                    cur.salesMultiple = result.salesMultiple;
                    return cur;
                }),
                this.originData.vl.map(async (cur) => {
                    const result = await window.napi.catalog().getProduct(cur.sku);
                    cur.headline = result.headline;
                    cur.icon = result.images.foreground;
                    cur.category = result.category;
                    cur.capsuleProductAromatics = result.capsuleProductAromatics;
                    cur.inStock = result.inStock;
                    cur.price = result.price;
                    cur.salesMultiple = result.salesMultiple;
                    return cur;
                })
            );

            this.setStarbucksData(Object.values(this.originData).flat());
        }
    }

    setStarbucksData(data) {
        data.forEach((coffee) => (coffee.name = coffee.name.replace('스타벅스®', '<span style="color:#0d6243;">스타벅스<sup>®</sup></span><br>')));
    }

    setComponents() {
        return {
            areaCell: () => {
                const setEl = () => {
                    this.cells.topLeft = document.querySelectorAll('.content .area .top_left button');
                    this.cells.topRight = document.querySelectorAll('.content .area .top_right button');
                    this.cells.bottomRight = document.querySelectorAll('.content .area .bottom_right button');
                    this.cells.bottomLeft = document.querySelectorAll('.content .area .bottom_left button');
                };

                const setAreaGridPosition = () => {
                    this.setGridPosition(this.cells.topLeft, -5, -1, -5, -1);
                    this.setGridPosition(this.cells.topRight, -5, -1, 1, 5);
                    this.setGridPosition(this.cells.bottomRight, 1, 5, 1, 5);
                    this.setGridPosition(this.cells.bottomLeft, 1, 5, -5, -1);
                };

                const cellEvent = ({ target }) => {
                    const cell = target.closest('button');
                    if (!cell) return;
                    if (cell.querySelector('.capsule').dataset.sku) {
                        const sku = cell.querySelector('.capsule').dataset.sku;
                        const result = this.data.find((el) => el.sku === sku);

                        this.layer.set(result, cell);
                    }
                };

                setEl();
                setAreaGridPosition();

                Object.values(this.cells)
                    .map((el) => Array.from(el))
                    .flat()
                    .forEach((cell) => cell.addEventListener('click', cellEvent));
            },
            areaLayer: () => {
                this.areaLayer = document.querySelector('.product_bubble');
                return {
                    set: (data, target) => {
                        this.areaLayer.classList.remove('hide');
                        this.areaLayer.innerHTML = '';
                        this.areaLayer.append(...data.layerEl);

                        const keyBody = document.querySelector('.key_body');
                        const bodyOffsetX = keyBody.getBoundingClientRect().left + window.pageXOffset;
                        const bodyOffsetY = keyBody.getBoundingClientRect().top + window.pageYOffset;

                        const { top, left, width } = target.getBoundingClientRect();
                        const layerRect = this.areaLayer.getBoundingClientRect();
                        this.areaLayer.style.top = `${top + window.pageYOffset - bodyOffsetY - layerRect.height}px`;
                        this.areaLayer.style.left = `${left + window.pageXOffset - bodyOffsetX + width / 2 - layerRect.width / 2}px`;
                    },
                    close: () => {
                        this.areaLayer.classList.add('hide');
                    },
                };
            },
            cellItems: (data) => {
                data.forEach((cellData) => {
                    const cell = document.createElement('div');
                    cell.classList.add('capsule');
                    cell.dataset.sku = cellData.sku;
                    const capsuleImage = document.createElement('img');
                    capsuleImage.setAttribute('src', `https://www.nespresso.com${cellData.icon || ''}`);

                    const capsuleInfo = document.createElement('div');
                    capsuleInfo.classList.add('info');

                    const capsuleNmae = document.createElement('p');
                    capsuleNmae.innerHTML = cellData.name;

                    capsuleInfo.append(capsuleNmae);

                    cell.append(capsuleImage);

                    cellData.el = [cell, capsuleInfo];
                });
            },
            productItem: (data) => {
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('thumbnail');
                const image = document.createElement('img');
                image.src = `https://www.nespresso.com${data.icon}`;
                thumbnail.append(image);

                const info = document.createElement('div');
                info.classList.add('info');
                const title = document.createElement('div');
                title.classList.add('item_title');
                const desc = document.createElement('div');
                desc.classList.add('item_desc');
                const buttonwrap = document.createElement('div');
                buttonwrap.classList.add('item_button_wrap');

                title.innerHTML = data.name;
                desc.innerHTML = `
                      <p>${data.capsuleProductAromatics.join(' ,')}</p>
                      <p>${data.headline}</p>
                    `;

                const price = document.createElement('div');

                price.classList.add('item_price');

                buttonwrap.append(price);

                const itemHandle = document.createElement('div');
                itemHandle.classList.add('item_handle');

                const itemCntHandle = document.createElement('div');
                itemCntHandle.classList.add('item_cnt_handle');

                const minusButton = document.createElement('button');
                minusButton.classList.add('minus_button');
                const count = document.createElement('p');
                count.dataset.value = 1;
                const plusButton = document.createElement('button');
                plusButton.classList.add('plus_button');

                plusButton.addEventListener('click', () => {
                    count.dataset.value = +count.dataset.value + 1;
                    renderCount();
                });

                minusButton.addEventListener('click', () => {
                    count.dataset.value = +count.dataset.value - 1;
                    if (+count.dataset.value <= 0) count.dataset.value = 1;
                    renderCount();
                });

                const renderCount = () => {
                    price.textContent = `₩ ${(data.price * data.salesMultiple * +count.dataset.value).toLocaleString()}`;
                    count.textContent = `${+count.dataset.value} (${+count.dataset.value * data.salesMultiple})`;
                };

                renderCount();

                itemCntHandle.append(minusButton, count, plusButton);

                const itemCartButton = document.createElement('div');
                itemCartButton.classList.add('item_cart_button');

                itemHandle.append(itemCntHandle, itemCartButton);

                buttonwrap.append(price, itemHandle);

                info.append(title, desc, buttonwrap);

                return [thumbnail, info];
            },
            layerEl: (data) => {
                data.forEach((cellData) => {
                    const thumbnail = document.createElement('div');
                    thumbnail.classList.add('thumbnail');
                    const img = document.createElement('img');
                    img.setAttribute('src', `https://www.nespresso.com${cellData.icon}`);

                    thumbnail.append(img);

                    const info = document.createElement('div');
                    info.classList.add('info');

                    const title = document.createElement('div');
                    title.classList.add('product_bubble_title');
                    title.innerHTML = cellData.name;

                    const desc = document.createElement('div');
                    desc.classList.add('product_bubble_desc');

                    const p1 = document.createElement('p');
                    const p2 = document.createElement('p');

                    p1.textContent = cellData.capsuleProductAromatics.join(' ,');
                    p2.innerHTML = cellData.headline + `<br>` + cellData.category;

                    desc.append(p1, p2);

                    const productLayerControl = document.createElement('div');
                    productLayerControl.classList.add('product_bubble_control');
                    const price = document.createElement('p');
                    price.classList.add('price');
                    price.dataset.value = 1;
                    price.textContent = `₩ ${(+price.dataset.value * cellData.price * cellData.salesMultiple).toLocaleString()}`;

                    const counter = document.createElement('div');
                    counter.classList.add('counter');

                    const buttonMinus = document.createElement('button');
                    const count = document.createElement('p');
                    const buttonPlus = document.createElement('button');

                    buttonMinus.addEventListener('click', () => {
                        price.dataset.value = +price.dataset.value - 1;
                        if (+price.dataset.value < 0) price.dataset.value = 1;
                        price.textContent = `₩ ${(+price.dataset.value * cellData.price * cellData.salesMultiple).toLocaleString()}`;
                        count.textContent = `${+price.dataset.value} (${+price.dataset.value * cellData.salesMultiple})`;
                    });
                    buttonPlus.addEventListener('click', () => {
                        price.dataset.value = +price.dataset.value + 1;
                        price.textContent = `₩ ${(+price.dataset.value * cellData.price * cellData.salesMultiple).toLocaleString()}`;
                        count.textContent = `${+price.dataset.value} (${+price.dataset.value * cellData.salesMultiple})`;
                    });

                    buttonMinus.classList.add('btn_minus');
                    count.textContent = `${+price.dataset.value} (${+price.dataset.value * cellData.salesMultiple})`;
                    buttonPlus.classList.add('btn_plus');

                    counter.append(buttonMinus, count, buttonPlus);

                    const addCart = document.createElement('button');
                    addCart.classList.add('add_cart');

                    productLayerControl.append(price, counter, addCart);

                    info.append(title, desc, productLayerControl);

                    const layerCloseButton = document.createElement('button');
                    layerCloseButton.classList.add('product_bubble_close');
                    layerCloseButton.addEventListener('click', () => {
                        this.layer.close();
                    });

                    cellData.layerEl = [thumbnail, info, layerCloseButton];
                });
            },
            mobileFilterTags: () => {
                this.filterTags = new Map();
                this.tagArea = document.querySelector('.tags');

                filterList.forEach((filter) => {
                    const tagsButton = document.createElement('button');
                    tagsButton.style.backgroundColor = filter.color;
                    const tagsSpan = document.createElement('span');
                    tagsSpan.textContent = `#${filter.name}`;

                    tagsButton.append(tagsSpan);
                    this.filterTags.set(filter.filterKey, tagsButton);
                });
            },
            pcSwiper: () => {
                const pcSwiperConfig = (area) => {
                    return {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        spaceBetween: 0,
                        navigation: {
                            prevEl: `.product_section_body.pc_only .product_section_category[name=${area}] .button-prev`,
                            nextEl: `.product_section_body.pc_only .product_section_category[name=${area}] .button-next`,
                        },
                        breakpoints: {
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 25,
                            },
                            1280: {
                                slidesPerView: 2,
                                spaceBetween: 25,
                            },
                            1540: {
                                slidesPerView: 3,
                                spaceBetween: 25,
                            },
                        },
                    };
                };

                const pcArticles = document.querySelectorAll('.product_section_body.pc_only .product_section_category');
                pcArticles.forEach((el) => {
                    const areaName = el.getAttribute('name');
                    el.querySelector('.swiper-wrapper').innerHTML = '';
                    let filterdData = [];
                    switch (areaName) {
                        case 'top_right':
                            filterdData = this.data.filter((cf) => cf.properties[0] > 0 && cf.properties[1] < 0);
                            break;
                        case 'bottom_left':
                            filterdData = this.data.filter((cf) => cf.properties[0] < 0 && cf.properties[1] > 0);
                            break;
                        case 'bottom_right':
                            filterdData = this.data.filter((cf) => cf.properties[0] > 0 && cf.properties[1] > 0);
                            break;
                        case 'top_left':
                            filterdData = this.data.filter((cf) => cf.properties[0] < 0 && cf.properties[1] < 0);
                            break;
                        case 'decaf':
                            filterdData = this.data.filter((cf) => filterList.find((filter) => filter.filterKey === 'decaf').items.includes(cf.sku));
                            break;
                    }
                    filterdData.forEach((data) => {
                        const swiperItem = document.createElement('li');
                        swiperItem.classList.add('swiper-slide');
                        swiperItem.append(...this.setComponents().productItem(data));
                        el.querySelector('.swiper-wrapper').append(swiperItem);
                    });

                    new Swiper(`.product_section_body.pc_only .product_section_category[name=${areaName}] .swiper`, pcSwiperConfig(areaName));
                });
            },
        };
    }

    updateComponents() {
        return {
            filterTags: () => {
                if (this.filterData.size === 0) {
                    this.tagArea.setAttribute('style', 'display: none !important;');
                } else {
                    this.tagArea.removeAttribute('style');
                    this.tagArea.innerHTML = '';
                    Array.from(this.filterData).forEach((key) => {
                        this.tagArea.append(this.filterTags.get(key));
                    });
                }
            },
        };
    }

    setType(type) {
        this.type = type;
        this.data = this.originData[this.type];

        this.layer?.close();
        this.resetContent();
        this.render();
        this.renderPrd();
    }

    changeTitle(area) {
        const title = document.querySelector('.key_section_header h2');

        switch (area) {
            case 'top_right':
                title.innerHTML = `당신은 <span style="color:#cf9349;">부드럽고</span> <span style="color:#fb7d4f;">산뜻한</span> 커피를<br> 좋아하는 <strong>"아침햇살 수집가"</strong>  입니다.`;
                break;
            case 'bottom_right':
                title.innerHTML = `당신은 <span style="color: #6f4534;">강렬하고</span> <span style="color:#fb7d4f;">산뜻한</span> 커피를<br> 좋아하는 <strong>"호기심 많은 탐험가"</strong> 입니다.`;
                break;
            case 'top_left':
                title.innerHTML = `당신은 <span style="color:#cf9349;">부드럽고</span> <span style="color: #e9b444;">고소한</span> 커피를<br> 좋아하는 <strong>"포근한 기억 수집가"</strong> 입니다.`;
                break;
            case 'bottom_left':
                title.innerHTML = ` 당신은 <span style="color: #6f4534;">강렬하고</span> <span style="color: #e9b444;">고소한</span> 커피를<br> 좋아하는 <strong>"깊은 밤의 철학자"</strong> 입니다.`;
                break;
            default:
                title.innerHTML = '커피 취향 탐색하기';
                break;
        }
    }

    selectContent(e) {
        this.selectedContentArea = e.target.classList[0];

        this.changeTitle(e.target.classList[0]);

        document.querySelector('.content').classList.add(this.selectedContentArea);
    }

    moveArea(e) {
        this.layer.close();
        const direction = e.target.closest('button').classList[1];
        switch (direction) {
            case 'top':
                document.querySelector('.content').classList.replace('bottom_right', 'top_right');
                document.querySelector('.content').classList.replace('bottom_left', 'top_left');
                break;
            case 'right':
                document.querySelector('.content').classList.replace('top_left', 'top_right');
                document.querySelector('.content').classList.replace('bottom_left', 'bottom_right');
                break;
            case 'bottom':
                document.querySelector('.content').classList.replace('top_right', 'bottom_right');
                document.querySelector('.content').classList.replace('top_left', 'bottom_left');
                break;
            case 'left':
                document.querySelector('.content').classList.replace('top_right', 'top_left');
                document.querySelector('.content').classList.replace('bottom_right', 'bottom_left');
                break;
            case 'right-top':
                document.querySelector('.content').setAttribute('class', 'content top_right');
                break;
            case 'right-bottom':
                document.querySelector('.content').setAttribute('class', 'content bottom_right');
                break;
            case 'left-bottom':
                document.querySelector('.content').setAttribute('class', 'content bottom_left');
                break;
            case 'left-top':
                document.querySelector('.content').setAttribute('class', 'content top_left');
                break;
            default:
                null;
        }

        this.changeTitle(document.querySelector('.content').classList[1]);
    }

    openFilter() {
        document.querySelector('.key_body .filter').classList.toggle('fold');
    }

    resetContent() {
        document.querySelector('.content').classList.remove('top_left');
        document.querySelector('.content').classList.remove('top_right');
        document.querySelector('.content').classList.remove('bottom_right');
        document.querySelector('.content').classList.remove('bottom_left');

        this.changeTitle();
    }

    setGridPosition(target, x1, y1, x2, y2) {
        let num = 0;
        for (let i = x1; i <= y1; i++) {
            for (let j = x2; j <= y2; j++) {
                target[num].dataset.pos_x = j;
                target[num].dataset.pos_y = i;
                num++;
            }
        }
    }

    getCell(x, y) {
        return document.querySelector(`.content .area button[data-pos_x='${x}'][data-pos_y='${y}']`);
    }

    resetGrid() {
        return document.querySelectorAll(`.content .area button`).forEach((el) => (el.innerHTML = ''));
    }

    createMoItem(data3) {
        const result3 = data3.map((data) => {
            const result = document.createElement('li');
            result.classList.add('swiper-slide');
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');
            const image = document.createElement('img');
            image.src = `https://www.nespresso.com${data.icon}`;
            thumbnail.append(image);

            const info = document.createElement('div');
            info.classList.add('info');
            const title = document.createElement('div');
            title.classList.add('item_title');
            const desc = document.createElement('div');
            desc.classList.add('item_desc');
            const buttonwrap = document.createElement('div');
            buttonwrap.classList.add('item_button_wrap');

            title.innerHTML = data.name;
            desc.innerHTML = `
        <p>${data.capsuleProductAromatics.join(' ,')}</p>
        <p>${data.headline}</p>
        `;

            const price = document.createElement('div');

            price.classList.add('item_price');

            buttonwrap.append(price);

            const itemHandle = document.createElement('div');
            itemHandle.classList.add('item_handle');

            const itemCntHandle = document.createElement('div');
            itemCntHandle.classList.add('item_cnt_handle');

            const minusButton = document.createElement('button');
            minusButton.classList.add('minus_button');
            const count = document.createElement('p');
            const plusButton = document.createElement('button');
            plusButton.classList.add('plus_button');

            plusButton.addEventListener('click', () => {
                count.setAttribute('value', +count.getAttribute('value') + 1);
                renderCount();
            });

            count.setAttribute('value', 1);

            const renderCount = () => {
                price.textContent = `₩ ${(data.price * data.salesMultiple * +count.getAttribute('value')).toLocaleString()}`;
                count.textContent = `${+count.getAttribute('value')} (${+count.getAttribute('value') * data.salesMultiple})`;
            };

            renderCount();

            itemCntHandle.append(minusButton, count, plusButton);

            const itemCartButton = document.createElement('div');
            itemCartButton.classList.add('item_cart_button');

            itemHandle.append(itemCntHandle, itemCartButton);

            buttonwrap.append(price, itemHandle);

            info.append(title, desc, buttonwrap);
            result.append(thumbnail, info);

            return result;
        });

        const slide = document.createElement('div');
        slide.classList.add('swiper-slide');
        const ul = document.createElement('ul');

        ul.append(...result3);

        slide.append(ul);

        return slide;
    }

    render() {
        this.resetGrid();
        this.data
            .filter((coffee) => {
                if (this.filterData.size === 0) return true;
                else {
                    const filteredData = filterList.filter((filter2) => Array.from(this.filterData).includes(filter2.filterKey));
                    return filteredData.some((el) => el.items.includes(coffee.sku));
                }
            })
            .filter((coffee) => {
                if (this.filterData.size === 0) {
                    return !filterList.find((el) => el.filterKey === 'decaf').items.includes(coffee.sku);
                } else {
                    return true;
                }
            })
            .forEach((coffee) => {
                if (coffee.properties.length !== 2) return;
                const [x, y] = coffee.properties;
                const target = this.getCell(x, y);
                if (!target) return;
                target.innerHTML = ``;
                target.append(...coffee.el);
            });
    }

    renderPrd() {
        const moArticles = document.querySelectorAll('.product_section_body.mo_only .product_section_category_item_list');

        moArticles.forEach((el) => {
            el.querySelector('.swiper-wrapper').innerHTML = '';
            let chunked = [];
            let data = this.data;

            switch (el.getAttribute('name')) {
                case 'all':
                    chunked = [];
                    data = this.data;

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
                case 'top_right':
                    chunked = [];
                    data = this.data.filter((cf) => {
                        return cf.properties[0] > 0 && cf.properties[1] < 0;
                    });

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
                case 'bottom_left':
                    chunked = [];
                    data = this.data.filter((cf) => {
                        return cf.properties[0] < 0 && cf.properties[1] > 0;
                    });

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
                case 'bottom_right':
                    chunked = [];
                    data = this.data.filter((cf) => {
                        return cf.properties[0] > 0 && cf.properties[1] > 0;
                    });

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
                case 'top_left':
                    chunked = [];
                    data = this.data.filter((cf) => {
                        return cf.properties[0] < 0 && cf.properties[1] < 0;
                    });

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
                case 'decaf':
                    chunked = [];
                    data = this.data.filter((cf) => {
                        return filterList.find((filter) => filter.filterKey === 'decaf').items.includes(cf.sku);
                    });

                    for (let i = 0; i < data.length; i += 3) {
                        chunked.push(data.slice(i, i + 3));
                    }

                    chunked.forEach((cf) => {
                        el.querySelector('.swiper-wrapper').append(this.createMoItem(cf));
                    });

                    break;
            }

            if (!this.mobileSwiper) {
                this.mobileSwiper = new Swiper('.product_section_body.mo_only  .swiper', {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });
            } else {
                this.mobileSwiper.slideTo(0);
                this.mobileSwiper.update();
            }
        });
    }
}
