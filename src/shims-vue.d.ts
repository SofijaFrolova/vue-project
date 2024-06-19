// This file tells TypeScript how to handle .vue files.
// Fix error:  Could not find a declaration file for module  ./App.vue in main.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
