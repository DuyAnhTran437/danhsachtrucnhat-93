document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector('.navigation').classList.remove('hidden');
        document.querySelector('.navigation').style.opacity = 1;
    }, 500);
});

function navigateTo(id) {
    document.querySelectorAll('.container').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('show');
    });

    document.querySelector('.navigation').classList.add('hidden');

    const container = document.getElementById(id);
    container.classList.remove('hidden');
    setTimeout(() => container.classList.add('show'), 100);
}

function goBack() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(section => {
        section.classList.add('hide');
        setTimeout(() => {
            section.classList.add('hidden');
            section.classList.remove('hide');
        }, 500);  // Thời gian hiệu ứng ẩn
    });

    // Hiển thị lại navigation với hiệu ứng mượt mà và slideInUp lần lượt
    setTimeout(() => {
        const navigation = document.querySelector('.navigation');
        navigation.classList.remove('hidden');
        navigation.style.opacity = 1;

        // Đặt lại opacity của các nav-item để chúng có thể xuất hiện lần lượt
        document.querySelectorAll('.nav-item').forEach((item, index) => {
            item.style.animation = 'slideInUp 1s ease-out forwards';
            item.style.animationDelay = `${index * 0.2}s`; // Đặt độ trễ lần lượt
        });
    }, 500);
}

function navigateToPrevious() {
    const currentWeek = document.querySelector('.container.show');
    let prevWeek = currentWeek.previousElementSibling;
    if (prevWeek && prevWeek.classList.contains('container')) {
        currentWeek.classList.add('hide');
        setTimeout(() => {
            currentWeek.classList.add('hidden');
            currentWeek.classList.remove('hide');
            navigateTo(prevWeek.id);
        }, 750);  // Thời gian hiệu ứng ẩn
    }
}

function navigateToNext() {
    const currentWeek = document.querySelector('.container.show');
    let nextWeek = currentWeek.nextElementSibling;
    if (nextWeek && nextWeek.classList.contains('container')) {
        currentWeek.classList.add('hide');
        setTimeout(() => {
            currentWeek.classList.add('hidden');
            currentWeek.classList.remove('hide');
            navigateTo(nextWeek.id);
        }, 750);  // Thời gian hiệu ứng ẩn
    }
}
