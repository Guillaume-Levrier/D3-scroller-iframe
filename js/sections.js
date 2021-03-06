function display() {

var scroll = scroller().container(d3.select('#graphic'));

scroll(d3.selectAll('.step'));

        scroll.on('active', function (index) {
                d3.selectAll('.step').style('opacity', function (d, i) { return i === index ? 1 : 0.1; });
                let sourceCredit = "Source/Credit: ";
                  switch (index) {
                    case 0: //starting point
                          document.getElementById('iframe').src = "schema.html";
                          document.getElementById('source').innerText = sourceCredit + "Guillaume Levrier - Digital Culture @ Sciences Po";
                          break;
                    case 1: //1 
                          document.getElementById('iframe').src = "explorations.html";
                          document.getElementById('source').innerText = "";
                          break;

                    case 2: //Theroux
                          document.getElementById('iframe').src = "theroux.html";
                          document.getElementById('source').innerText = sourceCredit + "@louistherouxbot by Andy Kelly - Twitter";
                          break;

                    case 3: //Mapping
                          document.getElementById('iframe').src = "https://imgs.xkcd.com/comics/map_projections.png";
                          document.getElementById('source').innerText = sourceCredit + "xkcd.com/977 by Randall Munroe - XKCD";
                          break;

                    case 4: //PornVsReality
                          document.getElementById('iframe').src = "img/soska117meme.png";
                          document.getElementById('source').innerText = sourceCredit + "@soska_117 - Instagram / edited by Guillaume Levrier";
                          break;

                    case 5: //NationBuilder
                          document.getElementById('iframe').src = "https://nationbuilder.com/";
                          document.getElementById('source').innerText = sourceCredit + "nationbuilder.com";
                          break;

                    case 6: //MeToo
                          document.getElementById('iframe').src = "img/timecoversilencebreakers.png";
                          document.getElementById('source').innerText = sourceCredit + "Time’s Person of the Year issue 2017";
                          break;
                    case 7: //Cash
                          document.getElementById('iframe').src = "https://www.nytimes.com/interactive/2018/01/27/technology/social-media-bots.html";
                          document.getElementById('source').innerText = sourceCredit + "NICHOLAS CONFESSORE, GABRIEL J.X. DANCE, RICHARD HARRIS and MARK HANSEN - 27/01/2018 - The New York Times";
                          break;
                    case 8: //meta
                          document.getElementById('iframe').src = "blank.html";
                          document.getElementById('source').innerText = "";
                          break;

                    case 9: //findingData
                          document.getElementById('iframe').src = "img/china-surveillance-ai.jpg";
                          document.getElementById('source').innerText = sourceCredit + "REUTERS/Bobby Yip";
                          break;

                    case 10: //ShedANewLight
                          document.getElementById('iframe').src = "  https://lemonde.fr/mmpub/edt/zip/2018/06/26/134110911-93bc7e170115d2edd843aef16eaf6a7eaedb6248/index.html";
                          document.getElementById('source').innerText = sourceCredit + "Le Monde/Les Décodeurs, Agathe Dahyot, Pierre Breteau et Adrien Sénécat";
                          break;

                    case 11: //Squad system
                          document.getElementById('iframe').src = "ncase-crowds/index.html";
                          document.getElementById('source').innerText = sourceCredit + "Nicky Case (@ncase) -  https://ncase.me/crowds/";
                          break;

                    case 12: //Grades
                          document.getElementById('iframe').src = "grades.html";
                          document.getElementById('source').innerText =  "";
                          break;

                    case 13: //Rules
                          document.getElementById('iframe').src = "rules.html";
                          document.getElementById('source').innerText = sourceCredit + "Sciences Po";
                          break;

                    case 14: //Final remarks
                          document.getElementById('iframe').src = "https://www.youtube.com/embed/IOkHL8CC1y4?autoplay=1&mute=1#modestbranding=1&controls=0";
                          document.getElementById('source').innerText = sourceCredit + "Baron Noir - Kwaï/Studiocanal";
                          break;

                  };
            });

        scroll.on('progress', function (index, progress) {
        });
}

display();
