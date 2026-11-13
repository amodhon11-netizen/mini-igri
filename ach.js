(function(){
var KEY='kalgy_ach_v1';
var G={office:'Офисный день',chess:'Шахматы',sapper:'Сапёр',casino:'Казино «Рискни»',nomera:'Крутилка номеров',blocks:'Block Blast',kassa:'Ночная касса',ryba:'Тропическая рыбалка'};
// [игра, счётчик, цель, название, описание]
var L=[
['office','office_day',5,'Разогрев','Сделай 5 задач за один рабочий день'],
['office','office_day',12,'Директор по всему','Сделай 12 задач за один день'],
['office','office_day',15,'Легенда офиса','Сделай 15 задач за один день'],
['office','office_surv',1,'Дожил до вечера','Дотяни до конца дня и не выгори'],
['office','office_calm',1,'Дзен','Закончи день со стрессом ниже 30% и 5+ задачами'],
['office','office_total',100,'Рабочая лошадка','Сделай 100 задач суммарно'],
['chess','chess_win_easy',1,'Первая кровь','Победи бота на лёгком уровне'],
['chess','chess_win_mid',1,'Уверенный игрок','Победи бота на среднем уровне'],
['chess','chess_win_hard',1,'Гроссмейстер','Победи бота на сильном уровне'],
['chess','chess_castle',1,'В домике','Сделай рокировку'],
['chess','chess_check',1,'Шах!','Поставь шах боту'],
['chess','chess_check',15,'Шахматист','Поставь 15 шахов суммарно'],
['chess','chess_wins',5,'Серия побед','Выиграй 5 партий суммарно'],
['sapper','sap_win_easy',1,'Первый разминированный','Выиграй на уровне «Новичок»'],
['sapper','sap_win_mid',1,'Сапёр-любитель','Выиграй на уровне «Любитель»'],
['sapper','sap_win_hard',1,'Эксперт по минам','Выиграй на уровне «Эксперт»'],
['sapper','sap_fast',1,'Быстрые руки','Выиграй на «Новичок» за 45 секунд или быстрее'],
['sapper','sap_boom',1,'Бабах!','Подорвись на мине'],
['sapper','sap_wins',10,'Мастер мин','Выиграй 10 партий суммарно'],
['casino','casino_jackpot',1,'Джекпот!','Выбей три одинаковых символа (не черепа)'],
['casino','casino_gwin',3,'Азартный','Выиграй «Рискнуть» 3 раза суммарно'],
['casino','casino_buy',2,'Шопоголик','Купи 2 талисмана суммарно'],
['casino','casino_coins',300,'В плюсе','Накопи 300 монет'],
['casino','casino_coins',600,'Высокие ставки','Накопи 600 монет'],
['casino','casino_win',1,'Сорвал банк','Дойди до 1000 монет'],
['nomera','nom_tier',2,'Красивый номер','Получи номер редкости «Красивый» или выше'],
['nomera','nom_tier',3,'Редкая находка','Получи «Редкий» номер или выше'],
['nomera','nom_tier',4,'Эпический улов','Получи «Эпический» номер'],
['nomera','nom_777',1,'Счастливая семёрка','Выбей номер с цифрами 777'],
['nomera','nom_spins',100,'Любитель номеров','Сделай 100 круток'],
['nomera','nom_spins',2000,'Номерной маньяк','Сделай 2000 круток'],
['nomera','nom_tot',10000000,'Миллионер','Суммарная стоимость всех номеров 10 000 000 ₽'],
['blocks','bb_score',300,'Разминка','Набери 300 очков'],
['blocks','bb_score',1000,'Мастер блоков','Набери 1000 очков'],
['blocks','bb_score',2000,'Блок-профи','Набери 2000 очков'],
['blocks','bb_m2',1,'Двойной удар','Убери 2 линии за один ход'],
['blocks','bb_m3',1,'Тройной удар','Убери 3 линии за один ход'],
['blocks','bb_c3',1,'Комбо ×3','Убирай линии три хода подряд'],
['blocks','bb_clean',1,'Чистая доска','Полностью очисти поле'],
['blocks','bb_lines',50,'Линейный мастер','Убери 50 линий суммарно'],
['kassa','kassa_exp',1,'Первый изгнанный','Выгони монстра'],
['kassa','kassa_exp',10,'Охотник на монстров','Выгони 10 монстров суммарно'],
['kassa','kassa_day',1,'Первая смена','Дойди до конца смены'],
['kassa','kassa_day',3,'Ночной ветеран','Пройди 3 смены'],
['kassa','kassa_day',5,'Железные нервы','Пройди 5 смен'],
['kassa','kassa_perfect',1,'Без единой царапины','Закончи смену, не потеряв ни одной жизни'],
['kassa','kassa_change',20,'Мастер сдачи','Верно выдай сдачу 20 раз суммарно'],
['ryba','fish_total',1,'Первый улов','Поймай первую рыбу'],
['ryba','fish_total',50,'Рыбак','Поймай 50 рыб'],
['ryba','fish_total',300,'Морской волк','Поймай 300 рыб'],
['ryba','fish_rar',3,'Эпический улов','Поймай эпическую рыбу'],
['ryba','fish_rar',4,'Легендарный улов','Поймай легендарную рыбу'],
['ryba','fish_rar',5,'Миф стал былью','Поймай мифическую рыбу'],
['ryba','fish_col',10,'Юный натуралист','Собери 10 видов рыб в коллекции'],
['ryba','fish_col',25,'Рыбопедия','Собери 25 видов рыб'],
['ryba','fish_col',43,'Полная коллекция','Собери все 43 вида рыб'],
['ryba','fish_earned',10000,'Первая «десятка»','Заработай 10 000 ₽ на рыбе'],
['ryba','fish_earned',250000,'Рыбный магнат','Заработай 250 000 ₽ на рыбе'],
['ryba','fish_rod',3,'Профи-удочка','Купи удочку 4-го уровня'],
['ryba','fish_rod',5,'Трезубец Посейдона','Купи лучшую удочку'],
['ryba','fish_spot',3,'В бездну','Открой все места для рыбалки'],
['ryba','fish_bk',5,'Бездонное ведро','Улучши ведро до максимума'],
['ryba','fish_streak',10,'Серия','Поймай 10 рыб подряд без срывов'],
['ryba','fish_chest',1,'Сокровища','Найди сундук']
].map(function(a){return{id:a[1]+'_'+a[2],game:a[0],c:a[1],goal:a[2],name:a[3],desc:a[4]}});
var D={u:{},p:{}};
try{var s=localStorage.getItem(KEY);if(s){var o=JSON.parse(s);D.u=o.u||{};D.p=o.p||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){}}
var q=[],busy=false,styled=false;
function style(){if(styled||!document.head)return;styled=true;var st=document.createElement('style');
st.textContent='.ach-t{position:fixed;left:50%;top:calc(env(safe-area-inset-top,0px) + 10px);transform:translate(-50%,-140%);z-index:99999;display:flex;gap:10px;align-items:center;background:#1f2a2e;color:#fff;border:2px solid #ffe45e;box-shadow:4px 4px 0 rgba(0,0,0,.4);padding:10px 14px;max-width:92vw;font-family:Archivo,system-ui,Arial,sans-serif;transition:transform .35s}.ach-t.in{transform:translate(-50%,0)}.ach-t b{display:block;font-size:15px}.ach-t span{font-size:13px;color:#cfd8d3}.ach-t i{font-style:normal;font-size:28px}';
document.head.appendChild(st)}
function next(){var a=q.shift();if(!a){busy=false;return}busy=true;
 if(!document.body){q.unshift(a);setTimeout(next,300);return}
 style();var e=document.createElement('div');e.className='ach-t';e.setAttribute('role','status');
 e.innerHTML='<i>🏆</i><div><span>Достижение получено</span><b></b><span></span></div>';
 e.querySelector('b').textContent=a.name;e.children[1].children[2].textContent=a.desc;
 document.body.appendChild(e);setTimeout(function(){e.classList.add('in')},30);
 setTimeout(function(){e.classList.remove('in');setTimeout(function(){e.remove();next()},400)},3600)}
function check(c){L.forEach(function(a){if(a.c===c&&!D.u[a.id]&&(D.p[c]||0)>=a.goal){D.u[a.id]=Date.now();save();q.push(a);if(!busy)next()}})}
window.Ach={
 LIST:L,GAMES:G,
 add:function(c,n){D.p[c]=(D.p[c]||0)+(n===undefined?1:n);save();check(c)},
 max:function(c,v){if(v>(D.p[c]||0)){D.p[c]=v;save();check(c)}},
 val:function(c){return D.p[c]||0},
 has:function(id){return !!D.u[id]},
 count:function(){return L.filter(function(a){return D.u[a.id]}).length},
 total:function(){return L.length},
 reset:function(){D={u:{},p:{}};save()}
};
})();
