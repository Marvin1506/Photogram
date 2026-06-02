let posts = [
    {   
        'authorpicture': 'img/Profil1.jpg',
        'author': 'Functional Fitness Magazin',
        'image': 'img/Functional-Training.jpg',
        'description': 'Im Alltag solltest du Funktionales Training einbauen um nachhaltig deine Gelenke, Muskeln und Sehnen zu stärken. Empfohlen werden hier Zirkeltraining wo wir hauptsächlich mit dem eigenen Körpergewicht arbeiten',
        'location': 'Köln 22.06.2024',
        'comments': [],
    },

    {
        'authorpicture': 'img/Profil2.jpg',
        'author': 'Daily Stretch Guide',
        'image': 'img/Dehnen.jpg',
        'description': 'Eine gutes Dehnprogramm muss nicht lange gehen ungefähr 20 Minuten. Es sollte sich auf die wichtigsten Bereiche konzentrieren. Gerade der untere Rücken und die Hüfte sollte öfter angegangen werden da diese Bereiche öfter Probleme bereiten',
        'location': 'Bonn 22.06.2024',
        'comments': [],
    },

    {
        'authorpicture': 'img/Profil3.jpg',
        'author': 'Lauftrainer',
        'image': 'img/Ausdauer.jpg',
        'description': 'Wusstest du, das Herzkreislauferkrankungen die häufigsten Todesursachen sind? Schon 20-30 Minuten können deine Lebenserwartung drastisch steigern! Deswegen 1 Stunde spazieren gehen oder einfach eine Runde um den Block für 20 Minuten Joggen',
        'location': 'Erftstadt 22.06.2024',
        'comments': [],
    },

    {
        'authorpicture': 'img/Profil4.jpg',
        'author': 'Recovery Expert',
        'image': 'img/Yoga-Natur.jpg',
        'description': 'Wir alle haben im Alltag viel Stress. Tu dir selber was gutes nimm dir deine Yogamatte, geh in den Garten und finde den Bezug zur Natur zurück. So enstpannt dich dein Körper im natürlichen Umwelt und du steigert gleichzeitig dein Körperbewusstsein',
        'location': 'Köln 22.06.2024',
        'comments': [],
        
    },
];

let storys = [
    {
        'authorpicture1': 'img/storys/beach.jpg',
        'author': 'Beach Views',
    },

    {
        'authorpicture1': 'img/storys/car.jpg',
        'author': 'Carguys',
    },

    {
        'authorpicture1': 'img/storys/football.jpg',
        'author': 'Football Clips',
    },

    {
        'authorpicture1': 'img/storys/soccer.jpg',
        'author': 'Socceroffical',
    },

    {
        'authorpicture1': 'img/storys/sportscar.jpg',
        'author': 'Sportcar Magazin',
    },

    {
        'authorpicture1': 'img/storys/waves.jpg',
        'author': 'Surf Wonderland',
    },
    
    {
        'authorpicture1': 'img/storys/amusement1.jpg',
        'author': 'Amusement Wonderland',
    },

    {
        'authorpicture1': 'img/storys/park.jpg',
        'author': 'Prettiest Parks',
    },
];


function init() {
    showContent();
};

function showContent() {
    document.getElementById('content').innerHTML += '';

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        
        document.getElementById('content').innerHTML += `
        <div id="container-for-post${i}" class="container-for-post">
            <div class="headline-post-container">
                <img class="author-profile-picture" src="${post['authorpicture']}">
                <div class="author-headline-style">${post['author']}</div>
            </div>

        
            <img class="image-size" src="${post['image']}">
            <div class="description-text-style">${post['description']} <div class="location-text-style">${post['location']}</div>
            <div class="comment-section" id="comment-section${i}"></div>
            <div><input placeholder="Kommentar schreiben..." type="text" id="comment-input${i}" class="comment-input"><button onclick="comment(${i})">Kommentieren</button></div>
        </div>
        `;
    }
};

function showStory1() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');

    menucontainer.innerHTML += `
        <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
        <img src="img/storys/beach.jpg" class="big-story-image">
`;
}

function showStory2() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/car.jpg" class="big-story-image">
`;
}

function showStory3() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/football.jpg" class="big-story-image">
`;
}

function showStory4() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/soccer.jpg" class="big-story-image">
`;
}

function showStory5() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/sportscar.jpg" class="big-story-image">
`;
}

function showStory6() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/waves.jpg" class="big-story-image">
`;
}

function showStory7() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/amusement1.jpg" class="big-story-image">
`;
}

function showStory8() {
    let menucontainer = document.getElementById('story-images');
    menucontainer.classList.remove('display-none');
    
    menucontainer.innerHTML += `
    <img src="./img/cross.png" class="close-story-button" id="close-story-button" onclick="closeBigImage()">
    <img src="img/storys/park.jpg" class="big-story-image">
`;
}

function comment(i) {
    let commentDiv = document.getElementById(`comment-section${i}`);
    commentDiv.innerHTML = ''; // Reset des Kommentar-Containers

    let inputRef = document.getElementById(`comment-input${i}`);
    let inputValue = inputRef.value;

    const post = posts[i]; // Zugriff auf den entsprechenden Post
    const postComments = post['comments']; // Zugriff auf das Comments-Array des Posts

    if (inputValue == "") {
        alert('Du musst erst einen Kommentar schreiben.', 'Fehler');
    } else {
        postComments.push(inputValue);

        // Kommentare in localStorage speichern
        localStorage.setItem(`post-comments-${i}`, JSON.stringify(postComments));

        for (let commentIndex = 0; commentIndex < postComments.length; commentIndex++) {
            const comment = postComments[commentIndex];
            commentDiv.innerHTML += `
                <div id="comment${commentIndex}">
                    ${comment} <button onclick="deleteComment(${commentIndex}, ${i})" id="comment-delete${commentIndex}">Löschen</button>
                </div>
            `;
        }
        inputRef.value = ''; // Reset des Eingabefelds
    }
}

// Initiale Kommentare aus dem localStorage laden (beim Laden der Seite)
function loadComments() {
    for (let i = 0; i < posts.length; i++) {
        let storedComments = localStorage.getItem(`post-comments-${i}`);

        if (storedComments) {
            posts[i]['comments'] = JSON.parse(storedComments);

            let commentDiv = document.getElementById(`comment-section${i}`);
            
            for (let commentIndex = 0; commentIndex < posts[i]['comments'].length; commentIndex++) {
                const comment = posts[i]['comments'][commentIndex];
                commentDiv.innerHTML += `
                    <div id="comment${commentIndex}">
                        ${comment} <button onclick="deleteComment(${commentIndex}, ${i})" id="comment-delete${commentIndex}">Löschen</button>
                    </div>
                `;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', loadComments);

function deleteComment(commentIndex, i) {
    const post = posts[i];
    const postComments = post['comments'];
    
    // Entfernen des Kommentars aus dem Array
    postComments.splice(commentIndex, 1);
    
    // Aktualisieren der Kommentare im localStorage
    localStorage.setItem(`post-comments-${i}`, JSON.stringify(postComments));

    // Aktualisieren der Kommentare im DOM
    let commentDiv = document.getElementById(`comment-section${i}`);
    commentDiv.innerHTML = ''; // Kommentarbereich leeren, um neu zu rendern

    // Hier werden die Kommentare dann neu gerendert. 
    for (let index = 0; index < postComments.length; index++) {
        const comment = postComments[index];
        commentDiv.innerHTML += `
            <div id="comment${index}">
                ${comment} <button onclick="deleteComment(${index}, ${i})" id="comment-delete${index}">Löschen</button>
            </div>
        `;
    }
}



function closeBigImage() {
let storycontainer = document.getElementById('story-images');

storycontainer.innerHTML = '';

storycontainer.classList.add('display-none');
}

//function showStory() {

//    for (let i = 0; i < storys.length; i++) {
 //       const story = storys[i];
        

   //     document.getElementById('story-images').innerHTML += `
     //   <div class="story-images">
       //     <img class="story-picture-size" src="${story['authorpicture1']}">
       // </div>
     //   `;
   // }

// };

//Hier ist der überarbeitete Code für die deleteComment(commentIndex, i) Funktion, welche die einzelnen
 //Kommentare löschen kann. Die Hauptaufgabe dieser Funktion ist es, den entsprechenden Kommentar sowohl aus dem Array
 // postComments als auch aus dem DOM zu entfernen. Ich habe die Funktion leicht modifiziert, um sicherzustellen,
  // dass sie korrekt funktioniert und den Kommentar aus dem DOM und dem Array entfernt.