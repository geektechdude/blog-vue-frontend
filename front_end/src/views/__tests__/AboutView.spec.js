import { expect, describe, it } from 'vitest'
import AboutView from '../AboutView.vue'
import {mount} from "@vue/test-utils";

describe('AboutView.vue', () => {
    describe('when mounted', () => {
        it('renders properly', () => {
            const wrapper = mount(AboutView, {});
            expect(wrapper.html()).toContain('This is a test blog using Vue.JS for the frontend, Django for the backend and running queires via GraphQL');
        });
    });
});