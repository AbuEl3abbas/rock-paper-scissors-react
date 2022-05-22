import { configureStore, createSlice } from "@reduxjs/toolkit";

const randomNumber = () => {

    return Math.floor(Math.random() * 3);

}

const initialState = {
    user: 0,
    computer: 0,
    comment: 'Do your move...!!!'
}
const gameSlice = createSlice({
    name: 'game',
    initialState: initialState,
    reducers: {
        game: (state, { payload }) => {

            const computerChoice = randomNumber();

            switch (payload) {
                case 'rock':
                    if (computerChoice === 2) {
                        return {
                            ...state,
                            comment: "rock breaks scissors, you WIN...🔥",
                            user: state.user + 1
                        }
                    }
                    else if (computerChoice === 1) {
                        return {
                            ...state,
                            comment: 'rock loses to paper, you Lose...💩',
                            computer: state.computer + 1
                        }
                    }
                    else {
                        return {
                            ...state,
                            comment: "TIE...😐",
                        }
                    }
                case 'paper':
                    if (computerChoice === 0) {
                        return {
                            ...state,
                            comment: 'paper beats rock, you WIN...🔥',
                            user: state.user + 1
                        }
                    }
                    else if (computerChoice === 2) {
                        return {
                            ...state,
                            comment: 'paper loses to scissors, you Lose...💩',
                            computer: state.computer + 1
                        }
                    }
                    else {
                        return {
                            ...state,
                            comment: "TIE...😐",
                        }
                    }

                case 'scissors':
                    if (computerChoice === 1) {
                        return {
                            ...state,
                            comment: 'scissors cut paper, you WIN...🔥',
                            user: state.user + 1
                        }
                    }
                    else if (computerChoice === 0) {
                        return {
                            ...state,
                            comment: 'scissors loses to rock, you Lose...💩',
                            computer: state.computer + 1
                        }
                    }
                    else {
                        return {
                            ...state,
                            comment: "TIE...😐",
                        }
                    }

            }

        }
    }
});

export default gameSlice.reducer

export const { game } = gameSlice.actions