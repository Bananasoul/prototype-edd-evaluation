// Internationalization — French & German
const I18N = {
    fr: {
        // Intro
        intro_title: "Évaluation anonyme",
        intro_text: "Vous allez répondre à 3 questionnaires standardisés. Vos réponses sont anonymes et confidentielles.",
        intro_duration: "Durée estimée : 15 minutes",
        intro_anonymous: "Toutes vos réponses sont anonymes",
        intro_spontaneous: "Répondez spontanément, il n'y a pas de bonne ou mauvaise réponse",
        btn_start: "Commencer",
        btn_next: "Suivant →",
        btn_prev: "← Précédent",
        step_had: "HAD-S",
        step_odi: "ODI",
        step_tsk: "TSK",

        // HAD
        had_title: "HAD-S — Anxiété et Dépression",
        had_subtitle: "Hospital Anxiety and Depression Scale",
        cat_anxiety: "Anxiété",
        cat_depression: "Dépression",

        // ODI
        odi_title: "ODI — Incapacité fonctionnelle",
        odi_subtitle: "Oswestry Disability Index 2.1a",

        // TSK
        tsk_title: "TSK-17 — Kinésiophobie",
        tsk_subtitle: "Tampa Scale of Kinesiophobia",
        tsk_strongly_disagree: "Pas du tout d'accord",
        tsk_disagree: "Plutôt pas d'accord",
        tsk_agree: "Plutôt d'accord",
        tsk_strongly_agree: "Tout à fait d'accord",
        tsk_reversed: "Item inversé",

        // Thanks
        thanks_title: "Merci !",
        thanks_text: "Vous avez terminé tous les questionnaires. Vos réponses ont été enregistrées.",
        thanks_sub: "Vous pouvez maintenant fermer cette page.",
        btn_results: "Accès aux résultats →",

        // Dashboard
        dash_title: "Tableau de bord — Résultats",
        dash_subtitle: "Interprétation clinique des questionnaires",
        dash_overview: "Vue d'ensemble",
        dash_had_title: "Anxiété & Dépression",
        dash_odi_title: "Incapacité fonctionnelle",
        dash_tsk_title: "Kinésiophobie",
        btn_print: "🖨️ Imprimer",
        btn_new_eval: "Nouvelle évaluation",

        // Interpretations
        had_anx_normal: "Normale",
        had_anx_mild: "Légère",
        had_anx_moderate: "Modérée",
        had_anx_severe: "Sévère",
        had_dep_normal: "Normale",
        had_dep_mild: "Légère",
        had_dep_moderate: "Modérée",
        had_dep_severe: "Sévère",
        odi_minimal: "Incapacité minimale",
        odi_moderate: "Incapacité modérée",
        odi_severe: "Incapacité sévère",
        odi_crippled: "Incapacité très sévère",
        tsk_normal: "Kinésiophobie normale",
        tsk_elevated: "Kinésiophobie élevée",

        had_anx_normal_desc: "Score ≤ 7 : pas d'anxiété significative détectée.",
        had_anx_mild_desc: "Score 8-10 : anxiété légère. Surveillance recommandée.",
        had_anx_moderate_desc: "Score 11-14 : anxiété modérée. Prise en charge recommandée.",
        had_anx_severe_desc: "Score ≥ 15 : anxiété sévère. Évaluation psychologique recommandée.",
        had_dep_normal_desc: "Score ≤ 7 : pas de dépression significative détectée.",
        had_dep_mild_desc: "Score 8-10 : dépression légère. Surveillance recommandée.",
        had_dep_moderate_desc: "Score 11-14 : dépression modérée. Prise en charge recommandée.",
        had_dep_severe_desc: "Score ≥ 15 : dépression sévère. Évaluation psychologique recommandée.",
        odi_minimal_desc: "Le patient peut accomplir la plupart des activités quotidiennes.",
        odi_moderate_desc: "Impact significatif sur les activités de la vie quotidienne.",
        odi_severe_desc: "Restrictions majeures dans la plupart des domaines.",
        odi_crippled_desc: "Nécessite une aide significative pour les activités de base.",
        tsk_normal_desc: "Score < 37 : perception adéquate du mouvement.",
        tsk_elevated_desc: "Score ≥ 37 : présence d'une peur excessive du mouvement. Éducation thérapeutique recommandée.",

        q_of: "Question {current} sur {total}",
        anxiety_label: "Anxiété",
        depression_label: "Dépression",
        threshold: "Seuil",
        score: "Score"
    },

    de: {
        intro_title: "Anonyme Bewertung",
        intro_text: "Sie werden 3 standardisierte Fragebögen beantworten. Ihre Antworten sind anonym und vertraulich.",
        intro_duration: "Geschätzte Dauer: 15 Minuten",
        intro_anonymous: "Alle Ihre Antworten sind anonym",
        intro_spontaneous: "Antworten Sie spontan, es gibt keine richtigen oder falschen Antworten",
        btn_start: "Beginnen",
        btn_next: "Weiter →",
        btn_prev: "← Zurück",
        step_had: "HAD-S",
        step_odi: "ODI",
        step_tsk: "TSK",

        had_title: "HAD-S — Angst und Depression",
        had_subtitle: "Krankenhaus-Angst- und Depressions-Skala",
        cat_anxiety: "Angst",
        cat_depression: "Depression",

        odi_title: "ODI — Funktionelle Behinderung",
        odi_subtitle: "Oswestry Disability Index 2.1a",

        tsk_title: "TSK-17 — Kinesiophobie",
        tsk_subtitle: "Tampa Scale of Kinesiophobia",
        tsk_strongly_disagree: "Stimme überhaupt nicht zu",
        tsk_disagree: "Stimme eher nicht zu",
        tsk_agree: "Stimme eher zu",
        tsk_strongly_agree: "Stimme voll und ganz zu",
        tsk_reversed: "Umgekehrtes Item",

        thanks_title: "Vielen Dank!",
        thanks_text: "Sie haben alle Fragebögen ausgefüllt. Ihre Antworten wurden gespeichert.",
        thanks_sub: "Sie können diese Seite jetzt schließen.",
        btn_results: "Zugang zu den Ergebnissen →",

        dash_title: "Dashboard — Ergebnisse",
        dash_subtitle: "Klinische Interpretation der Fragebögen",
        dash_overview: "Gesamtübersicht",
        dash_had_title: "Angst & Depression",
        dash_odi_title: "Funktionelle Behinderung",
        dash_tsk_title: "Kinesiophobie",
        btn_print: "🖨️ Drucken",
        btn_new_eval: "Neue Bewertung",

        had_anx_normal: "Normal",
        had_anx_mild: "Leicht",
        had_anx_moderate: "Mäßig",
        had_anx_severe: "Schwer",
        had_dep_normal: "Normal",
        had_dep_mild: "Leicht",
        had_dep_moderate: "Mäßig",
        had_dep_severe: "Schwer",
        odi_minimal: "Minimale Behinderung",
        odi_moderate: "Mäßige Behinderung",
        odi_severe: "Schwere Behinderung",
        odi_crippled: "Sehr schwere Behinderung",
        tsk_normal: "Normale Kinesiophobie",
        tsk_elevated: "Erhöhte Kinesiophobie",

        had_anx_normal_desc: "Score ≤ 7: keine signifikante Angst festgestellt.",
        had_anx_mild_desc: "Score 8-10: leichte Angst. Überwachung empfohlen.",
        had_anx_moderate_desc: "Score 11-14: mäßige Angst. Behandlung empfohlen.",
        had_anx_severe_desc: "Score ≥ 15: schwere Angst. Psychologische Bewertung empfohlen.",
        had_dep_normal_desc: "Score ≤ 7: keine signifikante Depression festgestellt.",
        had_dep_mild_desc: "Score 8-10: leichte Depression. Überwachung empfohlen.",
        had_dep_moderate_desc: "Score 11-14: mäßige Depression. Behandlung empfohlen.",
        had_dep_severe_desc: "Score ≥ 15: schwere Depression. Psychologische Bewertung empfohlen.",
        odi_minimal_desc: "Der Patient kann die meisten täglichen Aktivitäten ausführen.",
        odi_moderate_desc: "Signifikanter Einfluss auf Aktivitäten des täglichen Lebens.",
        odi_severe_desc: "Große Einschränkungen in den meisten Bereichen.",
        odi_crippled_desc: "Benötigt erhebliche Hilfe bei Grundaktivitäten.",
        tsk_normal_desc: "Score < 37: angemessene Bewegungswahrnehmung.",
        tsk_elevated_desc: "Score ≥ 37: übermäßige Bewegungsangst. Therapeutische Aufklärung empfohlen.",

        q_of: "Frage {current} von {total}",
        anxiety_label: "Angst",
        depression_label: "Depression",
        threshold: "Schwelle",
        score: "Score"
    }
};

let currentLang = 'fr';

function t(key) {
    return I18N[currentLang][key] || key;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[currentLang][key]) {
            el.textContent = I18N[currentLang][key];
        }
    });
}
