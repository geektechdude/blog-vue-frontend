import { mount, RouterLinkStub } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import AllPostsView from '../AllPostsView.vue';
import { useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';
import flushPromises from 'flush-promises';

// Mock the useQuery function
vi.mock('@vue/apollo-composable', () => ({
  useQuery: vi.fn()
}));

describe('AllPostsView.vue', () => {
  it('renders loading state', async () => {
    useQuery.mockReturnValue({
      result: ref(null),
      loading: ref(true),
      error: ref(null)
    });

    const wrapper = mount(AllPostsView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    await flushPromises();
    expect(wrapper.html()).toContain('Loading...');
  });

  it('renders error state', async () => {
    useQuery.mockReturnValue({
      result: ref(null),
      loading: ref(false),
      error: ref(true)
    });

    const wrapper = mount(AllPostsView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    await flushPromises();
    expect(wrapper.find('.warn').exists()).toBe(true);
  });

  it('renders posts', async () => {
    useQuery.mockReturnValue({
      result: ref({
        allPosts: [
          { title: 'Post 1', slug: 'post-1', author: { user: { username: 'user1', firstName: 'First', lastName: 'Last' } } },
          { title: 'Post 2', slug: 'post-2', author: { user: { username: 'user2', firstName: 'First', lastName: 'Last' } } }
        ]
      }),
      loading: ref(false),
      error: ref(null)
    });

    const wrapper = mount(AllPostsView, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub
        }
      }
    });
    await flushPromises();
    expect(wrapper.findComponent({ name: 'PostList' }).exists()).toBe(true);
  });
});