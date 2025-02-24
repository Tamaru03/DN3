// 当前选中的内容类型
let currentContent = 'ip';

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

// 合作案例数据
const caseData = [
    {title: '原神×肯德基 Ⅰ',subtitle: '跨界营销合作案例',image: 'case-pic/原神kfc1.png', articleUrl: 'articles/case1.html'},
    {title: '原神×肯德基 Ⅱ',subtitle: '联名套餐推广活动',image: 'case-pic/原神kfc2.png',articleUrl: 'articles/case2.html'},
    {title: '恋与深空×肯德基',subtitle: '主题店铺合作',image: 'pic/kfc.png',articleUrl: 'articles/case3.html'},
    {title: '原神×娇兰',subtitle: '主题店铺合作',image: 'case-pic/原神娇兰.png'},
    {title: '橘朵×未定事件簿',subtitle: '主题店铺合作',image: 'case-pic/橘朵未定.png'},
    {title: '中信银行×闪耀暖暖',subtitle: '主题店铺合作',image: 'case-pic/中信暖暖.png'},
    {title: '欧莱雅×奥特曼',subtitle: '主题店铺合作',image: 'case-pic/欧莱雅奥特曼.png'},
    {title: '炫迈×星穹铁道',subtitle: '主题店铺合作',image: 'case-pic/炫迈星铁.png'},
    {title: '随变×原神',subtitle: '主题店铺合作',image: 'case-pic/随变原神.png'},
    {title: '和平精英×欧莱雅',subtitle: '主题店铺合作',image: 'case-pic/和平精英×欧莱雅.png'},
    {title: '蒙牛真果粒×王者荣耀',subtitle: '主题店铺合作',image: 'case-pic/蒙牛王者.png'},
    {title: '中信银行×星穹铁道',subtitle: '主题店铺合作',image: 'case-pic/中信星铁.png'},

];

// 渲染合作案例卡片
function renderCaseCards() {
    const container = document.querySelector('.container');
    // 移除类型选择器
    const typeSelector = container.querySelector('.type-selector');
    if (typeSelector) {
        typeSelector.remove();
    }
    
    const grid = document.querySelector('.ip-grid');
    grid.className = 'ip-grid case-style';
    grid.innerHTML = '';
    
    caseData.forEach(caseItem => {
        const card = document.createElement('div');
        card.className = 'ip-card case-card';
        
        card.innerHTML = `
            <a href="${caseItem.articleUrl}" class="case-link">
                <div class="case-image-container">
                    <img src="${caseItem.image}" alt="${caseItem.title}" class="case-image">
                </div>
                <div class="case-info">
                    <h3>${caseItem.title}</h3>
                    <p class="subtitle">${caseItem.subtitle}</p>
                    <span class="learn-more">了解更多</span>
                </div>
            </a>
        `;
        
        grid.appendChild(card);
    });
}

// 处理导航栏切换
function handleNavigation() {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 移除所有标签的active类
            tabs.forEach(t => t.classList.remove('active'));
            // 添加当前标签的active类
            tab.classList.add('active');
            
            // 根据标签内容切换显示内容
            if (tab.textContent === 'IP评分') {
                currentContent = 'ip';
                renderTypeSelector();
                renderIPCards();
            } else if (tab.textContent === '合作案例') {
                currentContent = 'case';
                renderCaseCards();
            }
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    handleNavigation();
    renderTypeSelector();
    renderIPCards();
});
