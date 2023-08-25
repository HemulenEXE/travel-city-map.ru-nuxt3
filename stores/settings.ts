import { defineStore } from 'pinia'

interface ISettingState {
  initialProject: boolean
}

export const useSettingsStore = defineStore('settings', {
  state: (): ISettingState => ({
    // TODO: set true
    initialProject: true
  }),
  getters: {},
  actions: {
    setInitialProject(initialProject: boolean): void {
      this.initialProject = initialProject
    }
  }
})
