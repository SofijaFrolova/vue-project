<template>
  <div class="tic-tac-toe">
    <h2>{{ pageTitle }}</h2>
    <div class="board">
      <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
        {{ cell }}
      </div>
    </div>
    <p v-if="winner !== null && winner !== 'Draw'">{{ winner }} wins!</p>
    <p v-else-if="winner === 'Draw'">It's a draw!</p>
    <button @click="resetGame">Reset Game</button>
  </div>
</template>

<script>
export default {
  props: ['pageTitle'],
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: 'X',
      winner: null
    };
  },
  methods: {
    makeMove(index) {
      if (!this.board[index] && !this.winner) {
        // Vue 3 automatically handles reactivity when setting array elements
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.winner = this.board[a];
          return;
        }
      }
      if (!this.board.includes(null)) {
        this.winner = 'Draw';
      }
    },
    resetGame() {
      this.board = Array(9).fill(null);
      this.currentPlayer = 'X';
      this.winner = null;
    }
  }
};
</script>

<style scoped>
.tic-tac-toe {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Ensure the component takes full height of viewport */
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  margin: 20px 0;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  font-size: 24px;
  cursor: pointer;
}

button {
  margin-top: 20px;
}
</style>
