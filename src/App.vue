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
          content: 'Tic-tac-toe is a fun game that you can play any time and anywhere as long as you have a piece of paper, a pencil, and an opponent. ' +
              'Tic-tac-toe is a zero-sum game, which means that if both players are playing their best, then neither player will win. ' +
              'However, if you learn how to play tic-tac-toe and master some simple strategies, then you\'ll be able to not only play but win the majority of the time.'
        },
        {
          link: {text: 'Game Rules', url: '#rules'},
          pageTitle: 'Tic-Tac-Toe Rules',
          content: 'Classic Instructions:\n' +
              'Played with two people.\n' +
              '1) Decide who goes first. That player can choose to be\n' +
              'Xs or Os.\n' +
              '2) The first player chooses which square to place their X or O.\n' +
              '3) The second player then uses the other symbol and chooses where to place it.\n' +
              '4) The players continue taking turns until one player gets three in a row or “tic-tac-toe”\n' +
              'across a row, column or diagonally.'
        },
        {
          link: {text: 'Play', url: '#play'},
          pageTitle: 'Tic-Tac-Toe',
          content: 'Start the Game'
        }
      ]
    };
  },
};
</script>

<style>
/* Add your global styles here */
</style>
