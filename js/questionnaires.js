// Questionnaire data — French & German validated versions

const QUESTIONNAIRES = {
    fr: {
        had: [
            { id: 'had1', text: "Je me sens tendu(e) ou énervé(e) :", category: 'anxiety', options: [
                { value: 3, label: "La plupart du temps" }, { value: 2, label: "Souvent" },
                { value: 1, label: "De temps en temps" }, { value: 0, label: "Jamais" }
            ]},
            { id: 'had2', text: "Je prends plaisir aux mêmes choses qu'autrefois :", category: 'depression', options: [
                { value: 0, label: "Oui, tout autant" }, { value: 1, label: "Pas autant" },
                { value: 2, label: "Un peu seulement" }, { value: 3, label: "Presque plus" }
            ]},
            { id: 'had3', text: "J'ai une sensation de peur comme si quelque chose d'horrible allait m'arriver :", category: 'anxiety', options: [
                { value: 3, label: "Oui, très nettement" }, { value: 2, label: "Oui, mais ce n'est pas trop grave" },
                { value: 1, label: "Un peu, mais cela ne m'inquiète pas" }, { value: 0, label: "Pas du tout" }
            ]},
            { id: 'had4', text: "Je ris facilement et vois le bon côté des choses :", category: 'depression', options: [
                { value: 0, label: "Autant que par le passé" }, { value: 1, label: "Plus autant qu'avant" },
                { value: 2, label: "Vraiment moins qu'avant" }, { value: 3, label: "Plus du tout" }
            ]},
            { id: 'had5', text: "Je me fais du souci :", category: 'anxiety', options: [
                { value: 3, label: "Très souvent" }, { value: 2, label: "Assez souvent" },
                { value: 1, label: "Occasionnellement" }, { value: 0, label: "Très occasionnellement" }
            ]},
            { id: 'had6', text: "Je suis de bonne humeur :", category: 'depression', options: [
                { value: 3, label: "Jamais" }, { value: 2, label: "Rarement" },
                { value: 1, label: "Assez souvent" }, { value: 0, label: "La plupart du temps" }
            ]},
            { id: 'had7', text: "Je peux rester tranquillement assis(e) à ne rien faire et me sentir décontracté(e) :", category: 'anxiety', options: [
                { value: 0, label: "Oui, quoi qu'il arrive" }, { value: 1, label: "Oui, en général" },
                { value: 2, label: "Rarement" }, { value: 3, label: "Jamais" }
            ]},
            { id: 'had8', text: "J'ai l'impression de fonctionner au ralenti :", category: 'depression', options: [
                { value: 3, label: "Presque toujours" }, { value: 2, label: "Très souvent" },
                { value: 1, label: "Parfois" }, { value: 0, label: "Jamais" }
            ]},
            { id: 'had9', text: "J'éprouve des sensations de peur et j'ai l'estomac noué :", category: 'anxiety', options: [
                { value: 3, label: "Très souvent" }, { value: 2, label: "Assez souvent" },
                { value: 1, label: "Parfois" }, { value: 0, label: "Jamais" }
            ]},
            { id: 'had10', text: "Je ne m'intéresse plus à mon apparence :", category: 'depression', options: [
                { value: 3, label: "Plus du tout" }, { value: 2, label: "Je n'y accorde pas autant d'attention que je devrais" },
                { value: 1, label: "Il se peut que je n'y fasse plus autant attention" }, { value: 0, label: "J'y prête autant d'attention que par le passé" }
            ]},
            { id: 'had11', text: "J'ai la bougeotte et n'arrive pas à tenir en place :", category: 'anxiety', options: [
                { value: 3, label: "Oui, c'est tout à fait le cas" }, { value: 2, label: "Un peu" },
                { value: 1, label: "Pas tellement" }, { value: 0, label: "Pas du tout" }
            ]},
            { id: 'had12', text: "Je me réjouis d'avance à l'idée de faire certaines choses :", category: 'depression', options: [
                { value: 0, label: "Autant qu'avant" }, { value: 1, label: "Un peu moins qu'avant" },
                { value: 2, label: "Bien moins qu'avant" }, { value: 3, label: "Presque jamais" }
            ]},
            { id: 'had13', text: "J'éprouve des sensations soudaines de panique :", category: 'anxiety', options: [
                { value: 3, label: "Vraiment très souvent" }, { value: 2, label: "Assez souvent" },
                { value: 1, label: "Pas très souvent" }, { value: 0, label: "Jamais" }
            ]},
            { id: 'had14', text: "Je peux prendre plaisir à un bon livre ou à une bonne émission de radio ou de télévision :", category: 'depression', options: [
                { value: 0, label: "Souvent" }, { value: 1, label: "Parfois" },
                { value: 2, label: "Rarement" }, { value: 3, label: "Très rarement" }
            ]}
        ],

        odi: [
            { id: 'odi1', title: "SECTION 1 — INTENSITÉ DE LA DOULEUR", options: [
                { value: 0, label: "Je n'ai pas de douleur en ce moment" },
                { value: 1, label: "La douleur est très légère en ce moment" },
                { value: 2, label: "La douleur est modérée en ce moment" },
                { value: 3, label: "La douleur est assez forte en ce moment" },
                { value: 4, label: "La douleur est très forte en ce moment" },
                { value: 5, label: "La douleur est la pire imaginable en ce moment" }
            ]},
            { id: 'odi2', title: "SECTION 2 — SOINS PERSONNELS", options: [
                { value: 0, label: "Je peux prendre soin de moi normalement sans douleur supplémentaire" },
                { value: 1, label: "Je peux prendre soin de moi normalement mais c'est douloureux" },
                { value: 2, label: "C'est douloureux de prendre soin de moi et je suis lent(e) et prudent(e)" },
                { value: 3, label: "J'ai besoin d'aide mais j'arrive à me débrouiller pour l'essentiel" },
                { value: 4, label: "J'ai besoin d'aide tous les jours pour la plupart de mes soins" },
                { value: 5, label: "Je ne peux pas m'habiller, me laver est difficile et je reste au lit" }
            ]},
            { id: 'odi3', title: "SECTION 3 — SOULEVER DES CHARGES", options: [
                { value: 0, label: "Je peux soulever des charges lourdes sans douleur supplémentaire" },
                { value: 1, label: "Je peux soulever des charges lourdes mais avec douleur supplémentaire" },
                { value: 2, label: "La douleur m'empêche de soulever des charges lourdes depuis le sol" },
                { value: 3, label: "Je peux soulever des charges légères à moyennes" },
                { value: 4, label: "Je ne peux soulever que des charges très légères" },
                { value: 5, label: "Je ne peux rien soulever ni transporter" }
            ]},
            { id: 'odi4', title: "SECTION 4 — MARCHER", options: [
                { value: 0, label: "La douleur ne m'empêche pas de marcher quelle que soit la distance" },
                { value: 1, label: "La douleur m'empêche de marcher plus de 2 km" },
                { value: 2, label: "La douleur m'empêche de marcher plus de 1 km" },
                { value: 3, label: "La douleur m'empêche de marcher plus de 500 mètres" },
                { value: 4, label: "Je ne peux marcher qu'avec une canne ou des béquilles" },
                { value: 5, label: "Je suis au lit la plupart du temps et dois me traîner aux toilettes" }
            ]},
            { id: 'odi5', title: "SECTION 5 — POSITION ASSISE", options: [
                { value: 0, label: "Je peux rester assis(e) sur n'importe quelle chaise aussi longtemps que je veux" },
                { value: 1, label: "Seulement sur ma chaise préférée aussi longtemps que je veux" },
                { value: 2, label: "La douleur m'empêche de rester assis(e) plus d'une heure" },
                { value: 3, label: "La douleur m'empêche de rester assis(e) plus de 30 minutes" },
                { value: 4, label: "La douleur m'empêche de rester assis(e) plus de 10 minutes" },
                { value: 5, label: "La douleur m'empêche de rester assis(e)" }
            ]},
            { id: 'odi6', title: "SECTION 6 — POSITION DEBOUT", options: [
                { value: 0, label: "Je peux rester debout aussi longtemps que je veux sans douleur" },
                { value: 1, label: "Je peux rester debout aussi longtemps que je veux mais avec douleur" },
                { value: 2, label: "La douleur m'empêche de rester debout plus d'une heure" },
                { value: 3, label: "La douleur m'empêche de rester debout plus de 30 minutes" },
                { value: 4, label: "La douleur m'empêche de rester debout plus de 10 minutes" },
                { value: 5, label: "La douleur m'empêche de rester debout" }
            ]},
            { id: 'odi7', title: "SECTION 7 — SOMMEIL", options: [
                { value: 0, label: "Mon sommeil n'est jamais perturbé par la douleur" },
                { value: 1, label: "Mon sommeil est occasionnellement perturbé par la douleur" },
                { value: 2, label: "À cause de la douleur, je dors moins de 6 heures" },
                { value: 3, label: "À cause de la douleur, je dors moins de 4 heures" },
                { value: 4, label: "À cause de la douleur, je dors moins de 2 heures" },
                { value: 5, label: "La douleur m'empêche totalement de dormir" }
            ]},
            { id: 'odi8', title: "SECTION 8 — VIE SEXUELLE", options: [
                { value: 0, label: "Ma vie sexuelle est normale et ne me cause pas de douleur supplémentaire" },
                { value: 1, label: "Ma vie sexuelle est normale mais me cause de la douleur" },
                { value: 2, label: "Ma vie sexuelle est presque normale mais très douloureuse" },
                { value: 3, label: "Ma vie sexuelle est fortement limitée par la douleur" },
                { value: 4, label: "Ma vie sexuelle est pratiquement inexistante à cause de la douleur" },
                { value: 5, label: "La douleur m'empêche toute vie sexuelle" }
            ]},
            { id: 'odi9', title: "SECTION 9 — VIE SOCIALE", options: [
                { value: 0, label: "Ma vie sociale est normale et ne me cause pas de douleur supplémentaire" },
                { value: 1, label: "Ma vie sociale est normale mais augmente l'intensité de la douleur" },
                { value: 2, label: "La douleur n'a pas d'effet significatif sur ma vie sociale" },
                { value: 3, label: "La douleur a restreint ma vie sociale" },
                { value: 4, label: "La douleur a réduit ma vie sociale à mon domicile" },
                { value: 5, label: "Je n'ai pas de vie sociale à cause de la douleur" }
            ]},
            { id: 'odi10', title: "SECTION 10 — VOYAGER", options: [
                { value: 0, label: "Je peux voyager n'importe où sans douleur" },
                { value: 1, label: "Je peux voyager partout mais avec douleur" },
                { value: 2, label: "La douleur est forte mais je gère les trajets de plus de 2 heures" },
                { value: 3, label: "La douleur me limite à des trajets de moins d'une heure" },
                { value: 4, label: "La douleur me limite à des trajets de moins de 30 minutes" },
                { value: 5, label: "La douleur m'empêche de voyager sauf pour aller chez le médecin" }
            ]}
        ],

        tsk: [
            { id: 'tsk1', text: "J'ai peur de me blesser si je fais de l'exercice physique", reversed: false },
            { id: 'tsk2', text: "Si j'essayais de surmonter ma douleur, elle augmenterait", reversed: false },
            { id: 'tsk3', text: "Mon corps me dit que j'ai quelque chose de grave", reversed: false },
            { id: 'tsk4', text: "Ma douleur diminuerait probablement si je faisais de l'exercice", reversed: true },
            { id: 'tsk5', text: "Les gens ne prennent pas assez au sérieux mon problème de santé", reversed: false },
            { id: 'tsk6', text: "Mon accident a mis mon corps en danger pour le reste de ma vie", reversed: false },
            { id: 'tsk7', text: "La douleur signifie toujours que mon corps est blessé", reversed: false },
            { id: 'tsk8', text: "Ce n'est pas parce que quelque chose aggrave ma douleur que c'est dangereux", reversed: true },
            { id: 'tsk9', text: "J'ai peur de me blesser accidentellement", reversed: false },
            { id: 'tsk10', text: "Le plus sûr pour éviter que ma douleur augmente est de ne pas faire de mouvements inutiles", reversed: false },
            { id: 'tsk11', text: "Je n'aurais pas autant de douleur s'il n'y avait pas quelque chose de potentiellement dangereux dans mon corps", reversed: false },
            { id: 'tsk12', text: "Même si j'ai quelque chose qui me fait très mal, je pense que je peux être physiquement actif en toute sécurité", reversed: true },
            { id: 'tsk13', text: "La douleur me dit quand je dois arrêter l'exercice pour ne pas me blesser", reversed: false },
            { id: 'tsk14', text: "Il n'est vraiment pas conseillé à une personne dans mon cas d'être physiquement active", reversed: false },
            { id: 'tsk15', text: "Je ne peux pas faire tout ce que les gens normaux font car je pourrais me blesser trop facilement", reversed: false },
            { id: 'tsk16', text: "Même si quelque chose me cause beaucoup de douleur, je ne pense pas que ce soit réellement dangereux", reversed: true },
            { id: 'tsk17', text: "Personne ne devrait être physiquement actif quand il/elle a mal", reversed: false }
        ]
    },

    de: {
        had: [
            { id: 'had1', text: "Ich fühle mich angespannt oder gereizt:", category: 'anxiety', options: [
                { value: 3, label: "Die meiste Zeit" }, { value: 2, label: "Oft" },
                { value: 1, label: "Hin und wieder, von Zeit zu Zeit" }, { value: 0, label: "Überhaupt nicht" }
            ]},
            { id: 'had2', text: "Ich habe weiterhin Freude an den Dingen, die mir früher Freude gemacht haben:", category: 'depression', options: [
                { value: 0, label: "Genau wie früher" }, { value: 1, label: "Etwas weniger als früher" },
                { value: 2, label: "Viel weniger als früher" }, { value: 3, label: "Fast gar nicht mehr" }
            ]},
            { id: 'had3', text: "Ich habe ein Gefühl von Angst, als ob etwas Schreckliches mir passieren könnte:", category: 'anxiety', options: [
                { value: 3, label: "Ja, das ist sehr deutlich" }, { value: 2, label: "Ja, aber es ist nicht allzu schlimm" },
                { value: 1, label: "Ein bisschen, aber es macht mir keine Sorgen" }, { value: 0, label: "Überhaupt nicht" }
            ]},
            { id: 'had4', text: "Ich kann lachen und die Dinge von der positiven Seite sehen:", category: 'depression', options: [
                { value: 0, label: "Genau wie früher" }, { value: 1, label: "Nicht mehr so wie früher" },
                { value: 2, label: "Viel weniger als früher" }, { value: 3, label: "Überhaupt nicht mehr" }
            ]},
            { id: 'had5', text: "Ich mache mir die ganze Zeit über etwas Sorgen:", category: 'anxiety', options: [
                { value: 3, label: "Ja, die ganze Zeit" }, { value: 2, label: "Ja, die meiste Zeit" },
                { value: 1, label: "Hin und wieder, aber nicht oft" }, { value: 0, label: "Nie" }
            ]},
            { id: 'had6', text: "Ich bin guter Laune:", category: 'depression', options: [
                { value: 3, label: "Nie oder sehr selten" }, { value: 2, label: "Manchmal" },
                { value: 1, label: "Die meiste Zeit" }, { value: 0, label: "Die ganze Zeit" }
            ]},
            { id: 'had7', text: "Ich kann ruhig sitzen und mich entspannt fühlen, ohne etwas zu tun:", category: 'anxiety', options: [
                { value: 0, label: "Ja, das kommt oft vor" }, { value: 1, label: "Ja, das kommt manchmal vor" },
                { value: 2, label: "Selten" }, { value: 3, label: "Nie" }
            ]},
            { id: 'had8', text: "Ich habe das Gefühl, dass alles immer langsamer wird:", category: 'depression', options: [
                { value: 3, label: "Fast die ganze Zeit" }, { value: 2, label: "Sehr oft" },
                { value: 1, label: "Manchmal" }, { value: 0, label: "Nie" }
            ]},
            { id: 'had9', text: "Ich habe Angst- oder Panikgefühle:", category: 'anxiety', options: [
                { value: 3, label: "Wirklich sehr oft" }, { value: 2, label: "Ziemlich oft" },
                { value: 1, label: "Nicht sehr oft" }, { value: 0, label: "Nie" }
            ]},
            { id: 'had10', text: "Ich habe jegliches Interesse an meinem Äußeren verloren:", category: 'depression', options: [
                { value: 3, label: "Absolut" }, { value: 2, label: "Ich achte nicht mehr so sehr darauf" },
                { value: 1, label: "Vielleicht etwas weniger" }, { value: 0, label: "Ich achte genauso viel darauf wie immer" }
            ]},
            { id: 'had11', text: "Ich bin ruhelos und kann nicht stillsitzen:", category: 'anxiety', options: [
                { value: 3, label: "Ja, das trifft völlig zu" }, { value: 2, label: "Ziemlich oft" },
                { value: 1, label: "Nicht sehr oft" }, { value: 0, label: "Überhaupt nicht" }
            ]},
            { id: 'had12', text: "Ich freue mich auf Dinge:", category: 'depression', options: [
                { value: 0, label: "Genau wie früher" }, { value: 1, label: "Etwas weniger als früher" },
                { value: 2, label: "Viel weniger als früher" }, { value: 3, label: "Fast nie" }
            ]},
            { id: 'had13', text: "Ich habe plötzliche Panikgefühle:", category: 'anxiety', options: [
                { value: 3, label: "Ja, sehr oft" }, { value: 2, label: "Ziemlich oft" },
                { value: 1, label: "Nicht sehr oft" }, { value: 0, label: "Nie" }
            ]},
            { id: 'had14', text: "Ich kann mich an einem guten Buch, Radio oder Fernsehen erfreuen:", category: 'depression', options: [
                { value: 0, label: "Oft" }, { value: 1, label: "Manchmal" },
                { value: 2, label: "Selten" }, { value: 3, label: "Sehr selten" }
            ]}
        ],

        odi: [
            { id: 'odi1', title: "ABSCHNITT 1 — SCHMERZINTENSITÄT", options: [
                { value: 0, label: "Ich habe momentan keine Schmerzen" },
                { value: 1, label: "Die Schmerzen sind momentan sehr gering" },
                { value: 2, label: "Die Schmerzen sind momentan mäßig" },
                { value: 3, label: "Die Schmerzen sind momentan ziemlich stark" },
                { value: 4, label: "Die Schmerzen sind momentan sehr stark" },
                { value: 5, label: "Die Schmerzen sind momentan die schlimmsten vorstellbaren" }
            ]},
            { id: 'odi2', title: "ABSCHNITT 2 — PERSÖNLICHE PFLEGE", options: [
                { value: 0, label: "Ich kann mich normal versorgen, ohne zusätzliche Schmerzen" },
                { value: 1, label: "Ich kann mich normal versorgen, aber es verursacht Schmerzen" },
                { value: 2, label: "Es ist schmerzhaft, mich zu versorgen, und ich bin langsam und vorsichtig" },
                { value: 3, label: "Ich brauche Hilfe, erledige aber die meisten Pflegen selbst" },
                { value: 4, label: "Ich brauche täglich Hilfe bei den meisten Pflegen" },
                { value: 5, label: "Ich kann mich nicht anziehen, Waschen ist schwierig, ich bleibe im Bett" }
            ]},
            { id: 'odi3', title: "ABSCHNITT 3 — HEBEN", options: [
                { value: 0, label: "Ich kann schwere Lasten ohne zusätzliche Schmerzen heben" },
                { value: 1, label: "Ich kann schwere Lasten heben, aber mit Schmerzen" },
                { value: 2, label: "Schmerzen verhindern das Heben schwerer Lasten vom Boden" },
                { value: 3, label: "Ich kann leichte bis mittlere Lasten heben" },
                { value: 4, label: "Ich kann nur sehr leichte Lasten heben" },
                { value: 5, label: "Ich kann überhaupt nichts heben oder tragen" }
            ]},
            { id: 'odi4', title: "ABSCHNITT 4 — GEHEN", options: [
                { value: 0, label: "Schmerzen verhindern nicht, dass ich beliebige Strecken gehe" },
                { value: 1, label: "Schmerzen verhindern, dass ich mehr als 2 km gehe" },
                { value: 2, label: "Schmerzen verhindern, dass ich mehr als 1 km gehe" },
                { value: 3, label: "Schmerzen verhindern, dass ich mehr als 500 Meter gehe" },
                { value: 4, label: "Ich kann nur mit Stock oder Krücken gehen" },
                { value: 5, label: "Ich bin meistens im Bett und muss mich zur Toilette schleppen" }
            ]},
            { id: 'odi5', title: "ABSCHNITT 5 — SITZEN", options: [
                { value: 0, label: "Ich kann auf jedem Stuhl so lange sitzen, wie ich möchte" },
                { value: 1, label: "Nur auf meinem bevorzugten Stuhl so lange wie ich möchte" },
                { value: 2, label: "Schmerzen verhindern Sitzen länger als eine Stunde" },
                { value: 3, label: "Schmerzen verhindern Sitzen länger als 30 Minuten" },
                { value: 4, label: "Schmerzen verhindern Sitzen länger als 10 Minuten" },
                { value: 5, label: "Schmerzen verhindern jedes Sitzen" }
            ]},
            { id: 'odi6', title: "ABSCHNITT 6 — STEHEN", options: [
                { value: 0, label: "Ich kann so lange stehen wie ich möchte ohne Schmerzen" },
                { value: 1, label: "Ich kann so lange stehen wie ich möchte mit Schmerzen" },
                { value: 2, label: "Schmerzen verhindern Stehen länger als eine Stunde" },
                { value: 3, label: "Schmerzen verhindern Stehen länger als 30 Minuten" },
                { value: 4, label: "Schmerzen verhindern Stehen länger als 10 Minuten" },
                { value: 5, label: "Schmerzen verhindern jedes Stehen" }
            ]},
            { id: 'odi7', title: "ABSCHNITT 7 — SCHLAF", options: [
                { value: 0, label: "Mein Schlaf wird nie durch Schmerzen gestört" },
                { value: 1, label: "Mein Schlaf wird gelegentlich durch Schmerzen gestört" },
                { value: 2, label: "Wegen Schmerzen schlafe ich weniger als 6 Stunden" },
                { value: 3, label: "Wegen Schmerzen schlafe ich weniger als 4 Stunden" },
                { value: 4, label: "Wegen Schmerzen schlafe ich weniger als 2 Stunden" },
                { value: 5, label: "Schmerzen verhindern völlig, dass ich schlafe" }
            ]},
            { id: 'odi8', title: "ABSCHNITT 8 — SEXUALLEBEN", options: [
                { value: 0, label: "Mein Sexualleben ist normal ohne zusätzliche Schmerzen" },
                { value: 1, label: "Mein Sexualleben ist normal aber mit Schmerzen" },
                { value: 2, label: "Mein Sexualleben ist fast normal aber sehr schmerzhaft" },
                { value: 3, label: "Mein Sexualleben ist stark durch Schmerzen eingeschränkt" },
                { value: 4, label: "Mein Sexualleben ist praktisch nicht existent" },
                { value: 5, label: "Schmerzen verhindern jedes Sexualleben" }
            ]},
            { id: 'odi9', title: "ABSCHNITT 9 — SOZIALES LEBEN", options: [
                { value: 0, label: "Mein soziales Leben ist normal ohne zusätzliche Schmerzen" },
                { value: 1, label: "Mein soziales Leben ist normal aber erhöht die Schmerzen" },
                { value: 2, label: "Schmerzen haben keine erhebliche Auswirkung auf mein soziales Leben" },
                { value: 3, label: "Schmerzen haben mein soziales Leben eingeschränkt" },
                { value: 4, label: "Schmerzen haben mein soziales Leben auf mein Zuhause eingeschränkt" },
                { value: 5, label: "Ich habe wegen Schmerzen kein soziales Leben" }
            ]},
            { id: 'odi10', title: "ABSCHNITT 10 — REISEN", options: [
                { value: 0, label: "Ich kann ohne Schmerzen überallhin reisen" },
                { value: 1, label: "Ich kann überallhin reisen aber mit Schmerzen" },
                { value: 2, label: "Schmerzen sind stark aber ich kann Strecken über 2 Stunden fahren" },
                { value: 3, label: "Schmerzen beschränken mich auf Strecken unter einer Stunde" },
                { value: 4, label: "Schmerzen beschränken mich auf Strecken unter 30 Minuten" },
                { value: 5, label: "Schmerzen verhindern Reisen außer zum Arzt" }
            ]}
        ],

        tsk: [
            { id: 'tsk1', text: "Ich habe Angst, mich zu verletzen, wenn ich Sport treibe", reversed: false },
            { id: 'tsk2', text: "Wenn ich versuchte, meinen Schmerz zu überwinden, würde er zunehmen", reversed: false },
            { id: 'tsk3', text: "Mein Körper sagt mir, dass ich etwas Ernsthaftes habe", reversed: false },
            { id: 'tsk4', text: "Meine Schmerzen würden wahrscheinlich abnehmen, wenn ich Sport treiben würde", reversed: true },
            { id: 'tsk5', text: "Die Leute nehmen mein Gesundheitsproblem nicht ernst genug", reversed: false },
            { id: 'tsk6', text: "Mein Unfall hat meinen Körper für den Rest meines Lebens in Gefahr gebracht", reversed: false },
            { id: 'tsk7', text: "Schmerz bedeutet immer, dass mein Körper verletzt ist", reversed: false },
            { id: 'tsk8', text: "Es ist nicht so, dass etwas, das meine Schmerzen verstärkt, gefährlich ist", reversed: true },
            { id: 'tsk9', text: "Ich habe Angst, mich versehentlich zu verletzen", reversed: false },
            { id: 'tsk10', text: "Der sicherste Weg, um zu verhindern, dass meine Schmerzen zunehmen, ist, keine unnötigen Bewegungen zu machen", reversed: false },
            { id: 'tsk11', text: "Ich hätte nicht so viele Schmerzen, wenn nicht etwas Potenziell Gefährliches in meinem Körper wäre", reversed: false },
            { id: 'tsk12', text: "Auch wenn ich etwas habe, das mir viele Schmerzen verursacht, denke ich, dass ich sicher körperlich aktiv sein kann", reversed: true },
            { id: 'tsk13', text: "Der Schmerz sagt mir, wann ich mit dem Sport aufhören soll, um mich nicht zu verletzen", reversed: false },
            { id: 'tsk14', text: "Es ist wirklich nicht ratsam für eine Person mit meinem Problem, körperlich aktiv zu sein", reversed: false },
            { id: 'tsk15', text: "Ich kann nicht alles tun, was normale Menschen tun, weil ich mich zu leicht verletzen könnte", reversed: false },
            { id: 'tsk16', text: "Auch wenn mir etwas viele Schmerzen verursacht, denke ich nicht, dass es wirklich gefährlich ist", reversed: true },
            { id: 'tsk17', text: "Niemand sollte körperlich aktiv sein, wenn er/sie Schmerzen hat", reversed: false }
        ]
    }
};
