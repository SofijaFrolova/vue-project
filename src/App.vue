<template>
  <div id="app">
    <NavigationBar :activePage="activePage" :pages="pages" @update:activePage="activePage = $event"/>
    <ViewPage v-if="activePage < 2" :page="pages[activePage]" />
    <TicTacToe v-else :pageTitle="pages[2].pageTitle" />
  </div>
</template>

<script>
import ViewPage from './components/ViewPage.vue';
import NavigationBar from './components/NavigationBar.vue';
import TicTacToe from './components/TicTacToe.vue';

export default {
  components: {
    ViewPage,
    NavigationBar,
    TicTacToe
  },
  data() {
    return {
      activePage: 0,
      pages: [
        {
          link: {text: 'About', url: '#about'},
          pageTitle: 'About Tic-Tac-Toe',
          content: `<p>Tic-tac-toe is a fun game that you can play any time long as you have an opponent.
              Tic-tac-toe is a zero-sum game, which means that if both players are playing their best, then neither player will win.
              However, if you learn how to play tic-tac-toe and master some simple strategies, then you\'ll be able to not only play but win the majority of the time.</p>`
        },
        {
          link: {text: 'Game Rules', url: '#rules'},
          pageTitle: 'Tic-Tac-Toe Rules',
          content: `
                <p>Classic Instructions:</p>
                <p>Played with two people.</p>
                <ol>
                  <li> Decide who goes first. That player can choose to be Xs or Os.</li>
                  <li> The first player chooses which square to place their X or O.</li>
                  <li> The second player then uses the other symbol and chooses where to place it.</li>
                  <li> The players continue taking turns until one player gets three in a row or “tic-tac-toe” across a row, column or diagonally.</li>
                </ol>
              `
        },
        {
          link: {text: 'Play', url: '#play'},
          pageTitle: 'Tic-Tac-Toe',
          content: `<p>Start the Game</p>`
        }
      ]
    };
  },
};
</script>

<style>
/* Add your global styles here */
</style>
