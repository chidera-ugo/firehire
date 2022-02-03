import { mount } from '@vue/test-utils'
import HeroSection from '@/components/sections/HeroSection.vue'

describe('HeroSection', () => {
  it('renders text', () => {
    const heroSection = mount(HeroSection)
    expect(heroSection.text()).toContain('Find your fire extinguisher')
  })
})
