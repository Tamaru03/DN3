// IP数据
const ipData = [
    //游戏IP
    {name: '原神',image: 'pic/ys.png',score: 9.5,type: '游戏' },
    {name: '恋与深空',image: 'pic/share.png',score: 8.8,type: '游戏',},
    {name: '星穹铁道',image: 'pic/星铁.png',score: 8.2,type: '游戏',},
    {name: '王者荣耀',image: 'pic/王者.png',score: 8.2,type: '游戏',},
    {name: '蛋仔派对',image: 'pic/蛋仔派对.png',score: 8.2,type: '游戏',},
    {name: '明日方舟',image: 'pic/明日方舟.png',score: 8.2,type: '游戏',},
    {name: '无限暖暖',image: 'pic/无限暖暖.png',score: 8.2,type: '游戏',},
    {name: '世界之外',image: 'pic/世界之外.png',score: 8.2,type: '游戏',},
    {name: '光遇',image: 'pic/光遇.png',score: 8.2,type: '游戏',},
    {name: '三角洲行动',image: 'pic/三角洲.png',score: 8.2,type: '游戏',},
    {name: '金铲铲之战',image: 'pic/金铲铲.png',score: 8.2,type: '游戏',},
    {name: '第五人格',image: 'pic/第五人格.png',score: 8.2,type: '游戏',},
    {name: '永劫无间',image: 'pic/永杰。png.webp',score: 8.2,type: '游戏',},
    {name: '绝区零',image: 'pic/绝区零.png',score: 8.2,type: '游戏',},




    //动漫IP
    {name: '名侦探柯南',image: 'pic/nan.png',score: 9.8,type: '动漫',},
    {name: '间谍过家家',image: 'pic/间谍过家家.png',score: 9.8,type: '动漫',},
    {name: '海绵宝宝',image: 'pic/海绵宝宝.png',score: 9.8,type: '动漫',},
    {name: '葬送的芙莉莲',image: 'pic/芙.png',score: 9.8,type: '动漫',},
    {name: '蜡笔小新',image: 'pic/蜡笔小新.png',score: 9.8,type: '动漫',},
    {name: '轻音少女',image: 'pic/轻音少女.png',score: 9.8,type: '动漫',},
    {name: '小马宝莉',image: 'pic/小马宝莉.png',score: 9.8,type: '动漫',},
    {name: 'JOJO的奇妙冒险',image: 'pic/JOJO.png',score: 9.8,type: '动漫',},
   
];

// 当前选中的IP类型
let selectedType = '游戏';

// 渲染IP类型选择器
function renderTypeSelector() {
    const container = document.querySelector('.container');
    const selector = document.createElement('div');
    selector.className = 'type-selector';
    
    selector.innerHTML = `
        <select id="ipTypeSelector">
            <option value="游戏">游戏</option>
            <option value="动漫">动漫</option>
            <option value="其他">其他</option>
        </select>
    `;

    container.insertBefore(selector, container.firstChild);

    // 添加选择器变化事件监听
    document.getElementById('ipTypeSelector').addEventListener('change', (e) => {
        selectedType = e.target.value;
        renderIPCards();
    });
}

// 渲染IP卡片
function renderIPCards() {
    const ipGrid = document.querySelector('.ip-grid');
    ipGrid.innerHTML = '';
    
    // 添加类型样式类
    ipGrid.className = `ip-grid ${selectedType === '游戏' ? 'game-style' : 'anime-style'}`;
    
    const filteredIPs = ipData.filter(ip => ip.type === selectedType);

    filteredIPs.forEach(ip => {
        const card = document.createElement('div');
        card.className = `ip-card ${ip.type === '游戏' ? 'game-card' : 'anime-card'}`;
        
        card.innerHTML = `
            <img src="${ip.image}" alt="${ip.name}" class="ip-image ${ip.type === '游戏' ? 'game-image' : 'anime-image'}">
            <div class="ip-info">
                <h3>${ip.name}</h3>
                <div class="score-container">
                    <div class="score">综合评分：${ip.score}</div>
                </div>
                <a href="#" class="learn-more">了解更多</a>
            </div>
        `;

        ipGrid.appendChild(card);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderTypeSelector();
    renderIPCards();
});