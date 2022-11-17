var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

const d = new Date(today);
let day = d.getDay();

if (day==0) {
    dayname = "Sunday, ruled by the Sun";
    document.write("<font color=\"white\"> <font size=\"300\">"+"&#9737;"+"</font>"+"<br>");
    var img = document.createElement("img");
        img.src = "images of gods/Screen Shot 2022-11-05 at 12.05.36 PM.png";
        img.width=350;
        img.height=450;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">"+"I'll tell you how the Sun rose"+"<br>"+"BY EMILY DICKINSON"+"<br><br><br>"+"I'll tell you how the Sun rose <br> A Ribbon at a time <br> The Steeples swam in Amethyst <br> The news, like Squirrels, ran <br> The Hills untied their Bonnets <br> The Bobolinks -- begun <br> Then I said softly to myself <br>  'That must have been the Sun'! <br> But how he set - I know not - <br> There seemed a purple stile <br> That little Yellow boys and girls <br> Were climbing all the while <br> Till when they reached the other side <br> A Dominie in Gray <br> Put gently up the evening Bars <br> And led the flock away <br>" +"</font>")
  } else if (day==1) {
    dayname = "Monday, ruled by the Moon";
    document.write("<font color=\"white\"> <font size=\"300\">"+"	&#12938;"+"</font>"+"<br>");
    var img = document.createElement("img");
        img.src = "images of gods/74-747160_artemis-sailor-moon-luna-sailor-jupiter-.webp";
        img.width=350;
        img.height=450;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">" + "THE ALTAR OF ARTEMIS<br> <br> by: Aleister Crowley (1875-1947)<br><br>HERE, in the coppice, oak and pine <br> And mystic yew and elm are found, <br> Sweeping the skies, that grew divine <br> With the dark winds despairing sound,\n, The wind that roars from the profound,\n, And smites the mountain-tops, and calls\n, Mute spirits to black festivals,\n, And feasts in valleys iron-bound,\n, Desolate crags, and barren ground;--\n, There in the strong storm-shaken grove\n, Swings the pale censer-fire for love.\n,  \n, The foursquare altar, roughly hewn,\n, And overlaid with beaten gold,\n, Stands in the gloom; the stealthy tune\n, Of singing maidens overbold\n, Desires mad mysteries untold,\n, With strange eyes kindling, as the fleet\n, Implacable untiring feet\n, Weave mystic figures manifold\n, That draw down angels to behold\n, The moving music, and the fire\n, Of their intolerable desire.\n,  \n, For, maddening to fiercer thought,\n, The fiery limbs requicken, wheel\n, In formless furies, subtly wrought\n, Of swifter melodies than steel\n, That flashes in the fight: the peal\n, Of amorous laughters choking sense,\n, And madness kissing violence,\n, Ring like dead horsemen; bodies reel\n, Drunken with motion; spirits feel\n, The strange constraint of gods that clip\n, From Heaven to mingle lip and lip.\n,  \n, The gods descend to dance; the noise\n, Of hungry kissings, as a swoon,\n, Faints for excess of its own joys,\n, And mystic beams assail the moon,\n, With flames of their infernal noon;\n, While the smooth incense, without breath,\n, Spreads like some scented flower of death,\n, Over the grove; the lovers boon\n, Of sleep shall steal upon them soon,\n, And lovers lips, from lips withdrawn,\n, Seek dimmer bosoms till the dawn.\n,  \n, Yet on the central altar lies\n, The sacrament of kneaded bread,\n, With blood made one, the sacrifice\n, To those, the living, who are dead--\n, Strange gods and goddesses, that shed\n, Monstrous desires of secret things\n, Upon their worshippers, from wings\n, One lucent web of light, from head\n, One labyrinthine passion-fed\n, Palace of love, from breathing rife\n, With secrets of forbidden life.\n,  \n, But not the sunlight, nor the stars,\n, Nor any light but theirs alone,\n, Nor iron masteries of Mars,\n, Nor Saturns misconceiving zone,\n, Nor any planets may be shown,\n, Within the circle of the grove,\n, Where burn the sanctities of love:\n, Nor may the foot of man be known,\n, Nor evil eyes of mothers thrown\n, On maidens that desire the kiss\n, Only of maiden Artemis.\n,  \n, But horned and huntress from the skies,\n, She bends her lips upon the breeze,\n, And pure and perfect in her eyes,\n, Burn magical virginitys\n, Sweet intermittent sorceries.\n, When the slow wind from her sweet word\n, In all their conchéd ears is heard.\n, And like the slumber of the seas,\n, There murmur through the holy trees\n, The kisses of the goddess keen,\n, And sighs and laughters caught between.\n,  \n, For, swooning at the fervid lips\n, Of Artemis, the maiden kisses\n, Sobs and the languid body slips\n, Down to enamelled wildernesses.\n, Fallen and loose the shaken tresses;\n, Fallen the sandal and girdling gold,\n, Fallen the music manifold\n, Of moving limbs and strange caresses,\n, And deadly passion that possesses\n, The magic ecstasy of these\n, Mad maidens, tender as blue seas.\n,  \n, Night spreads her yearning pinions,\n, The baffled day sinks blind to sleep;\n, The evening breeze outswoons the suns\n, Dead kisses to the swooning deep.\n, Upsoars the moon; the flashing steep\n, Of Heaven is fragrant for her feet;\n, The perfume of the grove is sweet\n, As slumbering women furtive creep\n, To bosoms where small kisses weep,\n, And find in fervent dreams the kiss\n, Most memoried of Artemis.\n,  \n, Impenetrable pleasure dies\n, Beneath the madness of new dreams;\n, The slow sweet breath is turned to sighs\n, More musical than many streams\n, Under the moving silver beams,\n, Fretted with stars, thrice woven across.\n, White limbs in amorous slumber toss,\n, Like sleeping foam, whose silver gleams\n, On motionless dark seas; it seems\n, As if some gentle spirit stirred,\n, Their lazy brows with some swift word.\n,  \n, So, in the secret of the shrine,\n, Night keeps them nestled, so the gloom\n, Laps them in waves as smooth as wine,\n, As glowing as the fiery womb\n, Of some young tigress, dark as doom,\n, And swift as sunrise. Loves content\n, Builds its own monument,\n, And carves above its vaulted tomb\n, The Phoenix on her fiery plume,\n, To their own souls to testify\n, Their kisses immortality."+"</font>")
  } else if (day==2) {
    dayname = "Tuesday, ruled by Mars";
    document.write("<font color=\"white\"> <font size=\"300\">"+"&#9794;"+"</font>"+"<br>");
    var img = document.createElement("img");
        img.src = "images of gods/Ares.webp";
        img.width=250;
        img.height=450;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">"+"Four Quartets 3: The Dry Salvages<br> TS ELIOT <br> <br> <br> <br> To communicate with Mars, converse with spirits,<br> To report the behaviour of the sea monster,<br> Describe the horoscope, haruspicate or scry,<br> Observe disease in signatures, evoke<br> Biography from the wrinkles of the palm<br> And tragedy from fingers; release omens<br> By sortilege, or tea leaves, riddle the inevitable<br> With playing cards, fiddle with pentagrams<br> Or barbituric acids, or dissect<br> The recurrent image into pre-conscious terrors<br> To explore the womb, or tomb, or dreams; all these are usual<br> Pastimes and drugs, and features of the press:<br> And always will be, some of them especially <br> When there is distress of nations and perplexity<br> Whether on the shores of Asia, or in the Edgware Road.<br> <br> Mens curiosity searches past and future<br> And clings to that dimension.<br>  But to apprehend<br> The point of intersection of the timeless <br> With time, is an occupation for the saint-- <br> No occupation either, but something given <br>And taken, in a lifetimes death in love,<br> Ardour and selflessness and self-surrender.<br><br> For most of us, there is only the unattended <br> Moment, the moment in and out of time,<br>The distraction fit, lost in a shaft of sunlight,<br> The wild thyme unseen, or the winter lightning<br>Or the waterfall, or music heard so deeply<br> That it is not heard at all, but you are the music<br> While the music lasts.<br>  These are only hints and guesses,<br> Hints followed by guesses; and the rest<br> Is prayer, observance, discipline, thought and action.<br><br>The hint half guessed, the gift half understood, is Incarnation.<br> <br> Here the impossible union<br> Of spheres of existence is actual,<br> Here the past and future<br> Are conquered, and reconciled,<br>Where action were otherwise movement<br> Of that which is only moved<br> And has in it no source of movement--<br> Driven by daemonic, chthonic<br> Powers.<br>  And right action is freedom<br> From past and future also.<br> <br> For most of us, this is the aim<br> Never here to be realised;<br> Who are only undefeated<br> Because we have gone on trying;<br> We, content at the last<br> If our temporal reversion nourish<br> (Not too far from the yew-tree)<br> The life of significant soil." + "</font>")
  } else if (day==3) {
    dayname = "Wednesday, ruled by Mercury";
    document.write(today+"\n")
    document.write("Today is " + dayname);
    var img = document.createElement("img");
        img.src = "gifs/Owne.gif";
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
  } else if (day==4) {
    dayname = "Thursday, ruled by Jupiter";
    document.write("<font color=\"white\"> <font size=\"300\">"+"&#9795;"+"</font>"+"<br>");
        var img = document.createElement("img");
        img.src = "images of gods/f28984a535b6738c11fd7547c90ae142.jpg";
        img.width = 250;
        img.height = 300;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">"+"Life Centered Around"+"<br>"+ "BY MOON BO YOUNG" +"<br>"+ "TRANSLATED BY HEDGIE CHOI"+ "<br>"+ "I think with you at the center of my thoughts. Europa orbits Jupiter and centers Jupiter in its thoughts. Europa thinks about its day, spinning around that thing that is slowest to come when you want to escape. It massages its swollen feet, points its toes to the wall, points them back. It spun through the day while deferring the day. It spins with no intention to arrive, no intention to push away. Spinning shallowly it thinks of shallow outer space. Europa wets its ankles and is in pain. The pain orbits around Jupiter. Europa hurts. It spins until it forgets Jupiter and thinks of the moment it spun around someone who wasn't there. It's space and space smiles like a doll whose neck is the only part that turns. When Europa thinks of space it thinks of the year 5000 or just before the year 5000 or just after the year 5000. It thinks of a star orbiting a faraway star. It writes down a date it can't live in and writes a diary entry where the letters orbit around letters. The spinning makes them round . The left side of the doll's face is spinning to arrive at its right side. It smiles from ear to ear as its neck becomes bright blue. A letter came from far away. A letter without an orbit. Every letter in it is a round fence. A bug smoothly steps over the back of another bug. Pushing forward a little at a time. It erects the walls it has passed behind it and spins. It presses its back against the thing it left behind. It goes forward."+"</font>"+"<br>")
  } else if (day==5) {
    dayname = "Friday, ruled by Venus";
    document.write("<font color=\"white\"> <font size=\"300\">"+"&#9792;"+"</font>"+"<br>");
        var img = document.createElement("img");
        img.src = "images of gods/botticelli_birth_venus_2.jpg";
        img.width = 400;
        img.height = 300;
        // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">"+"A Hymn to Venus"+"<br>"+"SAPPHO"+"<br>"+"O Venus, beauty of the skies, <br> To whom a thousand temples rise, <br> Gaily false in gentle smiles,<br> Full of love-perplexing wiles;<br> O goddess, from my heart remove<br> The wasting cares and pains of love.<br> If ever thou hast kindly heard<br> A song in soft distress preferred,<br> Propitious to my tuneful vow,<br> A gentle goddess, hear me now.<br> Descend, thou bright immortal guest,<br> In all thy radiant charms confessed.<br> Thou once didst leave almighty Jove<br> And all the golden roofs above:<br> The car thy wanton sparrows drew,<br> Hovering in air they lightly flew;<br> As to my bower they winged their way<br> I saw their quivering pinions play.<br> The birds dismissed (while you remain)<br> Bore back their empty car again:<br> Then you, with looks divinely mild,<br> In every heavenly feature smiled,<br> And asked what new complaints I made,<br> And why I called you to my aid?<br> What frenzy in my bosom raged,<br> And by what cure to be assuaged?<br> What gentle youth I would allure,<br> Whom in my artful toils secure?<br> Who does thy tender heart subdue,<br> Tell me, my Sappho, tell me who?<br> Though now he shuns thy longing arms,<br> He soon shall court thy slighted charms;<br> Though now thy offerings he despise,<br> He soon to thee shall sacrifice;<br> Though now he freezes, he soon shall burn,<br> And be thy victim in his turn.<br> Celestial visitant, once more<br> Thy needful presence I implore.<br> In pity come, and ease my grief,<br> Bring my distempered soul relief,<br> Favour thy suppliant's hidden fires, <br> And give me all my heart desires.<br>" +"</font>")
  } else if (day==6) {
    dayname = "Saturday, ruled by Saturn";
    document.write("<font color=\"white\"> <font size=\"300\">"+"&#9796;"+"</font>"+"<br>");
    var img = document.createElement("img");
        img.src = "images of gods/Screen Shot 2022-11-05 at 11.42.02 AM.png";
        img.width=325;
        img.height=500;
    // This next line will just add it to the <body> tag
        document.body.appendChild(img);
    document.write("<font color=\"white\">"+"Seventh Sphere (Saturn: The Contemplatives)"+"<br>"+"BY SUN YUNG SHIN"+"<br><br><br>"+"No more hangings, no more gas chambers. No one allowed to remain in the center of the labyrinth, guarding their dna from the world, from the future. No more contemplation, no more waste. Everyone leaning toward paradise. Shields down and the word enemy will pass from memory. You are my kind." +"</font>")


  }
