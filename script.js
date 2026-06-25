function showCareer() {

    let name = document.getElementById("name").value;
    let branch = document.getElementById("branch").value;
    let userSkills = document.getElementById("skills").value;
    let interest = document.getElementById("interest").value;

    let career = "";
    let missingSkills = "";
    let roadmap = "";
    let certifications = "";
    let questions = "";
    let projects = "";
    let companies = "";

    let userInterest = interest.toLowerCase();

    // AI Engineer
    if (
        userInterest.includes("ai") ||
        userInterest.includes("machine learning") ||
        userInterest.includes("artificial intelligence")
    ) {

        career = "AI Engineer";

        missingSkills =
            "Python, Machine Learning, Deep Learning, NLP, TensorFlow";

        roadmap =
            "✅ Month 1 - Learn Python Basics<br>" +
            "✅ Month 2 - Learn Machine Learning<br>" +
            "✅ Month 3 - Learn Deep Learning<br>" +
            "✅ Month 4 - Build AI Projects<br>" +
            "✅ Month 5 - Learn NLP & Generative AI";

        certifications =
            "• Google AI Essentials<br>" +
            "• IBM AI Engineer<br>" +
            "• Microsoft Azure AI Fundamentals";

        questions =
            "<li>What is Machine Learning?</li>" +
            "<li>Difference between AI and ML?</li>" +
            "<li>What is Deep Learning?</li>" +
            "<li>Explain Neural Networks.</li>";

        projects =
            "🤖 AI Chatbot<br>" +
            "📸 Image Classification System<br>" +
            "🎬 Movie Recommendation System<br>" +
            "📝 Resume Screening Tool";

        companies =
            "Google<br>" +
            "Microsoft<br>" +
            "OpenAI<br>" +
            "NVIDIA<br>" +
            "Amazon";
    }

    // Full Stack Developer
    else if (
        userInterest.includes("web") ||
        userInterest.includes("full stack") ||
        userInterest.includes("frontend") ||
        userInterest.includes("backend")
    ) {

        career = "Full Stack Developer";

        missingSkills =
            "HTML, CSS, JavaScript, React, Node.js, MongoDB";

        roadmap =
            "✅ Month 1 - Learn HTML & CSS<br>" +
            "✅ Month 2 - Learn JavaScript<br>" +
            "✅ Month 3 - Learn React JS<br>" +
            "✅ Month 4 - Learn Node.js & Express<br>" +
            "✅ Month 5 - Build Full Stack Projects";

        certifications =
            "• Meta Front-End Developer<br>" +
            "• Meta Back-End Developer<br>" +
            "• Google UX Design";

        questions =
            "<li>What is HTML?</li>" +
            "<li>Difference between CSS and JavaScript?</li>" +
            "<li>What is React?</li>" +
            "<li>Explain REST API.</li>";

        projects =
            "🌐 Personal Portfolio Website<br>" +
            "🛒 E-Commerce Website<br>" +
            "📚 Student Management System<br>" +
            "💬 Real-Time Chat Application";

        companies =
            "Google<br>" +
            "Amazon<br>" +
            "Microsoft<br>" +
            "Infosys<br>" +
            "TCS";
    }

    // Cyber Security
    else if (
        userInterest.includes("cyber") ||
        userInterest.includes("security")
    ) {

        career = "Cyber Security Analyst";

        missingSkills =
            "Networking, Linux, Ethical Hacking, SIEM, Penetration Testing";

        roadmap =
            "✅ Month 1 - Learn Networking<br>" +
            "✅ Month 2 - Learn Linux<br>" +
            "✅ Month 3 - Learn Ethical Hacking<br>" +
            "✅ Month 4 - Learn Security Tools<br>" +
            "✅ Month 5 - Build Security Projects";

        certifications =
            "• CEH<br>" +
            "• CompTIA Security+<br>" +
            "• Google Cybersecurity";

        questions =
            "<li>What is Cyber Security?</li>" +
            "<li>What is Phishing?</li>" +
            "<li>What is Firewall?</li>" +
            "<li>What is Encryption?</li>";

        projects =
            "🔐 Password Strength Checker<br>" +
            "🛡 Vulnerability Scanner<br>" +
            "📡 Network Monitoring Dashboard<br>" +
            "🚨 Phishing Detection Tool";

        companies =
            "Cisco<br>" +
            "Palo Alto Networks<br>" +
            "IBM<br>" +
            "Deloitte<br>" +
            "Accenture";
    }

    // Data Analyst
    else {

        career = "Data Analyst";

        missingSkills =
            "SQL, Excel, Power BI, Python, Statistics";

        roadmap =
            "✅ Month 1 - Learn SQL<br>" +
            "✅ Month 2 - Learn Excel<br>" +
            "✅ Month 3 - Learn Power BI<br>" +
            "✅ Month 4 - Learn Python for Analytics<br>" +
            "✅ Month 5 - Build Dashboard Projects";

        certifications =
            "• Google Data Analytics<br>" +
            "• Microsoft Power BI<br>" +
            "• IBM Data Analyst";

        questions =
            "<li>What is SQL?</li>" +
            "<li>What is Power BI?</li>" +
            "<li>Explain JOIN.</li>" +
            "<li>Difference between SQL and Excel?</li>";

        projects =
            "📊 Sales Dashboard using Power BI<br>" +
            "📈 Customer Analysis Project<br>" +
            "💰 Financial Data Dashboard<br>" +
            "📉 Data Visualization using Python";

        companies =
            "Google<br>" +
            "Microsoft<br>" +
            "Amazon<br>" +
            "Deloitte<br>" +
            "Accenture";
    }

    let score = Math.floor(Math.random() * 21) + 80;

    document.getElementById("result").innerHTML = `

    <h2>👋 Hello ${name}</h2>

    <p><b>🎓 Branch:</b> ${branch}</p>

    <p><b>💻 Current Skills:</b> ${userSkills}</p>

    <hr>

    <h2>🚀 Recommended Career</h2>
    <p><b>${career}</b></p>

    <h3>📊 Career Match Score</h3>
    <p>${score}%</p>

    <div style="width:100%;background:#ddd;border-radius:10px;">
        <div style="
            width:${score}%;
            height:20px;
            background:green;
            border-radius:10px;">
        </div>
    </div>

    <hr>

    <h3>⚒ Missing Skills</h3>
    <p>${missingSkills}</p>

    <h3>🗺 Learning Roadmap</h3>
    <p>${roadmap}</p>

    <h3>📚 Recommended Certifications</h3>
    <p>${certifications}</p>

    <h3>🎯 Interview Questions</h3>
    <ul>
        ${questions}
    </ul>
    <h3>💼 Recommended Projects</h3>
    <p>${projects}</p>

    <h3>🏢 Top Hiring Companies</h3>
    <p>${companies}</p>

    <h3>✅ Career Guidance Generated Successfully</h3>
    `;
}

function downloadPDF() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    let report =
        document.getElementById("result").innerText;

    doc.text(report, 10, 10);

    doc.save("Career_Report.pdf");
}