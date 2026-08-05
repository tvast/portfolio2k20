<script setup lang="ts">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from "vue";
import { useRoute } from "vue-router";

type NavigationItem = {
  label: string;
  to: string;
  description: string;
};

type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

const route = useRoute();

const navigation: NavigationItem[] = [
  {
    label: "Home",
    to: "/",
    description: "Introduction and selected work",
  },
  {
    label: "About",
    to: "/about",
    description: "Profile, experience and technical orbit",
  },
  {
    label: "Portfolio",
    to: "/dashboard",
    description: "Projects, interfaces and experiments",
  },
  {
    label: "Contact",
    to: "/contact",
    description: "Open a communication channel",
  },
];

const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/theophile-vast/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/tvast",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:theophile.vast@gmail.com",
  },
];

const loading = ref(true);
const loaderLeaving = ref(false);
const loadProgress = ref(0);
const menuOpen = ref(false);

let progressTimer: number | undefined;
let completionTimer: number | undefined;
let fallbackTimer: number | undefined;

const progressLabel = computed(() => {
  return `${Math.round(loadProgress.value)}%`;
});

function clearTimers() {
  if (progressTimer !== undefined) {
    window.clearInterval(progressTimer);
    progressTimer = undefined;
  }

  if (completionTimer !== undefined) {
    window.clearTimeout(completionTimer);
    completionTimer = undefined;
  }

  if (fallbackTimer !== undefined) {
    window.clearTimeout(fallbackTimer);
    fallbackTimer = undefined;
  }
}

function finishLoading() {
  if (!loading.value || loaderLeaving.value) {
    return;
  }

  clearTimers();
  loadProgress.value = 100;

  completionTimer = window.setTimeout(() => {
    loaderLeaving.value = true;

    completionTimer = window.setTimeout(() => {
      loading.value = false;
      loaderLeaving.value = false;
    }, 650);
  }, 320);
}

function startLoadingSequence() {
  clearTimers();

  loading.value = true;
  loaderLeaving.value = false;
  loadProgress.value = 8;

  progressTimer = window.setInterval(() => {
    if (loadProgress.value >= 92) {
      if (progressTimer !== undefined) {
        window.clearInterval(progressTimer);
        progressTimer = undefined;
      }

      return;
    }

    const remaining = 92 - loadProgress.value;
    const increment = Math.max(1, Math.ceil(remaining * 0.13));

    loadProgress.value = Math.min(
        92,
        loadProgress.value + increment,
    );
  }, 120);

  /*
   * requestAnimationFrame laisse Vue effectuer son premier rendu avant
   * de terminer la séquence visuelle.
   */
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      completionTimer = window.setTimeout(finishLoading, 850);
    });
  });

  // Failsafe si un navigateur bloque une animation ou un événement.
  fallbackTimer = window.setTimeout(finishLoading, 2600);
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeMenu();
  }
}

function handleDocumentReady() {
  if (document.readyState === "complete") {
    finishLoading();
    return;
  }

  window.addEventListener("load", finishLoading, {
    once: true,
  });
}

watch(
    () => route.fullPath,
    async () => {
      closeMenu();
      await nextTick();

      document.querySelector<HTMLElement>("#portfolio-content")?.focus({
        preventScroll: true,
      });
    },
);

watch(menuOpen, (isOpen) => {
  document.documentElement.classList.toggle(
      "portfolio-menu-open",
      isOpen,
  );
});

onMounted(() => {
  startLoadingSequence();
  handleDocumentReady();

  window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  clearTimers();

  window.removeEventListener("load", finishLoading);
  window.removeEventListener("keydown", handleEscape);

  document.documentElement.classList.remove("portfolio-menu-open");
});
</script>

<template>
  <div class="portfolio-app">
    <Transition name="loader">
      <section
          v-if="loading"
          class="portfolio-loader"
          :class="{ 'is-leaving': loaderLeaving }"
          aria-live="polite"
          aria-label="Portfolio loading"
      >
        <div class="portfolio-loader__noise" aria-hidden="true" />

        <div class="portfolio-loader__content">
          <p class="portfolio-loader__status">
            system.boot()
          </p>

          <h1
              class="glitch-title"
              data-text="PORTFOLIO THEOPHILE VAST"
          >
            PORTFOLIO THEOPHILE VAST
          </h1>

          <div
              class="portfolio-loader__track"
              role="progressbar"
              aria-label="Loading progress"
              aria-valuemin="0"
              aria-valuemax="100"
              :aria-valuenow="Math.round(loadProgress)"
          >
            <span
                class="portfolio-loader__progress"
                :style="{ width: `${loadProgress}%` }"
            />
          </div>

          <div class="portfolio-loader__meta">
            <span>loading archive</span>
            <strong>{{ progressLabel }}</strong>
          </div>
        </div>
      </section>
    </Transition>

    <div
        v-show="!loading"
        class="portfolio-shell"
    >
      <header class="portfolio-header">
        <RouterLink
            class="portfolio-brand"
            to="/"
            aria-label="Théophile Vast portfolio home"
            @click="closeMenu"
        >
          <span class="portfolio-brand__index">D0C/</span>

          <span class="portfolio-brand__name">
            Théophile Vast
          </span>

          <span class="portfolio-brand__signal" aria-hidden="true" />
        </RouterLink>

        <nav
            class="portfolio-desktop-nav"
            aria-label="Main navigation"
        >
          <RouterLink
              v-for="item in navigation"
              :key="item.to"
              :to="item.to"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <button
            class="portfolio-menu-button"
            type="button"
            :class="{ 'is-open': menuOpen }"
            :aria-expanded="menuOpen"
            aria-controls="portfolio-menu"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="toggleMenu"
        >
          <span />
          <span />
        </button>
      </header>

      <Transition name="menu">
        <aside
            v-if="menuOpen"
            id="portfolio-menu"
            class="portfolio-menu"
            aria-label="Portfolio navigation"
        >
          <div class="portfolio-menu__backdrop" @click="closeMenu" />

          <div class="portfolio-menu__panel">
            <div class="portfolio-menu__heading">
              <p>Toolbox</p>
              <span>Navigation protocol</span>
            </div>

            <nav class="portfolio-menu__navigation">
              <RouterLink
                  v-for="(item, index) in navigation"
                  :key="item.to"
                  :to="item.to"
                  @click="closeMenu"
              >
                <span class="portfolio-menu__number">
                  {{ String(index + 1).padStart(2, "0") }}
                </span>

                <span class="portfolio-menu__copy">
                  <strong>{{ item.label }}</strong>
                  <small>{{ item.description }}</small>
                </span>

                <span
                    class="portfolio-menu__arrow"
                    aria-hidden="true"
                >
                  ↗
                </span>
              </RouterLink>
            </nav>

            <footer class="portfolio-menu__footer">
              <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener noreferrer' : undefined"
              >
                {{ link.label }}
              </a>
            </footer>
          </div>
        </aside>
      </Transition>

      <main
          id="portfolio-content"
          class="portfolio-content"
          tabindex="-1"
      >
        <RouterView v-slot="{ Component }">
          <Transition name="page" mode="out-in">
            <component
                :is="Component"
                :key="route.fullPath"
            />
          </Transition>
        </RouterView>
      </main>

      <footer class="portfolio-footer">
        <p>
          <span class="portfolio-footer__prompt">&gt;</span>
          Digital craft, security and augmented interfaces.
        </p>

        <div class="portfolio-footer__links">
          <a
              v-for="link in socialLinks"
              :key="link.label"
              :href="link.href"
              :target="link.external ? '_blank' : undefined"
              :rel="link.external ? 'noopener noreferrer' : undefined"
          >
            {{ link.label }}
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poiret+One&display=swap");

:root {
  --portfolio-bg: #09090c;
  --portfolio-surface: #111116;
  --portfolio-surface-soft: #18181f;
  --portfolio-text: #f4f2ed;
  --portfolio-muted: #9a98a2;
  --portfolio-line: rgba(255, 255, 255, 0.12);
  --portfolio-accent: #e62915;
  --portfolio-green: #42b983;
  --portfolio-header-height: 78px;
}

html {
  background: var(--portfolio-bg);
}

html.portfolio-menu-open {
  overflow: hidden;
}

body {
  margin: 0;
  min-width: 320px;
  color: var(--portfolio-text);
  background:
      radial-gradient(
              circle at 15% 10%,
              rgba(230, 41, 21, 0.09),
              transparent 28rem
      ),
      var(--portfolio-bg);
  font-family: "Montserrat", sans-serif;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
}

button {
  color: inherit;
}

::selection {
  color: #fff;
  background: var(--portfolio-accent);
}

.portfolio-app {
  min-height: 100vh;
}

.portfolio-shell {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.portfolio-loader {
  position: fixed;
  inset: 0;
  z-index: 5000;
  display: grid;
  place-items: center;
  overflow: hidden;
  padding: 24px;
  color: var(--portfolio-text);
  background: #08080a;
  transition:
      opacity 650ms ease,
      transform 650ms cubic-bezier(0.76, 0, 0.24, 1);

  &.is-leaving {
    opacity: 0;
    transform: translateY(-4%);
    pointer-events: none;
  }
}

.portfolio-loader__noise {
  position: absolute;
  inset: -100%;
  opacity: 0.09;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='.8'/%3E%3C/svg%3E");
  animation: portfolio-noise 180ms steps(2) infinite;
}

.portfolio-loader__content {
  position: relative;
  width: min(680px, 100%);
}

.portfolio-loader__status {
  margin: 0 0 20px;
  color: var(--portfolio-green);
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.glitch-title {
  position: relative;
  margin: 0;
  max-width: 14ch;
  font-family: "Poiret One", sans-serif;
  font-size: clamp(2.5rem, 9vw, 7.5rem);
  font-weight: 700;
  line-height: 0.86;
  letter-spacing: -0.035em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  &::before {
    color: var(--portfolio-accent);
    transform: translateX(2px);
    clip-path: inset(18% 0 58% 0);
    animation: portfolio-glitch-a 2.3s infinite steps(2);
  }

  &::after {
    color: #65d9ff;
    transform: translateX(-2px);
    clip-path: inset(64% 0 12% 0);
    animation: portfolio-glitch-b 1.9s infinite steps(2);
  }
}

.portfolio-loader__track {
  height: 2px;
  margin-top: 48px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.12);
}

.portfolio-loader__progress {
  display: block;
  height: 100%;
  background: var(--portfolio-text);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.35);
  transition: width 180ms ease;
}

.portfolio-loader__meta {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 12px;
  color: var(--portfolio-muted);
  font-family: monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  strong {
    color: var(--portfolio-text);
  }
}

.portfolio-header {
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: var(--portfolio-header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 0 clamp(20px, 5vw, 76px);
  border-bottom: 1px solid var(--portfolio-line);
  background: rgba(9, 9, 12, 0.78);
  backdrop-filter: blur(20px);
}

.portfolio-brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  text-transform: uppercase;
}

.portfolio-brand__index {
  color: var(--portfolio-accent);
  font-family: monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
}

.portfolio-brand__name {
  font-weight: 700;
  letter-spacing: 0.08em;
}

.portfolio-brand__signal {
  width: 7px;
  height: 7px;
  margin-left: 4px;
  border-radius: 50%;
  background: var(--portfolio-green);
  box-shadow: 0 0 14px rgba(66, 185, 131, 0.8);
  animation: portfolio-pulse 1.8s infinite;
}

.portfolio-desktop-nav {
  display: flex;
  align-items: center;
  gap: clamp(18px, 3vw, 42px);

  a {
    position: relative;
    padding: 29px 0 25px;
    color: var(--portfolio-muted);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 180ms ease;

    &::after {
      content: "";
      position: absolute;
      right: 0;
      bottom: 20px;
      left: 0;
      height: 1px;
      background: var(--portfolio-accent);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 220ms ease;
    }

    &:hover,
    &.router-link-exact-active {
      color: var(--portfolio-text);

      &::after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }
}

.portfolio-menu-button {
  width: 44px;
  height: 44px;
  display: none;
  place-items: center;
  padding: 0;
  border: 1px solid var(--portfolio-line);
  border-radius: 50%;
  background: transparent;
  cursor: pointer;

  span {
    position: absolute;
    width: 17px;
    height: 1px;
    background: currentColor;
    transition:
        transform 220ms ease,
        translate 220ms ease;
  }

  span:first-child {
    translate: 0 -3px;
  }

  span:last-child {
    translate: 0 3px;
  }

  &.is-open {
    span:first-child {
      translate: 0;
      transform: rotate(45deg);
    }

    span:last-child {
      translate: 0;
      transform: rotate(-45deg);
    }
  }
}

.portfolio-content {
  min-width: 0;
  outline: none;
}

.portfolio-footer {
  min-height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 24px clamp(20px, 5vw, 76px);
  border-top: 1px solid var(--portfolio-line);
  color: var(--portfolio-muted);
  font-family: monospace;
  font-size: 0.72rem;
  letter-spacing: 0.04em;

  p {
    margin: 0;
  }
}

.portfolio-footer__prompt {
  margin-right: 8px;
  color: var(--portfolio-green);
}

.portfolio-footer__links {
  display: flex;
  gap: 24px;

  a {
    text-decoration: none;
    transition: color 180ms ease;

    &:hover {
      color: var(--portfolio-text);
    }
  }
}

.portfolio-menu {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 620px);
}

.portfolio-menu__backdrop {
  background: rgba(0, 0, 0, 0.68);
  backdrop-filter: blur(6px);
}

.portfolio-menu__panel {
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: clamp(28px, 5vw, 72px);
  border-left: 1px solid var(--portfolio-line);
  background:
      linear-gradient(
              145deg,
              rgba(230, 41, 21, 0.08),
              transparent 38%
      ),
      var(--portfolio-surface);
}

.portfolio-menu__heading {
  p {
    margin: 0;
    font-family: "Poiret One", sans-serif;
    font-size: clamp(2rem, 5vw, 4.5rem);
    text-transform: uppercase;
  }

  span {
    color: var(--portfolio-muted);
    font-family: monospace;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
}

.portfolio-menu__navigation {
  align-self: center;
  display: grid;

  a {
    display: grid;
    grid-template-columns: 42px 1fr auto;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--portfolio-line);
    text-decoration: none;

    &:hover,
    &.router-link-exact-active {
      .portfolio-menu__copy strong,
      .portfolio-menu__arrow {
        color: var(--portfolio-accent);
      }

      .portfolio-menu__arrow {
        transform: translate(3px, -3px);
      }
    }
  }
}

.portfolio-menu__number {
  color: var(--portfolio-muted);
  font-family: monospace;
  font-size: 0.68rem;
}

.portfolio-menu__copy {
  display: grid;
  gap: 5px;

  strong {
    font-size: clamp(1.3rem, 3vw, 2.2rem);
    font-weight: 500;
    transition: color 180ms ease;
  }

  small {
    color: var(--portfolio-muted);
    font-size: 0.72rem;
    font-weight: 400;
  }
}

.portfolio-menu__arrow {
  transition:
      color 180ms ease,
      transform 180ms ease;
}

.portfolio-menu__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 26px;

  a {
    color: var(--portfolio-muted);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: var(--portfolio-text);
    }
  }
}

.loader-enter-active,
.loader-leave-active {
  transition: opacity 400ms ease;
}

.loader-enter-from,
.loader-leave-to {
  opacity: 0;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 280ms ease;

  .portfolio-menu__panel {
    transition: transform 350ms cubic-bezier(0.76, 0, 0.24, 1);
  }
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;

  .portfolio-menu__panel {
    transform: translateX(100%);
  }
}

.page-enter-active,
.page-leave-active {
  transition:
      opacity 220ms ease,
      transform 220ms ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@keyframes portfolio-pulse {
  50% {
    opacity: 0.35;
    transform: scale(0.75);
  }
}

@keyframes portfolio-noise {
  0% {
    transform: translate3d(0, 0, 0);
  }

  25% {
    transform: translate3d(2%, -1%, 0);
  }

  50% {
    transform: translate3d(-1%, 2%, 0);
  }

  75% {
    transform: translate3d(1%, 1%, 0);
  }
}

@keyframes portfolio-glitch-a {
  0%,
  91%,
  100% {
    transform: translateX(2px);
  }

  92% {
    transform: translateX(-6px);
  }

  95% {
    transform: translateX(5px);
  }
}

@keyframes portfolio-glitch-b {
  0%,
  87%,
  100% {
    transform: translateX(-2px);
  }

  89% {
    transform: translateX(7px);
  }

  94% {
    transform: translateX(-5px);
  }
}

@media (max-width: 860px) {
  .portfolio-desktop-nav {
    display: none;
  }

  .portfolio-menu-button {
    display: grid;
  }

  .portfolio-menu {
    grid-template-columns: 1fr;
  }

  .portfolio-menu__backdrop {
    display: none;
  }

  .portfolio-menu__panel {
    border-left: 0;
  }

  .portfolio-footer {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 540px) {
  :root {
    --portfolio-header-height: 68px;
  }

  .portfolio-header {
    padding-inline: 16px;
  }

  .portfolio-brand__index,
  .portfolio-brand__signal {
    display: none;
  }

  .portfolio-brand__name {
    font-size: 0.82rem;
  }

  .portfolio-menu__panel {
    padding: 88px 22px 30px;
  }

  .portfolio-menu__copy small {
    display: none;
  }

  .portfolio-footer {
    padding-inline: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
  }
}
</style>