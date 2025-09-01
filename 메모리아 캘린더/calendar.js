function toggleInfo(id) {
    document.querySelectorAll('.info').forEach(function(el) {
        if (el.id !== id) el.style.display = 'none';
    });
    var info = document.getElementById(id);
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
}

// 닫기 버튼 기능 추가
function closeInfo(id) {
    var info = document.getElementById(id);
    if (info) info.style.display = 'none';
}