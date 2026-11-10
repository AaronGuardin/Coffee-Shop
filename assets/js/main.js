$(function () {
  "use strict";

  const $window = $(window);
  const mobileNavigationQuery = window.matchMedia("(max-width: 700px)");

  function setupNavigation() {
    const $toggle = $(".menu-toggle");
    const $navigation = $("#primary-navigation");

    if (!$toggle.length || !$navigation.length) return;

    function setNavigationOpen(isOpen) {
      $toggle
        .attr("aria-expanded", String(isOpen))
        .attr("aria-label", isOpen ? "Close navigation" : "Open navigation");
      $navigation.toggleClass("is-open", isOpen);
    }

    $toggle.on("click", function () {
      setNavigationOpen($(this).attr("aria-expanded") !== "true");
    });

    $navigation.find("a").on("click", function () {
      setNavigationOpen(false);
    });

    $(document).on("keydown", function (event) {
      if (event.key === "Escape") setNavigationOpen(false);
    });

    $window.on("resize", function () {
      if (!mobileNavigationQuery.matches) setNavigationOpen(false);
    });
  }

  function setupIngredientsCarousel() {
    const carousel = document.querySelector(".ingredients-carousel");
    if (!carousel || typeof Swiper === "undefined") return;

    new Swiper(carousel, {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: ".ingredients-carousel .ingredient-next",
        prevEl: ".ingredients-carousel .ingredient-prev",
      },
      pagination: {
        el: ".ingredients-carousel .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        601: { slidesPerView: 3, spaceBetween: 24 },
        900: { slidesPerView: 3, spaceBetween: 32 },
      },
    });
  }

  function setupMenuTabs() {
    const $tabs = $(".menu-tab");
    if (!$tabs.length) return;

    function activateTab(tab) {
      const $tab = $(tab);
      const panelId = $tab.attr("data-menu-tab");
      const panel = panelId && document.getElementById(panelId);
      if (!panel) return;

      $tabs
        .removeClass("is-active")
        .attr({ "aria-selected": "false", tabindex: "-1" });
      $tab
        .addClass("is-active")
        .attr({ "aria-selected": "true", tabindex: "0" });

      $(".menu-tab-panel").attr("hidden", true);
      $(panel).removeAttr("hidden");
    }

    $tabs.on("click", function () {
      activateTab(this);
    });

    $tabs.on("keydown", function (event) {
      const keys = ["ArrowLeft", "ArrowRight", "Home", "End"];
      if (!keys.includes(event.key)) return;
      event.preventDefault();

      const currentIndex = $tabs.index(this);
      let nextIndex = currentIndex;
      if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % $tabs.length;
      if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + $tabs.length) % $tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = $tabs.length - 1;

      const nextTab = $tabs.get(nextIndex);
      activateTab(nextTab);
      nextTab.focus();
    });
  }

  function setupForms() {
    $(".newsletter-form").on("submit", function (event) {
      event.preventDefault();
      $(this)
        .find(".newsletter-message")
        .text("Newsletter signup is not connected yet.");
    });

    $(".contact-form").on("submit", function (event) {
      event.preventDefault();
      $(this)
        .find(".contact-form-message")
        .text("Thanks for reaching out. This contact form is not connected yet.");
      this.reset();
    });
  }

  function setupScrollReveals() {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    const revealTargets = document.querySelectorAll(
      ".site-header, .section-heading, .category-card, .menu-group, .coffee-banner-inner, .ingredient-slide, .special-card, .menu-tabs, .menu-tab-panel, .menu-order, .coffee-promotion, .team-intro, .team-section .chef-card, .history-inner, .timeline-item, .contact-detail, .map-frame, .community-banner-inner, .form-row, .contact-form > .form-field, .contact-form > .button, .social-section > h2, .social-profile, .footer-main, .copyright"
    );
    if (!revealTargets.length) return;

    revealTargets.forEach((target, index) => {
      target.setAttribute("data-reveal", "");
      target.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
    });
    document.documentElement.classList.add("has-motion");

    const observer = new IntersectionObserver(
      (entries, revealObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );

    revealTargets.forEach((target) => observer.observe(target));
  }

  setupNavigation();
  setupIngredientsCarousel();
  setupMenuTabs();
  setupForms();
  setupScrollReveals();
});
