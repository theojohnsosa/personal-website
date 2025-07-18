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
        text: `Theo's attention to detail and willingness to learn set him apart. He takes ownership of his work and is always looking for ways to make things better. He's a great communicator and a reliable teammate.`,
        name: 'Gab Baluyot',
        title: 'IT College Student',
        avatar: '/assets/images/dnd.png',
    },
    {
        text: `I've seen Theo grow from a curious student to a confident developer. He doesn't shy away from challenges and always delivers quality work. Any team would benefit from his drive and dedication.`,
        name: 'Mark Lim',
        title: 'Software Engineer',
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
// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateTestimonial);
} else {
    updateTestimonial();
} 