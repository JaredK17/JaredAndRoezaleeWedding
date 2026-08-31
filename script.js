/* =========================================================
   JARED & ROEZALEE WEDDING
   GUEST DATABASE + RSVP SYSTEM
   27 FEBRUARY 2027
========================================================= */


/* =========================================================
   GUEST DATABASE
========================================================= */

const guestList = [

    { code: "JR-001", name: "Enver and Abby", seats: 3 },
    { code: "JR-002", name: "Kido and Fay", seats: 3 },
    { code: "JR-003", name: "Ethan and Hailee", seats: 2 },
    { code: "JR-004", name: "Jodash and Timika", seats: 2 },
    { code: "JR-005", name: "Jaden", seats: 1 },
    { code: "JR-006", name: "Derron and Ralisha", seats: 2 },
    { code: "JR-007", name: "Marshlan and Catherine", seats: 2 },
    { code: "JR-008", name: "Carianne", seats: 1 },
    { code: "JR-009", name: "Troy", seats: 1 },
    { code: "JR-010", name: "Micaela and Joshua", seats: 2 },
    { code: "JR-011", name: "Jonathan and Kamy", seats: 2 },
    { code: "JR-012", name: "Jeremy and Sandhika", seats: 2 },
    { code: "JR-013", name: "Germaine and Joanne", seats: 2 },
    { code: "JR-014", name: "Devan and Samantha", seats: 2 },
    { code: "JR-015", name: "Denisha", seats: 1 },
    { code: "JR-016", name: "Vimla and Buddy", seats: 2 },
    { code: "JR-017", name: "Rishen", seats: 1 },
    { code: "JR-018", name: "Matthew and Renna", seats: 2 },
    { code: "JR-019", name: "Shikar and Annelene", seats: 2 },
    { code: "JR-020", name: "Shaun and Cardene", seats: 2 },
    { code: "JR-021", name: "Selvan and Yuveka", seats: 2 },
    { code: "JR-022", name: "Savy", seats: 1 },
    { code: "JR-023", name: "Pastor Speedy and Geraldine", seats: 2 },
    { code: "JR-024", name: "Cookie and Daniel", seats: 2 },
    { code: "JR-025", name: "Dallon", seats: 1 },
    { code: "JR-026", name: "Sivagie and Alice", seats: 2 },
    { code: "JR-027", name: "Joey and Chanelle", seats: 2 },
    { code: "JR-028", name: "Caleb", seats: 1 },
    { code: "JR-029", name: "Maggie, Ashwin and Katrina", seats: 3 },
    { code: "JR-030", name: "Saroj", seats: 1 },
    { code: "JR-031", name: "Alan and Lorraine", seats: 2 },
    { code: "JR-032", name: "Triston", seats: 1 },
    { code: "JR-033", name: "Bianca", seats: 1 },
    { code: "JR-034", name: "Deon and Pavash", seats: 2 },
    { code: "JR-035", name: "Cherish and Cherise", seats: 2 },
    { code: "JR-036", name: "Tim and Teresa", seats: 2 },
    { code: "JR-037", name: "Kyle", seats: 1 },
    { code: "JR-038", name: "Luven", seats: 1 },
    { code: "JR-039", name: "Rikyle and Rocky", seats: 2 },
    { code: "JR-040", name: "Daniel, Polly and Bryden", seats: 3 },
    { code: "JR-041", name: "Pastor Rufus and Aunty Diane", seats: 2 },
    { code: "JR-042", name: "Jadeen and Samir", seats: 2 },
    { code: "JR-043", name: "Kevin and Linda", seats: 2 },
    { code: "JR-044", name: "Lolly and Ester", seats: 2 },
    { code: "JR-045", name: "Teresa", seats: 1 },
    { code: "JR-046", name: "Reuben and Cookie", seats: 2 },
    { code: "JR-047", name: "Shannon", seats: 1 },
    { code: "JR-048", name: "Shante", seats: 1 },
    { code: "JR-049", name: "Claudine and Rishan", seats: 2 },
    { code: "JR-050", name: "Akhil, Maggie and Marla", seats: 3 },
    { code: "JR-051", name: "Natasha", seats: 1 },
    { code: "JR-052", name: "Devan and Jenny", seats: 2 },
    { code: "JR-053", name: "Lawarence and Asheera", seats: 2 },
    { code: "JR-054", name: "Sagie and Joanne", seats: 2 },
    { code: "JR-055", name: "Leeane and Dominique", seats: 2 },
    { code: "JR-056", name: "Prinesh and Sherilyn", seats: 2 },
    { code: "JR-057", name: "Vivian", seats: 1 },
    { code: "JR-058", name: "Cameron", seats: 1 },
    { code: "JR-059", name: "Sue", seats: 1 },
    { code: "JR-060", name: "Samkelo", seats: 1 },
    { code: "JR-061", name: "Mujahid", seats: 1 },
    { code: "JR-062", name: "Stanton and Nadia", seats: 2 },
    { code: "JR-063", name: "Dylan and Cailin", seats: 2 },
    { code: "JR-064", name: "Erin", seats: 1 },
    { code: "JR-065", name: "Keegan", seats: 1 },
    { code: "JR-066", name: "Livina and Moe", seats: 2 }

];


/* =========================================================
   CREATE GUEST DATABASE
========================================================= */

const guests = {};


guestList.forEach(
    function (entry) {

        guests[entry.code] = {

            name: entry.name,

            seats: entry.seats,

            rsvp:
                "Pending",

            dietary:
                "",

            song:
                "",

            accommodation:
                ""

        };

    }
);


/* =========================================================
   CURRENT GUEST
========================================================= */

let currentGuestCode = null;


/* =========================================================
   WHATSAPP RSVP
========================================================= */

/* =========================================================
   RSVP BACKEND
   (Google Apps Script Web App — writes every RSVP as a
   row into the "Wedding RSVPs" Google Sheet)
========================================================= */

const rsvpBackendUrl =
    "https://script.google.com/macros/s/AKfycbw6tylZIA4RviMkYcL9ukye6po4IXSou9gOs-ybhucUaQS_gmMPaa73HpzyJFYtl5Skaw/exec";


function sendRSVPToBackend(code, guest) {

    if (!rsvpBackendUrl) {
        return;
    }


    fetch(

        rsvpBackendUrl,

        {

            method: "POST",

            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },

            body: JSON.stringify({

                code: code,

                name: guest.name,

                seats: guest.seats,

                rsvp: guest.rsvp,

                dietary: guest.dietary,

                song: guest.song,

                accommodation: guest.accommodation

            })

        }

    ).catch(

        function (error) {
            console.error("Failed to reach RSVP backend:", error);
        }

    );

}


const whatsappNumber =
    "27645464572";


function buildWhatsAppMessage(code, guest) {

    const lines = [

        `RSVP - ${code}`,
        guest.name

    ];


    if (guest.rsvp === "Attending") {

        lines.push(
            `Attending: Yes (${guest.seats} seat${guest.seats === 1 ? "" : "s"})`
        );

        lines.push(
            `Dietary: ${guest.dietary || "None"}`
        );

        if (guest.song) {

            lines.push(
                `Song request: ${guest.song}`
            );

        }

        lines.push(
            `Accommodation: ${guest.accommodation || "Not needed"}`
        );

    } else {

        lines.push(
            "Attending: No"
        );

    }


    return lines.join("\n");

}


function getWhatsAppRSVPLink(code, guest) {

    const message =
        buildWhatsAppMessage(code, guest);


    return (
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    );

}


/* =========================================================
   FIND INVITATION
========================================================= */

function findInvitation() {

    const input =
        document.getElementById(
            "guestCode"
        );


    const error =
        document.getElementById(
            "codeError"
        );


    if (!input || !error) {
        return;
    }


    const code =
        input.value
            .trim()
            .toUpperCase();


    error.innerText = "";


    if (!code) {

        error.innerText =
            "Please enter your guest code.";

        return;

    }


    const guest =
        guests[code];


    if (!guest) {

        error.innerText =
            "We couldn't find that invitation. Please check your code and try again.";

        return;

    }


    currentGuestCode =
        code;


    const guestName =
        document.getElementById(
            "guestName"
        );


    const guestSeatsElement =
        document.getElementById(
            "guestSeats"
        );


    const displayCode =
        document.getElementById(
            "displayGuestCode"
        );


    if (guestName) {

        guestName.innerText =
            guest.name;

    }


    if (guestSeatsElement) {

        guestSeatsElement.innerText =
            guest.seats +
            (
                guest.seats === 1
                    ? " SEAT"
                    : " SEATS"
            );

    }


    if (displayCode) {

        displayCode.innerText =
            code;

    }


    const finder =
        document.getElementById(
            "invitationFinder"
        );


    const personal =
        document.getElementById(
            "personalInvitation"
        );


    const form =
        document.getElementById(
            "rsvpForm"
        );


    const message =
        document.getElementById(
            "rsvpMessage"
        );


    if (finder) {
        finder.classList.add("hidden");
    }


    if (personal) {
        personal.classList.remove("hidden");
    }


    if (form) {
        form.classList.add("hidden");
    }


    if (message) {
        message.innerHTML = "";
    }


    if (personal) {

        personal.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}


/* =========================================================
   RSVP - YES / NO
========================================================= */

function selectAttendance(answer) {

    if (!currentGuestCode) {
        return;
    }


    const guest =
        guests[currentGuestCode];


    const form =
        document.getElementById(
            "rsvpForm"
        );


    const message =
        document.getElementById(
            "rsvpMessage"
        );


    /* ATTENDING */

    if (answer === "yes") {

        guest.rsvp =
            "Attending";


        if (form) {

            form.classList.remove(
                "hidden"
            );

        }


        if (message) {

            message.innerHTML = "";

        }


        return;

    }


    /* DECLINED */

    guest.rsvp =
        "Declined";


    guest.dietary =
        "";


    guest.song =
        "";


    guest.accommodation =
        "";


    if (form) {

        form.classList.add(
            "hidden"
        );

    }


    if (message) {

        message.innerHTML = `

            <div class="success-message">

                <h4>
                    Thank you for letting us know.
                </h4>

                <p>
                    We're sorry you won't be able
                    to join us, ${guest.name}.
                </p>

                <p>
                    🤍
                </p>

                <a
                    class="whatsapp-button btn-ripple"
                    href="${getWhatsAppRSVPLink(currentGuestCode, guest)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SEND RSVP VIA WHATSAPP
                </a>

            </div>

        `;

    }


    sendRSVPToBackend(currentGuestCode, guest);

    saveRSVPData();

}


/* =========================================================
   SUBMIT RSVP
========================================================= */

function submitRSVP() {

    if (!currentGuestCode) {
        return;
    }


    const guest =
        guests[currentGuestCode];


    const dietElement =
        document.getElementById(
            "diet"
        );


    const songElement =
        document.getElementById(
            "song"
        );


    const accommodationElement =
        document.getElementById(
            "accommodation"
        );


    const dietary =
        dietElement
            ? dietElement.value
            : "None";


    const song =
        songElement
            ? songElement.value.trim()
            : "";


    const accommodation =
        accommodationElement
            ? accommodationElement.value
            : "";


    guest.rsvp =
        "Attending";


    guest.dietary =
        dietary;


    guest.song =
        song;


    guest.accommodation =
        accommodation;


    const form =
        document.getElementById(
            "rsvpForm"
        );


    const message =
        document.getElementById(
            "rsvpMessage"
        );


    if (form) {

        form.classList.add(
            "hidden"
        );

    }


    if (message) {

        message.innerHTML = `

            <div class="success-message">

                <h4>
                    Thank you, ${guest.name}! 🤍
                </h4>

                <p>
                    Your RSVP has been received.
                </p>

                <p>
                    We can't wait to celebrate
                    with you!
                </p>

                <p class="redirect-notice">
                    Redirecting you to WhatsApp to send your RSVP...
                </p>

                <a
                    class="whatsapp-button btn-ripple"
                    href="${getWhatsAppRSVPLink(currentGuestCode, guest)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SEND RSVP VIA WHATSAPP
                </a>

            </div>

        `;


        launchConfetti(
            message.querySelector(".success-message")
        );

    }


    sendRSVPToBackend(currentGuestCode, guest);

    saveRSVPData();

    redirectToWhatsApp(currentGuestCode, guest);

}


function redirectToWhatsApp(code, guest) {

    setTimeout(() => {

        window.open(
            getWhatsAppRSVPLink(code, guest),
            "_blank"
        );

    }, 2000);

}


/* =========================================================
   SAVE RSVP DATA
========================================================= */

function saveRSVPData() {

    localStorage.setItem(

        "jaredRoezaleeRSVPs",

        JSON.stringify(guests)

    );


    console.log(
        "RSVP data saved:",
        guests
    );

}


/* =========================================================
   RESET INVITATION
========================================================= */

function resetInvitation() {

    currentGuestCode =
        null;


    const personal =
        document.getElementById(
            "personalInvitation"
        );


    const finder =
        document.getElementById(
            "invitationFinder"
        );


    const input =
        document.getElementById(
            "guestCode"
        );


    const error =
        document.getElementById(
            "codeError"
        );


    const message =
        document.getElementById(
            "rsvpMessage"
        );


    const form =
        document.getElementById(
            "rsvpForm"
        );


    if (personal) {

        personal.classList.add(
            "hidden"
        );

    }


    if (finder) {

        finder.classList.remove(
            "hidden"
        );

    }


    if (input) {

        input.value = "";

    }


    if (error) {

        error.innerText = "";

    }


    if (message) {

        message.innerHTML = "";

    }


    if (form) {

        form.classList.add(
            "hidden"
        );

    }


    if (finder) {

        finder.scrollIntoView({

            behavior: "smooth",

            block: "center"

        });

    }

}


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =

    new Date(
        "February 27, 2027 15:00:00"
    ).getTime();


const previousCountdownValues = {

    days: null,

    hours: null,

    minutes: null

};


function pulseOnChange(element, key, newValue) {

    if (!element) {
        return;
    }


    if (

        previousCountdownValues[key] !== null &&
        previousCountdownValues[key] !== newValue

    ) {

        element.classList.add("is-pulsing");


        setTimeout(

            function () {
                element.classList.remove("is-pulsing");
            },

            250

        );

    }


    previousCountdownValues[key] =
        newValue;

}



function updateCountdown() {

    const now =
        new Date().getTime();


    const difference =
        weddingDate - now;


    const daysElement =
        document.getElementById(
            "days"
        );


    const hoursElement =
        document.getElementById(
            "hours"
        );


    const minutesElement =
        document.getElementById(
            "minutes"
        );


    const secondsElement =
        document.getElementById(
            "seconds"
        );


    if (

        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement

    ) {

        return;

    }


    if (difference <= 0) {

        daysElement.innerText =
            "0";

        hoursElement.innerText =
            "0";

        minutesElement.innerText =
            "0";

        secondsElement.innerText =
            "0";

        return;

    }


    const days =

        Math.floor(

            difference /

            (
                1000 *
                60 *
                60 *
                24
            )

        );


    const hours =

        Math.floor(

            (

                difference %

                (
                    1000 *
                    60 *
                    60 *
                    24
                )

            ) /

            (
                1000 *
                60 *
                60
            )

        );


    const minutes =

        Math.floor(

            (

                difference %

                (
                    1000 *
                    60 *
                    60
                )

            ) /

            (
                1000 *
                60
            )

        );


    const seconds =

        Math.floor(

            (

                difference %

                (
                    1000 *
                    60
                )

            ) /

            1000

        );


    daysElement.innerText =
        days;


    hoursElement.innerText =
        hours;


    minutesElement.innerText =
        minutes;


    secondsElement.innerText =
        seconds;


    pulseOnChange(daysElement, "days", days);

    pulseOnChange(hoursElement, "hours", hours);

    pulseOnChange(minutesElement, "minutes", minutes);

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   ADD WEDDING TO CALENDAR
========================================================= */

function downloadCalendarEvent() {

    const eventTitle =
        "Jared & Roezalee — Wedding";


    const eventDescription =
        "Jared & Roezalee Wedding | 27 February 2027 | Ceremony at 3:00 PM";


    const eventLocation =
        "Bellevue Guest Lodge, Main Road R620, Ramsgate South, 4285, KwaZulu-Natal, South Africa";


    const icsContent =

`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Jared & Roezalee Wedding//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:jared-roezalee-wedding-2027@example.com
DTSTAMP:20260809T000000Z
DTSTART:20270227T130000Z
DTEND:20270227T190000Z
SUMMARY:${eventTitle}
DESCRIPTION:${eventDescription}
LOCATION:${eventLocation}
STATUS:CONFIRMED
SEQUENCE:0
END:VEVENT
END:VCALENDAR`;


    const blob =

        new Blob(

            [icsContent],

            {
                type:
                    "text/calendar;charset=utf-8"
            }

        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href =
        url;


    link.download =
        "Jared-and-Roezalee-Wedding-27-February-2027.ics";


    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}


/* =========================================================
   THREE-PANEL WEDDING HERO
========================================================= */

const heroPhotos = [

    "couple.jpeg",

    "couple 3.jpeg",

    "couple 5.jpeg"

];


function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j =
            Math.floor(Math.random() * (i + 1));


        const temp =
            array[i];


        array[i] =
            array[j];


        array[j] =
            temp;

    }


    return array;

}


shuffleArray(heroPhotos);


let heroCurrentPhoto = 0;


let heroTimer = null;


/* =========================================================
   UPDATE HERO GALLERY
========================================================= */

function updateHeroGallery() {

    const left =
        document.getElementById(
            "heroLeft"
        );


    const center =
        document.getElementById(
            "heroCenter"
        );


    const right =
        document.getElementById(
            "heroRight"
        );


    if (

        !left ||
        !center ||
        !right ||
        heroPhotos.length === 0

    ) {

        return;

    }


    const dots =
        document.querySelectorAll(
            ".hero-gallery-dot"
        );


    dots.forEach(

        function (dot, index) {

            dot.classList.toggle(

                "active",

                index === heroCurrentPhoto

            );

        }

    );


    const panels =
        [left, center, right];


    panels.forEach(

        function (panel) {
            panel.classList.add("is-fading");
        }

    );


    setTimeout(

        function () {

            applyHeroBackgrounds(
                left,
                center,
                right
            );


            panels.forEach(

                function (panel) {
                    panel.classList.remove("is-fading");
                }

            );

        },

        350

    );

}


/* =========================================================
   APPLY HERO BACKGROUNDS
========================================================= */

function applyHeroBackgrounds(left, center, right) {

    const total =
        heroPhotos.length;


    const leftIndex =

        (
            heroCurrentPhoto -
            1 +
            total
        ) % total;


    const centerIndex =
        heroCurrentPhoto;


    const rightIndex =

        (
            heroCurrentPhoto +
            1
        ) % total;


    left.style.backgroundImage =
        `url("${heroPhotos[leftIndex]}")`;


    center.style.backgroundImage =
        `url("${heroPhotos[centerIndex]}")`;


    right.style.backgroundImage =
        `url("${heroPhotos[rightIndex]}")`;

}


/* =========================================================
   NEXT PHOTO
========================================================= */

function nextHeroPhoto() {

    heroCurrentPhoto =

        (
            heroCurrentPhoto +
            1
        ) % heroPhotos.length;


    updateHeroGallery();


    restartHeroGalleryTimer();

}


/* =========================================================
   PREVIOUS PHOTO
========================================================= */

function previousHeroPhoto() {

    heroCurrentPhoto =

        (
            heroCurrentPhoto -
            1 +
            heroPhotos.length
        ) % heroPhotos.length;


    updateHeroGallery();


    restartHeroGalleryTimer();

}


/* =========================================================
   SELECT PHOTO
========================================================= */

function selectHeroPhoto(index) {

    if (

        index < 0 ||
        index >= heroPhotos.length

    ) {

        return;

    }


    heroCurrentPhoto =
        index;


    updateHeroGallery();


    restartHeroGalleryTimer();

}


/* =========================================================
   AUTOMATIC SLIDESHOW
========================================================= */

function startHeroGalleryTimer() {

    clearInterval(
        heroTimer
    );


    heroTimer =

        setInterval(

            function () {

                heroCurrentPhoto =

                    (
                        heroCurrentPhoto +
                        1
                    ) % heroPhotos.length;


                updateHeroGallery();

            },

            6500

        );

}


/* =========================================================
   RESTART TIMER
========================================================= */

function restartHeroGalleryTimer() {

    startHeroGalleryTimer();

}


/* =========================================================
   INITIALIZE HERO
========================================================= */

function initializeHeroGallery() {

    const center =
        document.getElementById(
            "heroCenter"
        );


    if (!center) {

        return;

    }


    updateHeroGallery();


    startHeroGalleryTimer();

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initializeCustomCursor() {

    const supportsFinePointer =
        window.matchMedia(
            "(hover: hover) and (pointer: fine)"
        ).matches;


    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (!supportsFinePointer || prefersReducedMotion) {
        return;
    }


    document.body.classList.add(
        "custom-cursor-active"
    );


    const dot =
        document.createElement("div");


    dot.className =
        "cursor-dot";


    const ring =
        document.createElement("div");


    ring.className =
        "cursor-ring";


    document.body.appendChild(dot);

    document.body.appendChild(ring);


    let mouseX = 0;

    let mouseY = 0;

    let ringX = 0;

    let ringY = 0;


    document.addEventListener(

        "mousemove",

        function (event) {

            mouseX = event.clientX;

            mouseY = event.clientY;


            dot.style.left = mouseX + "px";

            dot.style.top = mouseY + "px";

        }

    );


    function animateRing() {

        ringX += (mouseX - ringX) * 0.18;

        ringY += (mouseY - ringY) * 0.18;


        ring.style.left = ringX + "px";

        ring.style.top = ringY + "px";


        window.requestAnimationFrame(animateRing);

    }


    animateRing();


    const interactiveSelector =
        "a, button, input, select, .hero-gallery-dot";


    document.addEventListener(

        "mouseover",

        function (event) {

            if (event.target.closest(interactiveSelector)) {
                ring.classList.add("is-active");
            }

        }

    );


    document.addEventListener(

        "mouseout",

        function (event) {

            if (event.target.closest(interactiveSelector)) {
                ring.classList.remove("is-active");
            }

        }

    );

}


/* =========================================================
   BUTTON RIPPLE
========================================================= */

function initializeButtonRipples() {

    document.addEventListener(

        "click",

        function (event) {

            const target =
                event.target.closest(".btn-ripple");


            if (!target) {
                return;
            }


            const rect =
                target.getBoundingClientRect();


            const size =
                Math.max(rect.width, rect.height);


            const ripple =
                document.createElement("span");


            ripple.className =
                "ripple";


            ripple.style.width =
                size + "px";


            ripple.style.height =
                size + "px";


            ripple.style.left =
                (event.clientX - rect.left - size / 2) + "px";


            ripple.style.top =
                (event.clientY - rect.top - size / 2) + "px";


            target.appendChild(ripple);


            setTimeout(

                function () {
                    ripple.remove();
                },

                650

            );

        }

    );

}


/* =========================================================
   BACKGROUND MUSIC
========================================================= */

function playWeddingMusic() {

    const audio =
        document.getElementById("weddingMusic");


    if (!audio) {
        return;
    }


    audio.play().catch(
        function () {}
    );

}


function toggleWeddingMusic() {

    const audio =
        document.getElementById("weddingMusic");


    if (!audio) {
        return;
    }


    if (audio.paused) {

        playWeddingMusic();

    } else {

        audio.pause();

    }

}


function initializeMusicToggle() {

    const toggle =
        document.getElementById("musicToggle");


    const audio =
        document.getElementById("weddingMusic");


    if (!toggle) {
        return;
    }


    toggle.addEventListener(
        "click",
        toggleWeddingMusic
    );


    if (audio) {

        audio.addEventListener(

            "play",

            function () {
                toggle.classList.add("is-playing");
            }

        );


        audio.addEventListener(

            "pause",

            function () {
                toggle.classList.remove("is-playing");
            }

        );

    }

}


/* =========================================================
   ENVELOPE INTRO
========================================================= */

function handleGuestCodeFromUrl() {

    const params =
        new URLSearchParams(window.location.search);


    const code =
        params.get("code");


    if (!code) {
        return;
    }


    const input =
        document.getElementById("guestCode");


    if (input) {

        input.value =
            code.toUpperCase();

    }


    findInvitation();

}


function initializeEnvelopeIntro() {

    const envelope =
        document.getElementById("envelopeIntro");


    const seal =
        document.getElementById("envelopeSeal");


    const skip =
        document.getElementById("envelopeSkip");


    if (!envelope) {
        return;
    }


    const alreadyOpened =
        sessionStorage.getItem("envelopeOpened") === "true";


    if (alreadyOpened) {

        envelope.classList.add("is-hidden");

        handleGuestCodeFromUrl();

        return;

    }


    document.body.style.overflow =
        "hidden";


    function openEnvelope() {

        envelope.classList.add("is-open");


        sessionStorage.setItem(
            "envelopeOpened",
            "true"
        );


        setTimeout(

            function () {

                envelope.classList.add("is-hidden");

                document.body.style.overflow = "";

                handleGuestCodeFromUrl();

            },

            1100

        );

    }


    function skipEnvelope() {

        envelope.classList.add(
            "is-open",
            "is-hidden"
        );


        sessionStorage.setItem(
            "envelopeOpened",
            "true"
        );


        document.body.style.overflow =
            "";


        handleGuestCodeFromUrl();

    }


    if (seal) {

        seal.addEventListener(
            "click",
            openEnvelope
        );

    }


    if (skip) {

        skip.addEventListener(
            "click",
            skipEnvelope
        );

    }

}


/* =========================================================
   CONFETTI
========================================================= */

function launchConfetti(container) {

    if (!container) {
        return;
    }


    const colors = [
        "#a9814f",
        "#29474d",
        "#ffffff",
        "#d9bd8f"
    ];


    const burst =
        document.createElement("div");


    burst.className =
        "confetti-burst";


    for (let i = 0; i < 40; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.backgroundColor =
            colors[
                Math.floor(Math.random() * colors.length)
            ];


        piece.style.animationDelay =
            (Math.random() * 0.4) + "s";


        piece.style.animationDuration =
            (1.6 + Math.random()) + "s";


        piece.style.transform =
            `rotate(${Math.floor(Math.random() * 360)}deg)`;


        burst.appendChild(piece);

    }


    container.appendChild(burst);


    setTimeout(

        function () {
            burst.remove();
        },

        3000

    );

}
/* =========================================================
   SCROLL REVEAL
========================================================= */

/* =========================================================
   SCROLL REVEAL
========================================================= */

function initializeScrollReveal() {

    const revealSelectors = [

        ".eyebrow",
        ".section h2",
        ".section-intro",
        ".countdown-grid",
        ".story-content",
        ".proposal-content",
        ".next-chapter-content",
        ".program-item",
        ".location-details",
        ".map-frame",
        ".calendar-section p",
        ".calendar-card",
        ".calendar-button",
        ".dress-code > p",
        ".dress-card",
        ".gift-content",
        ".honeymoon-card",
        ".rsvp-intro",
        ".invitation-finder",
        ".photo-break-caption",
        ".notice-card",
        "footer h2",
        "footer p"

    ].join(", ");


    const revealTargets =
        document.querySelectorAll(revealSelectors);


    if (revealTargets.length === 0) {
        return;
    }


    revealTargets.forEach(

        function (element) {
            element.classList.add("reveal");
        }

    );


    if (!("IntersectionObserver" in window)) {

        revealTargets.forEach(

            function (element) {
                element.classList.add("is-visible");
            }

        );


        return;

    }


    const observer =

        new IntersectionObserver(

            function (entries) {

                entries.forEach(

                    function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("is-visible");

                            observer.unobserve(entry.target);

                        }

                    }

                );

            },

            {
                threshold: 0.15,
                rootMargin: "0px 0px -60px 0px"
            }

        );


    revealTargets.forEach(

        function (element) {
            observer.observe(element);
        }

    );

}


/* =========================================================
   SCROLL PROGRESS + FLOATING RSVP BUTTON
========================================================= */

function initializeScrollEffects() {

    const progressBar =
        document.getElementById("scrollProgress");


    const rsvpFloat =
        document.getElementById("rsvpFloat");


    const heroGallery =
        document.getElementById("heroGallery");


    let ticking = false;


    function updateScrollEffects() {

        const scrollTop =
            window.scrollY ||
            document.documentElement.scrollTop;


        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;


        if (progressBar) {

            const progress =
                docHeight > 0
                    ? (scrollTop / docHeight) * 100
                    : 0;


            progressBar.style.width =
                progress + "%";

        }


        if (rsvpFloat) {

            const heroHeight =
                heroGallery
                    ? heroGallery.offsetHeight
                    : 0;


            rsvpFloat.classList.toggle(

                "is-visible",

                scrollTop > heroHeight * 0.6

            );

        }


        ticking = false;

    }


    window.addEventListener(

        "scroll",

        function () {

            if (!ticking) {

                window.requestAnimationFrame(updateScrollEffects);

                ticking = true;

            }

        }

    );


    updateScrollEffects();

}


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(

    "DOMContentLoaded",

    function () {


        /*
            CUSTOM CURSOR + BUTTON RIPPLES
        */

        initializeCustomCursor();

        initializeButtonRipples();



        /*
            BACKGROUND MUSIC
        */

        initializeMusicToggle();



        /*
            ENVELOPE INTRO
        */

        initializeEnvelopeIntro();



        /*
            LOAD HERO IMMEDIATELY
        */

        initializeHeroGallery();



        /*
            SCROLL REVEAL
        */

        initializeScrollReveal();



        /*
            SCROLL PROGRESS + FLOATING RSVP
        */

        initializeScrollEffects();



        /*
            NEXT HERO BUTTON
        */

        const next =
            document.getElementById(
                "heroNext"
            );


        if (next) {

            next.addEventListener(

                "click",

                function (event) {

                    event.preventDefault();

                    event.stopPropagation();

                    nextHeroPhoto();

                }

            );

        }



        /*
            PREVIOUS HERO BUTTON
        */

        const previous =
            document.getElementById(
                "heroPrevious"
            );


        if (previous) {

            previous.addEventListener(

                "click",

                function (event) {

                    event.preventDefault();

                    event.stopPropagation();

                    previousHeroPhoto();

                }

            );

        }



        /*
            HERO DOTS
        */

        const dots =

            document.querySelectorAll(
                ".hero-gallery-dot"
            );


        dots.forEach(

            function (dot, index) {

                dot.addEventListener(

                    "click",

                    function (event) {

                        event.preventDefault();

                        event.stopPropagation();

                        selectHeroPhoto(
                            index
                        );

                    }

                );

            }

        );

    }

);