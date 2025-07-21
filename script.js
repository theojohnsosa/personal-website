const testimonials = [
    {
        text: `I’ve had the chance to be a mentor and an instructor to Mr. Sosa and see his growth as a developer firsthand. He’s always been eager to learn, quick to pick up new concepts, and genuinely interested in how things work behind the scenes. Whether he’s building out a website layout or figuring out how to connect everything on the backend, he doesn’t just settle for getting things done – he wants to do it right. What stands out most in his attention to details and how he takes feedback seriously. He’s not afraid to ask questions, and he’s even quicker to help out when someone else is stuck. With the kind of dedication he shows, I know he’s headed in a great direction. Any team would be lucky to have him.`,
        name: 'John Paul Takiang',
        title: 'IT Professional',
        avatar: '/assets/images/dnd.png',
    },
    {
        text: `Theojohn Sosa, his passion towards web development contributes to how he builds his character as a programmer. Through these it creates a qualified capability wherein he fits to be a part of the IT industry. It is without a single doubt that Theojohn Sosa’s skills as a web developer, exceeds the qualified needs, academically and work wise.`,
        name: 'Tristan Mesina',
        title: 'IT College Student',
        avatar: '/assets/images/dnd.png',
    },
    {
        text: `Theojohn is passionate about web development and is keen to detail. He is distinguished by the fact that he learns fast and can cope with the new technologies. He can code a clean interface, and solve problems with equal focus and dedication. A talented developer who has a bright future ahead.`,
        name: 'Joseph Tambis',
        title: 'College Student',
        avatar: '/assets/images/dnd.png',
    },
    {
        text: `Having known Mr. Sosa for nearly a year as a peer, I can attest to his exceptional work ethic. He consistently strives for improvement, eagerly learns new fields, and welcomes criticism to gain fresh perspectives. Mr. Sosa is highly meticulous, particular with details, and ensures functionality in his work. He's a continuous learner who embraces new concepts and isn't afraid to ask questions to hone his skills. I sincerely believe he will achieve great things and be a valuable asset to any team.`,
        name: 'Gab Baluyot',
        title: 'IT College Student',
        avatar: '/assets/images/dnd.png',
    },
    {
        text: `I was classmates with Mr. Sosa during our Senior High School years under the strand: IT in Mobile App and Web Development. As our block president, I saw how critical he is when it comes to web design, always eager to make every detail perfect, and neat as possible. During our IT Expo, he led his group with dedication and produced impressively neat and professional-looking UIs that stood out among the projects. I believe his attention to detail and leadership skills make him a valuable asset to any team or project.`,
        name: 'Gidion Marquez',
        title: 'Statistics Major',
        avatar: '/assets/images/dnd.png',
    },
];

let currentTestimonial = 0;
function renderTestimonial(idx) {
    const t = testimonials[idx];
    document.getElementById('testimonial-card').innerHTML = `
        <div class="testimonial-card-text">${t.text}</div>
        <div class="testimonial-card-footer">
            <img src="${t.avatar}" alt="avatar" class="testimonial-avatar">
            <div>
                <div class="testimonial-name">${t.name}</div>
                <div class="testimonial-title">${t.title}</div>
            </div>
        </div>
    `;
}

function renderPagination() {
    const pag = document.getElementById('testimonial-pagination');
    let html = '';
    html += `<span id="prev-testimonial" class="testimonial-nav">&lt; Previous</span>`;
    for (let i = 0; i < testimonials.length; i++) {
        html += `<span class="testimonial-page${i === currentTestimonial ? ' active' : ''}" data-idx="${i}">${i+1}</span>`;
    }
    html += `<span id="next-testimonial" class="testimonial-nav">Next &gt;</span>`;
    pag.className = 'testimonial-pagination';
    pag.innerHTML = html;
    document.getElementById('prev-testimonial').onclick = () => {
        if (currentTestimonial > 0) {
            currentTestimonial--;
            updateTestimonial();
        }
    };
    document.getElementById('next-testimonial').onclick = () => {
        if (currentTestimonial < testimonials.length - 1) {
            currentTestimonial++;
            updateTestimonial();
        }
    };
    document.querySelectorAll('.testimonial-page').forEach(el => {
        el.onclick = () => {
            currentTestimonial = parseInt(el.getAttribute('data-idx'));
            updateTestimonial();
        };
    });
}

function updateTestimonial() {
    renderTestimonial(currentTestimonial);
    renderPagination();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTestimonial);
} else {
    updateTestimonial();
}

document.addEventListener('DOMContentLoaded', () => {
    const dndButton = document.querySelector('.dnd');
    const body = document.body;
    let isDarkMode = false;

    dndButton.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            body.style.backgroundImage = 'url(/assets/images/texture2.png)';
            if (dndButton.tagName === 'IMG') {
                dndButton.src = '/assets/images/dnd2.png';
            }
            document.querySelectorAll('.left-nav a, .right-nav p, .hero-section h3, .hero-section h1, .bio, .about-section h1, .about-section h6, .about-section p, .experience-section h1, .exp-num, .exp .title, .time-period, .recent-works-section h1, .tech-stack-section h1, .testimonials-section h1, .testimonial-pagination, .divider').forEach(element => {
                element.style.color = '#FFFFFF';
                if (element.classList.contains('divider')) {
                    element.style.backgroundColor = '#FFFFFF';
                }
            });
            document.querySelectorAll('.mockup-container img').forEach(img => {
                img.style.border = '2px solid #ACACAC';
            });
        } else {
            body.style.backgroundImage = 'url(/assets/images/texture.png)';
            if (dndButton.tagName === 'IMG') {
                dndButton.src = '/assets/images/dnd.png';
            }
            document.querySelectorAll('.left-nav a, .right-nav p, .hero-section h3, .hero-section h1, .bio, .about-section h1, .about-section h6, .about-section p, .experience-section h1, .exp-num, .exp .title, .time-period, .recent-works-section h1, .tech-stack-section h1, .testimonials-section h1, .testimonial-pagination, .divider').forEach(element => {
                element.style.color = '';
                if (element.classList.contains('divider')) {
                    element.style.backgroundColor = '';
                }
            });
            document.querySelectorAll('.mockup-container img').forEach(img => {
                img.style.border = 'none';
            });
        }
    });

    const smoothScrollTo = (target, duration = 1000) => {
        const startY = window.scrollY;
        const endY = target.getBoundingClientRect().top + startY;
        const distance = endY - startY;
        let startTime;

        const animate = time => {
            startTime ??= time;
            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1);
            const ease = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            window.scrollTo(0, startY + distance * ease);
            if (elapsed < duration) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };

    document.querySelectorAll('.footer-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href?.startsWith('#') && href !== '#works') {
            link.onclick = e => {
                e.preventDefault();
                const target = document.getElementById(href.slice(1));
                if (target) smoothScrollTo(target, 1000);
            };
        } else if (href === '#works') {
            link.removeAttribute('href');
            link.style.cursor = 'default';
        }
    });

    const contactBtn = document.getElementById('contact-button');
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                smoothScrollTo(contactSection, 1000);
            }
        });
    }

    const resumeBtn = document.getElementById('resume-button');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            const resumeUrl = '/assets/documents/RESUME_TS.pdf';
            const link = document.createElement('a');
            link.href = resumeUrl;
            link.download = 'Theojohn_Sosa_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
}); 