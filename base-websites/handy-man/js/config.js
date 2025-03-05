// Embedded configuration
const config = {
  "site": {
    "name": "PawCare Services",
    "logo": "/images/paw-logo.png",
    "favicon": "/images/paw-favicon.ico",
    "headerContact": {
      "phone": "+1 (555) 123-PAWS",
      "email": "woof@pawcare.com",
      "showInHeader": true
    },
    "seo": {
      "title": "PawCare Services - Professional Pet Care",
      "description": "Professional pet care services including dog walking, grooming, and pet sitting",
      "keywords": "pet care, dog walking, pet sitting, grooming, pet services"
    }
  },
  "navigation": {
    "items": [
      {
        "text": "Home",
        "link": "index.html",
        "active": true
      },
      {
        "text": "Services",
        "link": "service.html"
      },
      {
        "text": "About Us",
        "link": "about.html"
      },
      {
        "text": "Contact",
        "link": "contact.html"
      }
    ]
  },
  "hero": {
    "slides": [
      {
        "title": "Professional Pet Care Services",
        "subtitle": "Loving Care When You're Not There",
        "description": "Trusted pet care services including dog walking, pet sitting, and grooming. Your pets deserve the best!",
        "image": "images/happy-dog.jpg",
        "ctaText": "Book Now",
        "ctaLink": "#contact"
      }
    ]
  },
  "features": {
    "title": "Why Choose PawCare",
    "subtitle": "Our Promise to You",
    "items": [
      {
        "icon": "🐾",
        "title": "Professional Care",
        "description": "Licensed and insured pet care specialists"
      },
      {
        "icon": "⏰",
        "title": "Flexible Scheduling",
        "description": "Available 7 days a week, including holidays"
      },
      {
        "icon": "💝",
        "title": "Love & Attention",
        "description": "Treating your pets like our own family"
      }
    ]
  },
  "services": {
    "title": "Our Services",
    "subtitle": "What We Offer",
    "description": "Comprehensive pet care services tailored to your needs",
    "showPricing": true,
    "items": [
      {
        "title": "Dog Walking",
        "description": "Daily exercise and potty breaks for your canine friend",
        "image": "images/dog-walking.jpg",
        "price": "From $25/walk",
        "features": ["30-minute or 1-hour walks", "GPS tracking available"]
      },
      {
        "title": "Pet Sitting",
        "description": "In-home care while you're away",
        "image": "images/pet-sitting.jpg",
        "price": "From $45/day",
        "features": ["Feeding and medication", "Daily updates and photos"]
      }
    ]
  },
  "about": {
    "title": "About PawCare",
    "subtitle": "Your Trusted Pet Care Partner",
    "description": "With over 10 years of experience in professional pet care, we understand that your pets are family.",
    "image": "images/about-pets.jpg"
  },
  "testimonials": {
    "enabled": true,
    "items": [
      {
        "name": "Emily Thompson",
        "role": "Dog Parent",
        "quote": "PawCare has been amazing with my two dogs. The daily photos and updates give me such peace of mind!"
      }
    ]
  },
  "theme": {
    "colors": {
      "primary": "#FF6B6B",
      "secondary": "#4ECDC4",
      "background": "#FFF9F9",
      "text": "#333333",
      "headerBg": "#FF6B6B",
      "footerBg": "#2C3E50",
      "linkHover": "#FF8787",
      "buttonText": "#FFFFFF",
      "sectionBg": "#FFFFFF",
      "cardBg": "#FFFFFF",
      "cardBorder": "#FFE4E4",
      "cardShadow": "rgba(255,107,107,0.1)"
    },
    "fonts": {
      "primary": "'Lato', sans-serif",
      "secondary": "'Merriweather Sans', sans-serif"
    },
    "spacing": {
      "sectionPadding": "60px",
      "headerHeight": "80px",
      "containerWidth": "1200px",
      "gridGap": "30px"
    },
    "borderRadius": {
      "button": "4px",
      "card": "8px",
      "input": "4px"
    },
    "animations": {
      "buttonHover": "all 0.3s ease",
      "cardHover": "transform 0.2s ease"
    }
  },
  "layout": {
    "header": {
      "sticky": true,
      "transparent": false,
      "showTopBar": true,
      "showSearch": false
    },
    "footer": {
      "columns": 3,
      "showSocial": true,
      "showNewsletter": true
    },
    "sidebar": {
      "position": "right",
      "width": "300px"
    }
  },
  "homeServices": {
    "title": "Professional Pet Care Services",
    "subtitle": "Loving Care When You're Not There",
    "description": "We provide professional pet care services with love and dedication. Your pets deserve the best care possible while you're away.",
    "image": "images/pet-care-hero.jpg",
    "ctaText": "Book Now",
    "ctaLink": "#contact"
  },
  // ... rest of your config ...
};

// Apply configuration
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    console.log('Full config:', config);

    // Update site name
    console.log('Updating site name...');
    const brandSpans = document.querySelectorAll('.navbar-brand span');
    brandSpans.forEach(span => {
        console.log('Found brand span, updating to:', config.site.name);
        span.textContent = config.site.name;
    });

    // Update header contact info
    const contactNav = document.querySelector('.contact_nav');
    if (contactNav) {
        contactNav.innerHTML = `
            <a href="tel:${config.site.headerContact.phone}">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>Call : ${config.site.headerContact.phone}</span>
            </a>
            <a href="mailto:${config.site.headerContact.email}">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>Email : ${config.site.headerContact.email}</span>
            </a>
        `;
    }

    // Update navigation
    const navList = document.querySelector('.navbar-nav');
    if (navList) {
        navList.innerHTML = config.navigation.items.map(item => `
            <li class="nav-item ${item.active ? 'active' : ''}">
                <a class="nav-link" href="${item.link}">${item.text}
                    ${item.active ? '<span class="sr-only">(current)</span>' : ''}
                </a>
            </li>
        `).join('');
    }

    // Update hero section
    const heroSection = document.querySelector('.slider_section');
    if (heroSection) {
        const slide = config.hero.slides[0];
        const heroTitle = heroSection.querySelector('.detail-box h1');
        const heroDesc = heroSection.querySelector('.detail-box p');
        const heroBtn = heroSection.querySelector('.detail-box a.btn');
        const heroImg = heroSection.querySelector('.img-box img');

        if (heroTitle) heroTitle.textContent = slide.title;
        if (heroDesc) heroDesc.textContent = slide.description;
        if (heroBtn) {
            heroBtn.textContent = slide.ctaText;
            heroBtn.href = slide.ctaLink;
        }
        if (heroImg) heroImg.src = slide.image;
    }

    // Update features section
    const featureSection = document.querySelector('.feature_section');
    if (featureSection) {
        const featureTitle = featureSection.querySelector('.heading_container h2');
        const featureContainer = featureSection.querySelector('.row');
        
        if (featureTitle) featureTitle.textContent = config.features.title;
        if (featureContainer) {
            featureContainer.innerHTML = config.features.items.map(feature => `
                <div class="col-md-4">
                    <div class="box">
                        <div class="img-box">
                            <span class="feature-icon">${feature.icon}</span>
                        </div>
                        <div class="detail-box">
                            <h5>${feature.title}</h5>
                            <p>${feature.description}</p>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update services section
    const serviceSection = document.querySelector('.service_section');
    if (serviceSection) {
        const serviceTitle = serviceSection.querySelector('.heading_container h2');
        const serviceDesc = serviceSection.querySelector('.heading_container p');
        const serviceContainer = serviceSection.querySelector('.row');

        if (serviceTitle) serviceTitle.textContent = config.services.title;
        if (serviceDesc) serviceDesc.textContent = config.services.description;
        if (serviceContainer) {
            serviceContainer.innerHTML = config.services.items.map(service => `
                <div class="col-md-4">
                    <div class="box">
                        <div class="img-box">
                            <img src="${service.image}" alt="${service.title}">
                        </div>
                        <div class="detail-box">
                            <h5>${service.title}</h5>
                            <p>${service.description}</p>
                            ${config.services.showPricing ? `<div class="price">${service.price}</div>` : ''}
                            ${service.features ? `
                                <ul class="features-list">
                                    ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update about section
    const aboutSection = document.querySelector('.about_section');
    if (aboutSection) {
        const aboutTitle = aboutSection.querySelector('.heading_container h2');
        const aboutDesc = aboutSection.querySelector('.detail-box p');
        const aboutImg = aboutSection.querySelector('.img-box img');

        if (aboutTitle) aboutTitle.textContent = config.about.title;
        if (aboutDesc) aboutDesc.textContent = config.about.description;
        if (aboutImg) aboutImg.src = config.about.image;
    }

    // Update testimonials
    const testimonialSection = document.querySelector('.client_section');
    if (testimonialSection && config.testimonials?.enabled) {
        // Update section title
        const sectionTitle = testimonialSection.querySelector('.heading_container h2');
        if (sectionTitle) {
            sectionTitle.textContent = "What Our Clients Say";
        }

        // Update testimonial content
        const testimonialContainer = testimonialSection.querySelector('.client_container');
        if (testimonialContainer) {
            console.log('Found testimonial container, updating...');
            const testimonialHTML = config.testimonials.items.map((testimonial, index) => `
                <div class="box">
                    <div class="client_id">
                        <div class="client_info">
                            <h6>${testimonial.name}</h6>
                            <p>${testimonial.role}</p>
                        </div>
                        <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>${testimonial.quote}</p>
                </div>
            `).join('');
            testimonialContainer.innerHTML = testimonialHTML;
            console.log('Testimonials updated');
        }
    }

    // Update footer
    const footer = document.querySelector('.footer_section');
    if (footer) {
        const copyright = footer.querySelector('p');
        if (copyright) copyright.innerHTML = config.footer.copyright;

        // Update newsletter if exists
        if (config.footer.newsletter.show) {
            const newsletterSection = document.createElement('div');
            newsletterSection.className = 'newsletter-section';
            newsletterSection.innerHTML = `
                <h4>${config.footer.newsletter.title}</h4>
                <p>${config.footer.newsletter.description}</p>
                <form class="newsletter-form">
                    <input type="email" placeholder="Enter your email">
                    <button type="submit">Subscribe</button>
                </form>
            `;
            footer.querySelector('.container').appendChild(newsletterSection);
        }
    }

    // Add floating CTA if enabled
    if (config.callToAction.floating.show) {
        const floatingCta = document.createElement('div');
        floatingCta.className = `floating-cta ${config.callToAction.floating.position}`;
        floatingCta.innerHTML = `
            <a href="${config.callToAction.floating.link}" class="btn">
                ${config.callToAction.floating.text}
            </a>
        `;
        document.body.appendChild(floatingCta);
    }

    // Apply theme
    console.log('Applying theme...');
    const root = document.documentElement;

    // Apply colors with logging
    Object.entries(config.theme.colors).forEach(([key, value]) => {
        const cssVar = `--${key}-color`;
        console.log(`Setting ${cssVar} to ${value}`);
        root.style.setProperty(cssVar, value);
        
        // Double-check if the variable was set
        const computedValue = getComputedStyle(root).getPropertyValue(cssVar);
        console.log(`Computed value for ${cssVar}: ${computedValue}`);
    });

    // Apply fonts
    if (config.theme.fonts.primary) {
        root.style.setProperty('--font-primary', config.theme.fonts.primary);
    }
    if (config.theme.fonts.secondary) {
        root.style.setProperty('--font-secondary', config.theme.fonts.secondary);
    }

    // Apply border radius
    if (config.theme.borderRadius) {
        Object.entries(config.theme.borderRadius).forEach(([key, value]) => {
            root.style.setProperty(`--radius-${key}`, value);
        });
    }

    // Apply spacing
    if (config.theme.spacing) {
        Object.entries(config.theme.spacing).forEach(([key, value]) => {
            root.style.setProperty(`--spacing-${key}`, value);
        });
    }

    // Update repair/maintenance section
    const repairSection = document.querySelector('.repair_section');
    if (repairSection) {
        console.log('Found repair section, updating...');
        
        // Update section title
        const repairTitle = repairSection.querySelector('.heading_container h2');
        if (repairTitle) {
            repairTitle.textContent = config.features.title;
        }

        // Update boxes
        const repairContainer = repairSection.querySelector('.row');
        if (repairContainer) {
            const boxesHTML = config.features.items.map(feature => `
                <div class="col-md-4">
                    <div class="box">
                        <div class="img-box">
                            ${feature.icon}
                        </div>
                        <h6>${feature.title}</h6>
                        <p>${feature.description}</p>
                    </div>
                </div>
            `).join('');
            repairContainer.innerHTML = boxesHTML;
        }
        console.log('Repair section updated');
    }

    // Update home services section (slider section)
    const sliderSection = document.querySelector('.slider_section');
    if (sliderSection && config.homeServices) {
        console.log('Found slider section, updating...');
        
        const detailBox = sliderSection.querySelector('.detail-box');
        if (detailBox) {
            detailBox.innerHTML = `
                <h1>${config.homeServices.title}</h1>
                <p>${config.homeServices.description}</p>
                <a href="${config.homeServices.ctaLink}" class="btn">${config.homeServices.ctaText}</a>
            `;
        }

        const imgBox = sliderSection.querySelector('.img-box img');
        if (imgBox && config.homeServices.image) {
            imgBox.src = config.homeServices.image;
            imgBox.alt = config.homeServices.title;
        }
        console.log('Slider section updated');
    }
}); 