/* tslint:disable */
declare module 'treat/theme' {
  type TreatTheme = import('./makeReactLayoutTheme').TreatTheme

  export interface Theme extends TreatTheme {}
}
