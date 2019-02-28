const keys = {
  intro: 'hiddenIntro',
  modal: 'hiddenModal'
}

const state = {
  // 1. se carga la pagina y buscamos los valores en localStoage
  //   a. si el valor no esta, entonces `dismissedIntro: undefined`
  //   b. si el valor esta, entonces `dismissedIntro: 'true'`
  dismissedIntro: localStorage.getItem(keys.intro),
  dismissedModal: localStorage.getItem(keys.modal),
}

const mutations = {
  dismissIntro (state) {
    localStorage.setItem(keys.intro, true)
    state.dismissedIntro = true
  },
  dismissModal (state) {
    localStorage.setItem(keys.modal, true)
    state.dismissedModal = true
  },
  reset (state) {
    localStorage.removeItem(keys.intro)
    localStorage.removeItem(keys.modal)
    state.dismissedIntro = false
    state.dismissedModal = false
  }
}

const getters = {
  showIntro: (state) => !state.dismissedIntro,
  showModal: (state) => !state.dismissedModal,
}

export const intro = {
  namespaced: true,
  state,
  mutations,
  getters,
}
