setInterval( function news(){
    if(window.location.pathname == "/"){

    const list = [
        {
            "title": "Empire cracks down on Jedi artifacts",
            "story": "The Galactic Expire has announced further punishment for anyone caught in possession of any Jedi artifacts. Those found to have any on their person will be terminated."
        },
        {
            "title": "R9 Astromechs to have voices?",
            "story": "Insiders suggest the latest R9 astromechs may have voices instead of communicating in binary. This has led to mixed opinions, with some saying they don't want to hear the droid's sass."
        },
        {
            "title": "TIE fighters to remain without shields",
            "story": "The Empire have confirmed that TIE fighters will continue to fly without shields. An unnamed Moff stated 'The troopers lives aren't worth the handful of credits it would cost to put shields in these things'."
        },
        {
            "title": "Stormtrooper standoff",
            "story": "Two stormtroopers got into a fight and challenged each other to a duel, taking three steps, turning and firing. The duel was ended after 25 minutes when neither could hit each other from 6 steps away and significant damage was done to the surrounding walls."
        },
        {
            "title": "YT class freighter hunt",
            "story": "A YT-1300 light freighter blasted its way out of Mos Eisley recently. After the local garrison stated they only want to ask a few questions, they remained silent when asked why there was so much weaponry around for only questions."
        },
        {
            "title": "Bounty Hunters",
            "story": "Several top bounty hunters have been spotted around Mos Eisley lately, with some wondering who or what the target may be."
        },
        {
            "title": "Droids",
            "story": "A local stormtrooper found himself full of embarrassment after realising they were the droids he was looking for. Sources state he will no longer make any more mistakes."
        },
        {
            "title": "Lars Homestead",
            "story": "An out of town homestead was discovered burnt to the ground. Two smoldering corpses were found outside. The Empire state the homestead was simply redecorated."
        },
        ]
    const num = list.length;
    const ran = Math.floor(Math.random() * num);

    const story = list[ran];

    const title = document.getElementById("newsH4");
    const text = document.getElementById("newsP");

    title.innerHTML = story.title;
    text.innerHTML = story.story;

    }

}, 10000);