// Pastikan script berjalan
console.log("Script loading...");

const questions = [
    { id: 1, type: 'pg', q: `Andi: "..., Sir. How are you this morning?" | Mr. Budi: "Good morning, Andi."`, options: ["Good afternoon", "Good evening", "Good morning", "Good night"], answer: 2 },
    { id: 2, type: 'pg', q: `Sita: "It’s already 9 PM. I have to go to sleep now. ... mom."`, options: ["Good morning", "Good bye", "Good night", "Good evening"], answer: 2 },
    { id: 3, type: 'pg', q: `What is the purpose of a "GRAND OPENING SALE" advertisement?`, options: ["To promote a store's discount", "To invite people", "To announce missing item", "To describe shoes"], answer: 0 },
    { id: 4, type: 'pg', q: `Rina: "Do you like spicy food?" | Maya: "... It makes my stomach ache."`, options: ["Yes, I do", "No, I don't like it", "I really love it", "Yes, it is my favorite"], answer: 1 },
    { id: 5, type: 'pg', q: `Last week, I ... a sack race for Independence Day.`, options: ["join", "joins", "joining", "joined"], answer: 3 },
    { id: 6, type: 'pg', q: `Announcement: Gather in school yard at 7 AM. What should students do?`, options: ["Wear traditional clothes", "Gather in school yard", "Clean the school", "Go home early"], answer: 1 },
    { id: 7, type: 'pg', q: `Where ... you yesterday afternoon?`, options: ["are", "is", "was", "were"], answer: 3 },
    { id: 8, type: 'pg', q: `If today is Wednesday, what day was the day before yesterday?`, options: ["Monday", "Tuesday", "Thursday", "Friday"], answer: 0 },
    { id: 9, type: 'pg', q: `Arrange these: (1) Serve hot tea, (2) Put teabag, (3) Boil water, (4) Pour water.`, options: ["3-2-4-1", "3-4-2-1", "2-3-4-1", "2-4-3-1"], answer: 0 },
    { id: 10, type: 'pg', q: `Arrange: (1) shoes (2) buy (3) our (4) and (5) feel (6) comfort (7) the`, options: ["2-3-1-4-5-7-6", "2-1-3-5-4-7-6", "5-7-6-4-2-3-1", "5-3-1-4-2-7-6"], answer: 0 },
    { id: 11, type: 'pg', q: `Rian: "He usually ... to work at 06.30 AM."`, options: ["go", "went", "goes", "going"], answer: 2 },
    { id: 12, type: 'pg', q: `Descriptive Text: Milo has orange fur and a long tail. Description:`, options: ["Black and fierce", "Orange fur and long tail", "Likes eating fish", "No tail"], answer: 1 },
    { id: 13, type: 'pg', q: `Report Text: Elephants are large. The synonym of "large" is...`, options: ["tiny", "small", "big", "short"], answer: 2 },
    { id: 14, type: 'pg', q: `What is likely done in an English Club meeting for debate?`, options: ["Play football", "Go home", "Train speaking skills", "Watch debate"], answer: 2 },
    { id: 15, type: 'pg', q: `Recount: It rained heavily, so we went home early. Reason?`, options: ["Tired", "Rained heavily", "Build sandcastle", "Fun holiday"], answer: 1 },
    { id: 16, type: 'pg', q: `Narrative: Malin Kundang denied his mother. The complication is...`, options: ["He was poor", "He became stone", "He searched wealth", "He denied his mother"], answer: 3 },
    { id: 17, type: 'pg', q: `Penguins cannot fly, ... they are excellent swimmers.`, options: ["and", "so", "but", "because"], answer: 2 },
    { id: 18, type: 'pg', q: `Arrange: (1) Hello I'm Budi, (2) Nice to meet you too, (3) Hi I'm Anton.`, options: ["1-3-2", "3-1-2", "1-2-3", "2-3-1"], answer: 0 },
    { id: 19, type: 'pg', q: `Cinderella theme: Kindness brings happiness.`, options: ["True", "False", "Stepmothers are rich", "Magic is evil"], answer: 0 },
    { id: 20, type: 'pg', q: `Greeting card from Mom and Dad. Who is the sender?`, options: ["Sarah", "Congratulation", "Proud of you", "Mom and Dad"], answer: 3 },
    { id: 21, type: 'pg', q: `Gani: "... for the book you lent me."`, options: ["I am sorry", "Thank you", "Never mind", "Let's go"], answer: 1 },
    { id: 22, type: 'pg', q: `Ability: Can you ride a bicycle?`, options: ["I am", "I do", "I can", "I will"], answer: 2 },
    { id: 23, type: 'pg', q: `John is not able to lift the box. This means...`, options: ["John can", "John cannot", "Ali can", "John is strong"], answer: 1 },
    { id: 24, type: 'pg', q: `Recount: Class went to museum. Where did they go?`, options: ["Zoo", "Park", "Museum", "Library"], answer: 2 },
    { id: 25, type: 'pg', q: `They felt tired but happy. Emotion:`, options: ["Angry", "Tired but happy", "Sad", "Bored"], answer: 1 },
    { id: 26, type: 'pg', q: `Report: Cactus stores water in stems. Stem function?`, options: ["Prevent loss", "Store water", "Grow spines", "Look nice"], answer: 1 },
    { id: 27, type: 'pgk', q: `Tigers are solitary carnivores with striped fur. (Pilih 2)`, options: ["Eat plants", "Hunt together", "Are carnivores", "Fur as camouflage"], answer: [2, 3] },
    { id: 28, type: 'pgk', q: `Dolphins breathe through blowholes. Pronouns for Dolphins: (Pilih 2)`, options: ["They", "People", "Them", "Water"], answer: [0, 2] },
    { id: 29, type: 'pgk', q: `Procedure main ideas for making milk: (Pilih 2)`, options: ["Put powder", "Topic of text", "Pour water", "Prepare glass"], answer: [0, 2] },
    { id: 30, type: 'pgk', q: `Safety in using blenders: (Pilih 2)`, options: ["It's dangerous", "Spill risk", "Blender explodes", "Hard to open"], answer: [0, 1] },
    { id: 31, type: 'pgk', q: `Mother is a nurse at hospital. (Pilih 2)`, options: ["Doctor", "Hospital staff", "Hates job", "Patient care"], answer: [1, 3] },
    { id: 32, type: 'pgk', q: `Correct Simple Present sentences: (Pilih 2)`, options: ["They plays", "He reads", "She do not", "We watch"], answer: [1, 3] },
    { id: 33, type: 'pgk', q: `Elephant diet and trunks: (Pilih 2)`, options: ["Eat meat", "Drink much water", "Trunk for food", "Weekly drink"], answer: [1, 2] },
    { id: 34, type: 'pgk', q: `Sunlight facts for plants: (Pilih 2)`, options: ["Rises in West", "Source of heat", "Vital for plants", "Plants hate sun"], answer: [1, 2] },
    { id: 35, type: 'pgk', q: `Budi's morning routine: (Pilih 2)`, options: ["Wakes late", "Eats breakfast", "Makes bed", "Skips bath"], answer: [1, 2] },
    { id: 36, type: 'pgk', q: `My Holiday: Last week we (1)... to Bandung. We (2)... sights. (Pilih 2)`, options: ["(1) go", "(1) went", "(2) visit", "(2) visited"], answer: [1, 3] },
    { id: 37, type: 'bs', q: `Story: Fantasy world has flying horses. | Statement: The world is imaginary.`, options: ["Benar", "Salah"], answer: 0 },
    { id: 38, type: 'bs', q: `Canva: To save, click download. | Statement: To save, click "edit text".`, options: ["Benar", "Salah"], answer: 1 },
    { id: 39, type: 'bs', q: `Smartphone is a digital device. | Statement: It is useful for communication.`, options: ["Benar", "Salah"], answer: 0 },
    { id: 40, type: 'bs', q: `Bali Trip: Saw the sunrise. | Statement: They saw the sunrise at Sanur Beach.`, options: ["Benar", "Salah"], answer: 0 }
];

function renderQuiz() {
    const quizContent = document.getElementById('quizContent');
    if (!quizContent) return;

    let htmlMarkup = "";
    questions.forEach((q, index) => {
        const badgeClass = q.type === 'pg' ? 'pg' : (q.type === 'pgk' ? 'pgk' : 'bs');
        const badgeName = q.type === 'pg' ? 'Pilihan Ganda' : (q.type === 'pgk' ? 'PG Kompleks' : 'Benar/Salah');
        
        htmlMarkup += `
            <div class="question-box">
                <span class="badge ${badgeClass}">${badgeName}</span>
                <div class="question-text">${index + 1}. ${q.q}</div>
                <ul class="options">
                    ${q.options.map((opt, i) => `
                        <li>
                            <label>
                                <input type="${q.type === 'pgk' ? 'checkbox' : 'radio'}" name="q${q.id}" value="${i}"> 
                                ${opt}
                            </label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    });
    quizContent.innerHTML = htmlMarkup;
}

function calculateScore() {
    let score = 0;
    questions.forEach(q => {
        const selected = document.querySelectorAll(`input[name="q${q.id}"]:checked`);
        const values = Array.from(selected).map(s => parseInt(s.value));

        if (q.type === 'pg' || q.type === 'bs') {
            if (values.length === 1 && values[0] === q.answer) score++;
        } else if (q.type === 'pgk') {
            const isCorrect = q.answer.length === values.length && q.answer.every(ans => values.includes(ans));
            if (isCorrect) score++;
        }
    });

    const finalScore = Math.round((score / questions.length) * 100);
    document.getElementById('quizForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('scoreText').innerText = finalScore;
    document.getElementById('feedback').innerText = finalScore >= 75 ? "Excellent Work!" : "Keep Studying!";
    window.scrollTo(0,0);
}

// Jalankan fungsi
document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    const btn = document.getElementById('submitBtn');
    if (btn) btn.addEventListener('click', calculateScore);
});
