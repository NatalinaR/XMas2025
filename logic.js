const correctKeywords = {
    1: "10",
    2: "21",
    3: "rudolph",
    4: "2",
    5: "horse",
    6: "patara",
    7: "1973",
    8: "5",
    9: "1000",
    10: "2800000",
    11: "tgi",
    12: "bejgli",
    13: "hogfather",
    14: "january",
    15: "cutie",
    16: "1372",
    17: "morozko",
    18: "bethlehem",
    19: "1931",
    20: "20",
    21: "alva",
    22: "2023",
    23: "fox",
    24: "yolka",
    25: "1689",
    26: "vanilla",
    27: "2011",
    28: "caesar",
    29: "53",
    30: "worm",
    31: "3"
  };

  const contentFill = {
    1: `<h2>1 December</h2><p>Happy first winter day, Szabi! <br>Number of today box is: 83 </p>
        <a class="button" href="https://youtu.be/DRWIeVBzU_8?si=jf1m-pfR-BdzBxqu" target="_blank">Open</a>`,
    2: `<h2>2 December</h2><p>Happy tuesday! I know I have told it before, but u should know it... Polar bears are left handed xD <br>Number of today surprise is: 65</p>
        <a class="button" href="https://www.youtube.com/watch?v=xOXolSQcEb4" target="_blank">Open</a>`,
    3: `<h2>3 December</h2><p>What is the funniest bird of 2025? XD<br>Number of today box is: 37</p>
        <a class="button" href="https://youtube.com/shorts/e5X6U9F4jjI?si=yt6ZmBwXILcNukUC" target="_blank">Open</a>`,
    4: `<h2>4 December</h2><p>That's right! 2 November :D can't wait when we go to cinema next time<3 <br>PS: check the fox :o <br>Number of today box is: 13</p>
        <a class="button" href="https://www.youtube.com/watch?v=0f5H2wNft3U" target="_blank">Open</a>`,
    5: `<h2>5 December</h2><p>I know you not like horses... That's why I offer to watch you this :o <br>Number of today box is: 186</p>
        <a class="button" href="https://www.youtube.com/watch?v=EaCqAnBcze8" target="_blank">Open</a>`,
    6: `<h2>6 December</h2><p>I was a bit surprised how it's Turkey... Wanna watch some cool cartton about Egypt? :o <br>Number of today box is: 111</p>
        <a class="button" href="https://123moviesfree.bz/watch/the-prince-of-egypt.qbbpkd#ep=1" target="_blank">Open</a>`,
    7: `<h2>7 December</h2><p>Please please... Let's watch this movie together :D I'll bring waffles :D<br>Number of today box is: 235</p>
        <a class="button" href="https://my.mail.ru/mail/papiterez072102/video/6/1139.html" target="_blank">Open</a>`,
    8: `<h2>8 December</h2><p>I really were thinking that this year Christmas market will look different .__.<br>Number of today box is: 541</p>
        <a class="button" href="https://www.youtube.com/watch?v=KaDWEBKnfCU" target="_blank">Open</a>`,
    9: `<h2>9 December</h2><p>Everything belongs to Hungry :D Except Galls XDDDD<br>Number of today box is: 843</p>
        <a class="button" href="https://youtu.be/-vbhlpgn6LM?si=cD3eOgNKjdFN_8Zz" target="_blank">Open</a>`,
    10: `<h2>10 December</h2><p>Szabi, you are best of the best <3 please don't be a spy ._.<br>Number of today box is: 463</p>
        <a class="button" href="https://youtube.com/shorts/oe78JHgitWk?si=qBFasJLh7S7Y3GNv" target="_blank">Open</a>`,
    11: `<h2>11 December</h2><p>Today is international MOUNTAIN day!!! Hope exam will go well... <br>Number of today box is: 29</p>
        <a class="button" href="https://youtu.be/n_PxJ2PyecI?si=BRcDm3f4iNhCJg6b" target="_blank">Open</a>`,
    12: `<h2>12 December</h2><p>It's one year since we had our 2121 days 12.12 :D Yeeey ^^ <br>Number of today box is: 42</p>
        <a class="button" href="https://youtu.be/k_plih5b9To?si=JehwU4mM43y_0k34" target="_blank">Open</a>`,
    13: `<h2>13 December</h2><p>You like it, I like it, what do you think that meeeeans? :o <br>Number of today box is: 323</p>
        <a class="button" href="https://123moviesfree.bz/watch/hogfather.q54d13#ep=1" target="_blank">Open</a>`,
    14: `<h2>14 December</h2><p>It's SUUUNDAY!!! We soon go to Budapest :D TO teeth always be clean :o <br>Number of today box is: 197</p>
        <a class="button" href="https://youtu.be/lJnADJxyr54?si=f0SuvTLR5iFMSPL6" target="_blank">Open</a>`,
    15: `<h2>15 December</h2><p>I so much loved to play coop game with you ^^ Wanna do again? :o<br>Number of today box is: 741</p>
        <a class="button" href="https://youtu.be/mBQ2UHVLKw8?si=qiDpOZ4eIxRatnk7" target="_blank">Open</a>`,
    16: `<h2>16 December</h2><p>It's a trip day!!! Wish us luck with it and luck for you for bank :D<br>Number of today box is: 1372</p>
        <a class="button" href="https://www.youtube.com/watch?v=qPZrUIvED4M" target="_blank">Open</a>`,
    17: `<h2>17 December</h2><p>Pat pat... We did it! And I'm proud of you <3<br>Number of today box is: 249</p>
        <a class="button" href="https://youtu.be/TbL-uxd4ZVw?si=NQEBbCnSqQPt_xfB" target="_blank">Open</a>`,
    18: `<h2>18 December</h2><p>Just one week and Christmas :D Are you excited? :D<br>Good luck on exams! ❤️<br>Number of today box is: 1000</p>
        <a class="button" href="https://youtu.be/fRTmqOxefwY?si=g0nQNbb-AlktvIT6" target="_blank">Open</a>`,
    19: `<h2>19 December</h2><p>Now they making ugly AI videos where even trucks are all weirdly different XD Check better this<br>Number of today box is: 391</p>
        <a class="button" href="https://www.youtube.com/watch?v=i74tlP7G8_I" target="_blank">Open</a>`,
    20: `<h2>20 December</h2><p>Meow, Szabi <3 One month passed since we visited markets :o Best part was how you where there with me <3<br>Number of today box is: 55</p>
        <a class="button" href="https://youtu.be/3XNun4QQRoE?si=f3hPGTTGhUbFFm-Y" target="_blank">Open</a>`,
    21: `<h2>21 December</h2><p>Happy Sunday, Schatz :D Are you open to watch this cartoon together? :D<br>Number of today box is: 435</p>
        <a class="button" href="https://123moviesfree.bz/watch/klaus.3rgj7k#ep=1" target="_blank">Open</a>`,
    22: `<h2>22 December</h2><p>Hope this game will keep bring you joy :D <br>Number of today box is: 563</p>
        <a class="button" href="https://youtu.be/gqF_hZAWr80?si=Nrnt_Lcld-DLO8-M" target="_blank">Open</a>`,
    23: `<h2>23 December</h2><p>Just 1 day before the christmas :D Interesting fact for you:<br>The shortened form of Christmas is "X mas", it's being used from 16th century :o<br>Number of today box is: 5</p>
        <a class="button" href="https://youtu.be/RCqQYpM1hCA?si=XpazkYvandjw4DBG" target="_blank">Open</a>`,
    24: `<h2>24 December</h2><p>Merry Christmas, my love :D Wish to you always have energy to reach your goals, to you be super healthy<br> and wish to meet next Christmas with you too <3<br>Number of today box is: 7</p>
        <a class="button" href="https://123moviesfree.bz/watch/barbie-in-the-nutcracker.zkn2r1#ep=1" target="_blank">Open</a>`,
    25: `<h2>25 December</h2><p>Tada. Hope you will find today present useful! I do want to u could use it :D Meow meow <3<br>Number of today box is: 673</p>
        <a class="button" href="https://youtu.be/BpoK2ex5glU?si=rxY1YqlHlxoXEfLk" target="_blank">Open</a>`,
    26: `<h2>26 December</h2><p>😏 You know, I know... pudding preferences :o <br>Number of today box is: 69</p>
        <a class="button" href="https://youtu.be/-5TY3ISbldQ?si=bFl_1QNWFSZof9nx" target="_blank">Open</a>`,
    27: `<h2>27 December</h2><p>Wanna get some...massaging? :o I'm proud how you can exercise reguarly. Mighty man in mind and body :D meeeow<br>Number of today box is: 101</p>
        <a class="button" href="https://www.youtube.com/watch?v=G1XR_HuFavs" target="_blank">Open</a>`,
    28: `<h2>28 December</h2><p>When you hear Ceasar what is your first association? Mine are movies XD<br>Number of today box is: 529</p>
        <a class="button" href="https://123moviesfree.bz/watch/asterix-at-the-olympic-games.3j28j2#ep=1" target="_blank">Open</a>`,
    29: `<h2>29 December</h2><p>Kiss kiss kiss kiss :D Just one more time chance to say you: Szeretlek :D Люблю тебя❤️<br>Number of today box is: 17</p>
        <a class="button" href="https://youtu.be/1PbZIPI9JjI?si=Z-jUpoAPJPNvzitq" target="_blank">Open</a>`,
    30: `<h2>30 December</h2><p>New Year is almost here, Schatz :D Wish you in new year always feel confident and believe in yourself <3 Schaaaatz :D meeow<br>Number of today box is: 311</p>
        <a class="button" href="https://youtu.be/1ww5p_Gean4?si=jA9YLqFrw7_TWmHi" target="_blank">Open</a>`,
    31: `<h2>31 December</h2><p>Tomorrow is New Year :D I'm really excited that we will meet it together <3 Meeeow meeow meeow<br>Number of today box is: 673</p>
        <a class="button" href="https://youtu.be/LLXGMDf7fS4?si=7H9EsOY7nlcv5Pfm" target="_blank">Open</a>`
  };


// localStorage.removeItem('GotActivity');
// localStorage.removeItem('ForPastDays');
// localStorage.removeItem('Day 1');
// localStorage.removeItem('Day 2');
// localStorage.removeItem('Day 3');
// localStorage.removeItem('Day 4');
// localStorage.removeItem('Day 5');
// localStorage.removeItem('Day 6');
// localStorage.removeItem('Day 7');
// localStorage.removeItem('Day 8');
// localStorage.removeItem('Day 9');
// localStorage.removeItem('Day 10');
// localStorage.removeItem('Day 11');
// localStorage.removeItem('Day 12');
// localStorage.removeItem('Day 13');
// localStorage.removeItem('Day 14');
// localStorage.removeItem('Day 24');
// localStorage.removeItem('Day 31');
// localStorage.removeItem('Day 15');
// localStorage.removeItem('Day 16');
// localStorage.removeItem('Day 17');
// localStorage.removeItem('Day 18');
// localStorage.removeItem('Day 19');
// localStorage.removeItem('Day 20');
// localStorage.removeItem('Day 21');
// localStorage.removeItem('Day 22');
// localStorage.removeItem('Day 23');
// localStorage.removeItem('Day 24');
// localStorage.removeItem('Day 25');
// localStorage.removeItem('Day 26');
// localStorage.removeItem('Day 27');
// localStorage.removeItem('Day 28');
// localStorage.removeItem('Day 29');
// localStorage.removeItem('Day 30');


// const correctKeywords = {
//     1: "8",
//     2: "двацветок",
//     3: "си",
//     4: "лошадь",
//     5: "ораву",
//     6: "мастерица",
//     7: "инара",
//     8: "мюриэл",
//     9: "джон",
//     10: "4",
//     11: "бинки",
//     12: "древние",
//     13: "шахматы",
//     14: "ринсвинд",
//     15: "анк-морпорк",
//     16: "картошка",
//     17: "2015",
//     18: "балбес",
//     19: "мавт",
//     20: "пират",
//     21: "цитадель",
//     22: "вовке",
//     23: "реми",
//     24: "антибиотики",
//     25: "100",
//     26: "7",
//     27: "9",
//     28: "весы",
//     29: "бутерброды",
//     30: "луковицу",
//     31: "январь"
//   };

//   const contentFill = {
//     1: `<h2>1 Декабря</h2><p>Поздравляю с первым днём зимы! </p>
//         <a class="button" href="https://shorturl.at/Fsfq2" target="_blank">Open</a>`,
//     2: `<h2>2 Декабря</h2><p>В понедельник вечером здорово посмотреть старую добрую сказку! </p>
//         <a class="button" href="https://my.mail.ru/mail/igor.kozyakov/video/45604/222579.html" target="_blank">Open</a>`,
//     3: `<h2>3 Декабря</h2><p>Найти подснежники зимой - нелегкое испытание. Справится ли главная героиня? </p>
//         <a class="button" href="https://my.mail.ru/inbox/phenix2015/video/17/762.html" target="_blank">Open</a>`,
//     4: `<h2>4 Декабря</h2><p>Сегодня день российской информатики! Неофициальный праздник, приуроченный к дате регистрации изобретённой в СССР ЭВМ. </p>
//         <a class="button" href="https://my.mail.ru/mail/zemlya18-54/video/10/145.html" target="_blank">Open</a>`,
//     5: `<h2>5 Декабря</h2><p>Ватсон спрашивает у Холмса:<br>— Я понимаю почему вор взял из сейфа деньги и драгоценности. Но зачем он забрал жену лорда?<br> — Элементарно, Ватсон! Чтобы лорд его не искал! </p>
//         <a class="button" href="https://my.mail.ru/mail/dubasova88/video/1269/31140.html" target="_blank">Open</a>`,
//     6: `<h2>6 Декабря</h2><p>Дочь, ты пила?<br>Нет, мам, я топор!</p>
//         <a class="button" href="https://ok.ru/video/7844026321438" target="_blank">Open</a>`,
//     7: `<h2>7 Декабря</h2><p>Святой отец Пирсу и Ловцу: "Приятного путешествия, ребята, будьте хорошими.А если не получится, будьте осторожны" </p>
//         <a class="button" href="https://my.mail.ru/bk/anisa.idrisova/video/28/735.html" target="_blank">Open</a>`,
//     8: `<h2>8 Декабря</h2><p> Я требую продолжения банкета! </p>
//         <a class="button" href="https://my.mail.ru/mail/ivanovih12333/video/_myvideo/5187.html" target="_blank">Open</a>`,
//     9: `<h2>9 Декабря</h2><p>Сегодня день рождения компьютерной мыши! Погладь свою мышь, она так усердно работает </p>
//         <a class="button" href="https://my.mail.ru/mail/vanya.shtil/video/_vanswers/1415.html" target="_blank">Open</a>`,
//     10: `<h2>10 Декабря</h2><p>Казнить нельзя помиловать! Где же поставить запятую? </p>
//         <a class="button" href="https://my.mail.ru/mail/ksu-/video/_myvideo/279.html">Open</a>`,
//     11: `<h2>11 Декабря</h2><p>Давайте отпразднуем Международный день гор! </p>
//         <a class="button" href="https://vk.com/video-63054301_456239328" target="_blank">Open</a>`,
//     12: `<h2>12 Декабря</h2><p>По радио сообщили о переходе на зимнее время, сказав, что «этой ночью, ровно в 03:00 нужно перевести стрелку часов на один час назад, на 02:00».<br> У всех программистов эта ночь зависла в бесконечном цикле. </p>
//         <a class="button" href="https://vk.com/video335840340_456239038" target="_blank">Open</a>`,
//     13: `<h2>13 Декабря</h2><p>Давайте погрузимся в детство и поможем мальчику выжить в джунглях! </p>
//         <a class="button" href="https://my.mail.ru/mail/alecs59russ/video/_myvideo/1844.html" target="_blank">Open</a>`,
//     14: `<h2>14 Декабря</h2><p>В субботу можно расслабиться и от души посмеяться! </p>
//         <a class="button" href="https://youtu.be/kToZ7LVkcXc?si=gs8VcmCrUQljaaNj" target="_blank">Open</a>`,
//     15: `<h2>15 Декабря</h2><p>Поздравляю с Международным днем чая! </p>
//         <a class="button" href="https://youtu.be/H5E_qa32bT4?si=oHD_1IsdOa0C0USW" target="_blank">Open</a>`,
//     16: `<h2>16 Декабря</h2><p>Новая неделя, и кажется кто-то прячется за углом! </p>
//         <a class="button" href="https://vk.com/video47774212_168063685" target="_blank">Open</a>`,
//     17: `<h2>17 Декабря</h2><p>Ты кому-нибудь что-нибудь предложишь. Тебе кто-нибудь что-нибудь предложит. Красота. </p>
//         <a class="button" href="https://ok.ru/video/7580466940450" target="_blank">Open</a>`,
//     18: `<h2>18 Декабря</h2><p>Удержишь в руках инструмент — корабль летучий построишь! - Тоже можно сказать о мотивации и концентрации. Удержишь - добьешься своих целей! </p>
//         <a class="button" href="https://my.mail.ru/mail/adjavidan/video/_vfavorites/93964.html" target="_blank">Open</a>`,
//     19: `<h2>19 Декабря</h2><p>Подумала, будет забавно спросить про мавт. хаха </p>
//         <a class="button" href="https://my.mail.ru/list/agros-premium/video/_myvideo/8289.html" target="_blank">Open</a>`,
//     20: `<h2>20 Декабря</h2><p>-Говорят, вам счастья привалило?<br>-Бессо-овестно врут! </p>
//         <a class="button" href="https://rutube.ru/video/49e88b137fab307ce4b4a9587e36f8a8/" target="_blank">Open</a>`,
//     21: `<h2>21 Декабря</h2><p>Всего 10 дней до Нового Года! </p>
//         <a class="button" href="https://my.mail.ru/internet.ru/nina.osetrova/video/4/22751.html" target="_blank">Open</a>`,
//     22: `<h2>22 Декабря</h2><p>"Три дня я гналась за вами, чтобы сказать, как вы мне безразличны!" </p>
//         <a class="button" href="https://my.mail.ru/mail/elenavorobeva0809632/video/7/1656.html" target="_blank">Open</a>`,
//     23: `<h2>23 Декабря</h2><p>Всего 8 дней до Нового Года!!! </p>
//         <a class="button" href="https://my.mail.ru/gmail.com/dzuba1226/video/24/11068.html" target="_blank">Open</a>`,
//     24: `<h2>24 Декабря</h2><p>Так… ты же козявка… — От козявки слышу! </p>
//         <a class="button" href="https://my.mail.ru/mail/sanadoc_61/video/8/9602.html" target="_blank">Open</a>`,
//     25: `<h2>25 Декабря</h2><p>Поздравляю с католическим Рождеством! </p>
//         <a class="button" href="https://ok.ru/video/3736024844878" target="_blank">Open</a>`,
//     26: `<h2>26 Декабря</h2><p>Человек с большой фантазией и ни капли неправды! </p>
//         <a class="button" href="https://vk.com/video-224592296_456239138" target="_blank">Open</a>`,
//     27: `<h2>27 Декабря</h2><p>Время для истории об одной шляпке! </p>
//         <a class="button" href="https://my.mail.ru/gmail.com/dzuba1226/video/24/50176.html" target="_blank">Open</a>`,
//     28: `<h2>28 Декабря</h2><p>4 дня до Нового Года! </p>
//         <a class="button" href="https://vk.com/video-174023022_456258713" target="_blank">Open</a>`,
//     29: `<h2>29 Декабря</h2><p>3 дня до нового года! </p>
//         <a class="button" href="https://my.mail.ru/mail/svetlana-rudeva/video/75/32380.html">Open</a>`,
//     30: `<h2>30 Декабря</h2><p>2 дня до Нового Года! "-И солнце съешь?!" "-Угу" </p>
//         <a class="button" href="https://vk.com/video-75543539_171715779" target="_blank">Open</a>`,
//     31: `<h2>31 Декабря</h2><p>И новый год, что вот вот настааааанет. Исполнит вмиг мечту втоюююю. Если снежинка не растаает, в твоей ладони не растааает... </p>
//         <a class="button" href="https://vk.com/video-174023022_456259008" target="_blank">Open</a>`
//   };









var d = new Date(); 
var todaysDate = d.getDate();

//var todaysDate = 31;
var target = $('.calendar .day');

console.log(localStorage.getItem('GotActivity'));
console.log(localStorage.getItem('ForPastDays'));


target.each(function(){
    var day = $(this).html();

    if (todaysDate == day){

        $(this).addClass('today');
        console.log(day, 'today');

        if (localStorage.getItem(`Day ${day}`) == 'yes'){
            $(this).addClass('active');

            console.log($(this).hasClass('active'))

            localStorage.setItem('ForPastDays', 'active');
        }
    }

    if (todaysDate < day){
      $(this).addClass('future');
      console.log(day, 'future');
    }

    if (todaysDate > day){
        console.log(day, 'past');

        $(this).addClass('past'); 
        if (localStorage.getItem('ForPastDays') == 'active'){
            $(this).addClass('active');
        }
      }
  });


$('.calendar .day').click(function() {
    const self = $(this);

    var day = self.html();


    // console.log(localStorage.getItem(`Day ${day}`));

    
    if ($(this).hasClass('today') && localStorage.getItem(`Day ${day}`)!=='yes') {
        
      
        var day = $(this).html();
        $('#keywordWodal').addClass('active');
    
        showModal(day);


        document.getElementById("keywordInput").addEventListener("keydown", function(event) {
        
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent the default form submission behavior
            
                const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
                const correctKeyword = correctKeywords[currentBox];
            
            if (enteredKeyword === correctKeyword) {

                
                showMessage(day);

                localStorage.setItem(`Day ${day}`, "yes");
                localStorage.setItem('GotActivity', 'active');
                localStorage.setItem('ForPastDays', 'active');
                localStorage.setItem('ANSW', 'TRUE');
                const modal = document.getElementById("keywordModal");
                modal.style.display = "none";

                self.addClass('active');
        
            } else {
                document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
                document.getElementById("feedbackMessage").style.color = "white";
                localStorage.setItem('ANSW', 'FALSE');
            }
            
            }
        });


        $('.checkAnsw').click(function(){
            const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
            const correctKeyword = correctKeywords[currentBox];
        
        if (enteredKeyword === correctKeyword) {
            
            showMessage(day);


            localStorage.setItem(`Day ${day}`, 'yes');
            localStorage.setItem('GotActivity', 'active');
            localStorage.setItem('ForPastDays', 'active');

            localStorage.removeItem('ANSW');

            console.log(localStorage.getItem(`Day ${day}`));
        

            const modal = document.getElementById("keywordModal");
            modal.style.display = "none";

            self.addClass('active');



        } else {
            document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
            document.getElementById("feedbackMessage").style.color = "white";
            localStorage.setItem('ANSW', 'FALSE');
        }
        }); 

    } else if (localStorage.getItem(`Day ${day}`)!=='yes' && $(this).hasClass('past')){
        console.log('jump jump 149')
        console.log(localStorage.getItem(`Day ${day}`));
        console.log('tadaa');

        var day = $(this).html();
        $('#keywordWodal').addClass('active');
    
        showModal(day);


        document.getElementById("keywordInput").addEventListener("keydown", function(event) {
        
            if (event.key === "Enter") {
                event.preventDefault(); // Prevent the default form submission behavior
            
                const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
                const correctKeyword = correctKeywords[currentBox];
            
            if (enteredKeyword === correctKeyword) {
                
                showMessage(day);

                localStorage.setItem(`Day ${day}`, "yes");
                localStorage.setItem('GotActivity', 'active');
                localStorage.setItem('ForPastDays', 'active');

                localStorage.setItem('ANSW', 'TRUE');
                const modal = document.getElementById("keywordModal");
                modal.style.display = "none";

                self.addClass('active');


        
            } else {
                document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
                document.getElementById("feedbackMessage").style.color = "white";
                localStorage.setItem('ANSW', 'FALSE');
            }
            
            }
        });


        $('.checkAnsw').click(function(){
            const enteredKeyword = document.getElementById("keywordInput").value.trim().toLowerCase();
            const correctKeyword = correctKeywords[currentBox];
        
        if (enteredKeyword === correctKeyword) {
            
            showMessage(day);


            localStorage.setItem(`Day ${day}`, 'yes');
            localStorage.setItem('GotActivity', 'active');
            localStorage.setItem('ForPastDays', 'active');

            localStorage.removeItem('ANSW');

            console.log(localStorage.getItem(`Day ${day}`));
        

            const modal = document.getElementById("keywordModal");
            modal.style.display = "none";

            self.addClass('active');


        } else {
            document.getElementById("feedbackMessage").textContent = "Incorrect keyword. Try again!";
            document.getElementById("feedbackMessage").style.color = "white";
            localStorage.setItem('ANSW', 'FALSE');
        }
        }); 

    } else if (localStorage.getItem(`Day ${day}`)=='yes' && !$(this).hasClass('future')){

        showMessage(day);
    }
    else if ($(this).hasClass('future')) {
        console.log('future');
        $('#modal').addClass('active');
        $('#modal .wrapper .wrappercontent .box').html("<h2>Who is this handsome naughty boy, who trying see what coming :o</h2> <p>Szabi, it's too early to open this day ^^ <br>Meow<br></p>");
     

    } 
});
 
  // Show the modal and set the current box
  let currentBox = null;
  function showModal(boxNumber) {
    currentBox = boxNumber;
    document.getElementById("boxNumber").textContent = boxNumber;
    document.getElementById("keywordInput").value = "";
    document.getElementById("feedbackMessage").textContent = "";
    document.getElementById("keywordModal").style.display = "block";
   

  } 

  function showMessage (nummer) {
    const filled = contentFill[nummer];

    $('#modal').addClass('active');

    $('#modal .wrapper .wrappercontent .box').html('');
    $('#modal .wrapper .wrappercontent .box').html(filled);
  }
 
 $('.close').click(function(){
   var ultimateParent = $(this).parent().parent().parent();
   ultimateParent.addClass('moveOut');
   setTimeout(function(){
     ultimateParent.removeClass('moveOut').removeClass('active');
   },250);
 });

 $('#modal').click(function(){
    var ultimateParent = $(this);
    ultimateParent.addClass('moveOut');
    setTimeout(function(){
      ultimateParent.removeClass('moveOut').removeClass('active');
    },250);
  });


 window.onclick = function(event) {
    const modal = document.getElementById("keywordModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };


  




