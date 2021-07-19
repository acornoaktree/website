window.onload = function() {
    const booksHtml = document.getElementById("books")
    const bookRows = books.map(book => `<tr>
        <td><a href="${book.url}">${book.title}</a></td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.publishedAt}</td>
    </tr>`)

    console.log(bookRows)

    booksHtml.innerHTML = bookRows.join("")
}

const books = [{
    "title": "Head Kid",
    "url": "https://www.worldofbooks.com/en-ie/books/david-baddiel/head-kid/9780008200527?gclid=EAIaIQobChMI3oPg19TW8QIVwp7tCh21UQNOEAQYASABEgI4hPD_BwE#GOR009706970",
    "author": "David Baddiel",
    "pages": 384,
    "publishedAt": "2018-09-06"
}, {
    "title": "The Diary of Denace the Menace 1",
    "url": "https://www.worldofbooks.com/en-ie/books/steven-butler/diary-of-dennis-the-menace-book-1/9780141350820?gclid=EAIaIQobChMI9IXct9TW8QIVQWHmCh0ghAlnEAQYASABEgIH9vD_BwE#GOR005562884",
    "author": "Steven Butler",
    "pages": 160,
    "publishedAt": "2014-02-06"
}, {
    "title": "The Diary of Denace the Menace 2",
    "url": "https://www.worldofbooks.com/en-ie/books/steven-butler/diary-of-dennis-the-menace-beanotown-battle-book-2/9780141350844",
    "author": "Steven Butler",
    "pages": 144,
    "publishedAt": "2014-05-01"
}, {
    "title": "The Diary of Denace the Menace 3",
    "url": "https://biblio.co.uk/book/diary-dennis-menace-rollercoaster-riot-book/d/1385204645?aid=frg&currency_id=2&gclid=EAIaIQobChMIvI7ZkdbW8QIVwtPtCh3U9wDMEAQYAiABEgLOLfD_BwE",
    "author": "Steven Butler",
    "pages": 176,
    "publishedAt": "2014-08-07"
}, {
    "title": "The Diary of Denace the Menace 4",
    "url": "https://www.amazon.co.uk/Diary-Dennis-Menace-Street-Bandit/dp/0141355824",
    "author": "Steven Butler",
    "pages": 176,
    "publishedAt": "2015-02-05"
}, {
    "title": "Check Mates",
    "url": "https://www.amazon.co.uk/Check-Mates-Stewart-Foster/dp/1471172236",
    "author": "Stewart Foster",
    "pages": 352,
    "publishedAt": "2019-06-27"
}, {
    "title": "The Bubble Boy",
    "url": "https://www.amazon.com/Bubble-Boy-Stewart-Foster/dp/1471145409",
    "author": "Stewart Foster",
    "pages": 320,
    "publishedAt": "2016-05-19"
}, {
    "title": "Diary of a Wimpy Kid",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Book-1/dp/0141324902/ref=asc_df_0141324902/?tag=googshopuk-21&linkCode=df0&hvadid=311266996946&hvpos=&hvnetw=g&hvrand=6304525038119611757&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-364195443004&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 224,
    "publishedAt": "2008-07-03"
}, {
    "title": "Diary of a Wimpy Kid (Rodrick Rules)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Rodrick-Rules/dp/0141324910/ref=asc_df_0141324910/?tag=googshopuk-21&linkCode=df0&hvadid=310871971371&hvpos=&hvnetw=g&hvrand=5525966895506367746&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-364195443044&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 224,
    "publishedAt": "2009-02-05"
}, {
    "title": "Diary of a Wimpy Kid (The Last Straw)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Last-Straw/dp/0141324929/ref=asc_df_0141324929/?tag=googshopuk-21&linkCode=df0&hvadid=311219507756&hvpos=&hvnetw=g&hvrand=14732076840194084442&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-448425243115&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages":224 ,
    "publishedAt": "2009-08-06"
}, {
    "title": "Diary of a Wimpy Kid (Dog Days)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Days-Book/dp/0141331976/ref=asc_df_0141331976/?tag=googshopuk-21&linkCode=df0&hvadid=310971462434&hvpos=&hvnetw=g&hvrand=15405947311317673293&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-448425243315&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2011-02-03"
}, {
    "title": "Diary of a Wimpy Kid (The Ugly Truth)",
    "url": "https://www.amazon.co.uk/Ugly-Truth-Diary-Wimpy-book/dp/0141340827/ref=asc_df_0141340827/?tag=googshopuk-21&linkCode=df0&hvadid=310966765323&hvpos=&hvnetw=g&hvrand=3387164360914723651&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-448425243355&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2012-02-01"

}, {
    "title": "Diary of a Wimpy Kid (Cabin Fever)",
    "url": "https://www.amazon.co.uk/Cabin-Fever-Diary-Wimpy-book/dp/0141343001/ref=asc_df_0141343001/?tag=googshopuk-21&linkCode=df0&hvadid=310966765323&hvpos=&hvnetw=g&hvrand=5684781309694371882&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-434634082524&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2013-01-31"
}, {
    "title": "Diary of a Wimpy Kid (The Third Wheel)",
    "url": "https://www.amazon.co.uk/Third-Wheel-Diary-Wimpy-book/dp/0141345748/ref=asc_df_0141345748/?tag=googshopuk-21&linkCode=df0&hvadid=310971462434&hvpos=&hvnetw=g&hvrand=4623546755948302031&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-470165933971&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2014-01-30"
}, {
    "title": "Diary of a Wimpy Kid (Hard Luck)",
    "url": "https://www.amazon.co.uk/Hard-Luck-Diary-Wimpy-book/dp/0141355484/ref=asc_df_0141355484/?tag=googshopuk-21&linkCode=df0&hvadid=310971462434&hvpos=&hvnetw=g&hvrand=6917820158362162673&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-470794382113&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2015-01-29"
}, {
    "title": "Diary of a Wimpy Kid (The Long Haul)",
    "url": "https://www.amazon.co.uk/Long-Haul-Diary-Wimpy-book/dp/0141354224/ref=sr_1_1?dchild=1&keywords=Diary+of+a+Wimpy+Kid%3A+%28Book+9%29&qid=1625932139&s=books&sr=1-1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2016-01-28"
}, {
    "title": "Diary of a Wimpy Kid (Old School)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Old-School/dp/0141377097/ref=sr_1_1?crid=3I6VU8R96VK36&dchild=1&keywords=old+school&qid=1625931855&s=books&sprefix=old+sch%2Cstripbooks%2C144&sr=1-1",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt": "2017-01-26"
}, {
    "title": "Diary of a Wimpy Kid (The Getaway)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Getaway-book/dp/0141376678/ref=asc_df_0141376678/?tag=googshopuk-21&linkCode=df0&hvadid=311101757965&hvpos=&hvnetw=g&hvrand=16637314112246434997&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-326805169131&psc=1&th=1&psc=1",
    "author": "Jeff Kiney",
    "pages": 224,
    "publishedAt": "2017-11-07"
}, {
    "title": "Diary of a Wimpy Kid (The Meltdown)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Meltdown-book/dp/0241321980/ref=asc_df_0241321980/?tag=googshopuk-21&linkCode=df0&hvadid=310971462434&hvpos=&hvnetw=g&hvrand=18188482701829631633&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-564324669255&psc=1",
    "author": "Jeff Kiney",
    "pages": 224,
    "publishedAt": "2018-10-30"
}, {
    "title": "Diary of a Wimpy Kid (Wrecking Ball)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Wrecking-Ball/dp/0241396921/ref=sr_1_2?dchild=1&keywords=Diary+of+a+Wimpy+Kid%3A+%28Book+14%29&qid=1625932316&s=books&sr=1-2",
    "author": "Jeff Kiney",
    "pages": 240,
    "publishedAt":  "2019-11-01"
}, {
    "title": "Diary of a Wimpy Kid (The Deep End)",
    "url": "https://www.amazon.co.uk/Diary-Wimpy-Kid-Deep-Book/dp/0241396646/ref=sr_1_1?dchild=1&keywords=Diary+of+a+Wimpy+Kid%3A+%28Book+15%29&qid=1625932380&s=books&sr=1-1",
    "author": "Jeff Kiney",
    "pages": 224,
    "publishedAt":  "2020-10-27"
}, {
    "title": "Harry Potter (Philosophers Stone)",
    "url": "https://www.amazon.co.uk/Harry-Potter-Philosophers-Stone/dp/1408855658/ref=asc_df_1408855658/?tag=googshopuk-21&linkCode=df0&hvadid=310783995501&hvpos=&hvnetw=g&hvrand=17457477808224350861&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-319431784050&psc=1&th=1&psc=1",
    "author": "J.K. Rowling",
    "pages": 352,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Harry Potter (Chamber of Secrets)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Chamber-of-Secrets-J.K.-Rowling/9781408855669?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Chamber-of-Secrets&selectCurrency=EUR&w=AFFPAU96GFVYQZA8VRYK&gclid=EAIaIQobChMI-JLduN_u8QIVR7DtCh2y9QxCEAQYAyABEgJAs_D_BwE",
    "author": "J.K. Rowling",
    "pages": 384,
    "publishedAt":  "2014-09-11"
}, {
    "title": "Harry Potter (Prisoner of Azkaban)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Prisoner-of-Azkaban-J.K.-Rowling/9781408855676?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Prisoner-of-Azkaban&selectCurrency=EUR&w=AFFPAU96GFVYUFA8VRYJ&gclid=EAIaIQobChMIlIS65eDu8QIV42DmCh1YpwmGEAQYASABEgIWZPD_BwE",
    "author": "J.K. Rowling",
    "pages": 480,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Harry Potter (Goblet of Fire)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Goblet-of-Fire-J.K.-Rowling/9781408855683?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Goblet-of-Fire&selectCurrency=EUR&w=AFFPAU96GFVYUGA8VRYK&gclid=EAIaIQobChMI2qq-p-Hu8QIV1-3tCh0sEgb8EAQYASABEgK-LPD_BwE",
    "author": "J.K. Rowling",
    "pages": 640,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Harry Potter (Order of the Phoenix)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Order-of-the-Phoenix-J.K.-Rowling/9781408855690?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Order-of-the-Phoenix&selectCurrency=EUR&w=AFFPAU96GFVYUSA8VRYK&gclid=EAIaIQobChMIiveH0-Hu8QIVEu3tCh1n_gb8EAQYASABEgKqsvD_BwE",
    "author": "J.K. Rowling",
    "pages": 816,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Harry Potter (Half Blood Prince)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Half-Blood-Prince-J.K.-Rowling/9781408855706?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Half-Blood-Prince&selectCurrency=EUR&w=AFFPAU96GFVYP4A8VRYK&gclid=EAIaIQobChMI2sfl--Hu8QIV6ujtCh10MQEOEAQYASABEgIcy_D_BwE",
    "author": "J.K. Rowling",
    "pages": 560,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Harry Potter (Deathly Hollows)",
    "url": "https://www.bookdepository.com/Harry-Potter-and-the-Deathly-Hallows-J.K.-Rowling/9781408855713?redirected=true&utm_medium=Google&utm_campaign=Base1&utm_source=IE&utm_content=Harry-Potter-and-the-Deathly-Hallows&selectCurrency=EUR&w=AFFPAU96GFVYPDA8VRYJ&gclid=EAIaIQobChMIub-rm-Lu8QIVR7DtCh2y9QxCEAQYASABEgKKnPD_BwE",
    "author": "J.K. Rowling",
    "pages": 640,
    "publishedAt":  "2014-09-01"
}, {
    "title": "Skulduggery Pleasant",
    "url": "https://www.easons.com/skulduggery-pleasant-derek-landy-9780007241620?gclid=EAIaIQobChMIpvHDt6za8QIVW-rtCh2rsgjTEAQYAyABEgJ6QvD_BwE",
    "author": "Derek Landy",
    "pages": 379,
    "publishedAt":  "2017-01-03"
}, {
    "title": "Skulduggery Pleasant (Playing with Fire)",
    "url": "https://www.amazon.co.uk/Playing-Fire-Skulduggery-Pleasant-book/dp/0007257058/ref=asc_df_0007257058/?tag=googshopuk-21&linkCode=df0&hvadid=310783995501&hvpos=&hvnetw=g&hvrand=3730445643368346924&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-461161863965&psc=1&th=1&psc=1",
    "author": "Derek Landy",
    "pages": 352,
    "publishedAt":  "2008-09-01"
}, {
    "title": "Skulduggery Pleasant (The Faceless Ones)",
    "url": "https://www.easons.com/the-faceless-ones-derek-landy-9780007302161?gclid=EAIaIQobChMI0vu66q7a8QIVkb7tCh3Dtg2oEAQYAyABEgJqhPD_BwE",
    "author": "Derek Landy",
    "pages": 394,
    "publishedAt":  "2017-01-03"
}, {
    "title": "Skulduggery Pleasant (Dark Days)",
    "url": "https://www.amazon.co.uk/Dark-Days-Skulduggery-Pleasant-Book/dp/0007325975/ref=asc_df_0007325975/?tag=googshopuk-21&linkCode=df0&hvadid=311099566799&hvpos=&hvnetw=g&hvrand=1691060509107261689&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-486753181862&psc=1&th=1&psc=1",
    "author": "Derek Landy",
    "pages": 379,
    "publishedAt":  "2017-01-03"
}, {
    "title": "Skulduggery Pleasant (Mortal Coil)",
    "url": "https://www.easons.com/mortal-coil-derek-landy-9780007326013?gclid=EAIaIQobChMI14Ovua_a8QIV2O7tCh08Sg3cEAQYAyABEgKzWPD_BwE",
    "author": "Derek Landy",
    "pages": 571,
    "publishedAt":  "2017-05-04"
}, {
    "title": "Skulduggery Pleasant (Death Bringer)",
    "url": "https://www.amazon.co.uk/Death-Bringer-Skulduggery-Pleasant-Book/dp/0007326033/ref=asc_df_0007326033/?tag=googshopuk-21&linkCode=df0&hvadid=310587087500&hvpos=&hvnetw=g&hvrand=8315127733677692174&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-465168999971&psc=1&th=1&psc=1",
    "author": "Derek Landy",
    "pages": 608,
    "publishedAt":  "2017-05-04"
}, {
    "title": "Skulduggery Pleasant (Kingdom of the Wicked)",
    "url": "https://www.amazon.co.uk/Kingdom-Wicked-Skulduggery-Pleasant-Book/dp/0007480210/ref=asc_df_0007480210/?tag=googshopuk-21&linkCode=df0&hvadid=310871971371&hvpos=&hvnetw=g&hvrand=13289101970403533197&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-650639547032&psc=1&th=1&psc=1",
    "author": "Derek Landy",
    "pages": 608,
    "publishedAt":  "2017-07-29"
}, {
    "title": "Skulduggery Pleasant (Last Stand of Dead Men)",
    "url": "https://www.amazon.co.uk/Last-Stand-Dead-Men-Skulduggery/dp/0007489234/ref=asc_df_0007489234/?tag=googshopuk-21&linkCode=df0&hvadid=310942017077&hvpos=&hvnetw=g&hvrand=10988963538859527895&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-459710860303&psc=1&th=1&psc=1",
    "author": "Derek Landy",
    "pages": 608,
    "publishedAt":  "2017-07-29"
}, {
    "title": "Gangsta Granny",
    "url": "https://www.easons.com/gangsta-granny-david-walliams-9780007371464?gclid=EAIaIQobChMIkaH4t7va8QIVEOrtCh29DwfjEAQYBCABEgIeE_D_BwE",
    "author": "David Walliams",
    "pages": 296,
    "publishedAt":  "2013-02-28"
}, {
    "title": "Billionaire Boy",
    "url": "https://www.easons.com/billionaire-boy-david-walliams-9780007371082?gclid=EAIaIQobChMI-OqQybva8QIVWOvtCh2W_AQ6EAQYAiABEgKUB_D_BwE",
    "author": "David Walliams",
    "pages": 278,
    "publishedAt":  "2011-06-09"
}, {
    "title": "Mr Stink",
    "url": "https://www.easons.com/mr-stink-david-walliams-9780007279067?gclid=EAIaIQobChMImrHr2Lva8QIVCL_tCh0lxQ2AEAQYAyABEgKZOfD_BwE",
    "author": "David Walliams",
    "pages": 267,
    "publishedAt":  "2010-05-27"
}, {
    "title": "The Boy in the Dress",
    "url": "https://www.easons.com/the-boy-in-the-dress-david-walliams-9780007279043?gclid=EAIaIQobChMIl7yt6Lva8QIVkd_tCh1GjQ5-EAQYAiABEgKuX_D_BwE",
    "author": "David Walliams",
    "pages": 231,
    "publishedAt":  "2013-07-04"
}, {
    "title": "Ratburger",
    "url": "https://www.easons.com/ratburger-david-walliams-9780007453542?gclid=EAIaIQobChMI2-HO_rva8QIVh-_tCh1HngG3EAQYAyABEgIu__D_BwE",
    "author": "David Walliams",
    "pages": 316,
    "publishedAt":  "2014-02-13"
}, {
    "title": "Demon Dentist",
    "url": "https://www.amazon.co.uk/David-Walliams-Demon-Dentist/dp/B00I60NPIU/ref=asc_df_B00I60NPIU/?tag=googshopuk-21&linkCode=df0&hvadid=500779823646&hvpos=&hvnetw=g&hvrand=13726951230131594568&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-1322244955818&psc=1",
    "author": "David Walliams",
    "pages": 440,
    "publishedAt":  "2013-11-07"
}, {
    "title": "Granpas Great Escape",
    "url": "https://www.amazon.co.uk/Grandpas-Great-Escape-David-Walliams/dp/0008183422/ref=asc_df_0008183422/?tag=googshopuk-21&linkCode=df0&hvadid=310855476898&hvpos=&hvnetw=g&hvrand=1203791380413975461&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-356949150864&psc=1&th=1&psc=1",
    "author": "David Walliams",
    "pages": 464,
    "publishedAt":  "2017-02-09"
}, {
    "title": "Bad Dad",
    "url": "https://www.amazon.co.uk/Bad-Dad-David-Walliams/dp/0008164665/ref=sr_1_1?dchild=1&keywords=bad+dad&qid=1625987750&s=books&sr=1-1",
    "author": "David Walliams",
    "pages": 448,
    "publishedAt":  "2019-02-07"
}, {
    "title": "The Ice Monster",
    "url": "https://www.amazon.co.uk/Ice-Monster-David-Walliams/dp/0008164703/ref=sr_1_1?crid=3DOYDDP7XRZHD&dchild=1&keywords=the+ice+monster&qid=1625987788&s=books&sprefix=the+ice+%2Cstripbooks%2C149&sr=1-1",
    "author": "David Walliams",
    "pages": 496,
    "publishedAt":  "2020-01-09"
}, {
    "title": "Slime",
    "url": "https://www.amazon.co.uk/Slime-childrens-bestselling-author-Walliams/dp/000834258X/ref=sr_1_1?crid=1E1356EIA9P5P&dchild=1&keywords=slime+david+walliams&qid=1625987820&s=books&sprefix=slime%2Cstripbooks%2C158&sr=1-1",
    "author": "David Walliams",
    "pages": 320,
    "publishedAt":  "2020-04-02"
}, {
    "title": "The Beast of Buckingham Palace",
    "url": "https://www.amazon.co.uk/Beast-Buckingham-Palace-David-Walliams/dp/0008438706/ref=sr_1_1?crid=1VWDITMO55LBH&dchild=1&keywords=the+beast+of+buckingham+palace&qid=1625987850&s=books&sprefix=the+beast+%2Cstripbooks%2C151&sr=1-1",
    "author": "David Walliams",
    "pages": 464,
    "publishedAt":  "2021-01-07"
}, {
    "title": "The Worlds Worst Children (1)",
    "url": "https://www.amazon.co.uk/Worlds-Worst-Children-David-Walliams/dp/0008197032/ref=sr_1_1?crid=6UGLGCWICZJ9&dchild=1&keywords=the+worlds+worst+children&qid=1625987903&s=books&sprefix=the+worlds+%2Cstripbooks%2C154&sr=1-1",
    "author": "David Walliams",
    "pages": 272,
    "publishedAt":  "2016-05-19"
}, {
    "title": "The Worlds Worst Children (2)",
    "url": "https://www.amazon.co.uk/WORLDS-WORST-CHILDREN-2-TPB/dp/B078Z1RV1H/ref=sr_1_2?dchild=1&keywords=the+worlds+worst+children+2&qid=1625987930&s=books&sr=1-2",
    "author": "David Walliams",
    "pages": 296,
    "publishedAt": "2017-01-01"
}, {
    "title": "The Worlds Worst Children (3)",
    "url": "https://www.easons.com/the-worlds-worst-children-3-david-walliams-9780008304607?gclid=EAIaIQobChMItbiCrr3a8QIVkoBQBh0ytw_jEAQYAiABEgJHavD_BwE",
    "author": "David Walliams",
    "pages": 288,
    "publishedAt":  "2018-05-29"
}, {
    "title": "The Worlds Worst Teachers",
    "url": "https://www.easons.com/worlds-worst-teacher?gclid=EAIaIQobChMIha7qu73a8QIVk5ftCh19ogCfEAQYAiABEgIwHvD_BwE",
    "author": "David Walliams",
    "pages": 312,
    "publishedAt":  "2019-06-27"
}, {
    "title": "Anne Frank",
    "url": "https://www.easons.com/the-diary-of-a-young-girl-anne-frank-9780241952443",
    "author": "Otto Frank",
    "pages": 360,
    "publishedAt":  "2012-06-07"
}, {
    "title": "What would Jurgen Klopp Do?",
    "url": "https://www.amazon.co.uk/What-Would-Jurgen-Klopp-Do/dp/1841884146",
    "author": "Tom Victor",
    "pages": 192,
    "publishedAt":  "2020-05-28"
}, {
    "title": "Ultimate Football Heroes (Alexander Arnold)",
    "url": "https://www.amazon.co.uk/Alexander-Arnold-Ultimate-Football-Heroes-Collect/dp/1789462401/ref=asc_df_1789462401/?tag=googshopuk-21&linkCode=df0&hvadid=463097762559&hvpos=&hvnetw=g&hvrand=14788198341018420593&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-967796867002&psc=1&th=1&psc=1",
    "author": "Matt Oldfield",
    "pages": 176,
    "publishedAt":  "2020-11-26"
}, {
    "title": "Ultimate Football Heroes (Salah)",
    "url": "https://www.amazon.co.uk/Salah-Ultimate-Football-Heroes-Collect/dp/1789460069/ref=sr_1_1?crid=1SVH4HMTGEMNS&dchild=1&keywords=ultimate+football+heroes+salah&qid=1626097578&sprefix=ultimate+football+heroes+sa%2Cstripbooks%2C152&sr=8-1",
    "author": "Matt Oldfield",
    "pages": 176,
    "publishedAt":  "2018-11-01"
}, {
    "title": "Percy Jackson (The Lightning Thief)",
    "url": "https://www.amazon.co.uk/Percy-Jackson-Lightning-Thief-Book/dp/0141346809/ref=asc_df_0141346809/?tag=googshopuk-21&linkCode=df0&hvadid=310977284312&hvpos=&hvnetw=g&hvrand=15961637376765644274&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-526333532788&psc=1&th=1&psc=1",
    "author": "Rick Riordan",
    "pages": 400,
    "publishedAt":  "2013-07-04"
}, {
    "title": "Tom Gates (Book 1)",
    "url": "https://www.amazon.co.uk/Brilliant-World-Tom-Gates/dp/1407193430/ref=asc_df_1407193430/?tag=googshopuk-21&linkCode=df0&hvadid=310875774408&hvpos=&hvnetw=g&hvrand=5602468651905234122&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-650481919888&psc=1&th=1&psc=1",
    "author": "Liz Pichon",
    "pages": 272,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Tom Gates (Book 2)",
    "url": "https://www.amazon.co.uk/Tom-Gates-Excellent-Excuses-Other/dp/1407193449/ref=asc_df_1407193449/?tag=googshopuk-21&linkCode=df0&hvadid=310875774408&hvpos=&hvnetw=g&hvrand=943690488289788708&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1007850&hvtargid=pla-617769374812&psc=1&th=1&psc=1",
    "author": "Liz Pichon",
    "pages": 368,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Tom Gates (Book 3)",
    "url": "https://www.easons.com/everythings-amazing-sort-of-liz-pichon-9781407193458?gclid=EAIaIQobChMIlqyj8Jng8QIViLrtCh2FiQCGEAQYBCABEgKD_PD_BwE",
    "author": "Liz Pichon",
    "pages": 404,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Tom Gates (Book 4)",
    "url": " https://www.easons.com/genius-ideas-mostly-liz-pichon-9781407193465?gclid=EAIaIQobChMIip3Hjprg8QIV6OjtCh0L1QhHEAQYAyABEgIvU_D_BwE",
    "author": "Liz Pichon",
    "pages": 307,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Tom Gates (Book 5)",
    "url": "https://www.easons.com/tom-gates-is-absolutely-fantastic-at-some-things-liz-pichon-9781407193472?gclid=EAIaIQobChMI98zrvZrg8QIVBbDtCh1z9gtNEAQYASABEgK-u_D_BwE",
    "author": "Liz Pichon",
    "pages": 249,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Tom Gates (Book 6)",
    "url": "https://www.amazon.co.uk/Tom-Gates-Extra-Special-Treats/dp/1407193481/ref=sr_1_2?crid=133D8C4AR72J0&dchild=1&keywords=tom+gates+book+6&qid=1626184993&s=books&sprefix=tom+gates+book+%2Cstripbooks%2C159&sr=1-2",
    "author": "Liz Pichon",
    "pages": 256,
    "publishedAt":  "2019-01-03"
}, {
    "title": "Illustrated Classiscs for Boys",
    "url": "https://www.amazon.co.uk/Illustrated-Classics-Boys-Anthologies-Treasuries/dp/140950039X/ref=sr_1_1?dchild=1&keywords=illustrated+classics+for+boys&qid=1626185078&s=books&sr=1-1",
    "author": "Lesley Sims",
    "pages": 384,
    "publishedAt":  "2008-10-31"




}]

