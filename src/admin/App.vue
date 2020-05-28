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
                .authorization-icon
                input(type="txt" onFocus="document.querySelector('.authorization-icon').classList.toggle('authorization-icon--active');" onFocusOut="document.querySelector('.authorization-icon').classList.toggle('authorization-icon--active');").input__txt
            label.authorization__block-password
              .authorization__block-password__name Пароль
              .authorization__block-password__container
                .authorization-icon.authorization-icon--password
                input(type="password" onFocus="document.querySelector('.authorization-icon--password').classList.toggle('authorization-icon--password--active');" onFocusOut="document.querySelector('.authorization-icon--password').classList.toggle('authorization-icon--password--active');").input__password
            button.send Отправить
    .admin__pages
      header.header
        .header__container
          .user__avatar
            .avatar
          .header__text
            .my__name Ткачёв Александр
            .header__container-title Панель администрирования
            a(href="#").exit Выйти
      .navigation__container
        nav.menu 
          -var items = ["Обо мне", "Работы", "Отзывы"]
          ul.menu__list
            each item in items
              li.menu__item
                a.menu__link #{item}
                  .line__header
      section.my__info__section
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
      section.my-work__section
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
              .change__cover
                label.cover__loading-custom
                    input(type="file").cover__loading
                    .cange__cover__text Изменить превью
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
                .add__block
                  button.add__block-button
                  button.add__block-button__text Добавить работу
              -var covers = ["../images/content/slider-1.jpg", "../images/content/slider-2.jpg", "../images/content/slider-3.jpg" ]
              each cover in covers
                li.list-work__block 
                  .site__cover
                    img(src=cover).site__cover__img 
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
      section.reviews__section
        .section-title__container
          .section-title__container-block Блок "Отзывы"
        .reviews__content
          .new__reviews
            .new__reviews-title__conteiner
              .new__reviews-title Новый отзывы
            .new__reviews-content
              .photo__container
                .user__photo__icon
                  img(src="../images/content/man-user.png").photo
                label.add__photo
                  input(type="file").add__photo__input
                  .input__text Добавить фото
              form.user__info
                .first__line
                  .user-name Имя автора
                    input.user-name__input
                  .user-position Титул автора
                    input.user-position__input
                .textarea__title Отзыв
                textarea.review-text
                .button__block
                  input(type="reset" value="Отмена").input__cancel
                  button(type="submit").send__form Сохранить
          .new__reviews__list
            ul.list-reveiws
              li.list-reviews__block.list-work__block--new
                .add__block 
                  button.add__block-button
                  button.add__block-button__text Добавить отзыв
              -var photos = ["../images/content/user.jpg", "../images/content/user.jpg", "../images/content/user.jpg" ]
              each photo in photos
                li.list-review__block 
                  .first__info
                    .user__photo
                      img(src=photo).photo
                    .first__info__name-position__info
                      .first__info__user-name Владимир Сабанцев
                      .first__info__user-position Преподаватель
                  .user__info__content
                    p.site__info Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                    .list-work__button
                      button.edit__button Править
                      button.delete__button Удалить 
      .status
        ul.status__container
            li.status__block
              .message
                .message__text Сообщение отправлено
                button.cross
            li.status__block.status__block--orange
              .message
                .message__text Сервер перегружен
                button.cross
            li.status__block.status__block--red
              .message
                .message__text Сообщение не отправлено
                button.cross

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

        @include phones() {
          height: 100vh;
        }

        .authorization__block {
          display: flex;
          flex-direction: column;

          @include phones() {
            width: 90%;
          }
          
        }
      
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
    padding-left: 45px;
  }

  .authorization__block-login, .authorization__block-password {
    margin-bottom: 40px;
  }

  .input__txt, .input__password {
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #414c63 ;
    padding: 33px 0 20px 45px;

    &:hover {
      border-bottom: 1px solid #4a00ed;
    }

    &:focus {
      border-bottom: 1px solid #4a00ed;
    }
    
  }

  .authorization__block-login__container {
    position: relative;
  }

  .authorization-icon {
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 15px;
    left: 0;
    background: svg-load("user.svg", fill="#000") center center / contain no-repeat;
    opacity: 0.3;
    z-index: 1;

    &--active {
      background: svg-load("user.svg", fill="#4a00ed") center center / contain no-repeat;
      opacity: 1;
      transition: 0.3s;
    }

  }

  
  .authorization__block-password__container {
    position: relative;

  }

  .authorization-icon--password {
    background: svg-load("key.svg", fill="#000") center center / contain no-repeat;

    &--active {
      background: svg-load("key.svg", fill="#4a00ed") center center / contain no-repeat;
      opacity: 1;
      transition: 0.3s;
    }
  }

  
  .send {
    padding: 34px 120px;
    text-transform: uppercase;
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    background-image: linear-gradient(to right, #7b00e9, #4a00ed);
    border-radius: 50px 0px 50px 0px;
    margin: 0 auto;

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

    .user__avatar {
      min-width: 44px;
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

    .header__text {
      display: flex;
      align-items: center;
      width: 100%;

      @include phones() {
        flex-direction: column;
        align-items: flex-start;
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
      margin-left: auto;
      text-decoration: underline;
;

      @include phones() {
        margin: 0;
      }
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

  .my__info__section {

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
      grid-template-columns: 48.75% 48.75%;
      grid-gap: 32px 30px;

      @include phones() {
        grid-template-columns: 100%;
      }
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

        @include tablets() {
          justify-content: center;
        }

        .skills__block-new__input {
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          margin-right: 10px;
          padding: 0 0 16px 20px;
          width: 60%;
        }

        .interest__input {
          outline: none;
          border: none;
          border-bottom: 1px solid black;
          text-align: center;
          padding: 0 10px 16px 0;

        }

        .button-add__group--big {
          min-width: 40px;
          height: 40px;
          margin-left: 30px;
          padding: 0;

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
      padding: 0;
      background: svg-load("tick.svg", fill="#00d70a") center center no-repeat;
    }

    .skills__block-cross {
      width: 15px;
      height: 15px;
      padding: 0;
      background: svg-load("cross.svg", fill="#bf2929") center center no-repeat;
    }

    .skills__block-pen {
      background: svg-load("pencil.svg", fill="$text-color")  center center / contain no-repeat;
    }

    .skills__block-delete {
      background: svg-load("trash.svg", fill="$text-color")  center center / contain no-repeat;
    }

    .skill__input {
      border: none;
      width: 72%;
      outline: none;
  
      &:focus {
        border-bottom: 1px solid black;
      }
    }

    .interest__input {
      border: none;
      width: 55px;
      padding-right: 10px;
      outline: none;
      
      &:focus {
        border-bottom: 1px solid black;
      }
      
    }

    .interest__input-block {
      position: relative;

      &:after {
        content: "%";
        position: absolute;
        right: 1px;
      }
    }

    .skills__block-editing {
      display: flex;
      margin-left: 50px;

      @include tablets() {
        margin-left: 31px;
      }
    }
  }

  .my-work__section {
    border: none;

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

      @include tablets() {
        display: block;
      }

      .cover__block {
        width: 50%;
        margin-right: 28px;

        @include tablets {
          width: 466px;
          height: 261px;
          margin: 0 auto;
        }

        @include phones() {
          width: 100%;
          margin: 0;
        }

        .cover {
          width: 100%;
          height: 276px;
          border: 1px dashed #a1a1a1;
          background-color: #dee4ed;
          text-align: center;
          padding: 86px 137px 50px;

          @include desktop() {
            padding: 86px 20% 50px;
          }

          @include tablets() {
            height: 261px; 
          }
        }
      }

      .info__block {
        width: 50%;

        @include tablets() {
          width: 497px;
          margin: 54px auto 0;
        }

        @include phones() {
          width: 100%;
        }
      }

      .change__cover {
        margin-top: 30px;
        display: none;

        .cange__cover__text {
          text-align: center;
          color: #383bcf;
        }
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

    .name-site__input, .link-site__input, .tags__input  {
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

    .list-work {
      display: grid;
      grid-template-columns: 31.6% 31.6% 31.6%;
      grid-gap: 30px 30px;

      @include tablets() {
        grid-template-columns: 47.5% 47.5%;
      }

      @include phones() {
        grid-template-columns: 100%;
      }
    }

    .list-work__block {
      height: auto;
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    }

    .site__cover {
      position: relative;
    }
    
    img.site__cover {
      max-width: initial;
      max-height: initial;
    }

    .site__cover__img {
      width: 100%;
      height: 100%;
    }

    .site__tags {
      position: absolute;
      bottom: 0;
      right: 0;
      padding-bottom: 10px;
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
      margin-bottom: 30px;

      @include tablets() {
        padding: 30px 30px 50px 30px;
      }
    }
  }

  .new__reviews-title__conteiner {
    height: 45px;
    width: 100%;
    border-bottom: 1px solid rgba(0,0,0,.3);
    margin-bottom: 48px;

    .new__reviews-title {
      padding-left: 11px;
      color: #414c63;
      font-size: 18px;
      font-weight: bold;
    }
  }
  .new__reviews-content {
    display: flex;

    @include tablets-600 {
      flex-direction: column;
    }

    .photo__container {
      width: 200px;
      height: 100%;
      margin-right: 30px;

      @include tablets-600 {
        margin: 0 auto 27px;
      }

      .user__photo__icon {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #dee4ed;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .add__photo {
        text-align: center;
      }


      .add__photo__input {
        display: none;
      }

      .input__text {
        font-size: 16px;
        color: #383bcf;
        margin-top: 27px;
        padding: 0;
        cursor: pointer;
      }
    }

    .user__info {
      width: 100%;
    }

    .first__line {
      display: flex;
      margin-bottom: 40px;

      @include tablets() {
        flex-direction: column;
        width: 70%;
      }

      @include tablets() {
        width: 100%;
      }
    }

    .user-name, .user-position {
      width: 100%;
      margin-right: 30px;
      color: rgba(0, 0, 0, 0.5);
    }

    .user-name {
      @include tablets() {
        margin-bottom: 40px;
      }
    }

    .user-name__input, .user-position__input {
      width: 100%;
      padding: 17px 0;
      border: none;
      border-bottom: 1px solid black;
    }

  }

  .review-text {
    width: 100%;
    height: 116px;
    resize: none;
    padding: 20px;
    margin-bottom: 29px;
  }

  .user__photo {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 20px;
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
      padding: 0 27px 0 0;

      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        top: 1px;
        right: 5px;
        background: svg-load('pencil.svg', fill=$links-color, width=100%, height=100%) center;
      }
    }

    .delete__button {
      background: transparent;
      position: relative;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.5);
      padding: 0 27px 0 0;

      &:after {
        content: "";
        position: absolute;
        width: 17px;
        height: 17px;
        top: 1px;
        right: 5px;
        background: svg-load("cross.svg", fill="red") center center no-repeat;
      }
    }
  }

  .button__block {
    display: flex;
    justify-content: flex-end;

    @include tablets() {
      justify-content: center;
    }

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

  .textarea__title {
    opacity: 0.5;
    margin-bottom: 19px ;
  }

  .list-reveiws {
    display: grid;
    grid-template-columns: 31.6% 31.6% 31.6%;
    grid-gap: 30px 30px;

    @include tablets() {
      grid-template-columns: 47.5% 47.5%;
    }

    @include phones() {
      grid-template-columns: 100%;
    }

    .list-review__block {
      box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
      padding: 30px 20px;
    }

    .list-reviews__block--new {

    }
  }

  .list-work__block--new {
    background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 111px;

  }

  .add__block  {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include phones() {
      flex-direction: row;
    }
  }
    
  .add__block-button {
    width: 150px;
    height: 150px;
    border: 2px solid #ffffff;
    background: transparent;
    border-radius: 50%;
    position: relative;
    margin-bottom: 30px;

    @include phones() {
      max-width: 50px;
      max-height: 50px;
      margin: 0;
    }

    &:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 34px;
      background: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      @include phones() {
        width: 2px;
        height: 11px;
      }
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

      @include phones() {
        width: 12px;
        height: 2px;
      }
    }

  }

  .add__block-button__text {
    background: transparent;
    color: #fff; 
    font-size: 18px;
    width: 93px;

    @include phones() {
      width: 100%;
    } 
  }

  .first__info {
    display: flex;
    margin-bottom: 29px;
    padding-bottom: 33px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .first__info__user-name {
    font-weight: bold;
    font-size: 18px;
  }

  .first__info__user-position {
    opacity: 0.5;
  }

  .site__info {
    padding: 0 26px 30px 10px;
  }

  .status {
    width: 100%;
    position: fixed;
    bottom: 0;
  }

  .status__container {
    max-width: 1200px;
    height: 75px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .status__block {
    height: 75px;
    width: 31%;
    background-color: #4bb133;
    font-size: 18px;
    color: #fff;
    padding: 27px 25px;
  }

  .status__block--orange {
    background-color: #b18333;
  }

  .status__block--red {
    background-color: #b13333;
  }

  .cross {
    background: svg-load("cross.svg", fill="#fff") center center no-repeat;
    width: 20px;
    height: 20px;
  }

  .message {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
</style>