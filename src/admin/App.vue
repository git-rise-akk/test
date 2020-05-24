<template lang="pug">
  .wrapper
    section.authorization
      .authorization__background
        .authorization__container
          .authorization__block
            h2.authorization__block-title Авторизация
            label.authorization__block-login
              .authorization__block-login__name Логин
              .authorization__block-login__container
                .login__container-icon
                input(type="txt").input__txt
            label.authorization__block-password
              .authorization__block-password__name Пароль
              .authorization__block-password__container
                input(type="password").input__password
            button.send Отправить
    section.my__info
      header.header
        .header__container
          .header__container-left
            .user__avatar
              .avatar
            .my__name Ткачёв Александр
            .header__container-title Панель администрирования
          .header__container-right
            a(href="#").exit Выйти
      .navigation__container
        nav.menu 
          -var items = ["Обо мне", "Работы", "Отзывы"]
          ul.menu__list
            each item in items
              li.menu__item
                a.menu__link #{item}
                  .line__header
      .my__info__block
        .my__info__block-title__container
          .title__container-title Блок "Обо мне"
          .title__container-add__group
            button.button-add__group
            button.button-add__group-txt Добавить группу
        .my__info-skills-container
          ul.skills__blocks
            li.skills__block
              .skills__block-title
                input(type="txt" placeholder="Название новой группы").skills__block-title__input
                .skills__block-editing
                  button.skills__block-check 
                  button.skills__block-cross
                  button.skills__block-pen 
                  button.skills__block-delete 
              .skills__block-middle
              .skills__block-new
                input(tapy="txt" placeholder="Новый навык").skills__block-new__input
                .interest__input-block
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                button.button-add__group.button-add__group--big
            li.skills__block
              .skills__block-title
                input(type="txt" placeholder="Workflow").skills__block-title__input
                .skills__block-editing
                  button.skills__block-check 
                  button.skills__block-cross 
                  button.skills__block-pen 
                  button.skills__block-delete 
              .skills__block-middle
                ul.skills__block__list
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
              .skills__block-new
                input(type="txt" placeholder="Новый навык").skills__block-new__input
                .interest__input-block
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                button.button-add__group.button-add__group--big
            li.skills__block
              .skills__block-title
                input(type="txt" placeholder="Frontend").skills__block-title__input
                .skills__block-editing
                  button.skills__block-check 
                  button.skills__block-cross 
                  button.skills__block-pen 
                  button.skills__block-delete 
              .skills__block-middle
                ul.skills__block__list
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
                  li.skill__block
                    input(type="txt" placeholder="HTML" ).skill__input
                    .interest__input-block
                      input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                    .skills__block-editing
                      button.skills__block-check 
                      button.skills__block-cross 
                      button.skills__block-pen 
                      button.skills__block-delete 
              .skills__block-new
                input(type="txt" placeholder="Новый навык").skills__block-new__input
                .interest__input-block
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                button.button-add__group.button-add__group--big
      .my-work__section
        .my-work__section-title__container
          .title__container-title Блок "Работы"
        .my-work__content
          .my-work__content-editing
            .editing-title__conteiner
              .editing-title Редактирование работы
            .form-editing
              .cover__block
                .cover
                  .cover__txt Перетащите или загрузите для загрузки изображения
                  label.cover__loading-custom
                    input(type="file").cover__loading
                    .cover__loading-custom__txt загрузить
              form.info__block
                .title-site Название
                input.name-site__input
                .title-site Ссылка
                input.link-site__input
                .title-site Описание
                textarea.description-site
                .title-site Добавление тэга
                input.tags__input
                .tags__container
                -var items = ["HTML", "CSS", "Javascript"]
                ul.tags__list
                  each item in items
                    li.tags__list__name #{item}
                .button__block
                  input(type="reset" value="Отмена").input__cancel
                  button(type="submit").send__form Сохранить
          .my-work__content-list
            ul.list-work
              li.list-work__block.list-work__block--new
                .add-work 
                  button.add__work-button
                  button.add__work-button__txt Добавить работу
              -var covers = ["../images/content/slider-1.jpg", "../images/content/slider-2.jpg", "../images/content/slider-3.jpg" ]
              each cover in covers
                li.list-work__block 
                  .site__cover #{cover}
                  -var tags = ["HTML", "CSS", "Javascript"]
                  ul.site__tags
                    each tag in tags
                      li.tag__block
                        .tag__txt #{tag}
                  .site__content
                    h4.site__title Сайт школы образования
                    p.site__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    a(href="http://loftschool.ru").site__link http://loftschool.ru
                    .list-work__button
                      button.edit__button Править
                      button.delete__button Удалить 
      .reviews__section
        .section-title__container
          .section-title__container-block Блок "Отзывы"
        .reviews__content
          .new__reviews
            .new__reviews-title__conteiner
              .new__reviews-title Новый отзывы
            .new__reviews-content
              .photo__container
                .user__photo__icon
                  .photo
                button.add__photo Добавить фото
              form.user__info
                .user__info-first__line
                  input.user__name
                  input.user__position
                textarea.reviews__txt
                .list-work__button
                  button.edit__button Править
                  button.delete__button Удалить
          .new__reviews__list
            ul.list-reveiws
              li.list-reviews__block.list-reviews__block--new
                .add-reviews 
                  button.add__reviews-button
                  button.add__reviews-button__txt Добавить работу
              -var photos = ["../images/content/slider-1.jpg", "../images/content/slider-2.jpg", "../images/content/slider-3.jpg" ]
              each photo in photos
                li.list-review__block 
                  .first__info
                    .user__photo
                      img(src="#{photo}").photo
                    .first__info__name-position__info
                      .first__info__user-name
                      .first__info__user-position
                  .user__info__content
                    p.site__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .list-work__button
                      button.edit__button Править
                      button.delete__button Удалить 



</template>

<script></script>

<style lang="postcss">
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

  body {
    margin: 0;
  }

  input {
    font-size: 16px;
  }

  .authorization {
    background-image: url('~images/content/pf1.png');
    position: relative;
    height: 100vh;
    width: 100%;
    display: block;

    .authorization__background {
      position: absolute;
      height: 100vh;
      width: 100%;
      background-color: #2d3c4e;
      opacity: 0.9;
      display: flex;
      justify-content: center;
      align-items: center;

      .authorization__container {
        background: white;
        height: 517px;
        width: 563px;
        display: flex;
        justify-content: center;
        align-items: center;
      
      }
    }
  }

  .authorization__block-title {
    color: #414c63;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
  }

  .authorization__block-login__name, .authorization__block-password__name {
    opacity: 0.3;
    color: #414c63;
    font-size: 16px;
    margin-top: 40px;
  }

  .authorization__block-login, .authorization__block-password {
    margin-bottom: 40px;
    position: relative;
  }

  .input__txt, .input__password {
    width: 100%;
    border: none;
    border-bottom: 1px solid #414c63 ;
    padding-left: 45px;
  }

  .login__container-icon {
    background: url("../images/icons/user.svg") no-repeat center;
  }

  .send {
    padding: 34px 120px;
    text-transform: uppercase;
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    background-image: linear-gradient(to right, #7b00e9, #4a00ed);
    border-radius: 50px 0px 50px 0px;
    margin-top: 40px;

    @include phones() {
      padding: 24px 82px;
    }
  }


  .header {
    height: 80px;
    background-image: linear-gradient(to right, #3e3e59 0%, #454573 100%);
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    height: 80px;
    margin: 0 auto;
    color: #fff;

    @include phones() {
      flex-direction: column;
    }

    .header__container-left {
      display: flex;
      align-items: center;

      .user__avatar {
        width: 44px;
        height: 45px;
        overflow: hidden;
        border-radius: 50%;
        margin-right: 20px;

        .avatar {
          background: url("../images/content/user.jpg") center center / cover no-repeat;;
          display: block;
          max-width: 100%;
          height: 100%;
        }

      }

      .my__name {
        margin-right: 28px;
      }

      .header__container-title {
        opacity: 0.5;
        @include phones() {
          display: none;
        }
      } 
    }

    .exit {
      opacity: 0.5;
    }
  }
  .navigation__container {
    height: 77px;

    .menu {
      height: 77px;
    }
  }

  .menu__list {
    height: 77px;
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;

    .menu__item {
      margin-left: 58px;

      &:hover .line__header {
        width: 100%;
        transition: 0.3s;
      }
    }

    .menu__link {
      &:hover {
        color: #383bcf;
      }

    }

    .line__header {
        width: 0;
        height: 3px;
        background: #383bcf;
    }
    
  }

  .my__info__block {

    .my__info__block-title__container {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding-bottom: 57px;

      @include phones() {
        flex-direction: column;
        align-items: flex-start;
      }

      .title__container-title {
        font-size: 21px;
        font-weight: bold;
      }

      .title__container-add__group {
        margin-left: 59px;
        display: flex;

        @include phones() {
          margin: 36px 0 0;
        }

        .button-add__group-txt {
          border: none;
          background: transparent;
          color: #383bcf;
          font-size: 16px;
          font-family: "Open Sans - Semibold";
        }
      }
    }

    .my__info-skills-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .skills__blocks {
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 32px 30px;
    }
    .skills__block {
      padding: 30px 20px;
      min-height: 387px;
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
      background-color: #ffffff;

      .skills__block-title {
        display: flex;
        justify-content: space-between;
        height: 45px;
        border-bottom: 1px solid rgba(0, 0, 0, .3 ); 

        .skills__block-title__input {
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          width: 60%;
          margin-bottom: 14px;
        }

        
      }

      .skills__block-middle {
        min-height: 239px;

        .skills__block__list {
          padding-top: 27px;
        }
      }

      .skills__block-new {
        display: flex;
        justify-content: flex-end;

        .skills__block-new__input {
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          margin-right: 10px;
          padding: 0 0 16px 20px;
        }

        .interest__input {
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          text-align: center;
          padding: 0 0 16px;

        }

        .button-add__group--big {
          width: 40px;
          height: 40px;
          margin-left: 30px;

          &:before {
            width: 15px;
          }

          &:after {
            height: 15px;
          }
        }
      }
    }

    .button-add__group {
      width: 21px;
      height: 21px;
      border-radius: 50%;
      background: #383bcf;
      position: relative;  

      &:before {
        content: "";
        position: absolute;
        width: 9px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      &:after {
        content: "";
        position: absolute;
        width: 2px;
        height: 9px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    li.skill__block {
      display: flex;
      margin-bottom: 20px;
    }

    .skills__block-check, .skills__block-pen {
      margin-right: 19px;
    }

    .skills__block-pen, .skills__block-delete {
      display: none;
      width: 15px;
      height: 15px;
    }

    .skills__block-check {
      width: 15px;
      height: 15px;
      background: svg-load("tick.svg", fill="#00d70a") center center no-repeat;
    }

    .skills__block-cross {
      width: 15px;
      height: 15px;
      background: svg-load("cross.svg", fill="#bf2929") center center no-repeat;
    }

    .skills__block-pen {
      background: svg-load("pencil.svg", fill="$text-color") center center no-repeat;
    }

    .skills__block-delete {
      background: svg-load("trash.svg", fill="$text-color") center center no-repeat;
    }

    .skill__input {
      border: none;
      width: 68%;
    }

    .interest__input {
      border: none;
      width: 55px;
      padding-right: 15px;
      
    }

    .interest__input-block {
      position: relative;

      &:after {
        content: "%";
        position: absolute;
        right: 2px;
      }
    }

    .skills__block-editing {
      display: flex;
      margin-left: 50px;
    }
  }

  .my-work__section {

    .my-work__section-title__container {
      display: flex;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
      padding-bottom: 57px;
      padding-top: 60px;

      @include phones() {
        flex-direction: column;
        align-items: flex-start;
      }

      .title__container-title {
        font-size: 21px;
        font-weight: bold;
      }
    }

    .my-work__content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .my-work__content-editing {
      width: 100%;
      height: auto;
      padding: 30px;
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
      margin-bottom: 32px;

      .editing-title__conteiner {
        height: 45px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,.3);
        margin-bottom: 48px;

        .editing-title {
          padding-left: 11px;
          color: #414c63;
          font-size: 18px;
          font-weight: bold;
        }
      } 
    }

    .form-editing {
      width: 100%;
      display: flex;

      .cover__block {
        width: 50%;
        margin-right: 28px;

        .cover {
          width: 100%;
          height: 276px;
          border: 1px dashed #a1a1a1;
          background-color: #dee4ed;
          text-align: center;
          padding: 86px 138px 64px;

          
        }
      }

      .info__block {
        width: 50%;
      }
    }

    .cover__loading {
      display: none;
    }

    .cover__loading-custom__txt {
      text-align: center;
      width: 181px;
      height: 50px;
      border-radius: 30px;
      margin: 27px auto 0;
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      font-size: 16px;
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;
      padding: 15px 45px;  
    }

    .name-site__input, .link-site__input, .tags__input,  {
      outline: none;
      border: none;
      width: 100%;
      border-bottom: 1px solid #000;
      padding: 20px 0 20px;
      margin-bottom: 30px;
    }

    .description-site {
      width: 100%;
      height: 146px;
      margin-bottom: 30px;
      margin-top: 19px;
      padding: 20px 81px 20px 20px;
      resize: none;
      font-size: 16px;
      color: #414c63;
      font-family: "Open Sans - Semibold";
    }

    .title-site {
      font-size: 16px;
      opacity: 0.5;  
    }

    .tags__list {
      display: flex;

    }

    .tags__list__name {
      margin-right: 9px;
      border-radius: 25px;
      background-color: #f4f4f4;
      text-align: center;
      position: relative;
      padding: 11px 33px 11px 19px;
      margin-bottom: 40px;

      &:after {
        content: "";
        position: absolute;
        right: 13px;
        background: svg-load("cross.svg", fill="$text-color") center center no-repeat;
        width: 11px;
        height: 11px;
        top: 17px;
        cursor: pointer;

      }

    }

    .button__block {
      display: flex;
      justify-content: flex-end;

      .send__form {
        background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
        font-size: 16px;
        color: #fff;
        text-transform: uppercase;
        padding: 24px 40px;
        border-radius: 30px;
        margin-left: 59px;
      }

      .input__cancel {
        background: transparent;
        border: none;
        font-size: 16px;
        color: #383bcf;
        cursor: pointer;
      }
    }

    .list-work {
      display: grid;
      grid-template-columns: 33% 33% 33%;
      grid-gap: 30px 30px;
    }

    .list-work__block {
      height: auto;
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    }

    .list-work__block--new {
      background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-work  {
      display: flex;
      flex-direction: column;
      align-items: center
    }
    .add__work-button {
      width: 150px;
      height: 150px;
      border: 2px solid #ffffff;
      background: transparent;
      border-radius: 50%;
      position: relative;
      margin-bottom: 30px;

      &:before {
        content: "";
        position: absolute;
        width: 2px;
        height: 34px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)
      }

      &:after {
        content: "";
        position: absolute;
        width: 34px;
        height: 2px;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    }

    .add__work-button__txt {
      background: transparent;
      color: #fff; 
      font-size: 18px;
      width: 93px; 
    }

    .site__cover {
      width: 100%;
      height: 190px;
    }

    .site__content {
      padding: 40px 46px 40px 30px;

      .site__title {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 24px;
      }

      .site__info {
        margin-bottom: 30px;
      }

      .site__link {
        color: #383bcf;
      }

      .list-work__button {
        display: flex;
        justify-content: space-between;
        margin-top: 46px;

        .edit__button {
          background: transparent;
          font-size: 16px;
          position: relative;
          color: rgba(0, 0, 0, 0.5);

          &:after {
            content: "";
            position: absolute;
            width: 17px;
            height: 17px;
            top: 0;
            background: svg-load("trash.svg", fill="$text-color") center center no-repeat;
          }
        }

        .delete__button {
          background: transparent;
          position: relative;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.5);

          &:after {
            content: "";
            position: absolute;
            width: 17px;
            height: 17px;
            top: 2px;
            right: -14px;
            background: svg-load("cross.svg", fill="red") center center no-repeat;
          }
        }
      }
    }

    .site__tags {
      display: flex;
      

      .tag__block {
        margin-right: 9px;
        border-radius: 25px;
        background-color: #f4f4f4;
        text-align: center;
        padding: 11px 18px;
      }
    }
  }

  .section-title__container {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 57px;
    padding-top: 60px;

    .section-title__container-block {
      padding-left: 11px;
      color: #414c63;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .reviews__content {
    max-width: 1200px;
    margin: 0 auto;

    .new__reviews {
      width: 100%;
      height: auto;
      padding: 30px 208px 50px 30px;
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    }
  }

  .new__reviews-title__conteiner {
    height: 45px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.3);
    margin-bottom: 48px;

    .new__reviews-titl {
      padding-left: 11px;
      color: #414c63;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .new__reviews-content {
    display: flex;

    .photo__container {
      width: 25%;
      height: 100%;
      margin-right: 30px;


      .user__photo__icon {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #dee4ed;

      }

      .add__photo {
        background: transparent;
        font-size: 16px;
        color: #383bcf;
        margin: 0 auto;
        padding: 0;
      }
    }
  }


</style>