document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiệu ứng mượt mà khi click Menu
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 2. Thông báo khi ủng hộ
    const donateBtns = document.querySelectorAll('.btn-donate');
    donateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('🌟 Tuyệt vời! Cảm ơn bạn đã sẵn lòng chia sẻ. Hệ thống đang chuyển hướng bạn đến cổng thanh toán an toàn.');
        });
    });

    // 3. Xử lý Form với hiệu ứng Glass
    const form = document.getElementById('charityForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('📩 Thông điệp của bạn đã được gửi đi thành công. Cảm ơn tấm lòng của bạn!');
        form.reset();
    });

    // 4. Header đổi màu khi cuộn
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.glass-header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.height = '70px';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
            header.style.height = '80px';
        }
    });
});