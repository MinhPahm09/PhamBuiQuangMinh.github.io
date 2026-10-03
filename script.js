// Trình xử lý sự kiện click vào các Project Card để show thông tin chi tiết
function openProject(projectId) {
    if(projectId === 'aijam') {
        alert("📊 PROJECT: CoFe2O4 Nanoparticles\n\nMethodology: Sol-gel synthesis & Core-shell polymer coating.\nAchievement: Grand Prix Award @ AI-JAM US.\n\n[Full paper documentation linked in official CV]");
    }
    if(projectId === 'wico') {
        alert("☀️ PROJECT: Photovoltaic Matrix Optimization\n\nMethodology: Crystal grain boundary manipulation.\nAchievement: Gold Medal @ WICO Korea.");
    }
}

// Hiệu ứng Terminal gõ chữ mượt mà khi load trang
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to SAT_1590_CHEM.DEV. Core integrity validated.");
});