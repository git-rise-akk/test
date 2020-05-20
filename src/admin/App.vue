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
            .icon-add__group
            button.button-add__group Добавить группу
      .my__info-skills-container
        ul.skills__blocks
          li.skills__block
            .skills__block-title
              input(type="txt" placeholder="Название новой группы").skills__block-title__input
              .skills__block-check v
              .skills__block-cross x
              .skills__block-pen i
              .skills__block-delete k
            .skills__block-middle
            .skills__block-new
              input(tapy="txt" placeholder="Новый навык").skills__block-new__input
              input(type="number" min="0" max="100" step="10" placeholder="100")
              button.button-add__group.button-add__group--big
          li.skills__block
            .skills__block-title
              input(type="txt" placeholder="Workflow").skills__block-title__input
              .skills__block-editing
                .skills__block-check v
                .skills__block-cross x
                .skills__block-pen i
                .skills__block-delete k
            .skills__block-middle
              ul.skills__block__list
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
            .skills__block-new
              input(type="txt" placeholder="Новый навык").skills__block-new__input
              input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
              button.button-add__group.button-add__group--big
          li.skills__block
            .skills__block-title
              input(type="txt" placeholder="Frontend").skills__block-title__input
              .skills__block-editing
                .skills__block-check v
                .skills__block-cross x
                .skills__block-pen i
                .skills__block-delete k
            .skills__block-middle
              ul.skills__block__list
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
                li.skill__block
                  input(type="txt" placeholder="HTML" ).skill__input
                  input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
                  .skills__block-editing
                    .skills__block-check v
                    .skills__block-cross x
                    .skills__block-pen i
                    .skills__block-delete k
            .skills__block-new
              input(type="txt" placeholder="Новый навык").skills__block-new__input
              input(type="number" min="0" max="100" step="10" placeholder="100").interest__input
              button.button-add__group.button-add__group--big
</template>

<script></script>

<style lang="postcss">
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');

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



  .header__container {
    height: 80px;
    background: red;
    display: flex;
    justify-content: space-between;

    .header__container-left {
      display: flex;

      .user__avatar {
        width: 44px;
        height: 45px;

        .avatar {
          background-image: url("../images/content/user.jpg");
          width: 100%;
          height: 100%;
        }

      }

      
    }
  }
</style>