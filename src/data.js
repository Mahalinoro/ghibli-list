const movieList = [
    {
        title: 'My Neighbour Totoro',
        date: '1988',
        description: "This acclaimed animated tale by director Hayao Miyazaki follows schoolgirl Satsuke and her younger sister, Mei, as they settle into an old country house with their father and wait for their mother to recover from an illness in an area hospital. As the sisters explore their new home, they encounter and befriend playful spirits in their house and the nearby forest, most notably the massive cuddly creature known as Totoro.",
        urlImage: 'https://images-na.ssl-images-amazon.com/images/I/81UbyXk3DAL._SL1500_.jpg'
    },
    {
        title: 'Princess Mononoke',
        date: '1997',
        description: "In the 14th century, the harmony that humans, animals and gods have enjoyed begins to crumble. The protagonist, young Ashitaka - infected by an animal attack, seeks a cure from the deer-like god Shishigami. In his travels, he sees humans ravaging the earth, bringing down the wrath of wolf god Moro and his human companion Princess Mononoke. Hiskattempts to broker peace between her and the humans brings only conflict.",
        urlImage: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/4-princess-mononoke-katsuki-imawe.jpg'
    },
    {
        title: 'Grave of the Fireflies',
        date: '1988',
        description: "A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents. Their tale of survival is as heartbreaking as it is true to life. The siblings rely completely on each other and struggle against all odds to stay together and stay alive.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR85,0,630,1200_AL_.jpg'
    },
    {
        title: 'Spirited Away',
        date: '2001',
        description: "In this animated feature by noted Japanese director Hayao Miyazaki, 10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park. After her mother and father are turned into giant pigs, Chihiro meets the mysterious Haku (Miyu Irino), who explains that the park is a resort for supernatural beings who need a break from their time spent in the earthly realm, and that she must work there to free herself and her parents.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        title: 'Ponyo',
        date: '2008',
        description: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BOTc3YmM3N2QtODZkMC00ZDE5LThjMTQtYTljN2Y1YTYwYWJkXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
    },
    {
        title: "Howl's Moving Castle",
        date: '2004',
        description: "Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        title: 'The Wind Rises',
        date: '2013',
        description: "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi (Hideaki Anno), whose storied career includes the creation of the A6M World War II fighter plane.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg'
    },
    {
        title: 'The Tale of Princess Kaguya',
        date: '2013',
        description: "A tiny nymph found inside a bamboo stalk grows into a beautiful and desirable young woman, who orders her suitors to prove their love by completing a series of near-impossible tasks.",
        urlImage: 'https://upload.wikimedia.org/wikipedia/en/6/68/The_Tale_of_the_Princess_Kaguya_%28poster%29.jpg'
    },
    {
        title: 'When Marnie Was There',
        date: '2014',
        description: "A young girl is sent to the country for health reasons, where she meets an unlikely friend in the form of Marnie, a young girl with flowing blonde hair. As the friendship unravels Marnie has closer ties to the protagonist than we might expect.",
        urlImage: 'https://image.tmdb.org/t/p/w500/vug1dvDI1tSa60Z8qjCuUE7ntkO.jpg'
    },
    {
        title: 'Tales From Earthsea',
        date: '2006',
        description: "In the land of Earthsea, a mysterious force threatens to plunge humanity into destruction and chaos. A powerful wizard named Sparrowhawk seeks the source of his world's imbalance, and along the way rescues a runaway prince named Arren. When Sparrowhawk's powers begin to weaken, he and Arren must join forces with a former priestess and her daughter to defeat an evil foe whose quest for immortality will destroy Earthsea.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BZGFlN2FhYTktZGYzNi00MzllLWFlOTAtY2ExNjRjZjhkZWM2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR87,0,630,1200_AL_.jpg'
    },
    {
        title: 'Ocean Waves',
        date: '1993',
        description: "This subtle, poignant and wonderfully detailed story of adolescence and teenage isolation is rarely seen outside of Japan. Taku and his best friend Yutaka are headed back to school for what looks like another uneventful year. But they soon find their friendship tested by the arrival of Rikako, a beautiful transfer student from Tokyo whose attitude vacillates wildly from flirty and flippant to melancholic. When Taku joins Rikako on a trip to Tokyo, the school erupts with rumors, and the three friends are forced to come to terms with their changing relationships.",
        urlImage: 'https://i1.wp.com/watchcartoononline.bz/wp-content/uploads/2020/08/hVw2DULeNpnpvDvRwuX4HaXMDMv.jpg'
    },
    {
        title: 'My Neighbours The Yamadas',
        date: '1999',
        description: "The Yamadas are a normal Japanese family. Father Takashi and his wife Matsuke argue over a TV remote control, Grandma Shige always brightens the day with her proverbs and daughter Nanoko likes to get lost in a shopping centre.",
        urlImage: 'https://loftcinema.org/files/2013/04/my-neighbour-the-yamadas-poster-studio-ghibli-s-daily-family-crisis-my-neighbors-the-yamadas-1999-jpeg-145409.jpg'
    },
    {
        title: 'The Cat Returns',
        date: '2002',
        description: "High school student Haru (Chizuru Ikewaki) rescues a cat that was about to be run over by a truck and discovers the cat is actually a prince named Lune. Out of gratitude, Lune's father, the Cat King, asks her to marry Lune. Haru is brought to the Cat Kingdom, where she starts to develop feline features. When she is prevented from leaving, the Baron (Yoshihiko Hakamada) and Toto, two statues that have magically been given life, provide assistance in gaining her freedom.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BYThhZDdiMjItYzRkNy00OTE3LTk5ZDEtMzUwNzE1ZmJkMTYzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        title: 'From Up On Poppy Hill',
        date: '2011',
        description: "It's 1963 and Japan is in the midst of swift modernisation, leaving behind the Second World War's painful memories and focusing on a brighter future, symbolised by the coming year's Tokyo Olympics.",
        urlImage: 'https://occ-0-300-299.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABTXQySNEvNJQTYqUjEOFsjTPZdJgpjgSVp1SgKDdDN-9FqKUbfasD8B4JDA7Bwe2W7lZK93LhE3l6ljbRb4C_VFaEmvA.jpg'
    },
    {
        title: 'Nausicaä Of The Valley Of The Wind ',
        date: '1984',
        description: "Far in the future, after an apocalyptic conflict has devastated much of the world's ecosystem, the few surviving humans live in scattered semi-hospitable environments within what has become a 'toxic jungle.' Young Nausicaä lives in the arid Valley of the Wind and can communicate with the massive insects that populate the dangerous jungle. Under the guidance of the pensive veteran warrior, Lord Yupa, Nausicaä works to bring peace back to the ravaged planet.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BZWFkN2ZhODAtYTNkZS00Y2NjLWIzNDYtNzJjNDNlMzAyNTIyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_.jpg'
    },
    {
        title: 'Pom Poko',
        date: '1994',
        description: "Isao Takahata's film uses the tanuki, creatures of myth, as his heroes. Beloved folk-tale characters, they are viewed as bringers of fortune with shape-changing abilities. In this film, their forest home is threatened by urban development and, to save it, they must use all their supernatural talents.",
        urlImage: 'https://static.wikia.nocookie.net/dubbing9585/images/2/28/PomPoko.jpg'
    },
    {
        title: 'Laputa: Castle In The Sky',
        date: '1986',
        description: "Young orphan Sheeta and her kidnapper, Col. Muska, are flying to a military prison when their plane is attacked by a gang of air pirates led by the matronly Dola. Escaping from a mid-air collision via a magic crystal around her neck, Sheeta meets fellow orphan Pazu and the pair join forces to discover the mystical floating city of Laputa while pursued by both Muska and the pirates, who lust for the city's myriad treasures.",
        urlImage: 'https://marymemary13.files.wordpress.com/2014/12/laputa-castle-in-the-sky-poster.jpg'
    },
    {
        title: 'Only Yesterday',
        date: '1991',
        description: "Unmarried career woman Taeko Okajima (Miki Imai) takes her first extended trip outside her native Tokyo when she travels to rural Yamagata to visit her sister's family during the annual safflower harvest. On the train, Taeko daydreams about her pre-adolescent self. As her vacation progresses, she has extended flashbacks about the frustrations and small pleasures of her childhood, and wonders if her stress-filled adult life is what the young Taeko would have wanted for herself.",
        urlImage: 'https://image.tmdb.org/t/p/original/rkSE4sWmS9Lwyd16eqikRttkXfZ.jpg'
    },
    {
        title: 'Arrietty',
        date: '2010',
        description: "Arrietty, a tiny teenager, lives with her parents in the recesses of a suburban home, unbeknown to the homeowner and housekeeper. Like others of her kind, Arrietty remains hidden from her human hosts, but occasionally ventures forth from beneath the floorboards to borrow sugar cubes and other supplies. A secret friendship forms when 12-year-old Shawn meets Arrietty, but their relationship could spell danger for Arrietty's family.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        title: "Kiki's Delivery Service",
        date: '1989',
        description: "In this anime feature, 13-year-old Kiki moves to a seaside town with her talking cat, Jiji, to spend a year alone, in accordance with her village's tradition for witches in training. After learning to control her broomstick, Kiki sets up a flying courier service and soon becomes a fixture in the community. But when the insecure young witch begins questioning herself and loses her magic abilities, she must overcome her self-doubt to get her powers back.",
        urlImage: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSDSJj2zOLZWJJn33hCydMght9TVIEAj5EbU-TqB584bLriw4vD'
    },
    {
        title: 'Whisper Of The Heart',
        date: '1995',
        description: "Based on the manga with the same title, this animated film follows Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.",
        urlImage: 'https://m.media-amazon.com/images/M/MV5BZDg0MWNmNjktMGEwZC00ZDlmLWI1MTUtMDBmNjQzMWM2NjBjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        title: 'Porco Rosso',
        date: '1992',
        description: "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso (Shuichiro Moriyama), a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo (Akemi Okamura) and his longtime friend Madame Gina (Tokiko Kato).",
        urlImage: 'https://cps-static.rovicorp.com/2/Open/Brainstorm_Media_1300/Program/5219580/_derived_jpg_q90_500x500_m0/PorcoRosso_sc2.jpg'
    },
    {
        title: 'The Red Turtle',
        date: '2017',
        description: "A massive sea turtle destroys a stranded man's raft every time he tries to sail away from a tropical island.",
        urlImage: 'https://www.scriptslug.com/assets/uploads/posters/_540xAUTO_crop_center-center_75_none/the-red-turtle-2016.jpg'
    }

]

export default movieList;