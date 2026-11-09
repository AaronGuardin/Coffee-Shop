$(function () {
  const $menuToggle = $('.menu-toggle');
  const $navigation = $('#primary-navigation');

  function closeNavigation() {
    $menuToggle.attr('aria-expanded', 'false').attr('aria-label', 'Open navigation');
    $navigation.removeClass('is-open');
  }

  $menuToggle.on('click', function () {
    const isExpanded = $(this).attr('aria-expanded') === 'true';
    $(this)
      .attr('aria-expanded', String(!isExpanded))
      .attr('aria-label', isExpanded ? 'Open navigation' : 'Close navigation');
    $navigation.toggleClass('is-open', !isExpanded);
  });

  $navigation.find('a').on('click', closeNavigation);
  $(document).on('keydown', function (event) {
    if (event.key === 'Escape') closeNavigation();
  });
  $(window).on('resize', function () {
    if (window.matchMedia('(min-width: 701px)').matches) closeNavigation();
  });

  if (document.querySelector('.ingredients-carousel') && typeof Swiper !== 'undefined') {
    new Swiper('.ingredients-carousel', {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      navigation: {
        nextEl: '.ingredients-carousel .ingredient-next',
        prevEl: '.ingredients-carousel .ingredient-prev'
      },
      pagination: {
        el: '.ingredients-carousel .swiper-pagination',
        clickable: true
      },
      breakpoints: {
        601: { slidesPerView: 3, spaceBetween: 24 },
        900: { slidesPerView: 3, spaceBetween: 32 }
      }
    });
  }

  $('.newsletter-form').on('submit', function (event) {
    event.preventDefault();
    const $form = $(this);
    $form.find('.newsletter-message').text('Newsletter signup is not connected yet.');
  });
});

$(function () {
  const $menuTabs = $('.menu-tab');
  $menuTabs.on('click', function () {
    const $tab = $(this);
    const panelId = $tab.attr('data-menu-tab');

    $menuTabs
      .removeClass('is-active')
      .attr('aria-selected', 'false')
      .attr('tabindex', '-1');
    $tab.addClass('is-active').attr('aria-selected', 'true').attr('tabindex', '0');

    $('.menu-tab-panel').attr('hidden', true);
    $('#' + panelId).removeAttr('hidden');
  });

  $menuTabs.on('keydown', function (event) {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const currentIndex = $menuTabs.index(this);
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (currentIndex + direction + $menuTabs.length) % $menuTabs.length;
    $menuTabs.eq(nextIndex).trigger('click').trigger('focus');
  });
});

$(function () {
  $('.contact-form').on('submit', function (event) {
    event.preventDefault();
    $(this).find('.contact-form-message').text('Thanks for reaching out. This contact form is not connected yet.');
    this.reset();
  });
});
