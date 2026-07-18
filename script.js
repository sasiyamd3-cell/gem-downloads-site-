// ========== පසුව API එකට මාරු කරනවා ==========

// 1. සම්පූර්ණ බාගත කිරීම් (demo value)
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('totalDownloads').textContent = '4.6B+';
});

// 2. නිශ්චිත Gem එක සෙවීම (demo response)
function fetchGemStats() {
    const name = document.getElementById('gemName').value.trim();
    const version = document.getElementById('gemVersion').value.trim();
    const resultDiv = document.getElementById('gemResult');

    if (!name) {
        resultDiv.innerHTML = '<p style="color:#ff6b6b;">⚠️ කරුණාකර Gem නමක් ඇතුළත් කරන්න.</p>';
        return;
    }

    // 🟡 මෙය උදාහරණයක් පමණයි - පසුව Real API call එක දානවා
    const demoData = {
        name: name,
        version: version || 'latest',
        version_downloads: Math.floor(Math.random() * 50000) + 1000,
        total_downloads: Math.floor(Math.random() * 10000000) + 500000
    };

    resultDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; flex-wrap:wrap;">
            <span><strong>📦 ${demoData.name}</strong> (v${demoData.version})</span>
            <span>🔄 මෙම Version: <strong>${demoData.version_downloads.toLocaleString()}</strong></span>
            <span>📈 සියලුම Versions: <strong>${demoData.total_downloads.toLocaleString()}</strong></span>
        </div>
    `;
}

// 3. ජනප්‍රිය Gems 5ක් සඳහා (demo)
function fetchAllPopular() {
    const gems = ['rails', 'nokogiri', 'devise', 'puma', 'sidekiq'];
    const resultDiv = document.getElementById('popularResults');

    let html = '<ul style="list-style:none; padding:0;">';
    gems.forEach(g => {
        const downloads = (Math.floor(Math.random() * 9000000) + 1000000).toLocaleString();
        html += `<li style="padding:6px 0; border-bottom:1px solid rgba(255,255,255,0.05);">
                    💎 ${g} → <strong>${downloads}</strong> downloads
                 </li>`;
    });
    html += '</ul>';
    resultDiv.innerHTML = html;
}
