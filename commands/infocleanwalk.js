module.exports = {
  name: 'infocleanwalk',
  description: '',
  execute: async (message, args) => {
    const puppeteer = require("puppeteer");

    message.delete({timeout: 1});

    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto('https://www.cleanwalk.org/cleanwalks?page=1', { waitUntil: 'networkidle0' });

      const scrap = await page.evaluate(() => {

        list = [];

        for (i = 0; i < 5; i++) {
          try {
          let url = document.getElementsByClassName('media')[i].href.trim();
          let title = document.getElementsByClassName('title is-4')[i].innerHTML.trim();get
          /*
          let elements = document.querySelectorAll('.flex items-center')[i];
          console.log(elements)
          let location = elements[i].innerHTML.trim();
          let datetime = elements[i+1].innerHTML.trim();
          */
          let user_url = document.getElementsByClassName('link flex-column items-center justify-center has-text-centered')[i].href.trim();
          let user_name = document.getElementsByClassName('m-a-none')[i].innerHTML.trim();
          let user_avatar = document.getElementsByClassName('is-rounded')[i].src.trim();

          list.push(url, title, /*location, datetime,*/ user_url, user_name, user_avatar);
          } catch (err) {
            console.error(err);
          }

        };
        return list;
        
      });

      console.log(scrap);

      await browser.close();
      
      if (scrap.length != 0) {
        message.reply({embed : {
          color : '#2140b6',
          title : 'Voici les cinq prochaines cleanwalk',
          author : {url : 'https://cleanwalk.org', name : 'Cleanwalk.org'},
          thumbnail : {url : 'https://i.imgur.com/byqdKyp.png'},
        }});

        for (i = 0; i < scrap.length; ) {
          await new Promise(r => setTimeout(r, 500));
          message.reply({embed : {
            color : '#2140b6',
            url : scrap[i],
            title : scrap[i+1],
            description : 'Localisation : ' + scrap[i+2] + '\nDate et heure : ' + scrap[i+3],
            author : {url : scrap[i+4], name : scrap[i+5], iconURL : scrap[i+6]},
          }});
          i += 5;
        };

      } else {
        message.reply({embed : {
          color : '#ff0000',
          title : 'Aucune cleanwalk disponible',
          author : {url : 'https://cleanwalk.org', name : 'Cleanwalk.org'},
          thumbnail : {url : 'https://i.imgur.com/byqdKyp.png'},
        }});

      };

    } catch (err) {
      console.log(err);

    };

  }
};