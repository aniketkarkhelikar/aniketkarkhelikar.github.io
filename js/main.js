// js/main.js

// 1. Dark mode functionality
let darkMode = localStorage.getItem('darkMode') === 'true';

// 2. Projects Data (Aniket's Content)
const projects = [
    {
        title: "NCIIPC AI Grand Challenge",
        description: "National Finalist. Built a specialized retrieval pipeline validated against strict government benchmarks. Shortlisted for On-Site Evaluation at IIT Delhi (Top 15 nationwide).",
        tags: ["NCIIPC", "NLP", "Retrieval Pipeline"],
        github: "https://github.com/aniketkarkhelikar", 
        stars: "Stage 1"
    },
    {
        title: "ArogyaAI (Stealth)",
        description: "XXXXXXX X XXXXXX. XXXXXX XXXXX XXXX XXXXXXXXXX XX XXXXXXX XXXXXX XXXXX XXXXX. XXXXXXXX XXX XXXXXXXXX XX XXXX.",
        tags: ["XXXXXX", "Healthcare AI", "Stealth Mode"],
        github: "", // Empty to trigger stealth rendering
        stars: "Founder"
    },
    {
        title: "Web Master Terminal",
        description: "Centralized Remote Terminal Controller. Master-Agent architecture using Socket.io for real-time, low-latency control of multiple remote servers.",
        tags: ["Node.js", "Socket.io", "Systems"],
        github: "https://github.com/aniketkarkhelikar/web_terminal",
        stars: "Systems"
    },
    {
        title: "Distributed RAG Pipeline",
        description: "Advanced experiments in RAG. Implemented distributed indexing using Ray to handle large-scale document processing with horizontal scaling.",
        tags: ["Ray", "Qdrant", "Distributed Computing"],
        github: "https://github.com/aniketkarkhelikar/rag_tests",
        stars: "R&D"
    },
    {
        title: "Bharat FoodTrace",
        description: "Blockchain-based Supply Chain Traceability. End-to-end tracking using Ethereum smart contracts to ensure food safety transparency (VIBE CODED PROTOTYPE)",
        tags: ["Solidity", "Web3", "Blockchain"],
        github: "https://github.com/aniketkarkhelikar/bharat-foodtrace"
    },
    {
        title: "AutoGit",
        description: "Stateless Git & SSH manager for shared lab PCs. Automates temporary key generation, interactive auto-push of changes, and secure credential wiping.",
        tags: ["Bash", "Security", "SSH", "Automation"],
        github: "https://github.com/aniketkarkhelikar/autogit",
        stars: "DevOps"
    }
];

// 3. Quotes (Aniket's favorites)
const quotes = [
    { 
        text: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.", 
        author: "Steve Jobs" 
    },
    // The Marathi verses split into individual slides
    { text: "॥श्रीराम॥\nबहुतां जन्मांचा सेवट | नरदेह सांपडे अवचट |\nयेथें वर्तावें चोखट | नितिन्यायें ||१||", author: "समर्थ रामदास स्वामीं" },
    { text: "प्रपंच करावा नेमक | पाहावा परमार्थविवेक |\nजेणेंकरितां उभय लोक | संतुष्ट होती ||२||", author: "समर्थ रामदास स्वामीं" },
    { text: "शत वरुषें वय नेमिलें | त्यांत बाळपण नेणतां गेलें |\nतारुण्य अवघें वेचलें | विषयांकडे ||३||", author: "समर्थ रामदास स्वामीं" },
    { text: "वृधपणीं नाना रोग | भोगणें लागे कर्मभोग |\nआतां भगवंताचा योग | कोणे वेळे ||४||", author: "समर्थ रामदास स्वामीं" },
    { text: "राजिक देविक उदेग चिंता | अन्न वस्त्र देहममता |\nनाना प्रसंगें अवचिता | जन्म गेला ||५||", author: "समर्थ रामदास स्वामीं" },
    { text: "लोक मरमरों जाती | वडिलें गेलीं हे प्रचिती |\nजाणत जाणत निश्चिती | काये मानिलें ||६||", author: "समर्थ रामदास स्वामीं" },
    { text: "अग्न गृहासी लागला | आणि सावकास निजेला |\nतो कैसा म्हणावा भला | आत्महत्यारा ||७||", author: "समर्थ रामदास स्वामीं" },
    { text: "पुण्यमार्ग अवघा बुडाला | पापसंग्रह उदंड जाला |\nयेमयातनेचा झोला | कठीण आहे ||८||", author: "समर्थ रामदास स्वामीं" },
    { text: "तरी आतां ऐसें न करावें | बहुत विवेकें वर्तावें |\nइहलोक परत्र साधावें | दोहींकडे ||९||", author: "समर्थ रामदास स्वामीं" },
    { text: "आळसाचें फळ रोकडें | जांभया देऊन निद्रा पडे |\nसुख म्हणोन आवडे | आळसी लोकां ||१०||", author: "समर्थ रामदास स्वामीं" },
    { text: "साक्षेप करितां कष्टती | परंतु पुढें सुरवाडती |\nखाती जेविती सुखी होती | येत्नेंकरूनी ||११||", author: "समर्थ रामदास स्वामीं" },
    { text: "आळस उदास नागवणा | आळस प्रेत्नबुडवणा |\nआळसें करंटपणाच्या खुणा | प्रगट होती ||१२||", author: "समर्थ रामदास स्वामीं" },
    { text: "म्हणौन आळस नसावा | तरीच पाविजे वैभवा |\nअरत्रीं परत्रीं जीवा | समाधान ||१३||", author: "समर्थ रामदास स्वामीं" },
    { text: "प्रेत्न करावा तो कोण | हेंचि ऐका निरूपण |\nसावध करून अंतःकर्ण | निमिष्य येक ||१४||", author: "समर्थ रामदास स्वामीं" },
    { text: "प्रातःकाळी उठावें | कांहीं पाठांतर करावे |\nयेथानशक्ती आठवावें | सर्वोत्तमासी ||१५||", author: "समर्थ रामदास स्वामीं" },
    { text: "मग दिशेकडे जावें | जे कोणासिच नव्हे ठावें |\nशौच्य आच्मन करावें | निर्मळ जळें ||१६||", author: "समर्थ रामदास स्वामीं" },
    { text: "मुखमार्जन प्रातःस्नान | संध्या तर्पण देवतार्चन |\nपुढें वैश्यदेव उपासन | येथासांग ||१७||", author: "समर्थ रामदास स्वामीं" },
    { text: "कांहीं फळाहार घ्यावा | मग संसारधंदा करावा |\nसुशब्दें राजी राखावा | सकळ लोक ||१८||", author: "समर्थ रामदास स्वामीं" },
    { text: "ज्या ज्याचा जो व्यापार | तेथें असावे खबर्दार |\nदुश्चितपणें तरी पोर | वेढा लावी ||१९||", author: "समर्थ रामदास स्वामीं" },
    { text: "चुके ठके विसरे सांडी | आठवण जालियां चर्फडी |\nदुश्चित आळसाची रोकडी | प्रचित पाहा ||२०||", author: "समर्थ रामदास स्वामीं" },
    { text: "याकारणें सावधान | येकाग्र असावें मन |\nतरी मग जेवितां भोजन | गोड वाटे ||२१||", author: "समर्थ रामदास स्वामीं" },
    { text: "पुढें भोजन जालियांवरी | कांहीं वाची चर्चा करी |\nयेकांतीं जाऊन विवरी | नाना ग्रंथ ||२२||", author: "समर्थ रामदास स्वामीं" },
    { text: "तरीच प्राणी शाहाणा होतो | नाहींतरी मूर्खचि राहातो |\nलोक खाती आपण पाहातो | दैन्यवाणा ||२३||", author: "समर्थ रामदास स्वामीं" },
    { text: "ऐक सदेवपणाचें लक्षण | रिकामा जाऊं नेदी येक क्षण |\nप्रपंचवेवसायाचें ज्ञान | बरें पाहे ||२४||", author: "समर्थ रामदास स्वामीं" },
    { text: "कांहीं मेळवी मग जेवी | गुंतल्या लोकांस उगवी |\nशरीर कारणीं लावी | कांहीं तरी ||२५||", author: "समर्थ रामदास स्वामीं" },
    { text: "कांहीं धर्मचर्चा पुराण | हरीकथा निरूपण |\nवायां जाऊं नेदी क्षण | दोहींकडे ||२६||", author: "समर्थ रामदास स्वामीं" },
    { text: "ऐसा जो सर्वसावध | त्यास कैंचा असेल खेद |\nविवेकें तुटला समंध | देहबुद्धीचा ||२७||", author: "समर्थ रामदास स्वामीं" },
    { text: "आहे तितुकें देवाचें | ऐसें वर्तणें निश्चयाचें |\nमूळ तुटें उद्वेगाचें | येणें रीतीं ||२८||", author: "समर्थ रामदास स्वामीं" },
    { text: "प्रपंचीं पाहिजे सुवर्ण | परमार्थीं पंचिकर्ण |\nमाहावाक्याचें विवरण | करितां सुटे ||२९||", author: "समर्थ रामदास स्वामीं" },
    { text: "कर्म उपासना आणि ज्ञान | येणें राहे समाधान |\nपरमार्थाचें जें साधन | तेंचि ऐकत जावें ||३०||", author: "समर्थ रामदास स्वामीं" }
];

// --- FUNCTIONS ---

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(() => {
        const label = element.querySelector('.card-value');
        const originalText = label.textContent;
        const copyText = element.querySelector('.copy-text');
        
        // Visual feedback
        label.textContent = "Copied to clipboard!";
        label.style.color = "var(--walter-green)";
        if(copyText) copyText.textContent = "✓";
        
        setTimeout(() => {
            label.textContent = originalText;
            label.style.color = "";
            if(copyText) copyText.textContent = "Copy";
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}
// Text Decoding Animation
function decodeText(element) {
    const text = element.getAttribute('data-decode') || element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    let iterations = 0;
    const speed = 30; 
    const cycles = 3; 
    
    const interval = setInterval(() => {
        element.textContent = text
            .split('')
            .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iterations / cycles) {
                    return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        
        iterations++;
        
        if (iterations >= text.length * cycles) {
            clearInterval(interval);
            element.textContent = text;
        }
    }, speed);
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3 class="project-title">${project.title}</h3>
                <span class="project-stars">${project.stars || '★'}</span>
            </div>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            ${project.github ? 
                `<a href="${project.github}" class="project-link" target="_blank">View on GitHub →</a>` : 
                `<span class="project-link" style="opacity: 0.5; cursor: not-allowed;">Access Restricted (Stealth)</span>`
            }
        </div>
    `).join('');
}

function displayRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteText = document.querySelector('.quote-text');
    const quoteAuthor = document.querySelector('.quote-author');
    if (quoteText && quoteAuthor) {
        quoteText.textContent = `"${randomQuote.text}"`;
        quoteAuthor.textContent = `— ${randomQuote.author}`;
    }
}

function applyTheme() {
    const body = document.body;
    if (darkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

function toggleDarkMode() {
    darkMode = !darkMode;
    localStorage.setItem('darkMode', darkMode);
    applyTheme();
}

// Command Palette Logic
let commandPaletteOpen = false;

function toggleCommandPalette() {
    const palette = document.getElementById('command-palette');
    if (commandPaletteOpen) {
        palette.style.display = 'none';
        commandPaletteOpen = false;
    } else {
        palette.style.display = 'flex';
        document.getElementById('command-input').focus();
        showHelp();
        commandPaletteOpen = true;
    }
}

function showHelp() {
    const output = document.getElementById('command-output');
    output.innerHTML = `
        <div style="opacity: 0.7; margin-bottom: 0.5rem;">Available commands:</div>
        <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem; font-size: 0.85rem;">
            <span>home</span><span>→ Go to Top</span>
            <span>work</span><span>→ View Projects</span>
            <span>contact</span><span>→ Email & Info</span>
            <span>github</span><span>→ Open GitHub</span>
            <span>clear</span><span>→ Clear Terminal</span>
        </div>
    `;
}

function executeCommand(cmd) {
    const output = document.getElementById('command-output');
    switch(cmd) {
        case 'home': window.location.href = '#home'; toggleCommandPalette(); break;
        case 'work': window.location.href = '#work'; toggleCommandPalette(); break;
        case 'contact': window.location.href = '#contact'; toggleCommandPalette(); break;
        case 'github': window.open('https://github.com/aniketkarkhelikar', '_blank'); toggleCommandPalette(); break;
        case 'help': showHelp(); break;
        case 'clear': output.innerHTML = ''; break;
        default: output.innerHTML = `<span style="color: #ff5f56;">Command not found: ${cmd}</span>`;
    }
}

// Footer Metrics
function updateMetrics() {
    const metrics = document.getElementById('footer-metrics');
    const timestamp = document.getElementById('footer-timestamp');
    if (metrics && timestamp) {
        const now = new Date();
        timestamp.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }) + ' IST';
        
        // Mock render time for visual consistency
        const renderTime = Math.round(performance.now());
        metrics.textContent = `Render: ${renderTime}ms`;
    }
}

// Ring Buffer Scrollbar
function initScrollbar() {
    const scrollbar = document.createElement('div');
    scrollbar.className = 'ring-buffer-scrollbar';
    const head = document.createElement('div');
    head.className = 'ring-buffer-head';
    scrollbar.appendChild(head);
    document.body.appendChild(scrollbar);

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        head.style.top = scrolled + "%";
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    renderProjects();
    displayRandomQuote();
    initScrollbar();
    updateMetrics();

    const themeToggle = document.getElementById('theme-toggle');
    if(themeToggle) themeToggle.addEventListener('click', toggleDarkMode);

    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) setTimeout(() => decodeText(navLogo), 500);

    // Command Palette Listeners
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }
        if (e.key === 'Escape' && commandPaletteOpen) {
            toggleCommandPalette();
        }
    });

    const cmdInput = document.getElementById('command-input');
    if(cmdInput) {
        cmdInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                executeCommand(cmdInput.value.toLowerCase().trim());
                cmdInput.value = '';
            }
        });
    }
});
