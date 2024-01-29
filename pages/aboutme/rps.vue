<template>
  <div
    v-if="!displayResult"
    class="flex flex-col items-center pt-8 pb-4 lg:pb-0"
  >
    <RpsHeader :heading="$t('aboutme.rps.selectHeading')" />
    <div class="flex gap-12 items-center flex-wrap justify-center">
      <RpsSymbol
        :name="$t('aboutme.rps.rock')"
        symbol="Rock"
        :result="false"
        @selected="playRps"
      />
      <RpsSymbol
        :name="$t('aboutme.rps.paper')"
        symbol="Paper"
        :result="false"
        @selected="playRps"
      />
      <RpsSymbol
        :name="$t('aboutme.rps.scissors')"
        symbol="Scissors"
        :result="false"
        @selected="playRps"
      />
    </div>
  </div>
  <div v-else class="flex flex-col items-center pt-8 pb-4 lg:pb-0">
    <RpsHeader
      :heading="
        winnerName === 'Draw'
          ? $t('aboutme.rps.draw')
          : $t('aboutme.rps.winner') + ` ${winnerName}`
      "
    />
    <div class="flex gap-12 mb-8 items-center flex-wrap justify-center">
      <RpsSymbol
        :name="$t('aboutme.rps.' + userSelection)"
        :symbol="userSelection"
        :result="true"
      >
        <div class="text_regular_18 text-brightRed">
          {{ $t("aboutme.rps.yourSelection") }}
        </div>
      </RpsSymbol>
      <RpsSymbol
        :name="$t('aboutme.rps.' + meSelection)"
        :symbol="meSelection"
        :result="true"
      >
        <div class="text_regular_18 text-brightRed">
          {{ $t("aboutme.rps.mySelection") }}
        </div>
      </RpsSymbol>
    </div>
    <div class="text-center">
      <h3 class="h3_medium_18 text-lightGray">{{ $t("aboutme.rps.score") }}</h3>
      <div class="text_regular_18 text-lightGray">
        {{ `${userWin} : ${comWin}` }}
      </div>
    </div>
    <button
      id="btn-play-again"
      @click="displayResult = !displayResult"
      class="mt-2 text-warmOrange border-2 border-warmOrange rounded-md px-2 py-1 transition-all"
    >
      {{ $t("aboutme.rps.playAgain") }}
    </button>
  </div>
</template>

<style>
#btn-play-again:hover {
  box-shadow: 0 0 10px 0 #ff9800 inset, 0 0 10px 1px #ff9800;
}
</style>

<script setup lang="ts">
const rps = ["rock", "paper", "scissors"];
const gameNumber = ref(0);
const userWin = ref(0);
const comWin = ref(0);

const displayResult = ref(false);

const userSelection = ref("");
const meSelection = ref("");

const winnerName = ref("");
const path = useRoute().path;

const selectPick = () => {
  gameNumber.value++;
  const random = Math.random();
  if (gameNumber.value === 1) return "rock";
  else if (gameNumber.value === 2) {
    if (random <= 0.9) return "rock";
    else if (random <= 0.95) return "paper";
    else return "scissors";
  } else if (gameNumber.value === 3 || gameNumber.value === 4) {
    if (random <= 0.7) return "rock";
    else if (random <= 0.85) return "paper";
    else return "scissors";
  } else if (gameNumber.value === 5) {
    if (random <= 0.5) return "rock";
    else if (random <= 0.75) return "paper";
    else return "scissors";
  } else return rps[Math.floor(random * rps.length)];
};

const playRps = (selection: string) => {
  const comSelection = selectPick();
  userSelection.value = selection.toLowerCase();
  meSelection.value = comSelection;
  const winner = determineWinner(selection, comSelection);
  winnerName.value = winner;
  displayResult.value = true;
};

const determineWinner = (selected: string, computer: string) => {
  selected = selected.toLowerCase();
  computer = computer.toLowerCase();
  let winner: string = "";
  if (selected == "rock" && computer == "scissors") {
    userWin.value++;
    winner = "Du";
  } else if (selected == "rock" && computer == "paper") {
    comWin.value++;
    winner = "Burak";
  } else if (selected == "paper" && computer == "scissors") {
    comWin.value++;
    winner = "Burak";
  } else if (selected == "paper" && computer == "rock") {
    userWin.value++;
    winner = "Du";
  } else if (selected == "scissors" && computer == "paper") {
    userWin.value++;
    winner = "Du";
  } else if (selected == "scissors" && computer == "rock") {
    comWin.value++;
    winner = "Burak";
  } else if (selected == computer) {
    winner = "Draw";
  }
  if (path.includes("en-GB") && winner === "Du") winner = "You";
  return winner;
};
</script>
