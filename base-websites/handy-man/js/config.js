// Load and apply configuration
fetch('config.json')
  .then(response => {
    console.log('Fetch response:', response.status);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(config => {
    console.log('Config loaded:', config);

    // Update hero section
    const heroTitle = document.querySelector('.slider_section .detail-box h1');
    if (heroTitle) {
      heroTitle.textContent = config.hero.slides[0].title;
      console.log('Updated hero title to:', config.hero.slides[0].title);
    } else {
      console.log('Hero title element not found');
    }

    // Update contact information in header
    const phoneSpan = document.querySelector('.contact_nav a:first-child span');
    const emailSpan = document.querySelector('.contact_nav a:last-child span');
    
    if (phoneSpan) {
      phoneSpan.textContent = `Call : ${config.site.headerContact.phone}`;
      console.log('Updated phone to:', config.site.headerContact.phone);
    }
    
    if (emailSpan) {
      emailSpan.textContent = `Email : ${config.site.headerContact.email}`;
      console.log('Updated email to:', config.site.headerContact.email);
    }

    // Update site name
    const brandElement = document.querySelector('.navbar-brand span');
    if (brandElement) {
      brandElement.textContent = config.site.name;
      console.log('Updated brand name to:', config.site.name);
    }

    // Apply theme colors
    const root = document.documentElement;
    Object.entries(config.theme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}-color`, value);
    });

    // Update services
    const servicesContainer = document.querySelector('.service_section .row');
    if (servicesContainer) {
      servicesContainer.innerHTML = config.services.items.map(service => `
        <div class="col-md-4">
          <div class="box">
            <div class="img-box">
              <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="detail-box">
              <h5>${service.title}</h5>
              <p>${service.description}</p>
            </div>
          </div>
        </div>
      `).join('');
    }
  })
  .catch(error => {
    console.error('Error loading config:', error);
  }); 