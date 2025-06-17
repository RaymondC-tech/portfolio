
const userBioChunks = [
    `Contaction Information:
        - Email: school: raymonds.chan@mail.utoronto.ca, personal: raymondch49@gmail.com
        - Linkedin: <a href="https://www.linkedin.com/in/rchan49/" target="_blank" rel="noopener noreferrer"><u>Linkedin</u></a>
        - Github: <a href="https://github.com/RaymondC-tech" target="_blank" rel="noopener noreferrer" ><u>Github</u></a>`,
    `Education: Education:
        - University of Toronto, bachelors of science, majoring in computer science (2024 - 2029)
            - Activities and socities: member of perception team for UTFR (Formula team)
            - Deans Honours List
        - Agincourt Collegiate Institute (Toronto)
            - Activities and societies: President of Math Club, Vice President of Debate Club, Vice President of Deca, Publicity of Computer Club, Member and Section Leader of Wind Symphony 
                                        and Senior Jazz, and Member of the Volleyball team
            
            Excellence in Data Management Award
            Graduated with the highest standing in Grade 12 University level Data Management.

            Excellence in Economics Award
            Graduated with the highest standing in Grade 12 University level Economics  

            Awards:
            - Governor General of Canada Bronze Medallion (The Bronze Medallion is presented by the Government of Canada to the student who graduates with the highest standing in their highschool)
            - International Group Incorporated Mathematics Scholarship (Donated by The International Group to a student who shows excellence in three Mathematics courses)
        `,
    `Technical skills:
    Languages: Python, TypeScript, JavaScript, SQL, C, PostgreSQL, Java, HTML/CSS, Bash, Golang
    Developer tools: Version Control: Git, GitHub,  Database Tools (Postico, pgAdmin, MongoDB Compass), Data Science (Jupyter Notebook, Google Colab), Cloud Platforms (AWS, Azure, Google Cloud Platform), Containerization 
                    (Docker, Kubernetes), CI/CD (CircleCI, GitHub Actions, Jenkins), (Design: Figma, Adobe Creative Suite)
    Technologies and Frameworks:
        - Frontend (React, React Native, Next.js, Vue.js, Svelte, Tailwind CSS, Angular)
        - Backend (Node.js, Express.js, Nest.js, Flask, gRPC)
        - Databases (PostgreSQL, MongoDB, Redis, Snowflake, Google BigQuery)
        - AI/ML (PyTorch, TensorFlow, LangChain, RAG, Numpy, Pandas)
        - DevOps (Docker, Kubernetes, CircleCI, GitHub Actions, Terraform)
        - Testing (Jest, PyTest, Selenium, Puppeteer)
        - APIs & Integration (REST APIs, GraphQL, WebSocket, RabbitMQ)`,
    `Work Experience
    Recess Hacks 4.0 June 2024 - September 2024
        Lead Organizer
        • Directed the transformation of Recess Hacks 4.0, growing it from a small community event into a major international
        online hackathon
        • Secured over $150,000 in sponsorships, attracting 200+ participants globally from 10+ countries, and collaborating with
        corporate partners to fund and support the event
        • Managed a remote team to coordinate marketing, outreach, prize distribution, and competition structure to ensure smooth
        execution
    Mathnasium Markham August 2023- July 2024
        Math Instructor
        • Designed and led personalized math tutoring sessions for students ranging from elementary to high school
        • Applied diverse teaching techniques to increase student comprehension and confidence in mathematics
        • Collaborated with fellow instructors to assess student progress, adjusting teaching strategies for optimal learning outcomes
    Piano Instructor June 2023 - September 2023
        - Provides a well-rounded musical education, covering music theory, technique, and performance skills.
        - Focuses on the specific needs and interests of each learner.
        - Encourages creativity and self-expression through music, allowing students to explore their own musical voice.
    `,
    `Notable Projects
    WATTS UP
        • Designed a smart mobile booking assistant using React and Django, enabling seamless searching, comparison, and
        reservation of EV charging stations, earning Best Environmental Project at Delta Hacks among 500+ competitors at
        McMaster University
        • Implemented voice command support, enabling hands-free navigation and interaction with the platform using natural
        language
        • Developed an AI-powered recommendation engine using Python and LangChain to analyze user preferences and suggest
        optimal charging stations with 95% accuracy
    AntiTetris
        • Developed a real-time, two-player Tetris game using React and JavaScript, leveraging browser-based timers to
        synchronize game states, winning First Place at NewHacks out of 350+ competitors at the University of Toronto
        • Implemented cyberattack mechanics via WebSocket, enabling players to launch DDoS, phishing, and other attacks to
        disrupt opponents while learning cybersecurity concepts
        • Designed an interactive learning experience, teaching attack and defense strategies through competitive gameplay
    SafeSteps
        • Engineered a cross-platform mobile app using React and Maps JavaScript API to provide optimized walking routes
        that automatically avoid user-reported hazards
        • Implemented a dynamic hazard-reporting system, enabling users to submit and visualize dangerous spots on the map
        • Enhanced travel safety by leveraging FastAPI for quick data retrieval from Mongodb database and on-the-fly route
        recalculations to continuously recalculate the different routes for safer navigation
    Caffio
        • Developed a full-stack caffeine monitoring application using React and Firebase, enabling users to track daily intake,
        spending, and consumption trends for healthier coffee habits
        • Designed an intuitive user interface for selecting coffee types and calculating caffeine levels with real-time updates`,
    `Hobbies
    - Playing sports
        - Raymond loves playing all type of indoor and outdoor sports especially volleyball and basketball. Fun fact: Raymond has played competitively or in house league for every sport except for golf and american football
    - Working out
        - Raymond loves going to the gym to ease my stress, focusing on strength. Fun fact, Raymond HATEs cardio and running. 
    - Eating
        - Raymond loves trying new dishes and exploring diverse cuisine
    - Building Projects
        - Raymond loves building projects software and hardware that Raymond uses everyday to automate his life
    - Music
        - 12+ years of playing piano and 8+ years playing the trombone, I enjoy playing music for the entertainment and the relaxation for my audience. `,
    `about me: Raymond Chan is a Computer Science student at the University of Toronto, St. George campus. He is highly self-motivated has a deep curiosity for both academic and real-world applications of 
    computer science and instrested in machine learning and full stack develpopment `
]

export default userBioChunks