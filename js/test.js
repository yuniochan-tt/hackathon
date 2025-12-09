// Dữ liệu dịch thuật (Sử dụng data-key đã thêm vào HTML)
const translations = {
    // --- TIẾNG NHẬT (Mặc định) ---
    ja: {
        // Nav & Button
        brand_name: "岡山エコツーリズム",
        nav_alley: "路地だけでも綺麗だ",
        nav_spots: "おすすめ観光スポット",
        nav_map: "倉敷美観地区マップ",
        lang_button: "日本語 (JA)",
        
        // Hero
        hero_title: "倉敷美観地区",

        // About
        about_title: "ゆっくりと日本文化をお楽しみください",
        about_p1: "倉敷美観地区は、白壁土蔵やなまこ壁、柳並木など、趣のある景観が楽しめるエリアです。築約400年の伝統的な建物が立ち並ぶ街並みと、倉敷川沿いのレトロモダンな景観は、世界中の人々を魅了し続けています。",
        about_quote: "「路地だけでも綺麗だ」",
        about_p2: "県内屈指の観光地として知られるこのエリアには、帆布、ジーンズ、日本酒などの専門店や、伝統的な木造町家を改装したカフェなどが立ち並びます。また、川下りや美術館など、様々な魅力が詰まっており、一日中散策しても飽きることはありません。",
        
        // Spots
        spots_title: "おすすめ観光スポット",
        table_open: "開ける",
        table_close: "閉店",
        table_fee: "手数料",

        // Shinkeien
        shinkeien_title: "新渓園（庭園・ホール）",
        shinkeien_p: "この建物は、1893年に倉敷紡績株式会社初代社長小原孝四郎の別荘として建てられました。現在は、広々とした和室の休憩室と本格的な茶室を備え、一般公開されています。",
        shinkeien_open_time: "9：00～17：00",
        shinkeien_close_time: "12月29日から1月3日",
        shinkeien_fee: "無料（建物の貸し出しは有料です。）",

        // Kurashiki-kan
        kurashikikan_title: "倉敷館（観光案内所）",
        kurashikikan_p: "1917年に倉敷町役場として建てられた木造洋風建築です。観光案内所としてだけでなく、多目的トイレ、コインロッカー、自動販売機を備えた無料休憩所としても利用できます。SDGsの観点から、無料給水所も設置されています。",
        kurashikikan_open_time: "9：00〜18：00（※年末年始は営業時間が変更になる場合がございます）",
        kurashikikan_close_time: "12月31日から1月1日まで",
        kurashikikan_fee: "無料",

        // Boat
        boat_title: "倉敷川舟下り倉敷川舟流し",
        boat_p: "かつては多くの荷物を運ぶ船で賑わっていた倉敷川。船上からのんびりと、当時の情緒あふれる雰囲気を味わえます。<br>※チケットは倉敷館観光案内所で販売しています。",
        boat_open_time: "9：30〜17：00 ※30分間隔で運行",
        boat_close_time: "3月～12月：第2月曜日 / 1月～2月：土日祝日のみ運行（年末年始は運休）",
        boat_fee: "大人700円 / 子供（5歳から小学生まで）350円",

        // Koukokan
        koukokan_title: "倉敷考古館",
        koukokan_p: "江戸時代に建てられた米蔵を改修して開館した博物館。岡山県南部で発見された数千年前の石器や土器を展示するほか、調査研究も行っています。",
        koukokan_open_time: "10：00〜15：00",
        koukokan_close_time: "毎週月曜日～木曜日（祝日・振替休日の場合は営業）、年末年始、臨時休業あり",
        koukokan_fee: "※大人500円、学生（高校・大学生）400円、学生（小学生・中学生）300円",

        // Ivy Square
        ivi_title: "倉敷アイビースクエア",
        ivi_p: "倉敷紡績所の工場跡を改修して完成した複合施設です。印象的な赤レンガの壁に囲まれた敷地内には、陶芸工房やホテルなどがあり、紡績の歴史を紹介するクラボウ記念館も併設されています。<br>【倉紡記念館】",
        ivi_open_time: "10：00〜16：00（最終入場 15:45）",
        ivi_close_time: "年中無休",
        ivi_fee: "大人300円 / 学生（小学生～大学生）250円",

        // Ohara Museum
        oharabijyutukan_title: "大原美術館",
        oharabijyutukan_p: "日本初の西洋美術専門の私立美術館として1930年に設立されました。エル・グレコやクロード・モネをはじめとする西洋の名画、日本の近現代美術、東洋の古美術などを展示・所蔵しています。<br>上・下の写真：大原美術館コレクション",
        oharabijyutukan_open_time: "（12月～2月）9：00 〜 15：00 （3月～11月）9：00 〜 17：00 （※最終入場は閉園30分前）",
        oharabijyutukan_close_time: "月曜日（祝日・夏休み期間中は営業）、冬休み",
        oharabijyutukan_fee: "※本館・工芸館・アジア美術館：大人2,000円/ 学生（小・中学生）500円 ※新館は一時閉館しております。",

        // Ohashi Residence
        ohashi_title: "大橋家住宅",
        ohashi_p: "江戸時代に新田開発で財を成した大橋家が1796年に建てた町家。今もなお、町家の伝統的な趣を色濃く残しています。",
        ohashi_open_time: "9：00〜17：00",
        ohashi_close_time: "12月から2月までの金曜日（祝日は営業）、12月28日から1月3日",
        ohashi_fee: "大人550円 / 学生（小・中学生）・65歳以上350円",

        // Inoue Residence
        inoue_title: "井上家住宅",
        inoue_p: "倉敷美観地区に現存する最古の町家であり、築約300年の歴史を持つこの家は、国の重要文化財に指定されています。かつては町政を担った旧豪族の家でした。",
        inoue_open_time: "10：00〜17：00（最終入場16:30）",
        inoue_close_time: "月曜日（月曜日が祝日の場合は翌日）",
        inoue_fee: "大人500円 / 学生（小・中学生）300円",

        // Ohara Main Residence
        ohara_title: "語らい座 大原本邸（国指定重要文化財旧大原家住宅）",
        ohara_p: "倉敷の発展の礎を築いた大原家の当主が代々居住したこの家で、収蔵品や現代展示を通して大原家の歴史を紹介しています。",
        ohara_open_time: "9：00〜17：00",
        ohara_close_time: "月曜日（祝日を除く）※貸切になる場合がございます。",
        ohara_fee: "大人500円 / 学生（小中高生）400円",
        
        // Map Section
        map_title: "倉敷美観地区マップ",
        
        // Footer
        footer_copy: "© 2025 岡山エコツーリズム - Đã đăng ký bản quyền",
    },
    
    // --- TIẾNG VIỆT ---
    vi: {
        // Nav & Button
        brand_name: "Okayama Eco Tourism",
        nav_alley: "Đẹp ngay cả trong ngõ hẻm",
        nav_spots: "Điểm tham quan được đề xuất",
        nav_map: "Bản đồ Kurashiki Bikan",
        lang_button: "Tiếng Việt (VI)",

        // Hero
        hero_title: "Khu Phố Cảnh Quan Kurashiki Bikan",

        // About
        about_title: "Thong thả tận hưởng văn hóa Nhật Bản",
        about_p1: "Khu Phố Cảnh Quan Kurashiki Bikan là một khu vực mà bạn có thể chiêm ngưỡng cảnh quan độc đáo với những bức tường nhà kho tường trắng, tường Namako, và hàng cây Liễu. Dãy phố với những tòa nhà truyền thống có tuổi đời khoảng 400 năm cùng cảnh quan cổ điển-hiện đại dọc sông Kurashiki tiếp tục thu hút du khách từ khắp nơi trên thế giới.",
        about_quote: "“Đẹp ngay cả trong ngõ hẻm”",
        about_p2: "Là một trong những điểm du lịch hàng đầu của tỉnh, khu vực này có các cửa hàng chuyên bán vải bạt, jeans, rượu sake Nhật Bản, cùng các quán cà phê được cải tạo từ nhà phố gỗ truyền thống. Nơi đây cũng có nhiều điểm hấp dẫn khác như đi thuyền trên sông và bảo tàng nghệ thuật, khiến bạn không bao giờ cảm thấy nhàm chán dù đã đi dạo cả ngày.",
        
        // Spots
        spots_title: "Điểm tham quan được đề xuất",
        table_open: "Mở cửa",
        table_close: "Đóng cửa",
        table_fee: "Phí vào cửa",

        // Shinkeien
        shinkeien_title: "Shinkeien (Khu vườn/Hội trường)",
        shinkeien_p: "Tòa nhà này được xây dựng vào năm 1893 làm biệt thự của chủ tịch đầu tiên của Công ty Dệt Kurashiki, Ohara Koshirō. Hiện nay, nó mở cửa cho công chúng, có phòng nghỉ kiểu Nhật rộng rãi và phòng trà truyền thống.",
        shinkeien_open_time: "9:00 sáng – 5:00 chiều",
        shinkeien_close_time: "Từ ngày 29 tháng 12 đến ngày 3 tháng 1",
        shinkeien_fee: "Miễn phí (Thuê phòng có phí).",

        // Kurashiki-kan
        kurashikikan_title: "Kurashiki-kan (Văn phòng Thông tin Du lịch)",
        kurashikikan_p: "Đây là một tòa nhà kiến trúc phương Tây bằng gỗ được xây dựng năm 1917 làm văn phòng thị trấn Kurashiki. Ngoài việc là văn phòng thông tin du lịch, nó còn được sử dụng làm khu vực nghỉ ngơi miễn phí, có nhà vệ sinh đa năng, tủ khóa và máy bán hàng tự động. Theo quan điểm SDGs, trạm cấp nước miễn phí cũng được lắp đặt.",
        kurashikikan_open_time: "9:00 sáng – 6:00 chiều (Giờ hoạt động có thể thay đổi trong dịp Tết)",
        kurashikikan_close_time: "Từ ngày 31 tháng 12 đến ngày 1 tháng 1",
        kurashikikan_fee: "Miễn phí",

        // Boat
        boat_title: "Đi thuyền trên sông Kurashiki",
        boat_p: "Sông Kurashiki từng là nơi tấp nập thuyền bè chở hàng. Từ trên thuyền, bạn có thể thong thả tận hưởng bầu không khí cổ kính, gợi nhớ về thời kỳ đó.<br>※Vé được bán tại Văn phòng Thông tin Du lịch Kurashiki-kan.",
        boat_open_time: "9:30 sáng – 5:00 chiều ※Chạy cách nhau 30 phút",
        boat_close_time: "Tháng 3–12: Thứ Hai thứ 2 hàng tháng / Tháng 1–2: Chỉ chạy vào Thứ Bảy, Chủ Nhật và ngày lễ (Ngừng hoạt động dịp Tết)",
        boat_fee: "Người lớn 700 Yên / Trẻ em (5 tuổi đến học sinh tiểu học) 350 Yên",

        // Koukokan
        koukokan_title: "Bảo tàng Khảo cổ Kurashiki",
        koukokan_p: "Bảo tàng được mở cửa sau khi cải tạo một kho gạo được xây dựng vào thời Edo. Nơi đây trưng bày công cụ đá và đồ gốm từ hàng ngàn năm trước được tìm thấy ở phía nam tỉnh Okayama, đồng thời thực hiện nghiên cứu khảo sát.",
        koukokan_open_time: "10:00 sáng – 3:00 chiều",
        koukokan_close_time: "Thứ Hai đến Thứ Tư hàng tuần (Mở cửa vào ngày lễ hoặc ngày nghỉ bù), nghỉ Tết, và có thể đóng cửa tạm thời.",
        koukokan_fee: "※Người lớn 500 Yên, Học sinh (Cấp 3/Đại học) 400 Yên, Học sinh (Tiểu học/Trung học) 300 Yên",

        // Ivy Square
        ivi_title: "Kurashiki Ivy Square",
        ivi_p: "Đây là một khu phức hợp được hoàn thành bằng cách cải tạo nhà máy cũ của Công ty Dệt Kurashiki. Khuôn viên được bao quanh bởi những bức tường gạch đỏ ấn tượng, bao gồm xưởng gốm, khách sạn và Bảo tàng Kinen Kurabo giới thiệu lịch sử ngành dệt.<br>【Bảo tàng Kinen Kurabo】",
        ivi_open_time: "10:00 sáng – 4:00 chiều (Lượt vào cuối cùng 3:45 chiều)",
        ivi_close_time: "Mở cửa quanh năm",
        ivi_fee: "Người lớn 300 Yên / Học sinh (Tiểu học đến Đại học) 250 Yên",

        // Ohara Museum
        oharabijyutukan_title: "Bảo tàng Nghệ thuật Ohara",
        oharabijyutukan_p: "Được thành lập vào năm 1930 là bảo tàng nghệ thuật tư nhân chuyên về nghệ thuật phương Tây đầu tiên của Nhật Bản. Nơi đây trưng bày và lưu giữ các tác phẩm nổi tiếng của phương Tây, bao gồm El Greco và Claude Monet, cũng như nghệ thuật cận hiện đại Nhật Bản và cổ vật phương Đông.<br>Ảnh trên/dưới: Bộ sưu tập Bảo tàng Nghệ thuật Ohara",
        oharabijyutukan_open_time: "（Tháng 12 – 2）9:00 sáng – 3:00 chiều （Tháng 3 – 11）9:00 sáng – 5:00 chiều （※Lượt vào cuối cùng 30 phút trước khi đóng cửa）",
        oharabijyutukan_close_time: "Thứ Hai (Mở cửa vào ngày lễ và trong kỳ nghỉ hè), nghỉ đông",
        oharabijyutukan_fee: "※Bảo tàng Chính, Bảo tàng Thủ công, Bảo tàng Nghệ thuật Châu Á: Người lớn 2,000 Yên/ Học sinh (Tiểu học/Trung học) 500 Yên ※Bảo tàng Mới tạm thời đóng cửa.",

        // Ohashi Residence
        ohashi_title: "Nhà Ohashi",
        ohashi_p: "Đây là một Machiya (nhà phố truyền thống) được xây dựng vào năm 1796 bởi gia đình Ohashi, những người đã làm giàu nhờ phát triển ruộng lúa mới vào thời Edo. Ngôi nhà vẫn giữ được vẻ truyền thống của Machiya một cách đậm nét.",
        ohashi_open_time: "9:00 sáng – 5:00 chiều",
        ohashi_close_time: "Thứ Sáu từ tháng 12 đến tháng 2 (Mở cửa vào ngày lễ), từ ngày 28 tháng 12 đến ngày 3 tháng 1",
        ohashi_fee: "Người lớn 550 Yên / Học sinh (Tiểu học/Trung học) và người trên 65 tuổi 350 Yên",

        // Inoue Residence
        inoue_title: "Nhà Inoue",
        inoue_p: "Đây là Machiya cổ nhất hiện còn tồn tại trong Khu Phố Cảnh Quan Kurashiki Bikan, với lịch sử khoảng 300 năm và được công nhận là Tài sản Văn hóa Quan trọng Quốc gia. Trước đây, đây là nhà của một gia tộc quyền lực từng cai quản thị trấn.",
        inoue_open_time: "10:00 sáng – 5:00 chiều (Lượt vào cuối cùng 4:30 chiều)",
        inoue_close_time: "Thứ Hai (Nếu Thứ Hai là ngày lễ thì nghỉ vào ngày hôm sau)",
        inoue_fee: "Người lớn 500 Yên / Học sinh (Tiểu học/Trung học) 300 Yên",

        // Ohara Main Residence
        ohara_title: "Konraiza Ohara Hontaku (Cựu Nhà Ohara, Tài sản Văn hóa Quan trọng Quốc gia)",
        ohara_p: "Tại ngôi nhà này, nơi các đời chủ nhân của gia đình Ohara—người đã đặt nền móng cho sự phát triển của Kurashiki—sinh sống, lịch sử của gia đình Ohara được giới thiệu thông qua các bộ sưu tập và triển lãm đương đại.",
        ohara_open_time: "9:00 sáng – 5:00 chiều",
        ohara_close_time: "Thứ Hai (Trừ ngày lễ) ※Có thể bị thuê riêng.",
        ohara_fee: "Người lớn 500 Yên / Học sinh (Tiểu học, Trung học cơ sở, Trung học phổ thông) 400 Yên",
        
        // Map Section
        map_title: "Bản đồ Khu Phố Cảnh Quan Kurashiki Bikan",

        // Footer
        footer_copy: "© 2025 Okayama Eco Tourism - All Rights Reserved",
    },

    // --- TIẾNG NEPAL (NE) ---
    ne: {
        // Nav & Button
        brand_name: "ओकायामा इको टुरिज्म",
        nav_alley: "गल्ली मात्रै पनि सुन्दर छ",
        nav_spots: "सिफारिश गरिएका पर्यटकीय स्थलहरू",
        nav_map: "कुराशिकी बिकाँ नक्सा",
        lang_button: "नेपाली (NE)",
        
        // Hero
        hero_title: "कुराशिकी बिकाँ जिल्ला",

        // About
        about_title: "जापानी संस्कृतिलाई बिस्तारै आनन्द लिनुहोस्",
        about_p1: "कुराशिकी बिकाँ क्षेत्र सेतो भित्ताका गोदाम घरहरू, नामाको भित्ताहरू, र शंखेदार रूखका लहरहरू जस्ता आकर्षक दृश्यहरूको आनन्द लिन सकिने ठाउँ हो। लगभग ४०० वर्ष पुरानो परम्परागत भवनहरूको पङ्क्ति र कुराशिकी नदी किनारको रेट्रो-आधुनिक दृश्यले विश्वभरका मानिसहरूलाई मोहित गरिरहेको छ।",
        about_quote: "「गल्ली मात्रै पनि सुन्दर छ」",
        about_p2: "प्रान्तको शीर्ष पर्यटकीय गन्तव्यहरू मध्ये एकको रूपमा परिचित यस क्षेत्रमा क्यानभास, जीन्स, जापानी साके (रक्सी) आदिका विशेष पसलहरू र परम्परागत काठको टाउनहाउसहरूलाई क्याफेमा रूपान्तरण गरिएका ठाउँहरू छन्। साथै, नदी डुङ्गा यात्रा र कला संग्रहालयहरू जस्ता विभिन्न आकर्षणहरूले भरिएको यो क्षेत्रमा एक दिनभर घुम्दा पनि कहिल्यै बोर हुँदैन।",
        
        // Spots
        spots_title: "सिफारिश गरिएका पर्यटकीय स्थलहरू",
        table_open: "खुल्ने समय",
        table_close: "बन्द हुने समय",
        table_fee: "शुल्क",

        // Shinkeien
        shinkeien_title: "शिंकेइ-एन (बगैंचा र हल)",
        shinkeien_p: "यो भवन १८९३ मा कुराशिकी कतानी कं., लि. को पहिलो अध्यक्ष ओहारा कोशिरोको विलाको रूपमा निर्माण गरिएको थियो। हाल, यो सार्वजनिक रूपमा खुला छ र यसमा फराकिलो जापानी शैलीको विश्राम कोठा र एक वास्तविक चिया कोठा छ।",
        shinkeien_open_time: "बिहान ९:०० देखि साँझ ५:०० बजेसम्म",
        shinkeien_close_time: "डिसेम्बर २९ देखि जनवरी ३ सम्म",
        shinkeien_fee: "नि:शुल्क (भवन भाडामा लिन शुल्क लाग्छ।)",

        // Kurashiki-kan
        kurashikikan_title: "कुराशिकी-कान (पर्यटन सूचना केन्द्र)",
        kurashikikan_p: "यो १९१७ मा कुराशिकी टाउन हलको रूपमा निर्माण गरिएको काठको पश्चिमी शैलीको भवन हो। यो पर्यटन सूचना केन्द्रको रूपमा मात्र नभई बहुउद्देशीय शौचालय, सिक्का लकर र भेंडिङ मेसिन भएको नि:शुल्क विश्राम स्थलको रूपमा पनि प्रयोग गर्न सकिन्छ। SDGs (दिगो विकास लक्ष्य) को दृष्टिकोणबाट, नि:शुल्क पानी वितरण केन्द्र पनि स्थापना गरिएको छ।",
        kurashikikan_open_time: "बिहान ९:०० देखि साँझ ६:०० बजेसम्म (वर्षको अन्त्य र नयाँ वर्षको बिदामा समय परिवर्तन हुन सक्छ)",
        kurashikikan_close_time: "डिसेम्बर ३१ देखि जनवरी १ सम्म",
        kurashikikan_fee: "नि:शुल्क",

        // Boat
        boat_title: "कुराशिकी नदी डुङ्गा यात्रा",
        boat_p: "कुराशिकी नदी पहिले धेरै सामान बोक्ने डुङ्गाहरूले भरिएको थियो। डुङ्गाबाट, तपाईं त्यस समयको भावपूर्ण वातावरणलाई बिस्तारै महसुस गर्न सक्नुहुन्छ।<br>※टिकटहरू कुराशिकी-कान पर्यटन सूचना केन्द्रमा बिक्री गरिन्छ।",
        boat_open_time: "बिहान ९:३० देखि साँझ ५:०० बजेसम्म ※३० मिनेटको अन्तरालमा सञ्चालन",
        boat_close_time: "मार्च-डिसेम्बर: दोस्रो सोमबार / जनवरी-फेब्रुअरी: शनिबार, आइतबार, र बिदाहरूमा मात्र सञ्चालन (वर्षको अन्त्य र नयाँ वर्षमा बन्द)",
        boat_fee: "वयस्क ७०० येन / बालबालिका (५ वर्ष देखि प्राथमिक विद्यालयका विद्यार्थी) ३५० येन",

        // Koukokan
        koukokan_title: "कुराशिकी पुरातत्व संग्रहालय",
        koukokan_p: "एदो अवधिमा निर्माण गरिएको चामल भण्डार (kura) लाई मर्मत गरी खोलिएको संग्रहालय। यसले ओकायामा प्रान्तको दक्षिणी भागमा फेला परेका हजारौं वर्ष पुरानो ढुङ्गाका औजार र माटोका भाँडाहरू प्रदर्शन गर्दछ, साथै सर्वेक्षण र अनुसन्धान पनि गर्दछ।",
        koukokan_open_time: "बिहान १०:०० देखि दिउँसो ३:०० बजेसम्म",
        koukokan_close_time: "प्रत्येक सोमबार देखि बिहीबार (बिदा र वैकल्पिक बिदामा खुला), वर्षको अन्त्य र नयाँ वर्ष, र अस्थायी रूपमा बन्द हुन सक्छ",
        koukokan_fee: "※वयस्क ५०० येन, विद्यार्थी (उच्च विद्यालय/विश्वविद्यालय) ४०० येन, विद्यार्थी (प्राथमिक/माध्यमिक विद्यालय) ३०० येन",

        // Ivy Square
        ivi_title: "कुराशिकी आइभी स्क्वायर",
        ivi_p: "यो कुराशिकी कतानी कारखानामा मर्मत गरी पूरा गरिएको एक बहु-सुविधा परिसर हो। प्रभावशाली रातो इँटाको पर्खालहरूले घेरिएको परिसरमा माटाको भाँडा कार्यशाला र होटलहरू छन्, र यसमा कतानीको इतिहास प्रस्तुत गर्ने कुराबाउ किनेन-कान (मेमोरियल हल) पनि संलग्न छ।<br>【कुराबाउ किनेन-कान】",
        ivi_open_time: "बिहान १०:०० देखि साँझ ४:०० बजेसम्म (अन्तिम प्रवेश ३:४५ बजे)",
        ivi_close_time: "वर्षभरि खुला",
        ivi_fee: "वयस्क ३०० येन / विद्यार्थी (प्राथमिक विद्यालय देखि विश्वविद्यालय) २५० येन",

        // Ohara Museum
        oharabijyutukan_title: "ओहारा कला संग्रहालय",
        oharabijyutukan_p: "यो जापानको पहिलो निजी पश्चिमी कला संग्रहालयको रूपमा १९३० मा स्थापना भएको थियो। यसले एल ग्रेको र क्लाउड मोनेट जस्ता पश्चिमी उत्कृष्ट कृतिहरू, जापानी आधुनिक र समकालीन कला, र पूर्वीय प्राचीन कला प्रदर्शन र भण्डारण गर्दछ।<br>माथि र तलका तस्बिरहरू: ओहारा कला संग्रहालय संग्रह",
        oharabijyutukan_open_time: "（डिसेम्बर–फेब्रुअरी) बिहान ९:०० देखि दिउँसो ३:०० बजेसम्म (मार्च–नोभेम्बर) बिहान ९:०० देखि साँझ ५:०० बजेसम्म (अन्तिम प्रवेश बन्द हुनुभन्दा ३० मिनेट अघि)",
        oharabijyutukan_close_time: "सोमबार (बिदा र गर्मी बिदामा खुला), जाडो बिदा",
        oharabijyutukan_fee: "※मुख्य हल, शिल्प हल, एशिया कला संग्रहालय: वयस्क २,००० येन / विद्यार्थी (प्राथमिक/माध्यमिक विद्यालय) ५०० येन ※नयाँ हल अस्थायी रूपमा बन्द छ।",

        // Ohashi Residence
        ohashi_title: "ओहाशी परिवारको निवास",
        ohashi_p: "यो १८९६ मा ओहाशी परिवारले निर्माण गरेको टाउनहाउस हो, जसले एदो अवधिमा नयाँ धान खेत विकास गरेर धन कमाएका थिए। यसले अझै पनि टाउनहाउसको परम्परागत आकर्षणलाई बलियो रूपमा कायम राखेको छ।",
        ohashi_open_time: "बिहान ९:०० देखि साँझ ५:०० बजेसम्म",
        ohashi_close_time: "डिसेम्बर देखि फेब्रुअरी सम्मको शुक्रबार (बिदामा खुला), डिसेम्बर २८ देखि जनवरी ३ सम्म",
        ohashi_fee: "वयस्क ५५० येन / विद्यार्थी (प्राथमिक/माध्यमिक विद्यालय) र ६५ वर्ष वा सोभन्दा माथिका ३५० येन",

        // Inoue Residence
        inoue_title: "इनुए परिवारको निवास",
        inoue_p: "कुराशिकी बिकाँ क्षेत्रमा अझै पनि रहेको सबैभन्दा पुरानो टाउनहाउस, यो घर लगभग ३०० वर्ष पुरानो छ र यसलाई राष्ट्रिय महत्वपूर्ण सांस्कृतिक सम्पत्ति तोकिएको छ। यो पहिले नगरपालिकाको प्रशासन चलाउने एक पुरानो शक्तिशाली परिवारको घर थियो।",
        inoue_open_time: "बिहान १०:०० देखि साँझ ५:०० बजेसम्म (अन्तिम प्रवेश ४:३० बजे)",
        inoue_close_time: "सोमबार (यदि सोमबार बिदा परेमा अर्को दिन)",
        inoue_fee: "वयस्क ५०० येन / विद्यार्थी (प्राथमिक/माध्यमिक विद्यालय) ३०० येन",

        // Ohara Main Residence
        ohara_title: "काताराइजा ओहारा होन्टाकु (राष्ट्रिय महत्वपूर्ण सांस्कृतिक सम्पत्ति पूर्व ओहारा परिवारको निवास)",
        ohara_p: "यो घर ओहारा परिवारको प्रमुखहरूले पुस्ता-दर-पुस्ता बसोबास गरेको ठाउँ हो, जसले कुराशिकीको विकासको आधारशिला राखेका थिए। यहाँ भण्डार गरिएका वस्तुहरू र आधुनिक प्रदर्शनीहरू मार्फत ओहारा परिवारको इतिहास प्रस्तुत गरिन्छ।",
        ohara_open_time: "बिहान ९:०० देखि साँझ ५:०० बजेसम्म",
        ohara_close_time: "सोमबार (बिदा बाहेक) ※रिजर्भ हुन सक्छ।",
        ohara_fee: "वयस्क ५०० येन / विद्यार्थी (प्राथमिक, माध्यमिक र उच्च विद्यालय) ४०० येन",
        
        // Map Section
        map_title: "कुराशिकी बिकाँ जिल्लाको नक्सा",
        
        // Footer
        footer_copy: "© २०२५ ओकायामा इको टुरिज्म - सबै अधिकार सुरक्षित",
    },

    // --- TIẾNG HÀN (KO) ---
    ko: {
        // Nav & Button
        brand_name: "오카야마 에코 투어리즘",
        nav_alley: "골목만으로도 아름답다",
        nav_spots: "추천 관광 명소",
        nav_map: "쿠라시키 미관지구 지도",
        lang_button: "한국어 (KO)",
        
        // Hero
        hero_title: "쿠라시키 미관지구",

        // About
        about_title: "여유롭게 일본 문화를 즐겨보세요",
        about_p1: "쿠라시키 미관지구는 흰 벽의 토장과 나마코 벽, 버드나무 가로수 등 정취 있는 경관을 즐길 수 있는 지역입니다. 약 400년 된 전통 건축물이 늘어선 거리와 쿠라시키 강변의 복고풍 현대적 경관은 전 세계 사람들을 계속해서 매료시키고 있습니다.",
        about_quote: "「골목만으로도 아름답다」",
        about_p2: "현 내 최고 관광지 중 하나로 알려진 이 지역에는 캔버스, 청바지, 일본주 등의 전문점과 전통 목조 마치야(상점가)를 개조한 카페 등이 늘어서 있습니다. 또한, 뱃놀이와 미술관 등 다양한 매력이 가득하여 하루 종일 산책해도 지루할 틈이 없습니다.",
        
        // Spots
        spots_title: "추천 관광 명소",
        table_open: "개장",
        table_close: "휴관",
        table_fee: "수수료",

        // Shinkeien
        shinkeien_title: "신케이엔 (정원・홀)",
        shinkeien_p: "이 건물은 1893년 쿠라시키 방적 주식회사 초대 사장 오하라 코시로의 별장으로 건축되었습니다. 현재는 넓은 일본식 휴게실과 본격적인 다실을 갖추고 일반에 공개되고 있습니다.",
        shinkeien_open_time: "오전 9시 ~ 오후 5시",
        shinkeien_close_time: "12월 29일부터 1월 3일까지",
        shinkeien_fee: "무료 (건물 대여는 유료입니다.)",

        // Kurashiki-kan
        kurashikikan_title: "쿠라시키칸 (관광 안내소)",
        kurashikikan_p: "1917년에 쿠라시키 정사무소로 지어진 목조 서양식 건물입니다. 관광 안내소뿐만 아니라 다목적 화장실, 코인 락커, 자판기를 갖춘 무료 휴게소로도 이용할 수 있습니다. SDGs 관점에서 무료 급수대도 설치되어 있습니다.",
        kurashikikan_open_time: "오전 9시 ~ 오후 6시 (연말연시에는 영업시간이 변경될 수 있습니다)",
        kurashikikan_close_time: "12월 31일부터 1월 1일까지",
        kurashikikan_fee: "무료",

        // Boat
        boat_title: "쿠라시키 강 뱃놀이",
        boat_p: "예전에는 많은 짐을 나르는 배들로 붐볐던 쿠라시키 강. 배 위에서 여유롭게 당시의 정취 넘치는 분위기를 만끽할 수 있습니다.<br>※티켓은 쿠라시키칸 관광 안내소에서 판매합니다.",
        boat_open_time: "오전 9시 30분 ~ 오후 5시 ※30분 간격으로 운항",
        boat_close_time: "3월~12월: 둘째 주 월요일 / 1월~2월: 토, 일, 공휴일에만 운항 (연말연시 휴무)",
        boat_fee: "성인 700엔 / 어린이 (5세부터 초등학생까지) 350엔",

        // Koukokan
        koukokan_title: "쿠라시키 고고관",
        koukokan_p: "에도 시대에 지어진 쌀 창고를 개조하여 개관한 박물관. 오카야마현 남부에서 발견된 수천 년 전의 석기와 토기를 전시하며, 조사 연구도 진행하고 있습니다.",
        koukokan_open_time: "오전 10시 ~ 오후 3시",
        koukokan_close_time: "매주 월요일~목요일 (공휴일, 대체 휴일인 경우 영업), 연말연시, 임시 휴관 있음",
        koukokan_fee: "※성인 500엔, 학생 (고등학생, 대학생) 400엔, 학생 (초등학생, 중학생) 300엔",

        // Ivy Square
        ivi_title: "쿠라시키 아이비 스퀘어",
        ivi_p: "쿠라시키 방적소의 공장 터를 개조하여 완성한 복합 시설입니다. 인상적인 붉은 벽돌 벽으로 둘러싸인 부지 내에는 도예 공방이나 호텔 등이 있으며, 방적의 역사를 소개하는 쿠라보 기념관도 병설되어 있습니다.<br>【쿠라보 기념관】",
        ivi_open_time: "오전 10시 ~ 오후 4시 (마지막 입장 오후 3시 45분)",
        ivi_close_time: "연중 무휴",
        ivi_fee: "성인 300엔 / 학생 (초등학생~대학생) 250엔",

        // Ohara Museum
        oharabijyutukan_title: "오하라 미술관",
        oharabijyutukan_p: "일본 최초의 서양 미술 전문 사립 미술관으로 1930년에 설립되었습니다. 엘 그레코와 클로드 모네를 비롯한 서양 명화, 일본 근현대 미술, 동양 고미술 등을 전시하고 소장하고 있습니다.<br>상・하 사진: 오하라 미술관 소장품",
        oharabijyutukan_open_time: "（12월~2월）오전 9시 ~ 오후 3시 （3월~11월）오전 9시 ~ 오후 5시 (마지막 입장은 폐원 30분 전)",
        oharabijyutukan_close_time: "월요일 (공휴일, 여름 방학 기간 중 영업), 겨울 방학",
        oharabijyutukan_fee: "※본관・공예관・아시아 미술관: 성인 2,000엔 / 학생 (초등학생, 중학생) 500엔 ※신관은 일시 휴관 중입니다.",

        // Ohashi Residence
        ohashi_title: "오하시 가 주택",
        ohashi_p: "에도 시대에 신전 개발로 재산을 모은 오하시 가가 1796년에 지은 마치야(상점가). 지금도 마치야의 전통적인 정취를 짙게 간직하고 있습니다.",
        ohashi_open_time: "오전 9시 ~ 오후 5시",
        ohashi_close_time: "12월부터 2월까지의 금요일 (공휴일은 영업), 12월 28일부터 1월 3일까지",
        ohashi_fee: "성인 550엔 / 학생 (초등학생, 중학생)・65세 이상 350엔",

        // Inoue Residence
        inoue_title: "이노우에 가 주택",
        inoue_p: "쿠라시키 미관지구에 현존하는 가장 오래된 마치야이며, 약 300년의 역사를 가진 이 집은 국가 중요 문화재로 지정되어 있습니다. 예전에는 마을 정치를 담당했던 구 유력 가문의 집이었습니다.",
        inoue_open_time: "오전 10시 ~ 오후 5시 (마지막 입장 오후 4시 30분)",
        inoue_close_time: "월요일 (월요일이 공휴일인 경우 다음 날)",
        inoue_fee: "성인 500엔 / 학생 (초등학생, 중학생) 300엔",

        // Ohara Main Residence
        ohara_title: "가타라이자 오하라 본가 (국가지정 중요문화재 구 오하라 가 주택)",
        ohara_p: "쿠라시키 발전의 초석을 다진 오하라 가의 당주가 대대로 거주했던 이 집에서, 소장품과 현대 전시를 통해 오하라 가의 역사를 소개하고 있습니다。",
        ohara_open_time: "오전 9시 ~ 오후 5시",
        ohara_close_time: "월요일 (공휴일 제외) ※대관될 수 있습니다。",
        ohara_fee: "성인 500엔 / 학생 (초, 중, 고등학생) 400엔",
        
        // Map Section
        map_title: "쿠라시키 미관지구 지도",

        // Footer
        footer_copy: "© 2025 오카야마 에코 투어리즘 - All Rights Reserved",
    }
};

// Hàm thay đổi ngôn ngữ trên trang (Điều chỉnh để khớp với Bootstrap)
function changeLanguage(langCode) {
    const currentLangData = translations[langCode];
    if (!currentLangData) return;

    // 1. Cập nhật mã ngôn ngữ cho thẻ <html>
    document.documentElement.lang = langCode;

    // 2. Cập nhật nội dung
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (currentLangData[key]) {
            // Cập nhật nội dung, hỗ trợ thẻ <br> (sử dụng innerHTML)
            if (key === 'boat_p' || key === 'ivi_p' || key === 'oharabijyutukan_p') {
                element.innerHTML = currentLangData[key];
            } else {
                element.textContent = currentLangData[key];
            }
        }
    });

    // 3. Cập nhật nút chọn ngôn ngữ hiện tại (Cần lấy nút có ID langDropdown)
    const langButton = document.getElementById('langDropdown');
    if (langButton) {
        // Cập nhật text content, đã bao gồm icon trong data translation để đơn giản hóa
        langButton.textContent = currentLangData['lang_button'];
    }

    // 4. Cập nhật URL trong menu thả xuống để giữ lại ngôn ngữ
    document.querySelectorAll('#navbarNav .dropdown-menu a').forEach(link => {
        const linkLang = link.textContent.match(/\(([^)]+)\)/)[1].toLowerCase();
        // Thay đổi href của các link trong dropdown menu thành # để tránh tải lại trang
        // khi đang dùng chức năng JS.
        link.href = `#${linkLang}`;
    });

    console.log(`Đã chuyển sang ngôn ngữ: ${langCode}`);
}


// Khởi tạo và xử lý sự kiện
document.addEventListener('DOMContentLoaded', () => {

    // 1. Gán data-key cho các phần tử cần dịch trong HTML của bạn
    // **NAVBAR**
    document.querySelector('.navbar-brand').setAttribute('data-key', 'brand_name');
    document.querySelector('a[href="#about"]').setAttribute('data-key', 'nav_alley');
    document.querySelector('a[href="#spots"]').setAttribute('data-key', 'nav_spots');
    document.querySelector('a[href="#map"]').setAttribute('data-key', 'nav_map');
    document.getElementById('langDropdown').setAttribute('data-key', 'lang_button'); // Nút chọn ngôn ngữ

    // **HEADER**
    document.querySelector('.header h1').setAttribute('data-key', 'hero_title');

    // **ABOUT**
    document.querySelector('#about .section-title').setAttribute('data-key', 'about_title');
    // Cần thay đổi cấu trúc HTML như đã đề cập để áp data-key cho P1, QUOTE, P2
    // Vì không có cấu trúc chuẩn, ta sẽ dùng cách này để tạm thời:
    // **KHUYẾN CÁO: NÊN CHỈNH SỬA HTML CỦA BẠN NHƯ CÁCH 2 TRONG PHẢN HỒI TRƯỚC.**
    const aboutSection = document.querySelector('#about .card-text.text');
    if (aboutSection) {
        // Cố gắng đặt data-key cho quote (sử dụng class .eyes)
        const quoteElement = aboutSection.querySelector('.eyes');
        if(quoteElement) {
            quoteElement.setAttribute('data-key', 'about_quote');
        }
        // Nếu không sửa HTML, việc đặt P1 và P2 sẽ phức tạp vì chúng là text node.
        // Tốt nhất là chia nhỏ các đoạn văn P1, QUOTE, P2 trong HTML thành các thẻ <p> riêng biệt và gán data-key.
    }
    // **ĐOẠN NÀY LÀ KHUYẾN NGHỊ THÊM data-key VÀO CẤU TRÚC HTML TÔI ĐÃ ĐỀ XUẤT TRƯỚC**

    // **SPOTS**
    document.querySelector('#spots .section-title').setAttribute('data-key', 'spots_title');
    // Gán data-key cho tiêu đề bảng (table titles - Khai, Đóng, Phí)
    document.querySelectorAll('.card table tr').forEach(row => {
        const header = row.querySelector('td:first-child');
        if (header) {
            const content = header.textContent.trim();
            if (content.includes('開ける') || content.includes('Mở cửa')) {
                 header.setAttribute('data-key', 'table_open');
            } else if (content.includes('閉店') || content.includes('Đóng cửa')) {
                 header.setAttribute('data-key', 'table_close');
            } else if (content.includes('手数料') || content.includes('Phí')) {
                 header.setAttribute('data-key', 'table_fee');
            }
        }
    });

    // **MAP**
    document.querySelector('#map .map_title').setAttribute('data-key', 'map_title');

    // **FOOTER**
    const footerP = document.querySelector('.footer .container p');
    if (footerP) {
        footerP.setAttribute('data-key', 'footer_copy');
    }
    
    // 2. Thêm sự kiện click cho các liên kết ngôn ngữ
    // LƯU Ý: Sử dụng selector .dropdown-menu thay cho .dropdown-content
    document.querySelectorAll('#navbarNav .dropdown-menu a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Rất quan trọng để ngăn tải lại trang
            // Lấy mã ngôn ngữ từ href hoặc một thuộc tính data-lang (nếu bạn thêm)
            // Hiện tại, ta sẽ dựa vào href='kurashiki-vi.html' để trích xuất 'vi'
            const href = link.getAttribute('href');
            // Trích xuất mã ngôn ngữ (ví dụ: 'kurashiki-vi.html' -> 'vi')
            const langCodeMatch = href.match(/-(ja|en|vi|ko|ne)\.html$/);
            if (langCodeMatch && translations[langCodeMatch[1]]) {
                changeLanguage(langCodeMatch[1]);
            } else {
                // Nếu không khớp, sử dụng mã mặc định 'ja'
                changeLanguage('ja');
            }

            // **KHÔNG CẦN TẮT DROPDOWN THỦ CÔNG**, Bootstrap sẽ tự làm việc đó
        });
    });

    // 3. Tải ngôn ngữ mặc định (Tiếng Nhật)
    const initialLang = document.documentElement.lang || 'ja';
    changeLanguage(initialLang);
});

// Loại bỏ các hàm/biến không dùng:
// - `toggleDropdown()` không cần thiết vì dùng Bootstrap.
// - `window.onclick` không cần thiết vì Bootstrap xử lý.
